<script lang="ts" setup>
import { useProductStore } from "@/stores/product";

const productStore = useProductStore();
</script>
<template>
  <div>{{ productStore.products }}</div>
</template>
