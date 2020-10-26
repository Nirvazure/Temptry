<template>
  <v-container>
    <v-row align="center" justify="center">
      <v-col cols="5">
        <h2>Contract</h2>
        <v-card class="pa-4" height="700" flat>
          <v-text-field
            hint="This field uses counter prop"
            label="Regular"
            outlined
          ></v-text-field>
        </v-card>
      </v-col>
      <v-divider vertical></v-divider>
      <v-col cols="2" class="ml-8">
        <v-card height="700" flat>
          <h3>Members</h3>
          <v-avatar size="40" class="ma-2">
            <v-img
              src="https://s3.amazonaws.com/uifaces/faces/twitter/prheemo/128.jpg"
            ></v-img>
          </v-avatar>
          <v-avatar size="40" class="ma-2">
            <v-img
              src="https://s3.amazonaws.com/uifaces/faces/twitter/el_fuertisimo/128.jpg"
            ></v-img>
          </v-avatar>
          <v-avatar size="40" class="ma-2">
            <v-img
              src="https://s3.amazonaws.com/uifaces/faces/twitter/_dwite_/128.jpg"
            ></v-img>
          </v-avatar>
          <v-divider></v-divider>
          <h3 class="my-2">Progress</h3>
          <p class="body">
            dsadsahdjksahdkjsahdkjsahdkjhsadkjhsakjhfcskjhdfkjsabgkvcujsagiuywqiuehxzgvas
          </p>
          <v-divider></v-divider>
          <h3 class="my-2">Progress</h3>
          <v-chip class="ma-2">sdads</v-chip>
          <v-chip class="ma-2">sdads</v-chip>
          <v-chip class="ma-2">sdads</v-chip>
          <v-divider></v-divider>
          <h3 class="my-2">Progress</h3>
          <v-progress-linear
            value="70"
            height="10"
            class="ma-2"
          ></v-progress-linear>
          <v-progress-linear
            value="70"
            height="10"
            color="indigo"
            class="ma-2"
          ></v-progress-linear>
          <v-progress-linear
            value="70"
            color="teal"
            height="10"
            class="ma-2"
          ></v-progress-linear>
          <v-divider></v-divider>
          <v-divider></v-divider>
          <h3 class="my-2">Calendar</h3>
          <div>
            <v-calendar></v-calendar>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {};
</script>

<style>
</style>