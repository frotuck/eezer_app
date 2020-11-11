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
          First Aid Guide
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
                src="../../assets/emergency-desktop-active.png"
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
        <h3 class="alfa-slab-one">First Aid Guide</h3>
      </v-toolbar>
      <v-container class="d-flex flex-column">
        <v-row>
          <v-col cols="12">
            <v-card
              class="tutorial-video rounded-0"
              max-width="100%"
              height="100%"
              outlined
            >
              <v-carousel class="carousel" :show-arrows="false">
                <v-carousel-item
                  class="images"
                  v-for="(item, i) in items"
                  :key="i"
                  :src="item.src"
                ></v-carousel-item>
              </v-carousel>
              <v-img
                class="playBtn"
                alt="playBtn"
                src="../../assets/play-button.svg"
                min-width="80"
              />
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <div class="d-flex justify-center instructionsTitle">
              <h3>What to do?</h3>
            </div>
            <div class="firstAidSubtext d-flex justify-center">
              <p>
                CPR: Call 911 or ask someone else to. Lay the person on their
                back and open their airway. Check for breathing. If they are not
                breathing, start CPR. Perform 30 chest compressions. Perform two
                rescue breaths. Repeat until an ambulance or automated external
                defibrillator (AED) arrives.
              </p>
            </div>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <v-card-actions class="d-flex flex-column">
              <router-link to="/emergency">
                <v-btn
                  class="emergencyBtn justify-start pa-3"
                  depressed
                  elevation="2"
                  large
                  color="#FC6F6F"
                >
                  <v-icon class="helpIcon pa-2">mdi-help-circle</v-icon>
                  <p class="btnParagraph">
                    Emergency Help
                  </p></v-btn
                >
              </router-link>
            </v-card-actions>
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
  data() {
    return {
      items: [
        {
          src: require('../../assets/first-aid-training-desktop.png'),
        },
        {
          src: require('../../assets/first-aid-training-desktop2.png'),
        },
        {
          src: require('../../assets/first-aid-training-desktop3.png'),
        },
        {
          src: require('../../assets/first-aid-training-desktop4.png'),
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@media screen and (min-width: 1263px) {
  .margin-right-fix {
    margin-right: 7%;
  }
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

@media screen and (min-width: 574px) {
  .helpBtn {
    margin-top: 5%;
  }
}

@media screen and (min-width: 1024px) {
  .size {
    max-width: 40vw;
    min-height: 90vh;
    margin: 0 auto;
    margin-bottom: 5%;
  }
  #desktop-background {
    background-color: #888c8f;
  }

  #desktop-background {
    background-color: #888c8f;
    background-size: auto 126%;
    height: 100%;
    width: 100vw;
    padding-top: 2%;
  }
  .helpBtn {
    width: 50%;
    text-decoration: none;
    position: absolute;
    bottom: 4%;
    right: 10%;
  }
}

@media screen and (min-width: 1440px) {
}

.playBtn {
  width: 20%;
  position: absolute;
  top: 37%;
  left: 40%;
}
.emergencyBtn {
  width: 100%;
  margin-bottom: 5%;
  text-decoration: none;
  margin-bottom: 20%;
}

.btnParagraph {
  color: #f9f9f9;
  justify-content: center;
  margin-top: 8%;
}
</style>
