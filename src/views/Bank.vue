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
      <template v-slot:[`item.name`]="{ item }">
        <v-list-item>
          <v-list-item-avatar>
            <v-img :src="item.masterAvatar"></v-img>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title class="fontStyle">{{
              item.name
            }}</v-list-item-title>
            <v-list-item-subtitle class="fontStyle">{{
              item.master
            }}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </template>
      <template v-slot:[`item.level`]="{ item }">
        <v-chip dark label>
          <v-avatar class="indigo" left>{{ item.level }}</v-avatar
          >{{ item.score }}</v-chip
        >
      </template>
      <template v-slot:[`item.master`]="{ item }">
        <!-- <v-chip> -->
        <v-avatar left size="30"
          ><v-img :src="item.masterAvatar"></v-img
        ></v-avatar>
        {{ item.master }}
        <!-- </v-chip> -->
      </template>
      <template v-slot:[`item.score`]="{ item }">
        <h3>{{ item.score }}</h3>
      </template>
      <template v-slot:[`item.action`]>
        <v-btn text primary>点击主页</v-btn>
      </template>
    </v-data-table>
  </v-container>
</template>

<script>
import { slaves } from "@/api/slave";
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
      { text: "status", value: "status" },
      { text: "Score", value: "score" },
      { text: "Action", value: "action" },
    ],
    subs: slaves,
  }),
};
</script>

<style scoped>
.fontStyle {
  font-family: Copperplate, "Consolas", fantasy;
}
</style>