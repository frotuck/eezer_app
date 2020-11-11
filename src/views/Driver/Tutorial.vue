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
          Introduction
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
        <h3 class="alfa-slab-one">Introduction</h3>
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
            <div class="d-flex justify-center introductionTitle">
              <h3>Introduction</h3>
            </div>
            <div class="introductionText d-flex justify-center">
              <p>
                Check out any of our informative videos to get an introduction
                to <br />
                the basics! Take a look at our F.A.Q below if you have any
                questions.
              </p>
            </div>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <v-card-actions height="" class="d-flex flex-column">
              <router-link to="/faq" class="helpBtn">
                <v-btn
                  class="helpBtn pa-3 info"
                  depressed
                  elevation="2"
                  large
                  outlined
                  color="primaryblack"
                >
                  <v-icon class="helpIcon pa-2">mdi-help-circle</v-icon
                  >Help</v-btn
                >
              </router-link>
              <router-link to="/statistic" class="skipBtn d-none d-md-flex">
                <v-btn
                  class="skipBtn pa-3"
                  depressed
                  elevation="2"
                  large
                  outlined
                  color="#202020"
                  >Skip</v-btn
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
  data() {
    return {
      items: [
        {
          src: require('../../assets/tutorial-image-1.svg'),
        },
        {
          src: require('../../assets/tutorial-image-2.svg'),
        },
        {
          src: require('../../assets/tutorial-image-3.jpg'),
        },
        {
          src: require('../../assets/tutorial-image-4.jpg'),
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
    min-height: 110vh;
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

  .skipBtn {
    text-decoration: none;
    position: absolute;
    width: 50%;
    left: 10%;
    bottom: 7.4%;
  }
}

@media screen and (min-width: 1440px) {
  .skipBtn {
    text-decoration: none;
    position: absolute;
    width: 50%;
    left: 10%;
    bottom: 8.5%;
  }
}

@media screen and (min-width: 1900px) {
  .skipBtn {
    text-decoration: none;
    position: absolute;
    width: 50%;
    left: 10%;
    bottom: 9.8%;
  }
}

.playBtn {
  width: 20%;
  position: absolute;
  top: 37%;
  left: 40%;
}
.helpBtn {
  margin-bottom: 5%;
  text-decoration: none;
}

.introductionText {
  margin-bottom: -8%;
}
</style>
