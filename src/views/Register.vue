<template>
  <div class="page-header clear-filter" filter-color="orange">
    <div
      class="page-header-image"
      style="background-image: url('img/login.jpg')"
    ></div>
    <div class="content">
      <div class="container">
        <div class="col-md-10 ml-auto mr-auto">
          <card type="login" plain>
            <div slot="header" class="logo-container">
              <img v-lazy="'img/now-logo.png'" alt="" />
            </div>

            <fg-input v-model="username"
              class="no-border input-lg"
              addon-left-icon="now-ui-icons users_circle-08"
              placeholder="Username..."
            >
            </fg-input>

            <fg-input v-model="email"
              class="no-border input-lg"
              addon-left-icon="now-ui-icons text_caps-small"
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

            <template slot="raw-content">
              <div class="card-footer text-center">
                <button
                  @click="register"
                  class="btn btn-primary btn-round btn-lg btn-block"
                  >Register</button
                >
              </div>
              <div class="pull-left">
                <h6>
                  <a href="#pablo" class="link footer-link">Create Account</a>
                </h6>
              </div>
              <div class="pull-right">
                <h6>
                  <a href="#pablo" class="link footer-link">Need Help?</a>
                </h6>
              </div>
            </template>
          </card>
        </div>
      </div>
    </div>
    <main-footer></main-footer>
  </div>
</template>
<script>
import { Card, Button, FormGroupInput } from '@/components';
import MainFooter from '@/layout/MainFooter';
import {getAPI} from "@/axios-api";
export default {
  name: 'register-page',
  bodyClass: 'login-page',
  data () {
    return {
      APIData: [],
      username: '',
      email: '',
      firstName: '',
      lastName: '',
      password: '',
      confirmPassword: '',
      // isVisible: true
    }
  },
  methods: {
    register: function() {
      const data = {
        username: this.username,
        email: this.email,
        first_name: this.firstName,
        last_name: this.lastName,
        password: this.password,
        confirm_password: this.confirmPassword
      };
      getAPI.post('/auth/register/', data)
        .then(response => {
          console.log(response.data);
        })
        .catch(err => {
          console.log('err ', err);
      });
    }
  },
  components: {
    Card,
    MainFooter,
    [Button.name]: Button,
    [FormGroupInput.name]: FormGroupInput
  },
};
</script>
<style></style>
