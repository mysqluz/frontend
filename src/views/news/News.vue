<template>
  <div>

    <base-header class="pb-6 pb-8 pt-5 pt-md-8 bg-gradient-success">
      <!-- Card stats -->
      <b-row>
        <b-col xl="3" md="6" v-for="obj in news">
          <b-card
              :title="obj.title"
              :img-src="obj.image"
              img-alt="Image"
              img-top
              tag="article"
              style="max-width: 20rem;"
              class="mb-2"
          >

            <b-button href="javascript:;" variant="primary">Read</b-button>
          </b-card>
        </b-col>
      </b-row>
    </base-header>

    <!--Charts-->

  </div>
</template>
<script>
  // Charts
  import * as chartConfigs from '@/components/Charts/config';
  import LineChart from '@/components/Charts/LineChart';
  import BarChart from '@/components/Charts/BarChart';

  // Components
  import BaseProgress from '@/components/BaseProgress';
  import StatsCard from '@/components/Cards/StatsCard';

  // Tables
  import NewsService from "../../services/NewsService";
  import PageVisitsTable from "../Dashboard/PageVisitsTable";
  import SocialTrafficTable from "../Dashboard/SocialTrafficTable";

  export default {
    components: {
      LineChart,
      BarChart,
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
    async mounted() {
      const response = await NewsService.index();
      this.news = response.results
    }
  };
</script>
<style>
.el-table .cell{
  padding-left: 0px;
  padding-right: 0px;
}
</style>
