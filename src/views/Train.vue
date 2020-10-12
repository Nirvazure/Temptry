<template>
  <v-container>
    <h2>Promise Try</h2>
    <v-btn color="primary">Start</v-btn>
<v-sheet>
  <iframe frameborder="no" border="0" marginwidth="0" marginheight="0" width=330 height=86 src="//music.163.com/outchain/player?type=2&id=863144822&auto=1&height=66"></iframe>
</v-sheet>
  </v-container>
</template>

<script>
const promise = new Promise((resolve, reject) => {
  setTimeout(resolve, 3000, "done");
  reject;
});

export default {
  components: {

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