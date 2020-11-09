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
          Profile
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
            <router-link to="/user">
              <v-img
                style="margin-bottom: -4px;"
                alt="map"
                src="../../assets/map-desktop-inactive.png"
                max-width="120px"
              />
            </router-link>
            <router-link to="/userprofile">
              <v-img
                style="margin-bottom: -4px;"
                alt="logout"
                src="../../assets/profile-desktop-active.png"
                max-width="120px"
              />
            </router-link>
            <router-link to="/useremergency">
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
      <router-link to="/">
        <v-img alt="logout" src="../../assets/logout-icon.png" max-width="30" />
      </router-link>
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
        <h3>J Doe</h3>
        <h6>San Francisco, CA</h6>
        <p>
          J i planned to give birth 4 of january 2021. She has no known illnes
          that could affect the transportation to a hospital.
        </p>
      </v-container>
      <v-container class="  d-flex flex-column 	margin-bot responsive">
        <div class="  d-flex flex-row align-left ">
          <v-img
            alt="logout"
            src="../../assets/location-icon.png"
            max-width="20px"
            max-height="23px"
          />

          <p>My Location</p>
        </div>

        <div class="  d-flex flex-column align-right ">
          <v-img alt="logout" src="../../assets/map-small.png" />
        </div>
      </v-container>
    </v-card>
    <!--   ##################### -->
    <!--  ###### FOOTER ###### -->
    <!-- ################### -->
    <v-footer color="primaryblack" absolute min-height="40px">
      <v-container
        class="font-weight-medium d-flex d-sm-none d-none d-sm-flex d-md-none justify-space-between pa-0 ma-0"
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
      </v-container>
    </v-footer>
  </div>
</template>
<script>
export default {
  name: 'UserProfile',
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

@media screen and (max-width: 768px) {
  .box-shadow-none {
    box-shadow: none !important;
  }
}

@media screen and (min-width: 0px) {
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
