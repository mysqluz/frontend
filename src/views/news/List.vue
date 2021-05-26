<template>
  <div class="news">
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
          <div v-for="news in APIData" :key="news.id" class="col-md-4">
            <div class="card mb-4 box-shadow">
              <img src="https:://via.placeholder.com/150x100" alt="" class="card-img-top">
              <div class="card-body">
                <h4><a href="" class="text-secondary">{{ news.title }}</a></h4>
                <p class="card-text" v-html="news.content">{{ news.content }}</p>
                <div class="d-flex justify-content-between align-items-center">
                  <div class="btn-group">
                    <router-link :to="{ name: 'show-news', params: { slug: news.slug }}">Batafsil</router-link>
                  </div>
                  <span>Views: {{ news.views }}</span>
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
import { getAPI } from '../../axios-api'
import Navbar from '../../components/Navbar'
export default {
  name: 'news',
  bodyClass: 'profile-page',
  data () {
    return {
      APIData: []
    }
  },
  components: {
    // Navbar
  },
  created () {
    getAPI.get('/news/')
      .then(response => {
        console.log('News API received data')
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
