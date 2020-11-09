<template>
  <v-dialog width="500px" v-model="editDialog" class="d-none d-sm-flex">
    <template v-slot:activator="{ on, attrs }">
      <v-btn class="secondary mb-6 mt-10" accent v-bind="attrs" v-on="on">
        PERSONNEL
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
              placeholder="I_Am_A_Driver@eezer.com"
            ></v-text-field>
            <v-text-field
              name="password"
              label="Password"
              id="password"
              required
              placeholder="**********"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-card-actions class="d-flex flex-column">
              <v-btn
              disabled
                depressed
                class="secondary mb-3"
                router-link
                to="/admin-hub"
                @click="editDialog = false"
                >Login as Admin</v-btn
              >
              <v-btn

                depressed
                class="secondary mb-3"
                router-link
                to="/profile"
                @click="editDialog = false"
                >Login as Driver</v-btn
              >
              <v-btn
              disabled
                depressed
                class="secondary mb-3"
                router-link
                to="/feed"
                @click="editDialog = false"
                >Login as Customer Service</v-btn
              >
            </v-card-actions>
          </v-col>
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

<style></style>
