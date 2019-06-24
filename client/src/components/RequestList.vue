<template>
  <div class="request-list-wrapper">
    <div class="request-list">
      <div class="title">Requests</div>
      <RequestItem
        v-for="request in requests"
        :key="request.id"
        :url="request.url"
        :type="request.type"
        @delete="$emit('delete', request.id)"
        @update="(url, type) => $emit('update', request.id, url, type)"
      />
      <div
        class="add-button"
        @click="$emit('create')"
      >
        <FontAwesomeIcon class="icon" icon="plus" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import RequestItem from '@/components/RequestItem.vue'

@Component({
  components: {
    RequestItem
  }
})
export default class RequestList extends Vue {
  // Props
  @Prop({ default: () => [] })
  private requests: [object]
}
</script>

<style lang="scss" scoped>
@import "../assets/styles/functions.scss";
.request-list-wrapper {
  margin-top: 80px;
  padding: 20px;
  height: 80%;
  display: flex;
  flex-direction: column;
  overflow: auto;
  .request-list {
    padding: 0 15px 15px 0;
    display: flex;
    flex-direction: column;
    overflow: auto;
    .title {
      color: textColor('default');
      font-size: fontsize('header');
      width: 100%;
      border-bottom: bgColor('primary') 1px solid;
    }
    .add-button {
      cursor: pointer;
      margin-top: 15px;
      background: bgColor('primary');
      padding: 7px 9px 7px 9px;
      color: textColor('default');
      align-self: center;
      border-radius: values('border-radius');
      .icon {
        filter: drop-shadow(1px 1px 2px rgba(0, 0, 0, 0.5));
      }
      &:hover {
        background: shade(bgColor('primary'), 20%);
        transform: translateY(-1px);
        box-shadow: 3px 3px 11px rgba(0, 0, 0, 0.3);
      }
      &:active {
        transform: translateY(1px);
        box-shadow: none;
      }
    }
  }
}
</style>

