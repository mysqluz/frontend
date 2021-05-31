<template>
  <div>
    <div class="page-header clear-filter" filter-color="orange">
      <parallax
          class="page-header-image"
          style="background-image:url('img/bg5.jpg')"
      >
      </parallax>
      <div class="container">
        <div class="photo-container">
          <img src="img/ryan.jpg" alt="" />
        </div>
        <h3 class="title">Ryan Scheinder</h3>
        <p class="category">Photographer</p>
        <div class="content">
          <div class="social-description">
            <h2>26</h2>
            <p>Comments</p>
          </div>
          <div class="social-description">
            <h2>26</h2>
            <p>Comments</p>
          </div>
          <div class="social-description">
            <h2>48</h2>
            <p>Bookmarks</p>
          </div>
        </div>
      </div>
    </div>
    <div class="section section-about-us">
      <div class="container">
        <div class="col-md-12">
          <div class="card mb-4 box-shadow">
            <img src="https:://via.placeholder.com/150x100" alt="" class="card-img-top">
            <div class="card-body">
              <h4>{{ problem.title }}</h4>
              <p class="card-text" v-html="problem.content">{{ problem.content }}</p>
              <div class="d-flex justify-content-between align-items-center">
                <p>
                  <span>Author: </span>
                  <a v-bind:href="problem.author.url" v-if="problem.author">{{ problem.author.username }}</a>
                  <span v-else>loading...</span>
                </p>
                <p>
                  <span>Category: </span>
                  <span class="text-muted" v-if="problem.category">{{ problem.category.name }}</span>
                  <span v-else>loading...</span>
                </p>
                <p><span>Ball: </span> <span class="text-muted">{{ problem.ball }}</span></p>
                <small class="text-muted">9 mins</small>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-12">
          <div class="card mb-4 box-shadow">

            <div class="card-body">
              <p>Yechim</p>
              <vue-codeditor v-model="source" mode="sql" theme="chrome" />
              <button @click="submit">Submit</button>
            </div>
          </div>
        </div>
        <div class="separator separator-primary"></div>
      </div>
    </div>
    <div class="section section-team text-center">
      <div class="container">
        <h2 class="title">Here is our team</h2>
        <div class="team">
          <div class="row">
            <div class="col-md-4">
              <div class="team-player">
                <img
                  src="img/avatar.jpg"
                  alt="Thumbnail Image"
                  class="rounded-circle img-fluid img-raised"
                />
                <h4 class="title">Romina Hadid</h4>
                <p class="category text-primary">Model</p>
                <p class="description">
                  You can write here details about one of your team members. You
                  can give more details about what they do. Feel free to add
                  some <a href="#">links</a> for people to be able to follow
                  them outside the site.
                </p>
                <a href="#pablo" class="btn btn-primary btn-icon btn-round"
                  ><i class="fab fa-twitter"></i
                ></a>
                <a href="#pablo" class="btn btn-primary btn-icon btn-round"
                  ><i class="fab fa-instagram"></i
                ></a>
                <a href="#pablo" class="btn btn-primary btn-icon btn-round"
                  ><i class="fab fa-facebook-square"></i
                ></a>
              </div>
            </div>
            <div class="col-md-4">
              <div class="team-player">
                <img
                  src="img/ryan.jpg"
                  alt="Thumbnail Image"
                  class="rounded-circle img-fluid img-raised"
                />
                <h4 class="title">Ryan Tompson</h4>
                <p class="category text-primary">Designer</p>
                <p class="description">
                  You can write here details about one of your team members. You
                  can give more details about what they do. Feel free to add
                  some <a href="#">links</a> for people to be able to follow
                  them outside the site.
                </p>
                <a href="#pablo" class="btn btn-primary btn-icon btn-round"
                  ><i class="fab fa-twitter"></i
                ></a>
                <a href="#pablo" class="btn btn-primary btn-icon btn-round"
                  ><i class="fab fa-linkedin"></i
                ></a>
              </div>
            </div>
            <div class="col-md-4">
              <div class="team-player">
                <img
                  src="img/eva.jpg"
                  alt="Thumbnail Image"
                  class="rounded-circle img-fluid img-raised"
                />
                <h4 class="title">Eva Jenner</h4>
                <p class="category text-primary">Fashion</p>
                <p class="description">
                  You can write here details about one of your team members. You
                  can give more details about what they do. Feel free to add
                  some <a href="#">links</a> for people to be able to follow
                  them outside the site.
                </p>
                <a href="#pablo" class="btn btn-primary btn-icon btn-round"
                  ><i class="fab fa-google-plus"></i
                ></a>
                <a href="#pablo" class="btn btn-primary btn-icon btn-round"
                  ><i class="fab fa-youtube"></i
                ></a>
                <a href="#pablo" class="btn btn-primary btn-icon btn-round"
                  ><i class="fab fa-twitter"></i
                ></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="section section-contact-us text-center">
      <div class="container">
        <h2 class="title">Want to work with us?</h2>
        <p class="description">Your project is very important to us.</p>
        <div class="row">
          <div class="col-lg-6 text-center ml-auto mr-auto col-md-8">
            <fg-input
              class="input-lg"
              placeholder="First Name..."
              v-model="form.firstName"
              addon-left-icon="now-ui-icons users_circle-08"
            >
            </fg-input>
            <fg-input
              class="input-lg"
              placeholder="Email Here..."
              v-model="form.email"
              addon-left-icon="now-ui-icons ui-1_email-85"
            >
            </fg-input>
            <div class="textarea-container">
              <textarea
                class="form-control"
                name="name"
                rows="4"
                cols="80"
                v-model="form.message"
                placeholder="Type a message..."
              ></textarea>
            </div>
            <div class="send-button">
              <n-button type="primary" round block size="lg"
                >Send Message</n-button
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {Button, FormGroupInput} from '@/components';
import {getAPI} from "@/axios-api";

export default {
  name: 'problems-show',
  bodyClass: 'problems-show',
  components: {
    [Button.name]: Button,
    [FormGroupInput.name]: FormGroupInput,
  },
  data() {
    return {
      form: {
        firstName: '',
        email: '',
        message: ''
      },
      problem: [],
      source: ''
    };
  },
  methods: {
    submit() {
      const data = {
        source: this.source,
        problem: this.problem.id
      }
      getAPI.post('/tasks/', data )
          .then(response => {
            console.log('problem send');
            this.$router.push('/tasks');
          })
          .catch(err => {
            console.log(err)
          })
    }
  },
  created() {
    getAPI.get('/problems/' + this.$route.params.id )
    .then(response => {
      console.log('problem with id received');
      this.problem = response.data
    })
    .catch(err => {
      console.log(err)
    })
  }
};
</script>
<style></style>

<template>
  <div>

    <base-header class="pb-6 pb-8 pt-5 pt-md-8 bg-gradient-success">
      <!-- Card stats -->
      <b-row>
        <b-col md="12">
          <b-card
              :title="problem.title"
              :img-src="problem.image"
              img-alt="Image"
              img-top
              tag="article"
              style=""
              class="mb-2"
          >

            <b-card-text v-html="problem.content">

            </b-card-text>

            <small class="ni ni-money-coins"> {{ problem.ball }}</small>
            <span>Author: </span>
            <a v-bind:href="problem.author.url" v-if="problem.author">{{ problem.author.username }}</a>
            <span v-else>loading...</span>

          </b-card>
        </b-col>
        <b-col md="12">
          <b-card
              class="mb-2"
          >

            <b-card-text>
              <vue-codeditor v-model="source" mode="sql" theme="chrome" />
            </b-card-text>

            <button class="btn btn-primary" @click="submit">Submit</button>
          </b-card>
        </b-col>
      </b-row>
    </base-header>

  </div>
</template>
<script>

// Components
import BaseProgress from '@/components/BaseProgress';
import StatsCard from '@/components/Cards/StatsCard';

// Tables
import SocialTrafficTable from "../Dashboard/SocialTrafficTable";
import PageVisitsTable from "../Dashboard/PageVisitsTable";
import ProblemsService from "../../services/ProblemsService";
import TasksService from "../../services/TasksService";

export default {
  components: {
    BaseProgress,
    StatsCard,
    PageVisitsTable,
    SocialTrafficTable
  },
  data() {
    return {
      problem: [],
      source: '',
    };
  },
  mounted() {

  },
  methods: {
   async submit() {
      const data = {
        source: this.source,
        problem: this.problem.id
      }
      const response = await TasksService.submit(data);
      console.log(response);
      await this.$router.push('/tasks');
    }
  },
  async created() {
    this.problem = await ProblemsService.show(this.$route.params.id);
  }
};
</script>
<style>
.el-table .cell{
  padding-left: 0;
  padding-right: 0;
}
.ace_editor.ace-chrome, .ace_gutter-active-line, .ace_text-input {
  height: 200px !important;
  font-size: 16px !important;
}
</style>
