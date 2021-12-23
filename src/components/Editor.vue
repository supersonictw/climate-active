<template>
  <v-container>
    <v-card class="mt-5">
      <v-row>
        <v-col>
          <v-card-text>
            <v-textarea filled auto-grow v-model="input" />
          </v-card-text>
        </v-col>
        <v-col class="d-none d-lg-block">
          <v-card-text>
            <v-card id="preview" flat v-html="render" />
          </v-card-text>
        </v-col>
      </v-row>
      <v-card-actions>
        <v-btn class="red" @click="cancel">Clear</v-btn>
        <v-spacer />
        <v-btn class="primary" @click="save">Save</v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>
    
<script>
import { v4 as uuid } from "uuid";
import { marked } from "marked";

export default {
  name: "Editor",
  data: () => ({
    input: "# KaraKaraFa\nHello, my master. :D\n",
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
  methods: {
    cancel() {
      this.input = "";
      localStorage.removeItem("last_update");
    },
    save() {
      const title = document.querySelector("#preview h1").textContent;
      this.$db.table("notes").add({
        uuid: uuid(),
        title: title || "Untitled",
        content: this.input,
        encrypted: false,
        created_at: new Date().getTime(),
        updated_at: new Date().getTime(),
      });
      this.$router.replace("/");
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
