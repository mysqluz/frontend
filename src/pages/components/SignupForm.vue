<template>
  <div
    class="section section-signup"
    style="background-image: url('img/bg11.jpg'); background-size: cover; background-position: top center; min-height: 700px;"
  >
    <div class="container">
      <div class="row">
        <card class="card-signup" header-classes="text-center" color="orange">
          <template slot="header">
            <h3 class="card-title title-up">Sign Up</h3>
            <div class="social-line">
              <a
                href="#pablo"
                class="btn btn-neutral btn-facebook btn-icon btn-round"
              >
                <i class="fab fa-facebook-square"></i>
              </a>
              <a
                href="#pablo"
                class="btn btn-neutral btn-twitter btn-icon btn-lg btn-round"
              >
                <i class="fab fa-twitter"></i>
              </a>
              <a
                href="#pablo"
                class="btn btn-neutral btn-google btn-icon btn-round"
              >
                <i class="fab fa-google-plus"></i>
              </a>
            </div>
          </template>
          <template>

            <fg-input v-model="username"
                      class="no-border input-lg"
                      addon-left-icon="now-ui-icons users_circle-08"
                      placeholder="Username..."
            >
            </fg-input>

            <fg-input v-model="email"
                      class="no-border input-lg"
                      addon-left-icon="now-ui-icons ui-1_email-85"
                      placeholder="Email..."
            >
            </fg-input>

            <fg-input v-model="firstName"
                      class="no-border input-lg"
                      addon-left-icon="now-ui-icons text_caps-small"
                      placeholder="First name..."
            >
            </fg-input>

            <fg-input v-model="lastName"
                      class="no-border input-lg"
                      addon-left-icon="now-ui-icons text_caps-small"
                      placeholder="Last name..."
            >
            </fg-input>

            <fg-input v-model="password"
                      class="no-border input-lg"
                      addon-left-icon="now-ui-icons text_caps-small"
                      placeholder="Password..."
            >
            </fg-input>

            <fg-input v-model="confirmPassword"
                      class="no-border input-lg"
                      addon-left-icon="now-ui-icons text_caps-small"
                      placeholder="Confirm password..."
            >
            </fg-input>

            <img :src="image" alt="">
            <input @change="handleImage" type="file" accept="">
          </template>
          <div class="card-footer text-center">
            <n-button type="neutral" @click="register" round size="lg">Get Started</n-button>
            <p v-if="msg">{{ msg }}</p>
          </div>
        </card>
      </div>
      <div class="col text-center">
        <router-link
          to="/login"
          class="btn btn-simple btn-round btn-white btn-lg"
        >
          View Login Page
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
import { Card, FormGroupInput, Button } from '@/components';
// import {getAPI} from "@/axios-api";
import AuthService from "@/services/AuthService";

export default {
  data () {
    return {
      APIData: [],
      username: '',
      email: '',
      firstName: '',
      lastName: '',
      password: '',
      confirmPassword: '',
      image: '',
      msg: ''
      // isVisible: true
    }
  },
  methods: {
    handleImage(e) {
      const selectedImage = e.target.files[0];
      this.createBase64Image(selectedImage);
    },
    createBase64Image(fileObject) {
      const reader = new FileReader();

      reader.onload = (e) => {
        this.image = e.target.result;
        // console.log(e.target.result);
      };
      reader.readAsDataURL(fileObject);
      // console.log(reader);
    },
    async register() {
      try {
        const data = {
          username: this.username,
          email: this.email,
          first_name: this.firstName,
          last_name: this.lastName,
          password: this.password,
          confirm_password: this.confirmPassword,
          avatar: this.image
        };
        const response = await AuthService.signUp(data);

        const token = response.token;
        const user = response.user;
        this.$store.dispatch('login', { token, user });

        this.msg = response;
        this.$router.push('/');
      } catch (e) {
        this.msg = e;
      }

      // getAPI.post('/auth/register/', data)
      //     .then(response => {
      //       localStorage.token = response.data.token;
      //       console.log(response.data.token);
      //       this.$emit("authenticated", true);
      //       this.$router.replace({ name: "/" });
      //     })
      //     .catch(err => {
      //       console.log('err ', err);
      //     });
    }
  },
  components: {
    Card,
    [Button.name]: Button,
    [FormGroupInput.name]: FormGroupInput
  }
};
</script>
<style></style>
