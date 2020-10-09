<template>
  <v-container>
    <h2>{{ slave.name }}</h2>
    <h2>{{ slave.level }}</h2>
    <h2>{{ slave.score }}</h2>
    <h2>{{ slave.master }}</h2>
    <RaddarChart></RaddarChart>
  </v-container>
</template>

<script>
import { slaves } from "@/api/slave";
import RaddarChart from "@/components/RaddarChart";
export default {
  data: () => ({
    slave: {},
  }),
  components: { RaddarChart },
  mounted() {
    this.slave = slaves.filter((item) => {
      return item.name == this.$route.params.name;
    })[0]; //出来是个数组，其实是想要唯一的一个的
    console.log(this.slave);
  },
};
</script>

<style>
</style>