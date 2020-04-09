<template>
  <div class="editor">
    <tinymce-editor ref="editor" v-model="value"></tinymce-editor>
  </div>
</template>

<script>
import tinymceEditor from "../../components/tinymce/index";
export default {
  data() {
    return {
      value: ""
    };
  },
  components: {
    tinymceEditor
  }
};
</script>

<style scoped>
.editor {
  margin: 20px;
}
</style>