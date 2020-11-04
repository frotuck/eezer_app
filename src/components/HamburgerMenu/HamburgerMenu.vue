<template>
  <!-- ##################### -->
  <!-- #### MOBILE VIEW #### -->
  <!-- ##################### -->
  <v-container class="d-flex small">
    <v-dialog overlay v-model="showMenu">
      <template v-slot:activator="{ on, attrs }">
        <v-btn v-bind="attrs" v-on="on" class="primaryblack button" dark>
          <v-icon>mdi-menu</v-icon></v-btn
        >
      </template>
      <v-card
        min-height="70vh"
        max-width="80vw"
        class="d-flex flex-column justify-center align-center primaryblack position desktop-size"
      >
        <v-btn
          depressed
          dark
          width="20vw"
          class="primaryblack button close"
          @click="showMenu = !showMenu"
          ><v-icon>mdi-close</v-icon></v-btn
        >
        <v-btn
          router-link
          to="/emergency"
          depressed
          class="d-flex justify-space-evenly primary size margin"
          ><v-icon class="absolute-left">mdi-bell</v-icon>Emergency</v-btn
        >
        <v-btn
          router-link
          to="/profile"
          depressed
          class="d-flex justify-space-evenly primary size margin"
          ><v-icon class="absolute-left">mdi-account</v-icon>Profile</v-btn
        >
        <v-btn
          router-link
          to="/position"
          depressed
          class="d-flex justify-space-evenly primary size margin"
          ><v-icon class="absolute-left">mdi-compass</v-icon>Map</v-btn
        >
        <v-btn
          router-link
          to="/statistic"
          depressed
          class="d-flex justify-space-evenly primary size margin"
          ><v-icon class="absolute-left">mdi-chart-bar</v-icon>Statistics</v-btn
        >
        <v-btn
          router-link
          to="/tutorial"
          depressed
          class="d-flex justify-space-evenly primary size margin"
          ><v-icon class="absolute-left">mdi-help</v-icon>Help</v-btn
        >
        <v-btn
          router-link
          to="/"
          depressed
          class="d-flex justify-space-evenly primary size margin"
          ><v-icon class="absolute-left">mdi-exit-to-app</v-icon>Logout</v-btn
        >
      </v-card>
    </v-dialog>
  </v-container>
</template>
<script>
export default {
  name: 'HamburgerMenu',
  data() {
    return {
      showMenu: false,
    };
  },
};
</script>
<style lang="scss" scoped>
.position {
  position: absolute;
  top: 0%;
  right: 0%;
  border-radius: 0px;
  // transform: translate(-50%, -50%);
}

.button {
  outline: none;
  border: none;
  box-shadow: none;
}

.size {
  width: 60vw;
  height: 40vh;
}

.close {
  position: absolute;
  top: 0;
  right: 0;
  margin-top: 5%;
  // margin-left: 60%;
}

.absolute-left {
  position: absolute;
  left: 0;
}

.margin {
  margin-top: 10px;
  margin-bottom: 10px;
}

.right {
  margin: 0;
  margin-right: -20px;
}

.small {
  position: absolute;
  right: 0;
  width: 20%;
  // margin-left: -20%;
}

@media screen and (min-width: 768px) {
  .desktop-size {
    max-width: 40vw !important;
    max-height: 60vh !important;
  }

  .size {
    max-width: 30vw !important;
    max-height: 60vh !important;
  }

  .small {
    width: 10%;
    // margin-left: -10%;
  }

  .close {
    margin-top: 3%;
    max-width: 5vw;
  }
}

@media screen and (min-width: 1024px) {
  .desktop-size {
    max-width: 30vw !important;
    max-height: 60vh !important;
  }

  .small {
    width: 10%;
  }

  .size {
    max-width: 20vw !important;
    min-height: 6vh !important;
  }

  .close {
    margin-top: 4%;
    max-width: 5vw;
    margin-right: 8%;
  }
}

@media screen and (min-width: 1264px) {
  .desktop-size {
    max-width: 30vw !important;
    max-height: 65vh !important;
  }

  .small {
    width: 10%;
  }

  .close {
    margin-top: 3%;
    max-width: 5vw;
    margin-right: 15%;
  }
}
</style>
