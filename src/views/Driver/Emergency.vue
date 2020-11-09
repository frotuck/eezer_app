<template>
  <div id="desktop-background" class="info">
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
          Emergency
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
        <h3>Emergency</h3>
      </v-toolbar>
      <v-container class="d-flex flex-column align-center">
        <div
          class="d-none d-md-flex flex-column align-center justify-space-between text-size text-center"
        >
          <h4 class="border-bottom">
            EMERGENCY CONTACTS
          </h4>
          <p class="margin-top">
            The following contacts are for emergency situations only. Please
            only use in case of emergency. For mechanical support, call Customer
            Service (<b>+1234 56789</b>)
          </p>
        </div>
        <div class="d-flex flex-column align-center justify-center flex-change">
          <v-btn tile display="button" class="error white-text box">
            <div class="d-flex flex-column justify-center align-center box">
              <div
                class="circle white d-flex flex-column justify-center align-center push-down"
              >
                <v-icon color="primaryblack">mdi-phone</v-icon>
              </div>
              <h5>Emergency</h5>
              <h2>10177</h2>
            </div>
          </v-btn>
          <v-btn tile class="error white-text box">
            <div class="d-flex flex-column justify-center align-center box">
              <div
                class="circle white d-flex flex-column justify-center align-center push-down"
              >
                <v-icon color="primaryblack">mdi-phone</v-icon>
              </div>
              <h5>Customer Service</h5>
              <h2>+1234 56789</h2>
            </div>
          </v-btn>
        </div>
      </v-container>
      <v-container class="d-flex flex-column align-center bottom">
        <p class="ma-0 position-bottom">
          For Emergency First Aid Guide, click
          <span
            ><b><i>here</i></b></span
          >
        </p>
        <v-btn
          router-link
          to="/first-aid"
          tile
          class="error white-text box-rectangle border"
        >
          <div class="d-flex justify-space-around box-rectangle">
            <div
              class="circle white d-flex flex-column justify-center justify-self-start align-self-center ma-0"
            >
              <v-icon color="primaryblack">mdi-medical-bag</v-icon>
            </div>
            <h2 class="justify-self-center align-self-center">
              First Aid Guide
            </h2>
          </div>
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
export default {};
</script>

<style lang="scss" scoped>
.circle {
  border-radius: 50%;
  height: 40px;
  width: 40px;
}

.button-1 {
  display: flex !important;
  flex-direction: column !important;
  justify-items: center !important;
  align-items: center !important;
}

.bottom {
  margin-top: 20%;
}

.position-bottom {
  margin-bottom: -10%;
}

.push-down {
  margin-bottom: 5%;
}

.margin-top {
  margin-top: 2%;
}

.center {
  justify-self: center !important;
}

.border {
  border: 1px solid #984771 !important;
}

.margin-icon-left {
  margin-left: 10%;
}

.margin-icon-right {
  margin-right: 10%;
}

.white-text {
  color: white;
}

.box {
  min-width: 60vw;
  min-height: 20vh;
  margin: 2%;
}

.box-rectangle {
  min-width: 80vw;
  min-height: 10vh;
}

.border-bottom {
  border-bottom: 3px solid rgb(248, 117, 2);
}

@media screen and (max-width: 768px) {
  .box-shadow-none {
    box-shadow: none !important;
    border-radius: 0px;
  }
}

@media screen and (min-width: 768px) {
  .box {
    min-width: 30vw;
    min-height: 20vh;
    margin: 2%;
  }

  .position-bottom {
    margin-bottom: -20%;
  }

  .bottom {
    margin-top: 5%;
  }

  .box-rectangle {
    min-width: 50vw;
    min-height: 12vh;
  }
}

@media screen and (min-width: 1024px) {
  .size {
    max-width: 60vw;
    min-height: 80vh;
    margin: 0 auto;
    padding-bottom: 5%;
    margin-bottom: 5%;
  }

  .box {
    min-width: 15vw;
    min-height: 20vh;
  }

  .box-rectangle {
    min-width: 30vw;
    min-height: 10vh;
  }

  #desktop-background {
    background-size: auto 126%;
    height: 100%;
    width: 100vw;
    background-position: center;
    padding-top: 2%;
  }

  .text-size {
    width: 70%;
    margin-top: 5%;
    margin-bottom: 5%;
  }

  .flex-change {
    flex-direction: row !important;
    flex-wrap: nowrap;
  }
}

@media screen and (min-width: 1263px) {
  .margin-right-fix {
    margin-right: 7%;
  }
}
</style>
