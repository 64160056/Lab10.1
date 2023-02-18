<script lang="ts" setup>
import { useProductStore } from "@/stores/product";
import { onMounted } from "vue";

const productStore = useProductStore();
onMounted(async () => {
  await productStore.getProducts();
});
</script>
<template>
  <div>{{ productStore.products }}</div>
</template>
