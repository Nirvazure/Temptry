<template>
  <v-container>
    <v-row>
      <v-col>
        <div>
          <v-card-text>
            <v-avatar size="200">
              <v-img :src="master.avatar"></v-img>
            </v-avatar>
          </v-card-text>

          <p class="display-1">你本周的调教主人是：{{ master.name }}</p>
          <v-list v-if="master.rules">
            <v-list-item-group>
              <v-list-item v-for="(rule, i) in master.rules" :key="i">
                <v-list-item-avatar>
                  <v-img :src="master.avatar"></v-img>
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title>{{ rule.text }}</v-list-item-title>
                  <v-list-item-subtitle>sss</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>
          <p class="h3">你的当前任务是{{ tarTrainItem.name }}</p>
        </div>
      </v-col>
      <v-col><Todo /></v-col>
    </v-row>
  </v-container>
</template>

<script>
import Todo from "@/components/Todo";
import { masters } from "@/api/master";
export default {
  components: {
    Todo,
  },
  data: () => ({
    master: masters[0],
    tarTrainItem: "",
  }),
  mounted() {
    this.master = masters[Math.floor(Math.random() * masters.length)];

    this.tarTrainItem = this.master.trainItems[
      Math.floor(Math.random() * this.master.trainItems.length)
    ];
    console.log(this.tarTrainItem);
  },
};
</script>

<style></style>
