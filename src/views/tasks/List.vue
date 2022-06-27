<template>
  <div>
    <base-header class="pb-6 pb-8 pt-5 pt-md-8 bg-gradient-success">
      <!-- Card stats -->
    </base-header>
    <b-container fluid class="mt--7">
      <b-row>
        <b-col>
          <template>
            <b-card no-body>
              <b-card-header class="border-0">
                <h3 class="mb-0">Yechimlar</h3>
              </b-card-header>

              <el-table class="table-responsive table"
                        header-row-class-name="thead-light"
                        :data="tasks">

                <el-table-column label="Id"
                                 prop="id"
                                 min-width="140px">
                  <template v-slot="{row}">
                    <router-link class="" :to="{ name: 'yechim', params: { id: row.id } }">{{row.id}}</router-link>
                  </template>
                </el-table-column>

                <el-table-column label="User"
                                 min-width="310px"
                                 prop="name">
                  <template v-slot="{row}">
                    <b-media no-body class="align-items-center">
                      <a href="#" class="avatar rounded-circle mr-3">
                        <img alt="Avatar" :src="row.user.avatar">
                      </a>
                      <b-media-body>
                        <span class="font-weight-600 name mb-0 text-sm">{{row.user.fullname || row.user.username}}</span>
                      </b-media-body>
                    </b-media>
                  </template>
                </el-table-column>
                <el-table-column label="Problem"
                                 prop="problem.title"
                                 min-width="140px">
                  <template v-slot="{row}">
                    <router-link :to="{ name: 'show-problem', params: { id: row.problem.id } }">{{row.problem.title}}</router-link>
                  </template>
                </el-table-column>

                <el-table-column label="Status"
                                 min-width="170px"
                                 prop="status_text">
                  <template v-slot="{row}">
                    <badge class="badge-dot mr-4" type="">
                      <i :class="`bg-${statusType(row.status)}`"></i>
                      <span class="status" :class="`text-${statusType(row.status)}`">{{row.status_text}}</span>
                    </badge>
                  </template>
                </el-table-column>
              </el-table>

              <b-card-footer class="py-4 d-flex justify-content-end">
                <b-pagination @page-click="pageClick"
                              align="center"
                              size="lg"
                              v-model="currentPage"
                              :total-rows="rows"
                              :per-page="perPage"
                              first-number
                ></b-pagination>
              </b-card-footer>
            </b-card>
          </template>
        </b-col>
      </b-row>
      <div class="mt-5"></div>
    </b-container>
  </div>
</template>
<script>
import { Table, TableColumn} from 'element-ui'
import TasksService from "@/services/TasksService";

export default {
  name: 'light-table',
  components: {
    [Table.name]: Table,
    [TableColumn.name]: TableColumn
  },
  data() {
    return {
      tasks: [],
      rows: 1,
      perPage: 12,
      currentPage: 1
    };
  },
  async mounted() {
    const response = await TasksService.index();
    this.tasks = response.results
    this.rows = response.count
  },
  methods: {
    async pageClick(e, page) {
      await this.$router.push('?page=' + page)
      const response = await TasksService.index(page);
      this.tasks = response.results
    },
    statusType(status){
      switch (status){
        case -2:
          return 'warning'
        case -1:
          return 'info';
        case 0:
          return 'danger';
        case 1:
          return 'success';
        case 2:
          return 'danger';
      }
      return '';
    }
  }
}
</script>
