<template>
  <div>
    <!-- Header -->
    <div class="header bg-gradient-success py-7 py-lg-8 pt-lg-9">
      <b-container class="container">
        <div class="header-body text-center mb-7">
          <b-row class="justify-content-center">
            <b-col xl="5" lg="6" md="8" class="px-5">
              <h1 class="text-white">Akkount yaratish</h1>
              <p class="text-lead text-white"></p>
            </b-col>
          </b-row>
        </div>
      </b-container>
      <div class="separator separator-bottom separator-skew zindex-100">
        <svg x="0" y="0" viewBox="0 0 2560 100" preserveAspectRatio="none"
             xmlns="http://www.w3.org/2000/svg">
          <polygon class="fill-default" points="2560 0 2560 100 0 100"></polygon>
        </svg>
      </div>
    </div>
    <!-- Page content -->
    <b-container class="mt--8 pb-5">
      <!-- Table -->
      <b-row class="justify-content-center">
        <b-col lg="6" md="8" >
          <b-card no-body class="bg-secondary border-0">
  <!--            <b-card-header class="bg-transparent pb-5">
                <div class="text-muted text-center mt-2 mb-4"><small>Sign up with</small></div>
                <div class="text-center">
                  <a href="#" class="btn btn-neutral btn-icon mr-4">
                    <span class="btn-inner&#45;&#45;icon"><img src="img/icons/common/github.svg"></span>
                    <span class="btn-inner&#45;&#45;text">Github</span>
                  </a>
                  <a href="#" class="btn btn-neutral btn-icon">
                    <span class="btn-inner&#45;&#45;icon"><img src="img/icons/common/google.svg"></span>
                    <span class="btn-inner&#45;&#45;text">Google</span>
                  </a>
                </div>
              </b-card-header>-->
            <b-card-body class="px-lg-5 py-lg-5">
              <div class="text-center text-muted mb-4">
                <small>Quyidagi ma'lumotlarni kiriting</small>
              </div>
              <validation-observer v-slot="{handleSubmit}" ref="formValidator">
                <b-form role="form" @submit.prevent="handleSubmit(onSubmit)">
                  <base-input alternative
                              class="mb-3"
                              prepend-icon="ni ni-hat-3"
                              placeholder="Username"
                              name="Username"
                              :rules="{required: true}"
                              v-model="username">
                  </base-input>

                  <base-input alternative
                              class="mb-3"
                              prepend-icon="ni ni-email-83"
                              placeholder="Email"
                              name="Email"
                              :rules="{required: true, email: true}"
                              v-model="email">
                  </base-input>

                  <base-input alternative
                              class="mb-3"
                              prepend-icon="ni ni-hat-3"
                              placeholder="To`liq ism"
                              :rules="{required: true}"
                              v-model="fullname"
                              name="First name">
                  </base-input>

                  <base-input alternative
                              class="mb-3"
                              prepend-icon="ni ni-lock-circle-open"
                              placeholder="parol"
                              type="password"
                              name="password"
                              :rules="{required: true, min: 3}"
                              v-model="password">
                  </base-input>
<!--                  <div class="text-muted font-italic"><small>password strength: <span-->
<!--                      class="text-success font-weight-700">strong</span></small></div>-->

                  <base-input v-model="confirmPassword"
                              alternative
                              class="mb-3"
                              prepend-icon="ni ni-lock-circle-open"
                              placeholder="tasdiqlash paroli"
                              type="password"
                              name="confirmPassword"
                              :rules="{required: true, min: 3}">
                  </base-input>

                  <img :src="image" alt="Avatar" style="width: -moz-available">
                  <base-input alternative
                              class="mb-3"
                              prepend-icon="ni ni-lock-circle-open"
                              type="file"
                              name="image"
                              :rules="{required: true}"
                              @change="handleImage">
                  </base-input>
<!--                  <b-row class=" my-4">
                    <b-col cols="12">
                      <base-input name=Privacy Policy>
                        <b-form-checkbox>
                          <span class="text-muted">I agree with the <a href="#!">Privacy Policy</a></span>
                        </b-form-checkbox>
                      </base-input>
                    </b-col>
                  </b-row>-->
                  <div class="text-center">
                    <b-button @click="register" variant="primary" class="mt-4">Akkount yaratish</b-button>
                    <p v-if="msg">{{ msg }}</p>
                  </div>
                </b-form>
              </validation-observer>
            </b-card-body>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
import AuthService from "@/services/AuthService";

  export default {
    name: 'register',
    data() {
      return {
        APIData: [],
        username: '',
        email: '',
        fullname: '',
        password: '',
        confirmPassword: '',
        image: '',
        msg: ''
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
            fullname: this.fullname,
            password: this.password,
            confirm_password: this.confirmPassword,
            avatar: this.image
          };
          const response = await AuthService.signUp(data);

          const token = response.auth_token;
          const user = response;
          this.$store.dispatch('login', { token, user });

          this.msg = response;
          this.$router.push('/');
        } catch (e) {
          this.msg = e;
        }
      },
      onSubmit() {
        // this will be called only after form is valid. You can do an api call here to register users
      }
    }

  };
</script>
<style></style>
