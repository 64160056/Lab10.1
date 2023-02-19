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
        <th>Operations</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item of productStore.products" :key="item.id">
        <td>{{ item.id }}</td>
        <td>{{ item.name }}</td>
        <td>{{ item.price }}</td>
        <td><v-btn class="mr-50d">Edit</v-btn><v-btn>Delete</v-btn></td>
      </tr>
    </tbody>
  </v-table>
</template>
