<template>
  <div class="posts">
    <Navbar></Navbar>
    <div class="album py-5 bg-light">
      <div class="container">
        <div class="row">
          <div v-for="posts in APIData" :key="posts.id" class="col-md-4">
            <div class="card mb-4 box-shadow">
              <img src="https:://via.placeholder.com/150x100" alt="" class="card-img-top">
              <div class="card-body">
                <h4><a href="" class="text-secondary">{{ posts.title }}</a></h4>
                <p class="card-text">{{ posts.content }}</p>
                <div class="d-flex justify-content-between align-items-center">
                  <div class="btn-group">
                    <a href="" class="btn btn-sm btn-outline-primary" role="button" area-pressed="true">
                    </a>
                    <a href="" class="btn btn-sm btn-outline-secondary" role="button" area-pressed="true">
                    </a>
                  </div>
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
import { getAPI } from '../axios-api'
import Navbar from '../components/Navbar'
export default {
  name: 'Posts',
  data () {
    return {
      APIData: []
    }
  },
  components: {
    Navbar
  },
  created () {
    getAPI.get('/news/')
      .then(response => {
        console.log('News API received data')
        this.APIData = response.data
      })
      .catch(err => {
        console.log('xatolik', err)
      })
  }
}
</script>

<style scoped>

</style>
