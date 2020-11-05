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
        Statistic
      </h2>
      <v-spacer></v-spacer>

      <!-- <v-app-bar-nav-icon color="white"></v-app-bar-nav-icon> -->
      <app-hamburger-menu></app-hamburger-menu>
    </v-app-bar>

    <v-container class="d-sm-none">
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
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.v-progress-circular {
  margin: 4rem 2rem 2rem 2rem;
}
</style>
