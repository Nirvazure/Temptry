<template>
  <v-card max-width="400" rounded>
    <v-list-item>
      <v-list-item-avatar>
        <v-img :src="cardInfo.taskSrc.avatar"></v-img>
      </v-list-item-avatar>
      <v-list-item-content>
        <v-list-item-title
          >{{ cardInfo.taskName
          }}<v-chip class="mx-2" small color="warning" label>{{
            cardInfo.taskStatus
          }}</v-chip>
        </v-list-item-title>
        <v-list-item-subtitle>{{ cardInfo.taskDesc }}</v-list-item-subtitle>
      </v-list-item-content>
      <v-list-item-action>
        <v-btn small color="blue-grey" dark rounded> Accept </v-btn>
      </v-list-item-action>
    </v-list-item>
    <v-divider></v-divider>
    <v-card-text>{{ cardInfo.taskContent }}</v-card-text>
    <v-card-actions class="d-flex" justify="space-between"> </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    cardInfo: {
      taskName: String,
      taskDesc: String,
      taskSrc: {
        avatar: String,
        name: String,
      },
      taskContent: String,
      taskStatus: String,
    },
  },
};
</script>

<style>
</style>