<template>
  <v-container>
    <v-stepper v-model="step">
      <v-stepper-header>
        <v-stepper-step step="1" :complete="step > 1">
          Choose Plans
        </v-stepper-step>
        <v-divider></v-divider>
        <v-stepper-step step="2" :complete="step > 2">
          Comfirm Items
        </v-stepper-step>
        <v-divider></v-divider>
        <v-stepper-step step="2" :complete="step > 2">
          Admit Master
        </v-stepper-step>
      </v-stepper-header>
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
