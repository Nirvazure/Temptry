<template>
  <v-container>
    <h2>Pay Analyse</h2>
    <v-btn @click="showArray">show</v-btn>
    <v-data-table
      :headers="headers"
      :items="payMemos"
      :items-per-page="5"
      class="elevation-1"
    ></v-data-table>
  </v-container>
</template>

<script>
import axios from "axios";
export default {
  data: () => ({
    headers: [
      {
        text: "交易时间",
        align: "start",
        sortable: false,
        value: "交易时间",
      },
      { text: "交易对方", value: "交易对方" },
      { text: "金额(元)", value: "金额(元)" },
      { text: "收/支", value: "收/支" },
      { text: "支付方式", value: "支付方式" },
      { text: "商品", value: "商品" },
    ],
    payMemos: [],
    h2: "232",
  }),
  mounted() {
    let csv_file = "./wepay_lfr.csv";
    const d3 = require("d3-dsv");
    axios.get(csv_file).then((res) => {
      let ret = d3.csvParse(res.data);
      console.log(ret);
      this.payMemos = ret;
    });
  },
  methods: {
    showArray() {
      let a1 = this.payMemos.map((v) => {
        return v["交易对方"];
      });
      console.log(a1);
      let countedNames = a1.reduce((allNames, name) => {
        if (name in allNames) {
          allNames[name]++;
        } else {
          allNames[name] = 1;
        }
        return allNames;
      }, {});
      console.log(countedNames, typeof countedNames);
    },

    // countedNames is:
    // { 'Alice': 2, 'Bob': 1, 'Tiff': 1, 'Bruce': 1 }
  },
};
</script>

<style>
</style>