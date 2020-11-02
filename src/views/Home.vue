<template>
<v-container class="d-none d-sm-flex">
  <v-img src="../assets/desktop-background-1.png"
  width="100%"
  height="200%">
  <v-row>
    <v-col         md="4"
        offset-md="1">
        <v-card
    class="mx-auto"
    max-width="600"
    height="400"
    outlined
    color="primary"
  >
  <v-app-bar color="white">
    <v-row justify="center">
    <h2 style="border-bottom:3px solid #F87502">Welcome</h2>
    </v-row>
  </v-app-bar>
    <v-list-item three-line >
      <v-list-item-content>
        <div class="d-flex flex-column align-center">
        <v-list-item-title class="headline mb-1">
          Eezer Ambulance Service
        </v-list-item-title>
        <v-list-item-subtitle>Greyhound divisely hello coldly fonwderfully</v-list-item-subtitle>
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
    <v-row >
    <v-col         md="6"
        offset-md="6">
        <v-card
    class="mx-auto"
    max-width="600"
    height="400"
    outlined
    color="primary"
  >
  <v-app-bar color="white">
    <v-row justify="center">
    <h2 style="border-bottom:3px solid #F87502">Login to Eezer</h2>
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
      <p class="white--text" style="">not registered yet? click here</p>
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
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',

}
</script>
<style lang="scss" scoped>
</style>