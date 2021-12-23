<template>
  <v-container>
    <v-card-actions class="mb-3">
      <v-btn class="secondary" to="/">Back</v-btn>
      <v-spacer />
      <v-btn class="amber darken-3" :to="`/editor/${uuid}`">Edit</v-btn>
    </v-card-actions>
    <v-card>
      <v-card-text>
        <v-card id="preview" flat v-html="render" />
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import { marked } from "marked";

export default {
  name: "Previewer",
  data: () => ({
    uuid: null,
    input: "",
  }),
  computed: {
    render() {
      return marked(this.input, { sanitize: true });
    },
  },
  created() {
    this.uuid = this.$route.params.uuid;
    this.$db
      .table("notes")
      .get(this.$route.params.uuid)
      .then((i) => (this.input = i.content));
  },
};
</script>
