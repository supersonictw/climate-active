<template>
  <v-container>
    <v-list>
      <div v-if="!notes.length">
        <v-list-item two-line>
          <v-list-item-content>
            <v-list-item-title>KaraKaraFa 🐤🐤🐤</v-list-item-title>
            <v-list-item-subtitle>Your simple notebook.</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </div>
      <div v-else>
        <v-list-item v-for="(i, j) in notes" :key="j" two-line>
          <v-list-item-content>
            <v-list-item-title>{{ i }}</v-list-item-title>
            <v-list-item-subtitle>Your simple notebook.</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </div>
    </v-list>
  </v-container>
</template>

<script>
export default {
  name: "Home",
  data: () => ({
    notes: [],
  }),
  mounted() {
    const cache = [];
    this.$db.table("notes").each((i) => cache.push(i));
    this.notes.push(...cache);
  },
};
</script>
