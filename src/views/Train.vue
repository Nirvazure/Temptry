<template>
  <v-container>
    <v-card width="700">
      <v-list height="200px" class="overflow-y-auto overflow-x-hidden">
        <v-list-item v-for="(item, i) in msgs" :key="i">
          {{ item }}
        </v-list-item>
      </v-list>
      <v-card-actions>
        <v-row>
          <v-col>
            <v-avatar>
              <v-img
                src="https://profile.csdnimg.cn/4/6/4/3_weixin_30662849"
              ></v-img>
            </v-avatar>
            <v-text-field label="Regular"></v-text-field>
          </v-col>
          <v-col><v-btn color="primary" @click="add_msg">Start</v-btn></v-col>
        </v-row>
      </v-card-actions>
    </v-card>
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