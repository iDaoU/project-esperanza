<template>
  <v-container :class="{'fill-height': !$vuetify.breakpoint.smAndDown}" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="8">
        <v-card class="elevation-12">
          <v-window v-model="step" :vertical="$vuetify.breakpoint.smAndDown">
            <!-- Sign-in window item -->
            <v-window-item :value="1">
              <v-row>
                <!-- Sign-in container -->
                <!-- Custom height to match sibling -->
                <v-col
                  cols="12" md="8" class="py-8"
                  :style="$vuetify.breakpoint.smAndDown ? {} : {'height': '546px'}"
                >
                  <v-card-text>
                    <h1 class="text-center display-2 primary--text">
                      Sign in to Esperanza
                    </h1>
                    <!-- Social media options -->
                    <div class="text-center my-4">
                      <v-btn class="mx-2" fab color="black" outlined>
                        <v-icon>fab fa-facebook-f</v-icon>
                      </v-btn>
                      <v-btn class="mx-2" fab color="black" outlined>
                        <v-icon>fab fa-google-plus-g</v-icon>
                      </v-btn>
                      <v-btn class="mx-2" fab color="black" outlined>
                        <v-icon>fab fa-linkedin-in</v-icon>
                      </v-btn>
                    </div>
                    <!-- Sign-in form -->
                    <v-form>
                      <v-text-field
                        label="Email"
                        prepend-icon="email"
                        type="text"
                        color="primary"
                      />
                      <v-text-field
                        label="Password"
                        prepend-icon="lock"
                        type="password"
                        color="primary"
                      />
                    </v-form>
                    <h3 class="text-center">Forgot your password?</h3>
                  </v-card-text>
                  <div class="text-center">
                    <v-btn rounded color="primary">SIGN IN</v-btn>
                  </div>
                </v-col>
                <!-- Sign-up navigation container -->
                <v-col cols="12" md="4" class="primary py-8">
                  <v-card-text class="white--text">
                    <h1 class="text-center display-1">Hello, Friend!</h1>
                    <h4 class="text-center">
                      Start your journey with us
                    </h4>
                  </v-card-text>
                  <div class="text-center">
                    <v-btn rounded outlined dark @click="step=2">SIGN UP</v-btn>
                  </div>
                </v-col>
              </v-row>
            </v-window-item>
            <!-- Sign-up window item -->
            <v-window-item :value="2">
              <v-row>
                <!-- Sign-in navigation container -->
                <v-col cols="12" md="4" class="primary py-8">
                  <v-card-text class="white--text">
                    <h1 class="text-center display-1">Welcome Back!</h1>
                    <h4 class="text-center">
                      Sign in with an existing account
                    </h4>
                  </v-card-text>
                  <div class="text-center">
                    <v-btn rounded outlined dark @click="step=1">SIGN IN</v-btn>
                  </div>
                </v-col>
                <!-- Sign-up container -->
                <v-col cols="12" md="8" class="py-8">
                  <v-card-text>
                    <h1 class="text-center display-2 primary--text">
                      Create Account
                    </h1>
                    <!-- Social media options -->
                    <div class="text-center my-4">
                      <v-btn class="mx-2" fab color="black" outlined>
                        <v-icon>fab fa-facebook-f</v-icon>
                      </v-btn>
                      <v-btn class="mx-2" fab color="black" outlined>
                        <v-icon>fab fa-google-plus-g</v-icon>
                      </v-btn>
                      <v-btn class="mx-2" fab color="black" outlined>
                        <v-icon>fab fa-linkedin-in</v-icon>
                      </v-btn>
                    </div>
                    <!-- Sign-up form -->
                    <v-form>
                      <v-text-field
                        label="Name"
                        prepend-icon="person"
                        type="text"
                        color="primary"
                      />
                      <v-text-field
                        label="Email"
                        prepend-icon="email"
                        type="text"
                        color="primary"
                      />
                      <v-text-field
                        label="Password"
                        prepend-icon="lock"
                        :append-icon="isPasswordVisible ? 'fa-eye' : 'fa-eye-slash'"
                        :type="isPasswordVisible ? 'text' : 'password'"
                        color="primary"
                        @click:append="isPasswordVisible = !isPasswordVisible"
                      />
                      <v-text-field
                        label="Confirm Password"
                        prepend-icon="lock"
                        :append-icon="isPasswordVisible ? 'fa-eye' : 'fa-eye-slash'"
                        :type="isPasswordVisible ? 'text' : 'password'"
                        color="primary"
                        @click:append="isPasswordVisible = !isPasswordVisible"
                      />
                    </v-form>
                  </v-card-text>
                  <div class="text-center">
                    <v-btn rounded color="primary">SIGN UP</v-btn>
                  </div>
                </v-col>
              </v-row>
            </v-window-item>
          </v-window>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Home',
  data: () => ({
    /** Controls the step of the window. */
    step: 1,
    /** Controls visibility of password field. */
    isPasswordVisible: false,
  }),
});
</script>
