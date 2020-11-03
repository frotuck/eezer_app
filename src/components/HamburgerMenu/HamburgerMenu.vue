<template>
  <!-- ###################### -->
  <!-- #### DESKTOP VIEW #### -->
  <!-- ###################### -->

  <!-- ##################### -->
  <!-- #### MOBILE VIEW #### -->
  <!-- ##################### -->
  <v-container>
    <v-dialog overlay v-model="showMenu">
      <template v-slot:activator="{ on, attrs }">
        <v-btn v-bind="attrs" v-on="on" class="primaryblack button right" dark>
          <v-icon>mdi-menu</v-icon></v-btn
        >
      </template>
      <v-card
        min-height="70vh"
        max-width="80vw"
        class="d-flex flex-column justify-center align-center primaryblack position"
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
          to="/map"
          depressed
          class="d-flex justify-space-evenly primary size margin"
          ><v-icon class="absolute-left">mdi-compass</v-icon>Map</v-btn
        >
        <v-btn
          router-link
          to="/statistics"
          depressed
          class="d-flex justify-space-evenly primary size margin"
          ><v-icon class="absolute-left">mdi-chart-bar</v-icon>Statistics</v-btn
        >
        <v-btn
          router-link
          to="/help"
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
  margin-left: 80%;
}
</style>
