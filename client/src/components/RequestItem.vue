<template>
  <div class="request-item">
    <div class="request-badge">
      <RequestBadge :type="type" />
      <FontAwesomeIcon
        @click="$emit('delete')"
        class="delete-icon"
        icon="times"
      />
    </div>
    <input
      class="request-url"
      v-model="urlInput"
      @input="$emit('update', urlInput, type)"
    />
  </div>

</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import RequestBadge from '@/components/RequestBadge.vue'

@Component({
  components: {
    RequestBadge
  }
})
export default class RequestItem extends Vue {
  // Props
  @Prop({ default: '' })
  private url: string
  @Prop({ default: 'GET' })
  private type: string

  // Data
  private urlInput = ''

  // Mounted
  private mounted() {
    this.urlInput = this.url
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/styles/functions.scss";
.request-item {
  margin: 0 5px 0 5px;
  padding: 15px 0 15px 0;
  border-bottom: bgColor('secondary') 0.5px solid;
  .request-badge {
    display: flex;
    justify-content: space-between;
    .delete-icon {
      color: textColor('default');
      cursor: pointer;
      padding: 1px;
    }
  }
  .request-url {
    color: textColor('default');
    background: bgColor('default');
    border: none;
    outline: none;
    font-size: fontsize('medium');
    text-overflow: ellipsis;
    &:focus {
      border-bottom: bgColor('secondary') 0.5px solid;
    }
  }
}

</style>

