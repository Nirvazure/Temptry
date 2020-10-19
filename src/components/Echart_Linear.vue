<template>
  <div :class="className" :style="{ height: height, width: width }" />
</template>

<script>
import echarts from "echarts";
export default {
  props: {
    className: {
      type: String,
      default: "chart",
    },
    width: {
      type: String,
      default: "100%",
    },
    height: {
      type: String,
      default: "90px",
    },
  },
  data: () => ({
    chart: null,
    option: {
      color: ["#fff"],
      xAxis: {
        type: "category",
        data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        show: false,
      },
      yAxis: {
        type: "value",
        show: false,
      },
      series: [
        {
          barWidth: "60%",
          data: [120, 200, 150, 380, 70, 110, 130],
          type: "bar",
        },
      ],
    },
  }),
  mounted() {
    this.chart = echarts.init(this.$el, "macarons");
    this.chart.setOption(this.option);
  },
};
</script>
