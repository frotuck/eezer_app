<template>
  <v-app>
    <v-app-bar
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
				<div>	<h1 justify="center" class="welcome-style" style=" color border-bottom:3px solid #F87502">welcome</h1></div>
				
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
.welcome-style {
	color: black;
		border-bottom:3px solid #F87502;

}
</style>