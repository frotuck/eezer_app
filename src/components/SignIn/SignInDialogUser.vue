<template>
  <v-dialog width="500px" v-model="editDialog" class="d-none d-sm-flex">
    <template v-slot:activator="{ on, attrs }">
      <v-btn class="secondary mt-5" accent v-bind="attrs" v-on="on">
        I'M A USER
      </v-btn>
    </template>
    <v-card>
      <v-container>
        <v-row>
          <v-col>
            <v-card-title class="d-flex justify-center">Sign In</v-card-title>
          </v-col>
        </v-row>
        <v-row justify="center">
          <v-col md="6">
            <v-text-field
              name="email"
              label="Email"
              id="email"
              required
            ></v-text-field>
            <v-text-field
              name="password"
              label="Password"
              id="password"
              required
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row class="d-flex flex-column">
          <v-col>
            <v-card-actions class="d-flex flex-column">
              <v-btn
                depressed
                class="secondary"
                router-link
                to="/user"
                @click="editDialog = false"
                >Login as User</v-btn
              >
            </v-card-actions>
          </v-col>
          <v-card
            class="mx-auto presentation-box"
            width="200"
            height="80"
            outlined
            color="primary"
          >
            <v-col>
              <v-card-actions class="d-flex flex-column">
                <p style="color: white; margin-top: -10px; margin-bottom: 0">
                  Not registered?
                </p>
                <v-btn
                  depressed
                  class="secondary"
                  router-link
                  to="/usersignup"
                  @click="editDialog = false"
                  >Create account</v-btn
                >
              </v-card-actions>
            </v-col></v-card
          >
        </v-row>
      </v-container>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data: () => ({
    editDialog: false,
  }),
};
</script>

<style lang="scss" scoped></style>
