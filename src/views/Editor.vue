<template>
  <v-container>
    <v-card class="mt-5">
      <v-row>
        <v-col>
          <v-card-text>
            <v-textarea filled auto-grow v-model="input" />
          </v-card-text>
        </v-col>
        <v-col>
          <v-card-text>
            <v-card flat v-html="render" />
          </v-card-text>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>
    
<script>
import { marked } from "marked";

export default {
  name: "Editor",
  data: () => ({
    input: "# KaraKaraFa\n\n> Hello, my master. :D",
  }),
  computed: {
    render() {
      return marked(this.input, { sanitize: true });
    },
  },
  watch: {
    input(e) {
      localStorage.setItem("last_update", e);
    },
  },
  created() {
    const last_update = localStorage.getItem("last_update");
    if (last_update) {
      this.input = last_update;
    }
  },
};
</script>
