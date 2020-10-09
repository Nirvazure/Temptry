<template>
  <v-container>
    <v-stepper v-model="step">
      <v-stepper-header>
        <v-stepper-step step="1" :complete="step > 1" editable>
          Choose Plans
        </v-stepper-step>
        <v-divider></v-divider>
        <v-stepper-step step="2" :complete="step > 2" editable>
          Comfirm Items
        </v-stepper-step>
        <v-divider></v-divider>
        <v-stepper-step step="3" :complete="step > 3" editable>
          Admit Master
        </v-stepper-step>
      </v-stepper-header>
      <v-stepper-items>
        <v-stepper-content step="1">
          <v-card class="mb-12" color="grey lighten-1" height="200px"></v-card>
          <v-btn color="primary" @click="step = 2"> Continue </v-btn>
        </v-stepper-content>
        <v-stepper-content step="2">
          <v-card class="mb-12" color="grey lighten-1" height="200px"></v-card>
          <v-btn color="primary" @click="step = 3"> Continue </v-btn>
        </v-stepper-content>
        <v-stepper-content step="3">
          <v-card class="mb-12" color="grey lighten-1" height="200px"></v-card>
          <v-btn color="primary" @click="step = 1"> Continue </v-btn>
        </v-stepper-content>
      </v-stepper-items>
    </v-stepper>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    step: 1,
  }),
};
</script>
