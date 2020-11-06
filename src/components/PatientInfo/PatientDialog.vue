!<template>
  <v-dialog width="500px" v-model="editDialog" class="d-none d-sm-flex">
    <template v-slot:activator="{ on, attrs }">
      <v-btn fab class="ml-4" accent v-bind="attrs" v-on="on">
          <v-icon x-large>mdi-information-variant</v-icon>
      </v-btn>
    </template>
    <v-card class="orange lighten-2">
      <v-container>
        <v-row class="mx-sm-3 mx-8">
          <v-col class="mx-sm-15">
            <div 
            class="text-center pa-10 mx-sm-15 orange lighten-4 rounded-circle">
    <v-avatar
      size="128"
      color="white"
    >
      <v-icon x-large>
        mdi-account
      </v-icon>
    </v-avatar>
  </div>
          </v-col>
        </v-row>
              <div class="text-center">
            <v-card-title class="mb-0"
            >Jane Doe</v-card-title>
            <v-card-text
            >Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, molestiae. Necessitatibus ducimus aliquam magni, consequatur.
            </v-card-text>
            </div>
        <v-row class="d-flex">
          <v-col>
              <v-card-title class="text-center px-0">Locate User</v-card-title>
            <v-card-actions class="d-flex flex-column">
              <v-btn
              fab
                router-link
                ><v-icon>mdi-map-marker</v-icon></v-btn
              >
            </v-card-actions>
          </v-col>
            <v-col>
                <v-card-title class="text-center">Call User</v-card-title>
              <v-card-actions class="d-flex flex-column">
               <v-btn
                fab
                router-link
                ><v-icon>mdi-phone</v-icon></v-btn
              >
              </v-card-actions>
            </v-col>
          >
        </v-row>
      </v-container>
    </v-card>
  </v-dialog>
</template>

<script>
export default {

}
</script>

<style>

</style>