<template>
  <div>
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
          My Profile
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
            src="../../assets/profile-desktop-active.png"
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
        Profile
      </h2>
      <v-spacer></v-spacer>
      <router-link to="/">
        <v-img alt="logout" src="../../assets/logout-icon.png" max-width="" />
      </router-link>
    </v-app-bar>

    <div class="d-sm-none">
      <v-img
        alt="profile-picture"
        src="../../assets/profile-picture.png"
        max-width=""
      />

      <h2>Jane Doe</h2>
      <p>San Francisco, CA</p>
      <v-img alt="logout" src="../../assets/gear-icon.png" max-width="20" />

      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut ero labore et dolore magna aliqua.
      </p>
      <v-img alt="logout" src="../../assets/location-icon.png" max-width="16" />

      <p>My Location</p>

      <v-img alt="logout" src="../../assets/map-small.png" max-width="80vw" />
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
        <v-img src="../../assets/explore-inactive.png" min-width="35" />
      </router-link>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <router-link to="/userprofile">
        <v-img src="../../assets/profile-active.png" min-width="35" />
      </router-link>
      <v-spacer></v-spacer>
    </v-footer>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
