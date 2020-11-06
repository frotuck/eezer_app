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
        <v-spacer></v-spacer>
        <v-spacer></v-spacer>
        <v-spacer></v-spacer>
        <v-spacer></v-spacer>

        <v-spacer></v-spacer>
        <router-link to="/position">
          <v-img
            style="margin-bottom: -26px"
            alt="logout"
            src="../../assets/map-desktop-inactive.png"
            max-width="120px"
          />
        </router-link>
        <router-link to="/profile">
          <v-img
            style="margin-bottom: -26px"
            alt="logout"
            src="../../assets/profile-desktop-inactive.png"
            max-width="120px"
          />
        </router-link>
        <router-link to="/emergency">
          <v-img
            style="margin-bottom: -26px"
            alt="logout"
            src="../../assets/emergency-desktop-inactive.png"
            max-width="120px"
          />
        </router-link>
        <v-spacer></v-spacer>

        <app-hamburger-menu style="margin-right: -40px"></app-hamburger-menu>
      </v-app-bar>
    </div>
    <v-footer
      min-height="40px"
      color="#202020"
      absolute
      class="d-none d-sm-flex"
    >
    </v-footer>

    <!-- ##################### -->
    <!-- #### MOBILE VIEW #### -->
    <!-- ##################### -->
    <v-app-bar app class="d-sm-none" color="primaryblack">
      <v-spacer></v-spacer>

      <h2 justify="center" class="header-page-name">
        Quarantine Pass
      </h2>
      <v-spacer></v-spacer>

      <!-- <v-app-bar-nav-icon color="white"></v-app-bar-nav-icon> -->
      <app-hamburger-menu></app-hamburger-menu>
    </v-app-bar>
    <v-container class="d-flex flex-column">
      <v-img
        class="quarantinePass"
        alt="quarantine-pass"
        src="../../assets/quarantine-image.svg"
        max-width="100%"
      />
      <v-card class="accent passCard">
        <h6>Pass ID</h6>
        <v-icon class="editPencil">mdi-lead-pencil</v-icon>
        <p class="passNum">XXXX-XXXX-XXXX-1908</p>
        <p></p
      ></v-card>
    </v-container>
    <v-footer
      min-height="60px"
      color="primaryblack"
      absolute
      class="font-weight-medium d-sm-none"
    >
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <router-link to="/emergency" class="icon-footer">
        <v-img src="../../assets/alert-inactive.png" min-width="35" />
      </router-link>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <router-link to="/position">
        <v-img src="../../assets/explore-inactive.png" min-width="35" />
      </router-link>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <router-link to="/quarantine-pass">
        <v-img src="../../assets/key-active.png" min-width="35" />
      </router-link>
      <v-spacer></v-spacer>
    </v-footer>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.quarantinePass {
  margin-top: 10%;
}

.passCard {
  width: 80%;
  height: 10%;
  margin-left: 10%;
  margin-top: 15%;
}

.editPencil {
  position: absolute;
  right: 5%;
  top: 10%;
  color: #f87502;
}

h6 {
  margin-top: 4%;
  margin-left: 5%;
}

.passNum {
  margin-left: 5%;
  margin-top: 4%;
}
</style>
