<template>
  <div class="translator">
    <div class="editor">
      <codemirror
        ref="myCm"
        v-model="code"
        :options="cmOptions"
      />
    </div>
  </div>

</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { codemirror } from 'vue-codemirror'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/base16-dark.css'
import 'codemirror/mode/javascript/javascript.js'
import Header from '@/components/Header.vue'

@Component({
  components: {
    Header,
    codemirror
  },
})
export default class Translator extends Vue {
  private code = 'const a = 10'
  private cmOptions = {
    tabSize: 2,
    mode: 'text/javascript',
    theme: 'base16-dark',
    lineNumbers: true,
    line: true,
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/styles/functions.scss";
.translator {
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  .editor {
    width: 80%;
    height: 80%;
    .vue-codemirror {
      height: 100%;
    }
  }
}
</style>

<style lang="scss">
.CodeMirror {
  height: 100% !important;
}
</style>



