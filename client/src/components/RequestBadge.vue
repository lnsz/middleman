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
  get badgeClass() {
    switch (this.type) {
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
  padding: 4px 6px 4px 6px;
  border-radius: values('border-radius');
  display: inline-block;
  margin-bottom: 7px;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
  &.blue {
    background: bgColor('primary');
  }
  &.green {
    background: green;
  }
  &.purple {
    background: purple;
  }
  &.red {
    background: red;
  }
}

</style>

