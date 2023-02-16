<script setup lang="ts">
import { ref } from "vue";

const drawer = ref(true);
const rail = ref(true);
</script>

<template>
  <v-layout>
    <v-app-bar> <RouterView name="headder"> </RouterView> </v-app-bar>
    <v-navigation-drawer
      v-model="drawer"
      :rail="rail"
      permanent
      @click="rail = false"
    >
      <RouterView name="menu"></RouterView>
    </v-navigation-drawer>
    <v-main></v-main>
    <v-main><RouterView></RouterView></v-main>
  </v-layout>
</template>

<style scoped></style>
