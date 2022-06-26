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
                <h3 class="mb-0">Foydalanuvchilar</h3>
              </b-card-header>

              <el-table class="table-responsive table"
                        header-row-class-name="thead-light"
                        :data="users"
                        primary-key="index">

                <el-table-column label="№"
                                 prop="id"
                                 min-width="140px">
                  <template slot-scope="scope">
                    <b-media-body>
                      <span class="font-weight-600 name mb-0 text-sm">{{scope.$index + 1}}</span>
                    </b-media-body>
                  </template>
                </el-table-column>

                <el-table-column label="User"
                                 min-width="310px"
                                 prop="name">
                  <template v-slot="{row}">
                    <b-media no-body class="align-items-center">
                      <a href="#" class="avatar rounded-circle mr-3">
                        <img alt="Avatar" :src="row.avatar">
                      </a>
                      <b-media-body>
                        <span class="font-weight-600 name mb-0 text-sm">{{row.fullname || row.username}}</span>
                      </b-media-body>
                    </b-media>
                  </template>
                </el-table-column>

                <el-table-column label="Ball"
                                 min-width="170px"
                                 prop="ball">
                  <template v-slot="{row}">
                    <b-media-body>
                      <span class="font-weight-600 name mb-0 text-sm">{{row.ball}}</span>
                    </b-media-body>
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
import UsersService from "@/services/UsersService";

export default {
  name: 'light-table',
  components: {
    [Table.name]: Table,
    [TableColumn.name]: TableColumn
  },
  data() {
    return {
      users: [],
      rows: 1,
      perPage: 12,
      currentPage: 1
    };
  },
  async mounted() {
    const response = await UsersService.index();
    this.users = response.results
    this.rows = response.count
  },
  methods: {
    async pageClick(e, page) {
      await this.$router.push('?page=' + page)
      const response = await UsersService.index(page);
      this.users = response.results
    },
  }
}
</script>
