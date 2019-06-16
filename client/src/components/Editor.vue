<template>
  <div class="editor">
    <button
      class="tab"
      :class="{selected: index == selectedTab}"
      :key="index"
      v-for="(tabName, index) in tabNames"
      @click="$emit('changeTab', index)"
    >
      <FontAwesomeIcon
        :icon="['fab', 'js']"
      />
      {{tabName}}
    </button>
    <codemirror
      v-model="text"
      :options="cmOptions"
      @input="$emit('input', text)"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator'
import { codemirror } from 'vue-codemirror'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/base16-dark.css'
import 'codemirror/mode/javascript/javascript.js'

@Component({
  components: {
    codemirror
  }
})
export default class Editor extends Vue {
  // Props
  @Prop({ default: '' })
  private code: string
  @Prop({ default: [] })
  private tabNames: [string]
  @Prop({ default: 0 })
  private selectedTab: number

  // Data
  private text = ''
  private cmOptions = {
    tabSize: 2,
    mode: 'text/javascript',
    theme: 'base16-dark',
    lineNumbers: true,
    line: true,
  }

  // Mounted
  private mounted() {
    this.text = this.code
  }

  // Watchers
  @Watch('code')
  private onCodeChange(val: string, oldVal: string) {
    this.text = this.code
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/styles/functions.scss";
.editor {
  width: 80%;
  height: 80%;
  font-size: fontsize('code');
  .tab {
    cursor: pointer;
    font-size: fontsize('medium');
    background: bgColor('editor');
    color: textColor('primary');
    opacity: 0.7;
    padding: 10px 15px 10px 15px;
    border: none;
    outline: none;
    border-bottom: 1px solid bgColor('editor');
    &.selected {
      opacity: 1;
      border-bottom: 1px solid bgColor('primary');
    }
  }
}

// Mobile view
@media only screen and (max-width: breakpoints('mobile')) {
  .editor {
    width: 95%;
    height: 85%;
    padding-top: 10px;
    align-self: flex-start;
    font-size: fontsize('medium');
    .tab {
      width: 50%;
      font-size: fontsize('regular');
      padding: 15px 0 15px 0;
    }
  }
}
</style>

<style lang="scss">
.vue-codemirror {
  height: 100%
}
.CodeMirror {
  height: 100% !important;
}
</style>