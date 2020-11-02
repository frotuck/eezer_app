<template>
  <v-app>
    <v-app-bar
		class="d-none d-sm-flex"
      app
      color="#ffff"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Eezerlogo"
          class=""
          contain
          src="../src/assets/eezerlogo.svg"
          transition="scale-transition"
          width="58"
        />
      </div>
    </v-app-bar>
    <v-main >
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
<style lang="scss" >
body {
	width: 100%;
}
</style>