<template>
  <div>

    <base-header class="pb-6 pb-8 pt-5 pt-md-8 bg-gradient-success">
      <!-- Card stats -->
      <b-row>
        <b-col md="12" v-for="obj in news" :key="obj.id">
          <b-card
              :title="obj.title"
              :img-src="obj.image"
              img-alt="Image"
              img-left
              img-width="200px"
              tag="article"
              style=""
              class="mb-2"
          >

            <router-link class="btn btn-primary" :to="{ name: 'yangilik', params: { slug: obj.slug } }">O`qish</router-link>
          </b-card>
        </b-col>


      </b-row>

      <div>
        <b-pagination @page-click="pageClick"
                      align="center"
                      size="lg"
                      v-model="currentPage"
                      :total-rows="rows"
                      :per-page="perPage"
                      first-number
        ></b-pagination>
      </div>

    </base-header>

  </div>
</template>
<script>
  // Components
  import BaseProgress from '@/components/BaseProgress';
  import StatsCard from '@/components/Cards/StatsCard';

  // Tables
  import NewsService from "../../services/NewsService";
  import PageVisitsTable from "../Dashboard/PageVisitsTable";
  import SocialTrafficTable from "../Dashboard/SocialTrafficTable";

  export default {
    components: {
      BaseProgress,
      StatsCard,
      PageVisitsTable,
      SocialTrafficTable
    },
    data() {
      return {
        news: [],
        rows: 1,
        perPage: 12,
        currentPage: 1
      };
    },
    async mounted() {
      const response = await NewsService.index();
      this.news = response.results
      this.rows = response.count
    },
    methods: {
      async pageClick(e, page) {
        await this.$router.push('?page=' + page)
        const response = await NewsService.index(page);
        this.news = response.results
      }
    }
  };
</script>
<style>
.el-table .cell{
  padding-left: 0;
  padding-right: 0;
}
</style>
