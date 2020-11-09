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
            src="../../assets/map-desktop-active.png"
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
      <v-card
    class="mx-auto mt-sm-5 mt-8"
    max-width="800"
  >
        <v-toolbar
        class="primaryblack text-center d-none d-md-flex justify-center"
        dark
      >
        <h3>Route</h3>
      </v-toolbar>
    <v-img
      class="white--text align-end"
      height="500px"
      src="../../assets/map-desktop-large.png"
    >
    </v-img>
    <div class="d-flex">
      <div>
    <v-card-subtitle class="pb-0" color="">
      To Sesame Street
    </v-card-subtitle>
    <div class="d-flex">
      <div>
        <v-card-subtitle class="pb-0">
      Time
    </v-card-subtitle>
    <v-card-text>25min</v-card-text>
    </div>
    <div>
            <v-card-subtitle class="pb-0">
      Distance
    </v-card-subtitle>
    <v-card-text>20km</v-card-text>
    </div>
    
    </div>
    </div>
    <div class="d-flex flex-column">
    <v-card-subtitle class="pb-0">
      Patient Info
    </v-card-subtitle>
    <v-card-actions>

     <app-dialog-patient></app-dialog-patient>
    </v-card-actions>
    </div>
    
    <div>
    <v-card-subtitle class="pb-0">
      Call Patient
    </v-card-subtitle>
    <v-card-actions>

      <v-btn class="ml-4" fab
      >
     <v-icon large>mdi-phone</v-icon>
      </v-btn>
    </v-card-actions>
    </div>
    </div>

<div class="ml-10">
    <v-card-actions class="ml-16">

      <v-btn
        class="secondary ml-16 px-5"
        text
      >
        Drive Complete
      </v-btn>
    </v-card-actions>
    </div>
  </v-card>
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
        Position
      </h2>
      <v-spacer></v-spacer>

      <!-- <v-app-bar-nav-icon color="white"></v-app-bar-nav-icon> -->
      <app-hamburger-menu></app-hamburger-menu>
    </v-app-bar>
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
        <v-img src="../../assets/explore-active.png" min-width="35" />
      </router-link>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <router-link to="/quarantine-pass">
        <v-img src="../../assets/key-inactive.png" min-width="35" />
      </router-link>
      <v-spacer></v-spacer>
    </v-footer>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
