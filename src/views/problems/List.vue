<template>
  <div class="problem">
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
    <div class="album py-5 bg-light">
      <div class="container">
        <div class="row">
          <div v-for="problem in APIData" :key="problem.id" class="col-md-12">
            <div class="card mb-4 box-shadow">
              <img src="https:://via.placeholder.com/150x100" alt="" class="card-img-top">
              <div class="card-body">
                <h4><router-link :to="{ name: 'problem-show', params: { id: problem.id }}">{{ problem.title }}</router-link></h4>
                <p class="card-text" v-html="problem.content"></p>
                <div class="btn-group">
                  <router-link :to="{ name: 'problem-show', params: { id: problem.id }}">Batafsil</router-link>
                </div>
                <div class="d-flex justify-content-between align-items-center">
                  <p><span>Author: </span><a v-bind:href="problem.author.url">{{ problem.author.username }}</a></p>
                  <p><span>Category: </span> <span class="text-muted">{{ problem.category.name }}</span></p>
                  <p><span>Ball: </span> <span class="text-muted">{{ problem.ball }}</span></p>
                  <small class="text-muted">9 mins</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getAPI } from "@/axios-api";
import Navbar from '../../components/Navbar'
export default {
  name: 'problem',
  bodyClass: 'profile-page',
  data () {
    return {
      APIData: [],
      inputVal: 'Initial val'
    }
  },
  methods: {
    alertMsg: function () {
      //
    }
  },
  components: {
    // Navbar
  },
  created () {
    getAPI.get('/problems/')
      .then(response => {
        console.log('problem API received data')
        this.APIData = response.data.results
      })
      .catch(err => {
        console.log('xatolik', err)
      })
  }
}
</script>

<style scoped>

</style>
