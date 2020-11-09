<template>
  <div id="desktop-background">
    <!--   ##################### -->
    <!--  ###### HEADER ###### -->
    <!-- ################### -->
    <v-app-bar app color="primaryblack text-center pa-0">
      <v-container
        width="100%"
        height="100%"
        class="d-flex justify-space-around align-center pa-0 ma-0"
      >
        <h2
          justify="center"
          class="header-page-name justify-self-center d-md-none"
        >
          My Profile
        </h2>
        <v-container
          width="100%"
          height="100%"
          class="d-none d-md-flex justify-space-around pa-0 ma-0"
        >
          <v-img
            class="d-flex header-icon"
            alt="Eezerlogo"
            style="margin-left: 5%;"
            src="../../assets/eezer-logo.png"
            max-width="55"
          />
          <v-container
            height="100%"
            class="d-flex justify-end align-end pa-0 margin-right-fix"
          >
            <router-link to="/position">
              <v-img
                style="margin-bottom: -4px;"
                alt="logout"
                src="../../assets/map-desktop-inactive.png"
                max-width="120px"
              />
            </router-link>
            <router-link to="/profile">
              <v-img
                style="margin-bottom: -4px;"
                alt="logout"
                src="../../assets/profile-desktop-active.png"
                max-width="120px"
              />
            </router-link>
            <router-link to="/emergency">
              <v-img
                style="margin-bottom: -4px;"
                alt="logout"
                src="../../assets/emergency-desktop-inactive.png"
                max-width="120px"
              />
            </router-link>
          </v-container>
        </v-container>
      </v-container>
      <app-hamburger-menu></app-hamburger-menu>
    </v-app-bar>
    <!--   ############################ -->
    <!--  ###### PAGE CONTENT ####### -->
    <!-- ########################## -->
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
      <v-container>
        <h3>John Doe</h3>
        <h6>San Francisco, CA</h6>
        <p>
          Drives completed: 12 <br />
          Manually updated drives: 5 <br />
          Account created: 2020-09-02 <br />
          Full name: John Johnothy Doe <br />
          Total drive time: 110h <br />
          Total miles driven: 140
        </p>
      </v-container>
      <v-container class="margin-bot responsive">
        <app-calendar-lightmode></app-calendar-lightmode>
      </v-container>
    </v-card>
    <!--   ##################### -->
    <!--  ###### FOOTER ###### -->
    <!-- ################### -->
    <v-footer color="primaryblack" absolute min-height="40px">
      <v-container
        class="font-weight-medium d-flex justify-space-between d-sm-none pa-0 ma-0"
      >
        <router-link to="/emergency" class="icon-footer margin-icon-left">
          <v-img src="../../assets/alert-active.png" min-width="35%" />
        </router-link>
        <router-link to="/position" class="icon-footer margin-icon">
          <v-img src="../../assets/explore-inactive.png" min-width="35%" />
        </router-link>
        <router-link
          to="/quarantine-pass"
          class="icon-footer margin-icon-right"
        >
          <v-img src="../../assets/key-inactive.png" min-width="35%" />
        </router-link>
      </v-container>
    </v-footer>
  </div>
</template>
<script>
export default {
  name: 'Profile',
  data() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
.margin-icon-left {
  margin-left: 10%;
}

.margin-icon-right {
  margin-right: 10%;
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
    height: 100%;
    width: 100vw;
    background-position: center;
    padding-top: 2%;
  }
}

@media screen and (min-width: 1263px) {
  .margin-right-fix {
    margin-right: 7%;
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
