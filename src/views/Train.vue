<template>
  <v-container>
    <v-row class="mx-3 my-2">
      <v-col cols="12" md="3">
        <ChartCard color="#23a0cc"></ChartCard>
      </v-col>
      <v-col cols="12" md="3">
        <ChartCard color="#5BBFDD"></ChartCard>
      </v-col>
      <v-col cols="12" md="3">
        <ChartCard color="#F5BA0E"></ChartCard>
      </v-col>
      <v-col cols="12" md="3">
        <ChartCard color="#F86766"></ChartCard>
      </v-col>
    </v-row>

    <v-row class="mx-3 my-2">
      <v-col cols="12" md="12">
        <v-card width="100%" dark>
          <v-card-title>sda</v-card-title>
          <v-card-subtitle>September 19</v-card-subtitle>
          <MyChart></MyChart>
        </v-card>
      </v-col>
    </v-row>

    <v-row class="mx-3 my-2">
      <v-col cols="12" md="4">
        <SocialCard color="green" icon="mdi-wechat"></SocialCard>
      </v-col>
      <v-col cols="12" md="4">
        <SocialCard color="#00acee" icon="mdi-twitter"></SocialCard>
      </v-col>
      <v-col cols="12" md="4">
        <SocialCard color="#3b5999" icon="mdi-facebook"></SocialCard>
      </v-col>
    </v-row>

    <v-card width="700">
      <v-list height="200px" class="overflow-y-auto overflow-x-hidden">
        <v-list-item v-for="(item, i) in msgs" :key="i">
          {{ item }}
        </v-list-item>
      </v-list>
      <v-card-actions>
        <v-row>
          <v-col>
            <v-avatar>
              <v-img
                src="https://profile.csdnimg.cn/4/6/4/3_weixin_30662849"
              ></v-img>
            </v-avatar>
            <v-text-field label="Regular"></v-text-field>
          </v-col>
          <v-col><v-btn color="primary" @click="add_msg">Start</v-btn></v-col>
        </v-row>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
import MyChart from "@/components/Echart_Linear";
import ChartCard from "@/components/ChartCard";
import SocialCard from "@/components/SocialCard";
const promise = new Promise((resolve, reject) => {
  setTimeout(resolve, 3000, "done");
  reject;
});

export default {
  components: { ChartCard, MyChart, SocialCard },
  data: () => ({
    msgs: [],
  }),
  mounted() {
    promise.then((v) => {
      console.log(v);
    });
  },
  methods: {
    add_msg() {
      this.msgs.push("222");
    },
  },
};
</script>

<style>
</style>