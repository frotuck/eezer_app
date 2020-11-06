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
            src="../../assets/emergency-desktop-active.png"
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
        First Aid
      </h2>
      <v-spacer></v-spacer>

      <!-- <v-app-bar-nav-icon color="white"></v-app-bar-nav-icon> -->
      <app-hamburger-menu></app-hamburger-menu>
    </v-app-bar>

    <v-container class="d-none d-sm-flex width-display background-desktop">
      <v-card class="cardContainer" max-width="50%" height="920">
        <v-toolbar class="primaryblack">
          <v-spacer></v-spacer>
          <h2 justify="center" class="header-page-name">
            First Aid Guide
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
            <div class="d-flex justify-center firstAidTitle">
              <h3>What to do</h3>
            </div>
            <div class="desktopText d-flex ma-3">
              <p class="instructionsText">
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
              <router-link to="/emergency" class="desktopEmergencyBtn">
                <v-btn
                  class="desktopEmergencyBtn justify-start pa-3"
                  depressed
                  elevation="2"
                  large
                  color="#FC6F6F"
                >
                  <v-icon class="helpIcon pa-2">mdi-help-circle</v-icon>
                  <p class="desktopBtnParagraph">
                    Emergency Help
                  </p></v-btn
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
          <div class="d-flex justify-center instructionsTitle">
            <h3>What to do?</h3>
          </div>
          <div class="firstAidSubtext d-flex justify-center">
            <p>
              CPR: Call 911 or ask someone else to. Lay the person on their back
              and open their airway. Check for breathing. If they are not
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
            <router-link to="/faq" class="emergencyBtn">
              <v-btn
                class="emergencyBtn justify-start pa-3"
                depressed
                elevation="2"
                large
                color="#FC6F6F"
              >
                <v-icon class="helpIcon pa-2">mdi-help-circle</v-icon>
                <p class="btnParagraph">Emergency help</p></v-btn
              >
            </router-link>
          </v-card-actions>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-footer
            min-height="60px"
            color="primaryblack"
            absolute
            class="font-weight-medium d-sm-none"
          >
            <v-spacer></v-spacer>
            <v-spacer></v-spacer>
            <router-link to="/emergency" class="icon-footer">
              <v-img src="../../assets/alert-active.png" min-width="35" />
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
}

.firstAidSubtext {
  margin-bottom: -8%;
  margin-left: 3%;
}

.btnParagraph {
  position: absolute;
  left: 20%;
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
  background-size: auto 130%;
  height: 120vh;
  background-position: center;
}

.desktopEmergencyBtn {
  width: 80%;
  text-decoration: none;
  position: absolute;
  right: 10%;
}

@media screen and (max-width: 1024px) {
  .desktopBtnParagraph {
    margin-left: -20%;
  }
}

.desktopBtnParagraph {
  position: absolute;
  left: 40%;
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

.headerIcon {
  position: absolute;
  left: 4%;
}

.instructionsText {
  font-size: 14px;
}
</style>
