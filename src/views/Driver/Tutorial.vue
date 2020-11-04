<template>
  <div>
    <!-- ###################### -->
    <!-- #### DESKTOP VIEW #### -->
    <!-- ###################### -->

    <!-- ##################### -->
    <!-- #### MOBILE VIEW #### -->
    <!-- ##################### -->
    <v-app-bar app class="d-sm-none" color="primaryblack">
      <v-spacer></v-spacer>
      <h2 justify="center" class="header-page-name">
        Introduction
      </h2>
      <v-spacer></v-spacer>
      <!-- <v-app-bar-nav-icon color="white"></v-app-bar-nav-icon> -->
      <app-hamburger-menu></app-hamburger-menu>
    </v-app-bar>

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
</style>
