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
          class="header-page-name justify-self-center d-md-none alfa-slab-one"
        >
          Statistic
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
        <h3 class="alfa-slab-one">Statistic</h3>
      </v-toolbar>
      <v-container>
        <v-row>
          <v-col cols="12">
            <v-card color="">
              <div class="d-flex flex-no-wrap justify-space-between">
                <v-progress-circular
                  :rotate="360"
                  :size="120"
                  :width="15"
                  :value="70"
                  color="#F87502"
                >
                  <h3>2.8mil</h3>
                </v-progress-circular>
                <v-card-title class="">
                  Travel Dist.
                </v-card-title>
              </div>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <v-card color="#FCC99C">
              <div class="d-flex flex-no-wrap justify-space-between">
                <v-card-title class="">
                  Avg Travel.
                </v-card-title>
                <v-progress-circular
                  :rotate="360"
                  :size="120"
                  :width="15"
                  :value="40"
                  color="#F87502"
                >
                  <h3>3hrs</h3>
                </v-progress-circular>
              </div>
            </v-card>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="12">
            <v-card color="#F87502">
              <div class="d-flex flex-no-wrap justify-space-between">
                <v-progress-circular
                  :rotate="360"
                  :size="120"
                  :width="15"
                  :value="70"
                  color="#FCC99C"
                >
                  <h3>10 min</h3>
                </v-progress-circular>
                <v-card-title class="">
                  Response.
                </v-card-title>
              </div>
            </v-card>
          </v-col>
        </v-row>
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
export default {};
</script>

<style lang="scss" scoped>
.v-progress-circular {
  margin: 4rem 2rem 2rem 2rem;
}
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
