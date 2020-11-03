<template>
  <div>
    <!-- ###################### -->
    <!-- #### DESKTOP VIEW #### -->
    <!-- ###################### -->

    <!-- ##################### -->
    <!-- #### MOBILE VIEW #### -->
    <!-- ##################### -->
    <v-app-bar app class="d-sm-none" color="primaryblack">
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>

      <h2 justify="center" style="color" class="header-page-name">
        Profile
      </h2>
      <v-spacer></v-spacer>
      <router-link to="/">
        <v-img alt="logout" src="../../assets/logout-icon.png" max-width="35" />
      </router-link>
    </v-app-bar>
    <v-card height="150">
      <v-footer
        color="primaryblack"
        absolute
        class="font-weight-medium d-sm-none"
      >
        <v-spacer></v-spacer>
        <v-spacer></v-spacer>
        <router-link to="/useremergency" class="icon-footer">
          <v-img src="../../assets/alert-inactive.png" min-width="30" />
        </router-link>
        <v-spacer></v-spacer>
        <v-spacer></v-spacer>
        <router-link to="/user">
          <v-img src="../../assets/explore-inactive.png" min-width="30" />
        </router-link>
        <v-spacer></v-spacer>
        <v-spacer></v-spacer>
        <router-link to="/userprofile">
          <v-img src="../../assets/profile-active.png" min-width="30" />
        </router-link>
        <v-spacer></v-spacer>
      </v-footer>
    </v-card>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
