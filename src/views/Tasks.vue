<template>
  <v-container>
    <h2>Task</h2>
    <v-row>
      <v-col>
        <v-card width="100%" height="100%" color="blue-grey darken-1" dark>
          <v-card-title>Inbox</v-card-title>
          <v-card-text>
            <draggable v-model="Items" group="a1">
              <Task
                class="ma-4"
                v-for="(v, i) in Items"
                :key="i"
                :cardInfo="v"
              ></Task>
            </draggable>
          </v-card-text>
        </v-card>
      </v-col>
      <v-divider vertical></v-divider>
      <v-col>
        <v-card width="100%" height="100%" color="green darken-1" dark>
          <v-card-title>Done</v-card-title>
          <v-card-text>
            <draggable v-model="doneItems" group="a1">
              <Task
                class="ma-4"
                v-for="(v, i) in doneItems"
                :key="i"
                :cardInfo="v"
              ></Task>
            </draggable>
          </v-card-text>
        </v-card>
      </v-col>
      <v-divider vertical></v-divider>
      <v-col>
        <v-card width="100%" height="100%" color="red darken-1" dark>
          <v-card-title>Deny</v-card-title>
          <v-card-text>
            <draggable v-model="denyItems" group="a1">
              <Task
                class="ma-4"
                v-for="(v, i) in denyItems"
                :key="i"
                :cardInfo="v"
              ></Task>
            </draggable>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import draggable from "vuedraggable";
import Task from "@/components/TaskCard";
import { cardInfos } from "@/api/mock";
export default {
  components: { Task, draggable },
  data: () => ({
    Items: cardInfos,
    denyItems: [],
    doneItems: [],
  }),
};
</script>

<style>
</style>