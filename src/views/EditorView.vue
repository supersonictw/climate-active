<template>
  <v-container>
    <v-card-actions class="mb-3">
      <v-btn v-if="uuid" class="secondary" to="/">Back</v-btn>
    </v-card-actions>
    <v-card class="mt-5">
      <v-row>
        <v-col>
          <v-card-text>
            <v-textarea filled auto-grow v-model="content" />
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
  name: "EditorView",
  props: {
    uuid: {
      type: String,
      required: false,
      default: () => ""
    }
  },
  data: () => ({
    content: "# KaraKaraFa\nHello, my master. :D\n",
  }),
  computed: {
    render() {
      return marked(this.content, { sanitize: true });
    },
  },
  watch: {
    content(e) {
      localStorage.setItem("karafa-last_update", e);
    },
  },
  methods: {
    cancel() {
      this.content = "";
      localStorage.removeItem("karafa-last_update");
    },
    save() {
      const title = document.querySelector("#preview h1")?.textContent;
      const data = {
        uuid: this.uuid || uuid(),
        title: title || "Untitled",
        content: this.content,
        encrypted: false,
        created_at: new Date().getTime(),
        updated_at: new Date().getTime(),
      };
      if (this.uuid) {
        this.$db.table("notes").put(data);
      } else {
        this.$db.table("notes").add(data);
      }
      localStorage.removeItem("karafa-last_update");
      this.$router.replace("/");
    },
  },
  created() {
    const last_update = localStorage.getItem("karafa-last_update");
    if (last_update) {
      this.content = last_update;
    } else if (this.uuid) {
      this.$db
          .table("notes")
          .get(this.uuid)
          .then((i) => (this.content = i.content));
    }
  },
};
</script>
