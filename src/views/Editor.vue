<template>
  <v-container>
    <v-row>
      <v-col>
        <v-textarea :value="input" @input="update"></v-textarea>
      </v-col>
      <v-col>
        <v-card v-html="compiledMarkdown"></v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
    
<script>
import _ from "lodash";
import { marked } from "marked";

export default {
  name: "Editor",
  data: () => ({
    input: "# hello",
  }),
  computed: {
    compiledMarkdown: function () {
      return marked(this.input, { sanitize: true });
    },
  },
  methods: {
    update: _.debounce(function (e) {
      localStorage.setItem("writing", this.input);
      this.input = e.target.value;
    }, 300),
  },
};
</script>
