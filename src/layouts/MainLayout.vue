<script setup lang="ts"></script>

<template>
  <v-layout>
    <RouterView name="header"> </RouterView>
    <RouterView name="menu"></RouterView>

    <v-main><RouterView></RouterView></v-main>
  </v-layout>
</template>

<style scoped></style>
