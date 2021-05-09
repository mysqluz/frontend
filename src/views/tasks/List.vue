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
          <div class="col-md-12">
            <div class="card mb-4 box-shadow">
              <img src="https:://via.placeholder.com/150x100" alt="" class="card-img-top">
              <div class="card-body">
                <table class="table table-responsive">
                  <thead>
                  <tr>
                    <th>ID</th>
                    <th>Problem</th>
                    <th>User</th>
                    <th>Status</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr v-for="task in APIData.results" :key="task.id">
                    <td>{{ task.id }}</td>
                    <td>{{ task.problem.title }}</td>
                    <td>{{ task.user.username }}</td>
                    <td>
                      <badge type="success" v-if="task.status == 1">{{ task.status_text }}</badge>
                      <badge type="danger" v-else>{{ task.status_text }}</badge>
                    </td>
                  </tr>
                  </tbody>
                </table>
                <h4>Pagination</h4>
                <n-pagination
                    type="primary"
                    :page-count="Math.ceil(APIData.count/12)"
                    :total="APIData.count"
                    v-model="pagination.simple"
                >
                </n-pagination>

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
import {Badge, Pagination} from "@/components";
export default {
  name: 'problem',
  bodyClass: 'profile-page',
  data () {
    return {
      APIData: [],
      inputVal: 'Initial val',
      pagination: {
        simple: 1,
        default: 2,
        full: 3
      }
    }
  },
  methods: {
    alertMsg: function () {
      //
    }
  },
  components: {
    // Navbar
    [Pagination.name]: Pagination,
    Badge
  },
  created () {
    getAPI.get('/tasks/')
      .then(response => {
        console.log('task API received data')
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
