<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" md="5">
        <v-list-item>
          <v-list-item-avatar size="120">
            <v-img :src="myInfo.avatar"></v-img>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title class="display-2">{{
              myInfo.name
            }}</v-list-item-title>
            <v-list-item-subtitle>
              <v-btn width="200" color="orange" dark>{{ myInfo.level }}</v-btn>
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <v-tabs v-model="tab" align-with-title>
          <v-tabs-slider color="yellow"></v-tabs-slider>

          <v-tab v-for="item in items2" :key="item">
            {{ item }}
          </v-tab>
        </v-tabs>
        <v-tabs-items v-model="tab" class="px-10">
          <v-tab-item>
            <v-card v-for="(skill, i) in myInfo.skills" :key="i">
              {{ skill }}
            </v-card>
          </v-tab-item>
          <v-tab-item>
            <h2>{{ myInfo.mast.name }}</h2>
            <v-avatar>
              <v-img :src="myInfo.mast.avatar"></v-img>
            </v-avatar>
          </v-tab-item>

          <!-- <v-tab-item v-for="item in items" :key="item">
            <v-card flat>
              <v-card-text v-text="text"></v-card-text>
            </v-card>
          </v-tab-item> -->
        </v-tabs-items>
      </v-col>
      <v-col cols="12" md="4">
        <v-card flat>
          <v-divider></v-divider>
          <v-card-title
            >Week Plan<v-spacer></v-spacer
            ><v-btn color="blue" dark>生成</v-btn></v-card-title
          >

          <v-card-text>
            <v-progress-circular
              :value="progress"
              size="300"
              width="10"
              color="green"
              ><p class="display-4">{{ progress }}%</p></v-progress-circular
            >
          </v-card-text>
          <v-divider></v-divider>
          <v-card-text>
            <v-row justify="center">
              <v-col v-for="(v, i) in items" :key="i">
                <v-card
                  @click="v.status = !v.status"
                  flat
                  :color="v.status == false ? 'grey' : 'green lighten-2'"
                  dark
                >
                  <v-card-title>{{ v.name }}</v-card-title>
                </v-card>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { myInfo, weekPlan } from "@/api/mock";
export default {
  data: () => ({
    myInfo: myInfo,
    my: myInfo,
    tab: null,
    items2: ["Skills", "Mast", "videos", "images", "news"],
    text: "2312",
    items: weekPlan,
  }),
  computed: {
    progress: function () {
      return (
        (this.items.filter((v) => {
          return v.status == true;
        }).length /
          this.items.length) *
        100
      );
    },
  },
};
</script>



<style>
</style>