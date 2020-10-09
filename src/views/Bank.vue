<template>
  <v-container>
    <v-data-table
      class="elevation-3"
      :headers="headers"
      :items-per-page="5"
      :items="subs"
      @click:row="(e, item) => dosth(e, item)"
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
      <template v-slot:[`item.score`]="{ item }">
        <v-chip label color="white">
          <v-avatar color="orange" left>
            <h4>{{ item.level }}</h4>
          </v-avatar>
          <h3>{{ item.score }}</h3>
        </v-chip>
      </template>
      <template v-slot:[`item.master`]="{ item }">
        <v-avatar left size="30"
          ><v-img :src="item.masterAvatar"></v-img
        ></v-avatar>
        {{ item.master }}
      </template>
      <template v-slot:[`item.status`]="{ item }">
        <v-chip
          dark
          label
          :color="item.status == 'Serving' ? 'orange' : 'indigo'"
          >{{ item.status }}</v-chip
        >
      </template>
      <template v-slot:[`item.price`]="{ item }">
        <span class="body-1 font-italic">￥{{ item.price }}</span>
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
        text: "Name",
        align: "start",
        sortable: false,
        value: "name",
      },
      { text: "Score", value: "score" },
      { text: "Master", value: "master" },
      { text: "status", value: "status" },
      { text: "Price", value: "price" },
    ],
    subs: slaves,
  }),
  methods: {
    dosth(e, item) {
      this.$router.push({ name: "master", params: { name: e.name } });
      console.log(item);
    },
  },
};
</script>

<style scoped>
.fontStyle {
  font-family: Copperplate, "Consolas", fantasy;
}
</style>