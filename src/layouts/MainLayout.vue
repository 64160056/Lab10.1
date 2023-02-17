<script setup lang="ts"></script>

<template>
  <v-layout>
    <v-app-bar> <RouterView name="headder"> </RouterView> </v-app-bar>
    <RouterView name="menu"></RouterView>

    <v-main><RouterView></RouterView></v-main>
  </v-layout>
</template>

<style scoped></style>
