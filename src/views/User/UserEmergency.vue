<template>
  <div>
    <!-- ###################### -->
    <!-- #### DESKTOP VIEW #### -->
    <!-- ###################### -->
    <v-app-bar app class=".d-none .d-sm-flex" color="#202020">
      <v-img
        class="d-none d-sm-flex header-icon"
        alt="Eezerlogo"
        src="../../assets/eezer-logo.png"
        max-width="55"
      />
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <h2 justify="center" style="color" class="header-page-name">
        Emergency
      </h2>
      <v-spacer></v-spacer>
      <router-link to="/user">
        <v-img
          style="margin-bottom: -26px"
          alt="logout"
          src="../../assets/map-desktop-inactive.png"
          max-width="120px"
        />
      </router-link>
      <router-link to="/userprofile">
        <v-img
          style="margin-bottom: -26px"
          alt="logout"
          src="../../assets/profile-desktop-inactive.png"
          max-width="120px"
        />
      </router-link>
      <router-link to="/useremergency">
        <v-img
          style="margin-bottom: -26px"
          alt="logout"
          src="../../assets/emergency-desktop-active.png"
          max-width="120px"
        />
      </router-link>
      <router-link to="/">
        <v-img
          style="margin-bottom: -26px; margin-left: 10px;"
          alt="logout"
          src="../../assets/logout-icon.png"
          max-width="30"
        />
      </router-link>
      <h4 style=" margin-bottom: -26px; color: white">
        Logout
      </h4>
    </v-app-bar>

    <v-footer
      min-height="40px"
      color="#202020"
      absolute
      class=".d-none .d-sm-flex"
    >
    </v-footer>
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
    <h2 class="d-sm-none">What to do</h2>
    <h4 class="d-sm-none">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut ero labore et dolore magna aliqua. Lorem ipsum dolor
      sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
      ut ero labore et dolore magna aliqua. Lorem ipsum dolor sit amet,
      consectetur adipisicing elit, sed do eiusmod tempor incididunt ut ero
      labore et dolore magna aliqua.
    </h4>
    <v-img
      class="d-sm-none"
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
