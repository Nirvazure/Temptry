<template>
  <v-container class="pa-12">
    <v-row>
      <v-col cols="12" md="2" class="d-flex justify-space-around">
        <v-img :src="img" :aspect-ratio="3 / 4" width="100%"></v-img>
      </v-col>
      <v-col cols="12" md="3" class="ml-10">
        <v-row>
          <p class="display-1 mt-3">Celine Kutch</p>
        </v-row>
        <v-row>
          <v-col cols="12" md="4">
            <p class="font-weight-bold">Item1</p>
            <p class="font-weight-bold">Item1</p>
            <p class="font-weight-bold">Item1</p>
            <p class="font-weight-bold">Item1</p>
          </v-col>
          <v-col cols="12" md="7">
            <p>Item1</p>
            <p>Item1</p>
            <p>Item1</p>
            <p>Item1</p>
          </v-col>
        </v-row>
        <v-row>
          <v-btn outlined color="primary" class="mx-1">Order</v-btn>
          <v-btn outlined color="success" class="mx-1">Order</v-btn>
          <v-btn outlined color="warning" class="mx-1">Order</v-btn>
        </v-row>
      </v-col>
      <v-col cols="12" md="6"></v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  data: () => ({
    img: require("@/assets/1.jpg"),
  }),
};
</script>

<style>
</style>