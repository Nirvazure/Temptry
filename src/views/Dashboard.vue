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
        <v-card width="100%">
          <v-card-title>
            sda
            <v-spacer></v-spacer>
            <v-btn-toggle v-model="toggle_btn" rounded>
              <v-btn>YEAR</v-btn>
              <v-btn>MONTH</v-btn>
              <v-btn>DAY</v-btn>
            </v-btn-toggle>
            <v-btn class="ml-3" color="blue" dark>
              <v-icon>mdi-cloud</v-icon>
            </v-btn>
          </v-card-title>
          <v-card-subtitle>September 19</v-card-subtitle>
          <v-card-text class="px-5">
            <v-sheet color="cyan" max-width="100%">
              <v-sparkline
                :labels="labels"
                :value="value"
                color="white"
                line-width="2"
              ></v-sparkline>
            </v-sheet>
          </v-card-text>
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
  </v-container>
</template>

<script>
import ChartCard from "@/components/ChartCard";
import SocialCard from "@/components/SocialCard";
const promise = new Promise((resolve, reject) => {
  setTimeout(resolve, 3000, "done");
  reject;
});

export default {
  components: { ChartCard, SocialCard },
  data: () => ({
    msgs: [],
    toggle_btn: 2,
    labels: ["12am", "3am", "6am", "9am", "12pm", "3pm", "6pm", "9pm"],
    value: [200, 675, 410, 390, 310, 460, 250, 240],
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
.v-sheet--offset {
  top: -24px;
  position: relative;
}
</style>