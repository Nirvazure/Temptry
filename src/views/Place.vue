<template>
  <v-container>
    <v-row>
      <v-col class="ma-6" v-for="(master, i) in masters" :key="i">
        <v-card
          max-width="300"
          height="350"
          class="pt-1 text-center"
          :img="master.bgImg"
        >
          <v-card-text class="mt-2">
            <v-avatar size="100">
              <v-img :src="master.avatar"></v-img>
            </v-avatar>
            <v-list-item-content>
              <v-list-item-title class="font-weight-bold title">{{
                master.name
              }}</v-list-item-title>
              <v-list-item-subtitle>{{
                master.description
              }}</v-list-item-subtitle>
            </v-list-item-content>
            <v-chip
              v-for="(label, i) in master.labels"
              :key="i"
              class="mt-3 mx-1"
              label
              :color="label.color"
              dark
              small
              >{{ label.text }}</v-chip
            >
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
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { masters } from "@/api/master";
export default {
  data: () => ({
    avatar: require("@/assets/master/1.jpg"),
    masters: masters,
  }),
};
</script>

<style scoped>
</style>