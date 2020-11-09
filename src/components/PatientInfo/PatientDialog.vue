<template>
  <v-dialog width="500px" v-model="editDialog" class="d-none d-sm-flex">
    <template v-slot:activator="{ on, attrs }">
      <v-btn fab class="ml-4" accent v-bind="attrs" v-on="on">
        <v-icon x-large>mdi-information-variant</v-icon>
      </v-btn>
    </template>
    <v-card class="orange lighten-2">
      <v-container>
        <v-row justify="center">
          <v-col cols="9" sm="6" md="6">
            <div class="text-center orange lighten-4 rounded-circle pa-10">
              <v-avatar class="text-center" size="128" color="white">
                <v-icon x-large>
                  mdi-account
                </v-icon>
              </v-avatar>
            </div>
          </v-col>
        </v-row>
        <div class="text-center">
          <h2 class="mb-0">Jane Doe</h2>
          <v-card-text
            >Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui,
            molestiae. Necessitatibus ducimus aliquam magni, consequatur.
          </v-card-text>
        </div>
        <v-row justify="center">
          <v-col>
            <h2 class="text-center px-0">Locate User</h2>
            <v-card-actions class="d-flex flex-column">
              <v-btn fab router-link><v-icon>mdi-map-marker</v-icon></v-btn>
            </v-card-actions>
          </v-col>
          <v-col>
            <h2 class="text-center">Call User</h2>
            <v-card-actions class="d-flex flex-column">
              <v-btn fab router-link><v-icon>mdi-phone</v-icon></v-btn>
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
  name: 'PatientDialog',
  data() {
    return {
      editDialog: false,
    };
  },
};
</script>

<style></style>
