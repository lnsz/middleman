<template>
  <div class="request-item">
    <RequestBadge :type="type" />
    <div class="request-url">{{url}}</div>
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

}
</script>

<style lang="scss" scoped>
@import "../assets/styles/functions.scss";
.request-item {
  margin: 0 5px 0 5px;
  padding: 15px 0 15px 0;
  border-bottom: bgColor('secondary') 0.5px solid;
  .request-url {
    color: textColor('default');
  }
}

</style>

