<template>
  <v-app>
    <v-navigation-drawer app v-model="mine" dark>
      <v-app-bar light> YQYMONs </v-app-bar>
      <v-list>
        <v-list-item-group>
          <v-subheader>
            <h3>Theme</h3>
          </v-subheader>
          <v-list-item
            v-for="(v, i) in menus"
            :key="i"
            @click="$router.push(v.text)"
          >
            <v-list-item-icon>
              <v-icon v-text="v.icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>
                {{ v.text }}<flag class="ml-2" iso="it"
              /></v-list-item-title>
            </v-list-item-content>
            <v-list-item-action>
              <v-chip label color="#63c2de" small light>New</v-chip>
            </v-list-item-action>
          </v-list-item>
        </v-list-item-group>
      </v-list>
      <v-list-item-group>
        <v-subheader>
          <h3>People</h3>
        </v-subheader>
      </v-list-item-group>
      <v-list-item-group>
        <v-subheader>
          <h3>Tags</h3>
        </v-subheader>
        <div>
          <v-chip class="ma-1" v-for="(v, i) in chips" :key="i" :size="v.num">{{
            v.text
          }}</v-chip>
        </div>
      </v-list-item-group>
      <template v-slot:append>
        <div class="pa-2">
          <v-btn block> Logout </v-btn>
        </div>
      </template></v-navigation-drawer
    >
    <v-content>
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
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    mine: false,

    chips: [
      { text: "top", num: 3 },
      { text: "jug", num: 12 },
      { text: "mid", num: 43 },
      { text: "bot", num: 2 },
      { text: "sup", num: 16 },
    ],

    menus: [
      { text: "Dashboard", icon: "mdi-video" },
      { text: "train", icon: "mdi-wechat" },
      { text: "pay", icon: "mdi-wechat" },
      { text: "tasks", icon: "mdi-wechat" },
    ],
  }),
};
</script>