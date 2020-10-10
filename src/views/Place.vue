<template>
  <v-container>
    <v-slide-group center-active>
      <v-slide-item class="ma-6" v-for="(place, i) in places" :key="i">
        <v-card
          width="300"
          height="400"
          img="https://hbimg.huabanimg.com/9c5bc28b02442cd928af88bb641a20815d318ecb138f-8ULc4y_fw658/format/webp"
        >
          <v-card-text class="mt-10">
            <v-avatar size="100">
              <v-img :src="avatar"></v-img>
            </v-avatar>
            <v-list-item-content>
              <v-list-item-title class="font-weight-bold title"
                >M Name</v-list-item-title
              >
              <v-list-item-subtitle>Famous in SnakeSoul</v-list-item-subtitle>
            </v-list-item-content>
            <v-chip class="mt-3" label color="orange" dark small>K7</v-chip>
          </v-card-text>
          <v-card-text>
            <v-avatar size="30">
              <v-img :src="avatar"></v-img>
            </v-avatar>
            <v-avatar size="30">
              <v-img :src="avatar"></v-img>
            </v-avatar>
            <v-avatar size="30">
              <v-img :src="avatar"></v-img>
            </v-avatar>
          </v-card-text>
        </v-card>
      </v-slide-item>
    </v-slide-group>
  </v-container>
</template>

<script>
import { places } from "@/api/place";
export default {
  data: () => ({
    avatar: require("@/assets/master/1.jpg"),
    places: places,
  }),
};
</script>

<style scoped>
</style>