<template>
  <div id="desktop-background">
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
            src="../../assets/profile-desktop-active.png"
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

    <v-card class="box-shadow-none size">
      <v-toolbar
        class="primaryblack text-center d-none d-md-flex justify-center"
        dark
      >
        <h3>My profile</h3>
      </v-toolbar>
      <v-container class="boxshadow pa-0">
        <v-img src="@/assets/profile-picture.png"></v-img>
      </v-container>
      <v-container class="margin-2">
        <h3>John Doe</h3>
        <h6>San Francisco, CA</h6>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut ero labore et dolore magna aliqua.
        </p>
      </v-container>
      <v-container class="margin-bot responsive">
        <v-switch
          v-model="switch1"
          inset
          :label="`${checkTime()}`"
          class="margin-left"
        ></v-switch>
        <app-calendar-lightmode></app-calendar-lightmode>
      </v-container>
    </v-card>
    <v-app-bar color="primaryblack" bottom></v-app-bar>
    <!-- ##################### -->
    <!-- #### MOBILE VIEW #### -->
    <!-- ##################### -->
    <v-app-bar app class="d-sm-none" color="primaryblack">
      <v-spacer></v-spacer>

      <h2 justify="center" class="header-page-name">
        Profile
      </h2>
      <v-spacer></v-spacer>

      <!-- <v-app-bar-nav-icon color="white"></v-app-bar-nav-icon> -->
      <app-hamburger-menu></app-hamburger-menu>
    </v-app-bar>
  </div>
</template>
<script>
export default {
  name: 'Profile',
  data() {
    return {
      switch1: true,
    };
  },
  methods: {
    checkTime() {
      return this.switch1 ? 'AM' : 'PM';
    },
  },
};
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

.margin-2 {
  margin: 2%;
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
    background-image: url(../../assets/desktop-background-2.png);
    background-size: auto 126%;
    height: auto;
    width: 100vw;
    background-position: center;
    padding-top: 5%;
  }
}

@media screen and (min-width: 1440px) {
  .size {
    max-width: 40vw;
    min-height: 80vh;
  }

  .responsive {
    padding-bottom: 10%;
  }
}
</style>
