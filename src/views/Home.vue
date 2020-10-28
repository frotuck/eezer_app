<template>
  <v-container>
    <v-row>
      <v-col md="4" offset-md="1">
        <v-card
          class="mx-auto"
          max-width="600"
          height="400"
          outlined
          color="primary"
        >
          <v-app-bar color="white">
            <v-row justify="center">
              <h2 style="border-bottom: 3px solid #f87502">Welcome</h2>
            </v-row>
          </v-app-bar>
          <v-list-item three-line>
            <v-list-item-content>
              <v-list-item-title class="headline mb-1">
                Eezer Ambulance Service
              </v-list-item-title>
              <v-list-item-subtitle
                >Greyhound divisely hello coldly
                fonwderfully</v-list-item-subtitle
              >
            </v-list-item-content>
            <v-list-item-avatar
              tile
              size="80"
              color="grey"
              class="mr-5 align-center"
            ></v-list-item-avatar>
          </v-list-item>

          <v-card-actions> </v-card-actions>
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
              <h2 style="border-bottom: 3px solid #f87502">Login to Eezer</h2>
            </v-row>
          </v-app-bar>
          <v-row justify="center">
            <v-col md="6">
              <v-list-item three-line>
                <v-btn>I'm Personnel</v-btn>
                <v-btn>I'm a User</v-btn>
              </v-list-item>
            </v-col>
          </v-row>
          <v-card-actions> </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
};
</script>
