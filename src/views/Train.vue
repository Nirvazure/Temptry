<template>
  <v-container>
    <v-card class="mx-auto" flat>
      <v-card-title>
        <h2 class="display-1">
          Toothbrush<v-chip color="orange" class="ma-3" dark>履行中</v-chip>
        </h2>
      </v-card-title>
      <v-card-text>
        Our company takes pride in making handmade brushes. Our toothbrushes are
        available in 4 different bristel types, from extra soft to hard.
      </v-card-text>
      <div class="d-flex flex-no-wrap justify-space-between">
        <div>
          <v-chip-group
            v-model="selection"
            active-class="deep-purple--text text--accent-4"
            mandatory
          >
            <v-chip>Extra Soft</v-chip>
            <v-chip>Soft</v-chip>
            <v-chip>Medium</v-chip>
            <v-chip>Hard</v-chip>
          </v-chip-group>

          <v-card-actions>
            <v-card-text>
              <v-avatar class='ma-2'>
                <v-img
                  src="https://s3.amazonaws.com/uifaces/faces/twitter/canapud/128.jpg"
                ></v-img>
              </v-avatar>
              <v-avatar class='ma-2'>
                <v-img
                  src=https://s3.amazonaws.com/uifaces/faces/twitter/jay_wilburn/128.jpg
                ></v-img>
              </v-avatar>
              <v-avatar class='ma-2'>
                <v-img
                  src=https://s3.amazonaws.com/uifaces/faces/twitter/ciaranr/128.jpg
                ></v-img>
              </v-avatar>
              <v-avatar class='ma-2'>
                <v-img
                  src=https://s3.amazonaws.com/uifaces/faces/twitter/markretzloff/128.jpg
                ></v-img>
              </v-avatar>
            </v-card-text>
          </v-card-actions>
        </div>
        <v-progress-circular
          class="ma-3"
          size="125"
          width="10"
          :value="70"
          color="green"
          >70%</v-progress-circular
        >
      </div>
      <v-divider class="mx-4"></v-divider>
      <v-tabs v-model="tab" align-with-title>
        <v-tabs-slider color="yellow"></v-tabs-slider>
        <v-tab v-for="item in items" :key="item">
          {{ item }}
        </v-tab>
      </v-tabs>

      <v-tabs-items v-model="tab">
        <v-tab-item key="web">
          <v-card flat>

          </v-card>
        </v-tab-item>
        <v-tab-item key="videos">
          <v-card flat>
            <v-card-text>vvvvv</v-card-text>
          </v-card>
        </v-tab-item>
      </v-tabs-items>
    </v-card>
  </v-container>
</template>
<script>
export default {
  data: () => ({
    tab: null,
    items: ["web", "shopping", "videos", "images", "news"],
  }),
};
</script>

<style>
</style>