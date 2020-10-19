<template>
  <v-card :color="color" dark>
    <v-card-title>9823</v-card-title>
    <v-card-subtitle>MembersOnline</v-card-subtitle>
    <MyChart></MyChart>
  </v-card>
</template>

<script>
import MyChart from "@/components/Echart_Linear";
export default {
  props: {
    color: String,
  },
  components: { MyChart },
  data: () => ({}),
};
</script>

<style>
</style>