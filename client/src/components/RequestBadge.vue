<template>
  <div
    class="request-badge"
    :class="badgeClass"
  >
    {{type}}
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component
export default class RequestItem extends Vue {
  // Props
  @Prop({ default: 'GET' })
  private type: string

  // Computed
  get badgeClass () {
    switch(this.type) {
      case 'GET':
        return 'blue'
      case 'POST':
        return 'green'
      case 'PUT':
        return 'purple'
      case 'DELETE':
        return 'red'
    }
  }
}
</script>


<style lang="scss" scoped>
@import "../assets/styles/functions.scss";
.request-badge {
  cursor: pointer;
  color: textColor('default');
  padding: 7px;
  border-radius: values('border-radius');
  display: inline-block;
  margin-bottom: 7px;
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.3);
  &.blue {
    background: bgColor('primary');
  }
}

</style>

