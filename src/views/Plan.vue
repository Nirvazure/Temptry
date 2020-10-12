<template>
  <v-container>
    <v-row>
      <v-col cols='12' md="2">
        <v-card color="primary" dark>
          <v-card-title>Items</v-card-title>
          <v-card-text>
            <v-list>
              <v-list-item-group>
                <draggable v-model="items" group="a1">
                  <v-list-item v-for="(item, i) in items" :key="i">
                    {{ item }}{{ i }}
                  </v-list-item>
                </draggable>
              </v-list-item-group>
            </v-list>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col>
        <v-card color="success" dark>
          <v-card-title>choices</v-card-title>
          <v-card-text>
            <v-list>
              <v-list-item-group>
                <draggable v-model="choices" group="a1">
                  <v-list-item v-for="(item, i) in choices" :key="i">
                    {{ item }}{{ i }}
                  </v-list-item>
                </draggable>
              </v-list-item-group>
            </v-list>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import draggable from "vuedraggable";
export default {
  components: { draggable },
  data: () => ({
    items: ["JUG", "MID", "BOT", "SUP"],
    choices: ["TOP"],
  }),
};
</script>

<style>
</style>