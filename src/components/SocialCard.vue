<template>
  <v-card>
    <v-sheet class="d-flex justify-center" height="100" :color="color">
      <v-icon size="70" dark>{{ icon }}</v-icon>
    </v-sheet>
    <div>
      <v-row>
        <v-col class="d-flex justify-center">
          <div>
            <h3>876</h3>
            <h6>FRIEND</h6>
          </div>
        </v-col>
        <v-divider vertical class="my-2"></v-divider>
        <v-col class="d-flex justify-center">
          <div>
            <h3>876</h3>
            <h6>FRIEND</h6>
          </div>
        </v-col>
      </v-row>
    </div>
  </v-card>
</template>

<script>
export default {
  props: {
    color: String,
    icon: String,
    //   friends: Number,
    //   feeds: Number,
  },
  data: () => ({}),
};
</script>

<style>
</style>