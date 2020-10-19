<template>
  <v-app>
    <v-navigation-drawer app v-model="mine">
      <v-list>
        <v-list-item-group>
          <v-list-item
            v-for="(v, i) in menus"
            :key="i"
            @click="$router.push(v)"
          >
            <v-list-item-icon>
              <v-icon v-text="v.icon"></v-icon>
            </v-list-item-icon>
            {{ v.text }}
          </v-list-item>
        </v-list-item-group>
      </v-list>
      <template v-slot:append>
        <div class="pa-2">
          <v-btn block> Logout </v-btn>
        </div>
      </template></v-navigation-drawer
    >
    <v-app-bar app>
      <v-app-bar-nav-icon @click="mine = !mine"></v-app-bar-nav-icon>
      <v-toolbar-title>Page title</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-menu left bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item v-for="n in 5" :key="n" @click="() => {}">
            <v-list-item-title>Option {{ n }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>

    <v-content>
      <router-view />
    </v-content>
    <v-sheet
      id="scrolling-techniques-3"
      class="overflow-y-auto"
      max-height="600"
    >
      <v-container style="height: 1000px"></v-container>
    </v-sheet>
    <div id="nav"></div>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    mine: true,
    menus: [
      { text: "Dashboard", icon: "mdi-video" },
      { text: "train", icon: "mdi-wechat" },
      { text: "pay", icon: "mdi-wechat" },
      { text: "tasks", icon: "mdi-wechat" },
    ],
  }),
};
</script>