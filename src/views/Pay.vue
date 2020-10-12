<template>
  <v-container>
    <h2>Pay Analyse</h2>
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
};
</script>

<style>
</style>