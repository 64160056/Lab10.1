<script setup lang="ts">
import MainLayout from "@/layouts/MainLayout.vue";
import FullLayout from "@/layouts/FullLayout.vue";
import LoadingDialog from "./components/LoadingDialog.vue";
</script>

<template>
  <component
    :is="$route.meta.layout === 'MainLayout' ? MainLayout : FullLayout"
  ></component>
  <LoadingDialog></LoadingDialog>
</template>

<style scoped></style>
