<template>
  <div class="home">
    <Header />
    <div
      v-for="translator in translators" :key="translator.id"
    >
      <router-link
        :to="{ name: 'Translator', params: { translatorId: translator.id }}"
      >
        {{translator.id}}
      </router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Header from '@/components/Header.vue'
import gql from 'graphql-tag'

@Component({
  components: {
    Header
  },
  apollo: {
    translators: gql`query {
      translators{
        id,
        endpoints {
          id,
          url,
          type
        },
        requestFunction,
        responseFunction,
        tests {
          id
        }
      }
    }`
  }
})
export default class Home extends Vue {}
</script>
