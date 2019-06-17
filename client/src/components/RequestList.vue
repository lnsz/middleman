<template>
  <div class="request-list-wrapper">
    <div class="request-list">
      <div class="title">Requests</div>
      <div
        v-for="request in requests"
        :key="request.id"
      >
        {{request.url}}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component
export default class RequestList extends Vue {
  // Props
  @Prop({ default: [] })
  private requests: [object]
}
</script>

<style lang="scss" scoped>
@import "../assets/styles/functions.scss";
.request-list-wrapper {
  padding: 20px;
  height: 80%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  .request-list {
    padding-top: 40px;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    .title {
      color: textColor('default');
      font-size: fontsize('header');
      width: 100%;
      border-bottom: bgColor('primary') 1px solid;
    }
  }
}
</style>

