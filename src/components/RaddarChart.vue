<template>
  <div :class="className" :style="{ height: height, width: width }" />
</template>

<script>
import echarts from "echarts";
const animationDuration = 3000;

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
      default: "300px",
    },
    faceScore: {
      type: Number,
      default: 0,
    },
    bodyScore: {
      type: Number,
      default: 0,
    },
    SubScore: {
      type: Number,
      default: 0,
    },
    MScore: {
      type: Number,
      default: 0,
    },
    SexScore: {
      type: Number,
      default: 0,
    },
    MentorScore: {
      type: Number,
      default: 0,
    },
  },
  data: () => ({ chart: null }),
  mounted() {
    this.initChart();
  },

  methods: {
    initChart() {
      this.chart = echarts.init(this.$el, "macarons");
      this.chart.setOption({
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow", // 默认为直线，可选为：'line' | 'shadow'
          },
        },
        radar: {
          radius: "66%",
          center: ["50%", "42%"],
          splitNumber: 8,
          splitArea: {
            areaStyle: {
              color: "rgba(127,95,132,.3)",
              opacity: 1,
              shadowBlur: 45,
              shadowColor: "rgba(0,0,0,.5)",
              shadowOffsetX: 0,
              shadowOffsetY: 15,
            },
          },
          indicator: [
            { name: "Face", max: 100 },
            { name: "Body", max: 100 },
            { name: "Sub", max: 100 },
            { name: "M", max: 100 },
            { name: "Sex", max: 100 },
            { name: "Mentor", max: 100 },
          ],
        },
        series: [
          {
            type: "radar",
            symbolSize: 0,
            data: [
              {
                value: [
                  this.faceScore,
                  this.bodyScore,
                  this.SubScore,
                  this.MScore,
                  this.SexScore,
                  this.MentorScore,
                ],
              },
            ],
            animationDuration: animationDuration,
          },
        ],
      });
    },
  },
};
</script>
