<template>
  <v-container>
    <v-slide-group center-active>
      <v-slide-item class="mx-2" v-for="(place, i) in places" :key="i">
        <v-card
          color="purple"
          dark
          width="300"
          height="500"
          img="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3482128345,2137456532&fm=26&gp=0.jpg"
        >
          <v-card-title>{{ place.name }}</v-card-title>
          <v-card-subtitle>{{ place.description }}</v-card-subtitle>
        </v-card>
      </v-slide-item>
    </v-slide-group>
  </v-container>
</template>

<script>
import { places } from "@/api/place";
export default {
  data: () => ({
    places: places,
  }),
};
</script>

<style>
</style>