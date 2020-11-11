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
          Quarantine Pass
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
        <h3 class="alfa-slab-one">Quarantine Pass</h3>
      </v-toolbar>
      <v-container class="d-flex flex-column">
        <v-img
          class="quarantineImage"
          alt="quarantine-image"
          src="../../assets/quarantine-image.svg"
          max-width="400px"
        />
        <h3 class="qrHeader d-none d-md-flex">
          Quarantine Pass ID
        </h3>
        <p class="qrInfo d-none d-md-flex">
          Scan the QR Code to <br />
          find information <br />
          regarding the active <br />
          Quarantine Pass. if <br />
          failure to <br />
          succuessfully scan <br />
          the QR code, please <br />
          manually fill in the <br />
          PASS ID listed below <br />
          the QR code.
        </p>
        <v-card class="accent passCard">
          <h6>Pass ID</h6>
          <v-icon class="editPencil">mdi-lead-pencil</v-icon>
          <p class="passNum">XXXX-XXXX-XXXX-1908</p>
        </v-card>
        <router-link to="/faq" class="helpBtn d-none d-md-flex">
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
          <v-img src="../../assets/key-active.png" min-width="35%" />
        </router-link>
      </v-container>
    </v-footer>
  </div>
</template>

<script>
export default {};
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

@media screen and (min-width: 1024px) {
  .size {
    max-width: 40vw;
    min-height: 80vh;
    margin: 0 auto;
    margin-bottom: 5%;
  }

  #desktop-background {
    background-color: #888c8f;
    background-size: auto 126%;
    height: 100%;
    width: 100vw;
    padding-top: 2%;
  }
  .editPencil {
    display: none;
  }
  .quarantineImage {
    width: 50%;
  }

  .qrHeader {
    font-size: 1.1vw;
    margin-left: 3%;
    position: absolute;
    top: 13%;
  }

  .qrInfo {
    font-size: 1vw;
    margin-left: 3%;
    position: absolute;
    top: 18%;
  }
}

.passCard {
  width: 80%;
  height: 10%;
  margin-left: 10%;
  margin-top: 15%;
}

.editPencil {
  position: absolute;
  right: 5%;
  top: 10%;
  color: #f87502;
}

h6 {
  margin-top: 6%;
  margin-left: 5%;
}

.passNum {
  margin-left: 5%;
}

.quarantineImage {
  align-self: center;
}

.helpBtn {
  width: 300px;
  margin-bottom: 5%;
  text-decoration: none;
  align-self: center;
  margin-top: 10%;
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
