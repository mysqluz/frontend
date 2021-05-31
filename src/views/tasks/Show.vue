<template>
  <div>
    <base-header class="pb-6 pb-8 pt-5 pt-md-8 bg-gradient-success">
      <!-- Card stats -->
    </base-header>
    <b-container fluid class="mt--7">
      <b-row>
        <b-col>
          <b-card no-body>
            <b-card-header class="border-0">
              <h3 class="mb-0">Task</h3>
            </b-card-header>

            <el-table class="table-responsive table"
                      header-row-class-name="thead-light"
                      :data="tasks">

              <el-table-column label="Id"
                               prop="id"
                               min-width="140px">
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
                      <span class="font-weight-600 name mb-0 text-sm">{{ row.user.fullname }}</span>
                    </b-media-body>
                  </b-media>
                </template>
              </el-table-column>
              <el-table-column label="Problem"
                               prop="problem.title"
                               min-width="140px">
                <template v-slot="{row}">
                  <router-link :to="{ name: 'show-problem', params: { id: row.problem.id } }">{{ row.problem.title }}
                  </router-link>
                </template>
              </el-table-column>

              <el-table-column label="Status"
                               min-width="170px"
                               prop="status_text">
                <template v-slot="{row}">
                  <badge class="badge-dot mr-4" type="">
                    <i :class="`bg-${statusType(row.status)}`"></i>
                    <span class="status" :class="`text-${statusType(row.status)}`">{{ row.status_text }}</span>
                  </badge>
                </template>
              </el-table-column>
            </el-table>
            <b-card-footer class="py-4 d-flex justify-content-end">
              <prism-editor v-if="code" class="my-editor" v-model="code" :highlight="highlighter" line-numbers readonly></prism-editor>
            </b-card-footer>
          </b-card>
        </b-col>
      </b-row>
      <div class="mt-5"></div>
    </b-container>
  </div>
</template>
<script>
import {Table, TableColumn} from 'element-ui'
import TasksService from "@/services/TasksService";
import { PrismEditor } from 'vue-prism-editor';
import 'vue-prism-editor/dist/prismeditor.min.css'; // import the styles somewhere

// import highlighting library (you can use any library you want just return html string)
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-sql';
import 'prismjs/themes/prism-tomorrow.css'; // import syntax highlighting styles
export default {
  name: 'light-table',
  components: {
    [Table.name]: Table,
    [TableColumn.name]: TableColumn,
    PrismEditor,
  },
  data() {
    return {
      tasks: [],
      code: null
    };
  },
  async mounted() {
    const response = await TasksService.show(this.$route.params.id);
    this.tasks = [response]
    if ('source' in response){
      this.code = response.source
    }
  },
  methods: {
    highlighter(code) {
      return highlight(code, languages.sql, 'markup'); // languages.<insert language> to return html with markup
    },

    statusType(status) {
      switch (status) {
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
<style>
/* required class */
.my-editor {
  /* we dont use `language-` classes anymore so thats why we need to add background and text color manually */
  /*background: #2d2d2d;*/
  color: #ccc;

  /* you must provide font-family font-size line-height. Example: */
  font-family: Fira code, Fira Mono, Consolas, Menlo, Courier, monospace;
  font-size: 14px;
  line-height: 1.5;
  padding: 5px;
  border-left: solid 10px;
}

/* optional class for removing the outline */
.prism-editor__textarea:focus {
  outline: none;
}
</style>