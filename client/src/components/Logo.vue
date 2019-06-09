<template>
  <div class="logo-container">
    <img class="logo" alt="" />
    <div class="title">
      Middleman
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Logo extends Vue {}
</script>

<style lang="scss" scoped>
@import "../assets/styles/functions.scss";

.logo-container {
  display: flex;
  align-items: center;

  .logo {
    height: 50px;
  }
  .title {
    font-family: font('segoe');
    color: textColor('default');
    font-size: fontsize('title');
    margin-left: 20px;
  }
}

// Mobile view
@media only screen and (max-width: breakpoints('mobile')) {
  .logo-container {
    .title {
      color: textColor('default');
    }
  }
}
</style>
