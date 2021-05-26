<template>
  <div>

    <base-header class="pb-6 pb-8 pt-5 pt-md-8 bg-gradient-success">
      <!-- Card stats -->
      <b-row>
        <b-col md="12">
          <b-card
              :title="news.title"
              :img-src="news.image"
              img-alt="Image"
              img-top
              tag="article"
              style=""
              class="mb-2"
          >

            <b-card-text v-html="news.content">

            </b-card-text>

            <small class="fa fa-eye"> {{ news.views }}</small>

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
import NewsService from "../../services/NewsService";

export default {
    components: {
      BaseProgress,
      StatsCard,
      PageVisitsTable,
      SocialTrafficTable
    },
    data() {
      return {
        news: []
      };
    },
    mounted() {

    },
    async created() {
      console.log('kjdkjhsbkdcj')
      const response = await NewsService.show(this.$route.params.slug);
      this.news = response;
      console.log(response);
    }
  };
</script>
<style>
.el-table .cell{
  padding-left: 0;
  padding-right: 0;
}
</style>
