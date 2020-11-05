<template>
  <div>
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
    <!-- ###################### -->
    <!-- #### DESKTOP VIEW #### -->
    <!-- ###################### -->
    <v-app-bar app class="d-sm-none" color="primaryblack">
      <v-spacer></v-spacer>

      <h2 justify="center" class="header-page-name">
        Emergency
      </h2>
      <v-spacer></v-spacer>

      <!-- <v-app-bar-nav-icon color="white"></v-app-bar-nav-icon> -->
      <app-hamburger-menu></app-hamburger-menu>
    </v-app-bar>
    <v-container class="d-none d-sm-flex width-display background-desktop">
      <v-card class="cardContainer" max-width="50%" height="780">
        <v-toolbar class="primaryblack">
          <v-spacer></v-spacer>
          <h2 justify="center" class="header-page-name">
            Introduction
          </h2>
          <v-spacer></v-spacer>
        </v-toolbar>
        <v-row>
          <v-col cols="12">
            <v-card
              class="tutortial-video rounded-0"
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
                class="desktopPlayBtn"
                alt="desktopPlayBtn"
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
            <div class="desktopText d-flex justify-center">
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
            <v-card-actions class="d-flex flex-column">
              <router-link to="/faq" class="desktopHelpBtn">
                <v-btn
                  class="desktopHelpBtn justify-start pa-3 info"
                  depressed
                  elevation="2"
                  large
                  outlined
                  color="primaryblack"
                >
                  <v-icon class="helpIcon pa-2">mdi-help-circle</v-icon>Help
                  <p class="desktopBtnParagraph">Questions?</p></v-btn
                >
              </router-link>
              <router-link to="/statistic" class="desktopSkipBtn">
                <v-btn
                  class="desktopSkipBtn pa-3"
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
        <v-row>
          <v-col> </v-col>
        </v-row>
      </v-card>
    </v-container>
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

    <v-container class="d-sm-none">
      <v-row>
        <v-col cols="12">
          <v-card
            class="tutortial-video rounded-0"
            max-width="100%"
            height="100%"
            outlined
          >
            <v-carousel :show-arrows="false">
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
          <div class="introductionSubtext d-flex justify-center">
            <p>
              Check out any of our informative videos to get an introduction to
              the basics! Take a look at our F.A.Q below if you have any
              questions.
            </p>
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-card-actions class="d-flex flex-column">
            <router-link to="/faq" class="helpBtn">
              <v-btn
                class="helpBtn justify-start pa-3 info"
                depressed
                elevation="2"
                large
                outlined
                color="primaryblack"
              >
                <v-icon class="helpIcon pa-2">mdi-help-circle</v-icon>Help
                <p class="btnParagraph">Questions?</p></v-btn
              >
            </router-link>
          </v-card-actions>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-footer min-height="60px" color="primaryblack" absolute>
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
              <v-img src="../../assets/key-inactive.png" min-width="35" />
            </router-link>
            <v-spacer></v-spacer>
          </v-footer>
        </v-col>
      </v-row>
    </v-container>
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
.playBtn {
  width: 20%;
  position: absolute;
  top: 37%;
  left: 40%;
}

.helpBtn {
  width: 100%;
  margin-bottom: 5%;
  text-decoration: none;
}

.introductionSubtext {
  margin-bottom: -8%;
}

.btnParagraph {
  position: absolute;
  left: 65%;
  color: #f9f9f9;
}
.width-display {
  min-width: 100%;
  padding: 0px;
}

.cardContainer {
  position: absolute;
  left: 25%;
  top: 2%;
}
.background-desktop {
  background-image: url(../../assets/desktop-background-2.png);
  background-size: auto 126%;
  height: 90vh;
  background-position: center;
}

.desktopHelpBtn {
  width: 50%;
  text-decoration: none;
  position: absolute;
  right: 10%;
}

.desktopBtnParagraph {
  position: absolute;
  left: 50%;
  color: #f9f9f9;
}

.carousel {
  margin-top: -1.4%;
}

.desktopPlayBtn {
  width: 20%;
  position: absolute;
  top: 31%;
  left: 39%;
}

.desktopSkipBtn {
  text-decoration: none;
  position: absolute;
  width: 50%;
  left: 10%;
}

.headerIcon {
  position: absolute;
  left: 4%;
}
</style>
