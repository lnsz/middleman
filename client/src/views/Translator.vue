<template>
  <div class="translator">
    <router-link
      :to="{ name: 'Home' }"
      class="back-button"
    >
      <font-awesome-icon
        icon="arrow-left"
      />
    </router-link>
    <Spinner v-if="$apollo.queries.translator.loading || translator === undefined" />
    <Editor
      v-else-if="translator"
      :code="code"
      :tabNames="tabs.map(tab => tab.name)"
      :selectedTab="selectedTab"
      @input="updateCode"
      @changeTab="changeTab"
    />
    <RequestList
      :requests="translator.endpoints"
      @delete="deleteEndpoint"
      @create="createEndpoint"
      @update="updateEndpoint"
    />
  </div>

</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'
import Header from '@/components/Header.vue'
import Editor from '@/components/Editor.vue'
import Spinner from '@/components/Spinner.vue'
import RequestList from '@/components/RequestList.vue'
import gql from 'graphql-tag'

const TRANSLATOR_QUERY =
  gql`query translator($translatorId: ID!) {
    translator (where: {
      id: $translatorId
    }) {
      id,
      requestFunction,
      responseFunction,
      endpoints {
        id,
        url,
        type
      },
      tests {
        id
      }
    }
  }`

const UPDATE_TRANSLATOR_MUTATION = {
  requestFunction: gql`mutation updateTranslator($translatorId: ID!, $code: String!) {
    updateTranslator (
      data: {
        requestFunction: $code
      },
      where: {
        id: $translatorId
      }
    ) {
      id
    }
  }`,
  responseFunction:  gql`mutation updateTranslator($translatorId: ID!, $code: String!) {
    updateTranslator (
      data: {
        responseFunction: $code
      },
      where: {
        id: $translatorId
      }
    ) {
      id
    }
  }`,
}

const CREATE_ENDPOINT_MUTATION =
  gql`mutation createEndpoint($translatorId: ID!) {
    createEndpoint(
      data: {
        translator: {
          connect:{
            id: $translatorId
          }
        },
        type: GET,
        url: "https://google.com",
      }
    ) {
      id
    }
  }`

const UPDATE_ENDPOINT_MUTATION =
  gql`mutation updateEnpointMutation($endpointId: ID!, $url: String!, $type: RequestType!) {
    updateEndpoint (
      data: {
        url: $url,
        type: $type
      },
      where: {
        id: $endpointId
      }
    ) {
      id
    }
  }`

const DELETE_ENDPOINT_MUTATION =
  gql`mutation deleteEndpoint($endpointId: ID!) {
    deleteEndpoint (
      where: {
        id: $endpointId
      }
    ) {
      id
    }
  }`

@Component({
  components: {
    Header,
    Editor,
    Spinner,
    RequestList
  },
  apollo: {
    translator: {
      query: TRANSLATOR_QUERY,
      variables() {
        return {
          translatorId: this.$route.params.translatorId
        }
      }
    }
  }
})
export default class Translator extends Vue {
  // Data
  private selectedTab = 0
  private translator = {}
  private tabs = [
    {
      name: 'RequestTranslator.js',
      data: 'requestFunction'
    },
    {
      name: 'ResponseTranslator.js',
      data: 'responseFunction'
    }
  ]
  private errorTimeout = null
  private updateTimeout = null

  // Methods
  private updateCode(newCode: string) {
    clearTimeout(this.updateTimeout)
    this.updateTimeout = setTimeout(this.mutateTranslator.bind(null, newCode), 1000)
  }
  private mutateTranslator(newCode: string) {
    this.$apollo.mutate({
      mutation: UPDATE_TRANSLATOR_MUTATION[this.currentTab],
      variables: {
        translatorId: this.$route.params.translatorId,
        code: newCode
      }
    })
  }
  private changeTab(newTab: number) {
    this.selectedTab = newTab
  }
  private internalError() {
    this.$router.replace({ name: '500' })
  }
  private async deleteEndpoint(endpointId) {
    await this.$apollo.mutate({
      mutation: DELETE_ENDPOINT_MUTATION,
      variables: {
        endpointId
      }
    })
    this.$apollo.queries.translator.refetch()
  }
  private async createEndpoint() {
    await this.$apollo.mutate({
      mutation: CREATE_ENDPOINT_MUTATION,
      variables: {
        translatorId: this.$route.params.translatorId
      }
    })
    this.$apollo.queries.translator.refetch()
  }
  private updateEndpoint(endpointId, newUrl, newType) {
    clearTimeout(this.updateTimeout)
    this.updateTimeout = setTimeout(this.mutateEndpoint.bind(null, endpointId, newUrl, newType), 1000)
  }
  private mutateEndpoint(endpointId, newUrl, newType) {
    this.$apollo.mutate({
      mutation: UPDATE_ENDPOINT_MUTATION,
      variables: {
        endpointId,
        url: newUrl,
        type: newType
      }
    })
  }

  // Computed
  get currentTab() {
    return this.tabs[this.selectedTab].data
  }
  get code() {
    return (this.translator && this.translator[this.currentTab]) ?
      this.translator[this.currentTab] : ''
  }

  // Watchers
  @Watch('translator')
  private onTranslatorChange(val: object, oldVal: object) {
    if (val === undefined) {
      this.errorTimeout = setTimeout(this.internalError, 3000)
    } else {
      clearTimeout(this.errorTimeout)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/styles/functions.scss";
.translator {
  display: grid;
  grid-template-columns: 3fr 1fr;
  height: 100vh;
  margin: 0 7% 0 7%;
  align-items: center;
  .back-button {
    position: fixed;
    top: 25px;
    left: 25px;
    background: transparent;
    border: none;
    color: white;
    font-size: 30px;
    cursor: pointer;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
  }
}

// Mobile view
@media only screen and (max-width: breakpoints('mobile')) {
  .translator {
    grid-template-columns: 1fr;
    grid-template-rows: 6fr 1fr;
    .back-button {
      display: none;
    }
  }
}
</style>





