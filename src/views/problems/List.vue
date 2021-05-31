<template>
  <div>

    <base-header class="pb-6 pb-8 pt-5 pt-md-8 bg-gradient-success">
      <!-- Card stats -->
      <b-row>
        <b-col md="12" v-for="obj in problems" :key="obj.id">
          <b-card
              :title="obj.title"
              :img-src="obj.image"
              img-alt="Image"
              img-top
              tag="article"
              style=""
              class="mb-2"
          >

            <router-link class="btn btn-primary" :to="{ name: 'show-problem', params: { id: obj.id } }">Read</router-link>
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
import ProblemsService from "../../services/ProblemsService";
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
      problems: []
    };
  },
  async mounted() {
    const response = await ProblemsService.index();
    this.problems = response.results
  }
};
</script>
<style>
.el-table .cell{
  padding-left: 0;
  padding-right: 0;
}
</style>

