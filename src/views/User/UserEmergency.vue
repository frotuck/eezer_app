<template>
  <div desktop-background>
    <!-- ###################### -->
    <!-- #### DESKTOP VIEW #### -->
    <!-- ###################### -->
    <div class="d-none d-sm-flex">
      <v-app-bar app color="#202020">
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
    </div>
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

<style lang="scss" scoped>
.boxshadow {
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.158);
}

.margin-bot {
  margin-bottom: 15%;
}

.margin-left {
  margin-left: 2%;
}

@media screen and (max-width: 768px) {
  .box-shadow-none {
    box-shadow: none !important;
  }
}

@media screen and (min-width: 768px) {
  .responsive {
    max-width: 80%;
    max-height: 80%;
  }
}

@media screen and (min-width: 1024px) {
  .size {
    max-width: 40vw;
    min-height: 80vh;
    margin: 0 auto;
    margin-bottom: 5%;
  }

  .responsive {
    max-width: 90%;
    max-height: 90%;
    padding-bottom: 5%;
  }

  #desktop-background {
    background-image: url(../../assets/desktop-background-1.png);
    background-size: auto 126%;
    height: 100%;
    width: 100vw;
    background-position: center;
    padding-top: 2%;
  }
}
</style>
