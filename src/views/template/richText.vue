<template>
  <div class="asda">
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
.asda {
  margin: 20px;
  border: 2px solid fuchsia;
}
</style>