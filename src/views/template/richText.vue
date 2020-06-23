<template>
  <div class="editor">
    <tinymce-editor ref="editor" v-model="value" />
  </div>
</template>

<script>
import tinymceEditor from '../../components/tinymce/index'
export default {
  components: {
    tinymceEditor
  },
  data() {
    return {
      value: ''
    }
  }
}
</script>

<style scoped>
.editor {
  margin: 20px;
}
</style>
