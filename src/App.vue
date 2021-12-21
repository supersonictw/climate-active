<template>
  <v-app>
    <v-app-bar app>
      <v-app-bar-nav-icon>
        <v-icon>mdi-pen</v-icon>
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
    data: () => ({ drawer: null }),
  }
</script>
