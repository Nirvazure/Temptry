<template>
  <v-container>
    <h2>Promise Try</h2>
    <v-btn color="primary">Start</v-btn>
  </v-container>
</template>

<script>
const promise = new Promise((resolve, reject) => {
  setTimeout(resolve, 3000, "done");
  reject;
});

export default {
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