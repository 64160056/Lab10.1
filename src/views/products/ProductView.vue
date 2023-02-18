<script lang="ts" setup>
import { useProductStore } from "@/stores/product";
import { onMounted } from "vue";

const productStore = useProductStore();
onMounted(async () => {
  await productStore.getProducts();
});
</script>
<template>
  <v-table>
    <thead>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Price</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item of productStore.products" :key="item.id">
        <td>{{ item.id }}</td>
        <td>{{ item.name }}</td>
        <td>{{ item.price }}</td>
      </tr>
    </tbody>
  </v-table>
</template>
