<template>
  <div>
    <!-- ###################### -->
    <!-- #### DESKTOP VIEW #### -->
    <!-- ###################### -->

    <!-- ##################### -->
    <!-- #### MOBILE VIEW #### -->
    <!-- ##################### -->
    <v-app-bar app class="d-sm-none" color="primaryblack">
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>

      <h2 justify="center" style="color" class="header-page-name">
        Emergency
      </h2>
      <v-spacer></v-spacer>
      <router-link to="/">
        <v-img alt="logout" src="../../assets/logout-icon.png" max-width="35" />
      </router-link>
    </v-app-bar>
    <h2>What to do</h2>
    <h4>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut ero labore et dolore magna aliqua. Lorem ipsum dolor
      sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
      ut ero labore et dolore magna aliqua. Lorem ipsum dolor sit amet,
      consectetur adipisicing elit, sed do eiusmod tempor incididunt ut ero
      labore et dolore magna aliqua.
    </h4>
    <v-img
      alt="logout"
      src="../../assets/warning-mobile.png"
      max-width="80vw"
    />

    <v-footer
      min-height="60px"
      color="primaryblack"
      absolute
      class="font-weight-medium d-sm-none"
    >
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <router-link to="/useremergency" class="icon-footer">
        <v-img src="../../assets/alert-active.png" min-width="35" />
      </router-link>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <router-link to="/user">
        <v-img src="../../assets/explore-inactive.png" min-width="35" />
      </router-link>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <router-link to="/userprofile">
        <v-img src="../../assets/profile-inactive.png" min-width="35" />
      </router-link>
      <v-spacer></v-spacer>
    </v-footer>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
