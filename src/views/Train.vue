<template>
  <v-container>
    <h2>Promise Try</h2>
    <v-btn color="primary">Start</v-btn>
    <aplayer
      autoplay
      :music="{
        title: 'secret base~君がくれたもの~',
        artist: 'Silent Siren',
        src: 'http://sc1.111ttt.cn/2018/1/03/13/396131232171.mp3',
        pic: 'https://moeplayer.b0.upaiyun.com/aplayer/secretbase.jpg',
      }"
    />
  </v-container>
</template>

<script>
import Aplayer from "vue-aplayer";
const promise = new Promise((resolve, reject) => {
  setTimeout(resolve, 3000, "done");
  reject;
});

export default {
  components: {
    Aplayer,
  },
  data: () => ({}),
  mounted() {
    promise.then((v) => {
      console.log(v);
    });
  },
};
</script>

<style>
</style>