<script lang="ts" setup>
import { useProductStore } from "@/stores/product";
import { ref } from "vue";
import type { VForm } from "vuetify/components";
const form = ref<VForm | null>(null);
const productStore = useProductStore();
async function save() {
  const { valid } = await form.value!.validate();
  if (valid) {
    await productStore.saveProduct();
  }
}
</script>
<template>
  <v-dialog v-model="productStore.dialog" persistent width="1024">
    <v-card>
      <v-card-title>
        <span class="text-h5">Product</span>
      </v-card-title>
      <v-card-text>
        <v-form ref="form">
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field
                  label="Name*"
                  required
                  v-model="productStore.editedProduct.name"
                  :rules="[
                    (v) => !!v || 'Item is required',
                    (v) => v.length >= 3 || 'Length must more than than 3',
                  ]"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Price"
                  required
                  v-model="productStore.editedProduct.price"
                  :rules="[(v) => !!v || 'Item is required']"
                ></v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-form>
        <small>*indicates required field</small>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          color="blue-darken-1"
          variant="text"
          @click="productStore.dialog = false"
        >
          Close
        </v-btn>
        <v-btn color="blue-darken-1" variant="text" @click="save"> Save </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
