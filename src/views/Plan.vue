<template>
  <v-container>
    <h2>Plan</h2>
    <v-card>
      <v-list shaped>
        <v-list-item-group>
          <draggable v-model="items">
            <v-list-item v-for="(item, i) in items" :key="i">
              <v-list-item-content>
                <v-list-item-title>{{ item }}</v-list-item-title>
                <v-list-item-subtitle>sdas</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </draggable>
        </v-list-item-group>
      </v-list>
    </v-card>
  </v-container>
</template>

<script>
import draggable from "vuedraggable";
export default {
  components: { draggable },
  data: () => ({
    items: ["TOP", "JUG", "MID", "BOT", "SUP"],
  }),
};
</script>

<style>
</style>