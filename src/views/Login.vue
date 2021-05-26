<template>
  <div class="page-header clear-filter" filter-color="orange">
    <div
      class="page-header-image"
      style="background-image: url('img/login.jpg')"
    ></div>
    <div class="content">
      <div class="container">
        <div class="col-md-5 ml-auto mr-auto">
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

            <fg-input v-model="password"
              class="no-border input-lg"
              addon-left-icon="now-ui-icons text_caps-small"
              placeholder="Password..."
            >
            </fg-input>

            <template slot="raw-content">
              <div class="card-footer text-center">
                <button
                  @click="login(username, password)"
                  class="btn btn-primary btn-round btn-lg btn-block"
                  >Get Started</button
                >
                <p v-if="msg">{{ msg }}</p>
              </div>
              <div class="pull-left">
                <h6>
                  <router-link :to="{ name: 'register' }" class="link footer-link">Create Account</router-link>
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
// import {getAPI} from "@/axios-api";
import AuthService from "@/services/AuthService";

export default {
  name: 'login-page',
  bodyClass: 'login-page',
  data () {
    return {
      APIData: [],
      username: '',
      password: '',
      msg: ''
      // isVisible: true
    }
  },
  methods: {
    async login() {
      try {
        const data = {
          username: this.username,
          password: this.password
        };
        const response = await AuthService.login(data);
        this.msg = response;
        const token = response.auth_token;
        const user = response.user;
        this.$store.dispatch('login', { token, user });
        this.$router.push('/');
      } catch (e) {
        this.msg = e;
      }

      /*const headers = {
        Authorization: 'Bearer ' + localStorage.token,
      };
      getAPI.post('/auth/login/', data, { headers })
        .then(response => {
          console.log(response.data);
          this.$emit("authenticated", true);
          this.$router.replace({ name: "/" });
        })
        .catch(err => {
          console.log('err ', err);
      });*/
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
