<template>
  <v-app>
    <v-app-bar app>
      <v-app-bar-nav-icon @click="action">
        <v-icon>{{ icon }}</v-icon>
      </v-app-bar-nav-icon>
      <v-toolbar-title>Karafa</v-toolbar-title>
    </v-app-bar>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  computed: {
    icon() {
      return this.$route.path === "/editor" ? "mdi-arrow-left" : "mdi-pen";
    },
  },
  methods: {
    action() {
      if (this.$route.path === "/editor") {
        if (window.history.length) {
          this.$router.back();
        } else {
          this.$router.replace("/");
        }
      } else {
        this.$router.replace("/editor");
      }
    },
  },
};
</script>
