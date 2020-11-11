<template>
  <div>
    <!-- ####################### -->
    <!-- #### DESKTOP VIEW ##### -->
    <!-- ####################### -->
    <img src="" alt="" />
    <v-app-bar app color="white">
      <v-img
        class="d-none d-sm-flex header-icon"
        alt="Eezerlogo"
        src="../assets/eezerlogo.svg"
        max-width="55"
      />
      <v-img
        class=" d-flex d-sm-none header-icon"
        alt="Eezerlogo"
        src="../assets/eezerlogo.svg"
        max-width="45"
      />
      <v-spacer></v-spacer>

      <h1 justify="center" class="d-flex d-sm-none welcome-style alfa-slab-one">
        welcome
      </h1>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
    </v-app-bar>
    <v-container class="d-none d-sm-flex width-display">
      <v-img
        src="../assets/desktop-background-1.png"
        width="100%"
        height="200%"
      >
        <v-row>
          <v-col md="4" offset-md="1">
            <v-card
              class="mx-auto"
              max-width="600"
              min-width="550"
              height="400"
              outlined
              color="primary"
            >
              <v-app-bar color="white">
                <v-row justify="center">
                  <h2
                    style="border-bottom:3px solid #F87502"
                    class="alfa-slab-one"
                  >
                    Welcome
                  </h2>
                </v-row>
              </v-app-bar>
              <v-list-item three-line>
                <v-list-item-content>
                  <div class="d-flex flex-column align-center">
                    <v-list-item-title class="headline mb-1">
                      Eezer Ambulance Service
                    </v-list-item-title>
                    <v-list-item-subtitle
                      >Greyhound divisely hello coldly fonwderfully <br />
                      Greyhound divisely hello coldly fonwderfully
                    </v-list-item-subtitle>
                    <v-list-item-subtitle
                      >Greyhound divisely hello coldly fonwderfully <br />
                      Greyhound divisely hello coldly fonwderfuly
                    </v-list-item-subtitle>
                    <v-list-item-subtitle
                      >Greyhound divisely hello coldly fonwderfully <br />
                      Greyhound divisely hello coldly fonwderfully
                    </v-list-item-subtitle>
                  </div>
                </v-list-item-content>
                <v-img
                  max-height="150"
                  max-width="200"
                  src="../assets/eezer-sidecart.png"
                  color="grey"
                  class="mr-5 mt-15"
                ></v-img>
              </v-list-item>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col md="6" offset-md="6">
            <v-card
              class="mx-auto"
              max-width="600"
              height="400"
              outlined
              color="primary"
            >
              <v-app-bar color="white">
                <v-row justify="center">
                  <h2
                    style="border-bottom:3px solid #F87502"
                    class="alfa-slab-one"
                  >
                    Login to Eezer
                  </h2>
                </v-row>
              </v-app-bar>
              <v-row justify="center">
                <v-col md="4">
                  <v-row justify="center">
                    <v-col>
                      <v-list-item three-line>
                        <div class="d-flex flex-column mb-6">
                          <app-dialog-personnel class=""></app-dialog-personnel>
                          <app-dialog-user></app-dialog-user>
                          <p class="white--text" style="">
                            not registered yet? click here
                          </p>
                        </div>
                      </v-list-item>
                    </v-col>
                  </v-row>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
        </v-row>
      </v-img>
    </v-container>

    <!-- ##################### -->
    <!-- #### MOBILE VIEW #### -->
    <!-- ##################### -->

    <v-container class=" d-flex d-sm-none background-mobile width-display">
      <v-img>
        <v-row>
          <v-col md="4" offset-md="1">
            <v-card
              class="mx-auto presentation-box"
              max-width="300"
              height="300"
              outlined
              color="primary"
            >
              <v-list-item three-line>
                <v-list-item-content>
                  <div class="d-flex flex-column align-center">
                    <v-list-item-title class="headline mb-1">
                      Eezer Ambulance Service
                    </v-list-item-title>
                    <v-list-item-subtitle
                      >Greyhound divisely hello coldly fonwderfully
                    </v-list-item-subtitle>
                  </div>
                </v-list-item-content>
              </v-list-item>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col md="6" offset-md="6">
            <v-row justify="center">
              <v-row justify="center">
                <div class="d-flex flex-column mb-6">
                  <app-dialog-personnel></app-dialog-personnel>
                  <app-dialog-user></app-dialog-user>
                </div>
              </v-row>
            </v-row>
          </v-col>
        </v-row>
      </v-img>
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
};
</script>
<style lang="scss" scoped>
.width-display {
  min-width: 100%;
  padding: 0px;
}
.background-mobile {
  background-image: url(../assets/mobile-background-1.png);
  background-size: auto 100%;
  height: 95vh;
  background-position: center;
}
.header-icon {
  width: 10%;
}
</style>
