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
        Driver ETA
      </h2>
      <v-spacer></v-spacer>
      <router-link to="/user">
        <v-img
          style="margin-bottom: -26px"
          alt="logout"
          src="../../assets/map-desktop-active.png"
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
          src="../../assets/emergency-desktop-inactive.png"
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
        Driver ETA
      </h2>
      <v-spacer></v-spacer>
      <router-link to="/">
        <v-img alt="logout" src="../../assets/logout-icon.png" max-width="35" />
      </router-link>
    </v-app-bar>

    <v-img class="d-sm-none" src="../../assets/map-mobile-large.png"></v-img>
    <div class="d-sm-none">
      <div>
        <h4>To Sesame Street</h4>

        <div>
          <p>Time</p>
          <h4>25 min</h4>
        </div>
        <div>
          <p>Distance</p>
          <h4>9. mi</h4>
        </div>
      </div>
      <v-img src="../../assets/information-icon.png" max-width="35" />
    </div>

    <v-footer
      min-height="60px"
      color="primaryblack"
      absolute
      class="font-weight-medium d-sm-none"
    >
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <router-link to="/useremergency" class="icon-footer">
        <v-img src="../../assets/alert-inactive.png" min-width="35" />
      </router-link>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <router-link to="/user">
        <v-img src="../../assets/explore-active.png" min-width="35" />
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
