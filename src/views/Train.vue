<template>
  <v-container>
    <h2>Promise Try</h2>

    <v-list height="600px" class="overflow-y-auto overflow-x-hidden">
      <v-list-item v-for="(item, i) in msgs" :key="i">
        {{ item }}
      </v-list-item>
    </v-list>
    <v-row class="mt-3">
      <v-avatar class="mx-5">
        <v-img src="https://profile.csdnimg.cn/4/6/4/3_weixin_30662849"></v-img>
      </v-avatar>
      <v-text-field class="d-flex-inline" label="Regular"></v-text-field>
      <v-btn class="mx-5" color="primary" @click="add_msg">Start</v-btn>
    </v-row>
  </v-container>
</template>

<script>
const promise = new Promise((resolve, reject) => {
  setTimeout(resolve, 3000, "done");
  reject;
});

export default {
  data: () => ({
    msgs: [],
  }),
  mounted() {
    promise.then((v) => {
      console.log(v);
    });
  },
  methods: {
    add_msg() {
      this.msgs.push("222");
    },
  },
};
</script>

<style>
</style>