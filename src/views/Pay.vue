<template>
  <v-container>
    <h2>Pay Analyse</h2>
    <v-select
      v-model="payType"
      :items="payTypes"
      filled
      label="Filled style"
    ></v-select>
    <v-select
      v-model="payTarget"
      :items="payTargets"
      filled
      label="Filled style"
    ></v-select>
    <v-btn @click="getPayTypeInfo">show</v-btn>
    <v-data-table
      :headers="headers"
      :items="currPayMemos"
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
    payTypes: [],
    payTargets: [],
    payType: "",
    payTarget: "",
  }),
  mounted() {
    let csv_file = "./wepay_lfr.csv";
    const d3 = require("d3-dsv");
    axios.get(csv_file).then((res) => {
      let ret = d3.csvParse(res.data);
      this.payMemos = ret;
      this.payTypes = this.getSelectItem("支付方式");
      this.payTargets = this.getSelectItem("交易对方");
    });

    console.log(this.payTypes);
  },
  computed: {
    currPayMemos() {
      return (
        this.payMemos
          // .filter((v) => {
          //   return v["支付方式"] == this.payType;
          // })
          .filter((v) => {
            return v["交易对方"] == this.payTarget;
          })
      );
    },
  },
  methods: {
    getPayTypeInfo() {
      for (let type of this.payTypes) {
        // let sum = 0;
        console.log("type", type);
        let a = this.payMemos
          .filter((v) => {
            return v["支付方式"] === type;
          })
          .map((v) => {
            return Number(v["金额(元)"].replace("¥", ""));
          });
        console.log(a);
      }
    },

    getSelectItem(param) {
      return this.payMemos.map((v) => {
        return v[param];
      });
    },

    showArray2() {
      let TOP10 = this.payMemos.sort((a, b) => {
        return a["金额(元)"] - b["金额(元)"];
      });
      for (let i = 0; i < 10; i++) {
        console.log(TOP10[i]);
      }
    },

    showArray() {
      let a1 = this.payMemos.map((v) => {
        return v["交易对方"];
      });
      console.log("2222");
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
      for (let i in countedNames) {
        if (countedNames[i] > 10) {
          console.log(i, countedNames[i]);
        }
      }
    },
  },
};
</script>

<style>
</style>