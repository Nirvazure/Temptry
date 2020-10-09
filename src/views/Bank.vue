<template>
  <v-container>
    <v-data-table
      class="elevation-3"
      :headers="headers"
      :items-per-page="5"
      :items="subs"
      :footer-props="{
        showFirstLastPage: true,
        firstIcon: 'mdi-arrow-collapse-left',
        lastIcon: 'mdi-arrow-collapse-right',
        prevIcon: 'mdi-minus',
        nextIcon: 'mdi-plus',
      }"
    >
      <template v-slot:[`item.level`]="{ item }">
        <v-chip>{{ item.level }}</v-chip>
      </template>
      <template v-slot:[`item.master`]="{ item }">
        <v-chip color="orange" dark>
          <v-avatar left><v-img :src="item.masterAvatar"></v-img></v-avatar>
          {{ item.master }}
        </v-chip>
      </template>
    </v-data-table>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    headers: [
      {
        text: "Dessert",
        align: "start",
        sortable: false,
        value: "name",
      },
      { text: "Level", value: "level" },
      { text: "Master", value: "master" },
      { text: "MasterAvatar", value: "masterAvatar" },
      { text: "Score", value: "score" },
      { text: "Iron (%)", value: "iron" },
    ],
    subs: [
      {
        name: "Frozen Yogurt",
        level: "A",
        master: "NingwangDom",
        masterAvatar: require("@/assets/master/1.jpg"),
        fat: 6.0,
        score: 84,
        protein: 4.0,
        iron: "1%",
      },
      {
        name: "Ice cream sandwich",
        calories: 237,
        level: "B",
        master: "Beishan",
        masterAvatar: require("@/assets/master/2.jpg"),
        fat: 9.0,
        carbs: 37,
        protein: 4.3,
        iron: "1%",
      },
      {
        name: "Eclair",
        calories: 262,
        fat: 16.0,
        carbs: 23,
        protein: 6.0,
        iron: "7%",
      },
      {
        name: "Cupcake",
        calories: 305,
        fat: 3.7,
        carbs: 67,
        protein: 4.3,
        iron: "8%",
      },
      {
        name: "Gingerbread",
        calories: 356,
        fat: 16.0,
        carbs: 49,
        protein: 3.9,
        iron: "16%",
      },
      {
        name: "Jelly bean",
        calories: 375,
        fat: 0.0,
        carbs: 94,
        protein: 0.0,
        iron: "0%",
      },
      {
        name: "Lollipop",
        calories: 392,
        fat: 0.2,
        carbs: 98,
        protein: 0,
        iron: "2%",
      },
      {
        name: "Honeycomb",
        calories: 408,
        fat: 3.2,
        carbs: 87,
        protein: 6.5,
        iron: "45%",
      },
      {
        name: "Donut",
        calories: 452,
        fat: 25.0,
        carbs: 51,
        protein: 4.9,
        iron: "22%",
      },
      {
        name: "KitKat",
        calories: 518,
        fat: 26.0,
        carbs: 65,
        protein: 7,
        iron: "6%",
      },
    ],
  }),
};
</script>

<style>
</style>