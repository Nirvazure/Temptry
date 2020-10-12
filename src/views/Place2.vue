<template>
  <v-container>
    <v-row align="center">
      <v-item-group v-model="window" class="shrink mr-6" mandatory tag="v-flex">
        <v-item
          v-for="(item, i) in places"
          :key="i"
          v-slot:default="{ active, toggle }"
        >
          <div>
            <v-avatar
              left
              size="30"
              class="ma-1"
              :input-value="active"
              icon
              @click="toggle"
            >
              <v-img :src="item.avatar"></v-img>
            </v-avatar>
          </div>
        </v-item>
      </v-item-group>

      <v-col>
        <v-window v-model="window">
          <v-window-item v-for="(item, i) in places" :key="i">
            <v-card>
              <v-card-text>
                <v-row class="mb-4" align="center">
                  <v-avatar color="grey" class="mr-4"></v-avatar>
                  <strong class="title">Title {{ n }}</strong>
                  <v-spacer></v-spacer>
                  <v-btn icon>
                    <v-icon>mdi-account</v-icon>
                  </v-btn>
                </v-row>
                <p>{{ item.description }}</p>
              </v-card-text>
              <v-card-text>
                <v-avatar
                  size="30"
                  class="ma-1"
                  v-for="(s, i) in slaves"
                  :key="i"
                >
                  <v-img :src="s.masterAvatar"></v-img>
                </v-avatar>
              </v-card-text>
              <v-card-text>
                <v-chip
                  v-for="(s, i) in slaves"
                  :key="i"
                  small
                  class="ma-1"
                  color="orange"
                  dark
                  >{{ s.score }}</v-chip
                >
              </v-card-text>
            </v-card>
          </v-window-item>
        </v-window>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { slaves, places } from "@/api/mock";
export default {
  data: () => ({
    slaves: slaves,
    places: places,
    length: 6,
    window: 0,
  }),
};
</script>

<style>
</style>