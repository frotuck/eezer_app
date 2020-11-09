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
          F.A.Q
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
        <h4>Frequently Asked Questions</h4>
      </v-toolbar>
      <v-container
        class="d-flex flex-column align-center text-center"
        max-width="60vw"
      >
        <v-btn height="60px" depressed tile class="info white-text border">
          <div
            class="circle white d-flex flex-column justify-center align-center"
          >
            <v-icon color="primaryblack">mdi-text-to-speech</v-icon>
          </div>
          <h4 class="ma-2">Enable text to speech</h4>
        </v-btn>
        <div class="d-flex flex-column align-center margin-between flex-change">
          <h4 class="question">How to do this?</h4>
          <h5 class="answer">
            Scan the QR code to find information regarding the active Quarantine
            Pass. If failure to successfully scan the QR code, please manually
            fill in the information.
          </h5>
        </div>
        <div
          class="d-flex align-center flex-column margin-between flex-change"
          max-width="50vw"
        >
          <h4 class="question">How to do this?</h4>
          <h5 class="answer">
            Scan the QR code to find information regarding the active Quarantine
            Pass. If failure to successfully scan the QR code, please manually
            fill in the information.
          </h5>
        </div>
        <div
          class="d-flex align-center flex-column margin-between flex-change"
          max-width="50vw"
        >
          <h4 class="question">How to do this?</h4>
          <h5 class="answer">
            Scan the QR code to find information regarding the active Quarantine
            Pass. If failure to successfully scan the QR code, please manually
            fill in the information.
          </h5>
        </div>
        <div
          class="d-flex align-center flex-column margin-between flex-change"
          max-width="50vw"
        >
          <h4 class="question">How to do this?</h4>
          <h5 class="answer">
            Scan the QR code to find information regarding the active Quarantine
            Pass. If failure to successfully scan the QR code, please manually
            fill in the information.
          </h5>
        </div>
        <div
          class="d-flex align-center flex-column margin-between flex-change"
          max-width="50vw"
        >
          <h4 class="question">How to do this?</h4>
          <h5 class="answer">
            Scan the QR code to find information regarding the active Quarantine
            Pass. If failure to successfully scan the QR code, please manually
            fill in the information.
          </h5>
        </div>
        <div
          class="d-flex align-center flex-column margin-between flex-change"
          max-width="50vw"
        >
          <h4 class="question">How to do this?</h4>
          <h5 class="answer">
            Scan the QR code to find information regarding the active Quarantine
            Pass. If failure to successfully scan the QR code, please manually
            fill in the information.
          </h5>
        </div>
        <v-btn
          height="50px"
          max-width="95vw"
          depressed
          tile
          class="info white-text border margin-bottom"
        >
          <div
            class="circle white d-flex flex-column justify-center align-center"
          >
            <v-icon color="primaryblack">mdi-email</v-icon>
          </div>
          <h6 class="ma-2">Still got a question? E-mail us</h6>
        </v-btn>
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
.circle {
  border-radius: 50%;
  height: 40px;
  width: 40px;
}

.margin-icon-left {
  margin-left: 10%;
}

.margin-icon-right {
  margin-right: 10%;
}

.margin-between {
  margin-top: 5%;
  margin-bottom: 5%;
}

.margin-bottom {
  margin-bottom: 15%;
}

.answer {
  max-width: 80%;
}

.border {
  border: 1px solid #24b6f7 !important;
}

@media screen and (max-width: 768px) {
  .box-shadow-none {
    box-shadow: none !important;
    border-radius: 0px;
  }
}

@media screen and (min-width: 1024px) {
  .size {
    max-width: 60vw;
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

  .answer {
    max-width: 40%;
  }

  .question {
    max-width: 40%;
    margin-right: 10%;
  }

  .flex-change {
    flex-direction: row !important;
    justify-content: center;
    align-content: center;
    text-align: start;
  }
}

@media screen and (min-width: 1263px) {
  .margin-right-fix {
    margin-right: 7%;
  }
}
</style>
