import Vue from "vue";
import VueIdb from "vue-idb";

Vue.use(VueIdb);

export default new VueIdb({
  version: 1,
  database: "karafa",
  schemas: [{ notes: "uuid, content, encrypted, created_at, updated_at" }],
});
