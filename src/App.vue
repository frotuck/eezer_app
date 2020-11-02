<template>
  <v-app>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data: () => ({
    //
  }),
};
</script>
<style lang="scss">
.welcome-style {
  color: black;
  border-bottom: 3px solid #f87502;
}
.welcome-style {
  color: black;
}
.header-page-name {
  color: white;
}
</style>
