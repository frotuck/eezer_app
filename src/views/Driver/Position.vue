<template>
  <div id="desktop-background">
    <!--   ##################### -->
    <!--  ###### HEADER ###### -->
    <!-- ################### -->
    <v-app-bar app color="primaryblack text-center pa-0">
      <v-container
        max-width="60%"
        height="100%"
        class="d-flex justify-space-around align-center pa-0 ma-0"
      >
        <h2
          justify="center"
          class="header-page-name justify-self-center d-md-none"
        >
          Position
        </h2>
        <v-container
          max-width="60%"
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
            max-width="80%"
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
                src="../../assets/profile-desktop-inactive.png"
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
        <h3>Route</h3>
      </v-toolbar>
      <v-container class="pa-0"> 
      <v-card
    class="mx-auto mt-sm-5 mt-8"
    max-width="1000"
  >
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
          <v-img src="../../assets/alert-inactive.png" min-width="35%" />
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
  
}
</script>
<style lang="scss" scoped>
.margin-icon-left {
  margin-left: 10%;
}

.margin-icon-right {
  margin-right: 10%;
}

@media screen and (max-width: 768px) {
  .box-shadow-none {
    box-shadow: none !important;
    border-radius: 0px;
  }
}

@media screen and (min-width: 1024px) {
  .size {
    max-width: 40vw;
    min-height: 80vh;
    margin: 0 auto;
    margin-bottom: 5%;
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
</style>