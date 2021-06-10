<template>
  <div>

    <base-header class="pb-6 pb-8 pt-5 pt-md-8 bg-gradient-success">
      <!-- Card stats -->
      <b-row>
        <b-col md="12">
          <b-card
              :title="problem.title"
              :img-src="problem.image"
              img-alt="Image"
              img-top
              tag="article"
              style=""
              class="mb-2"
          >

            <b-card-text v-html="problem.content">

            </b-card-text>

            <small class="ni ni-money-coins"> {{ problem.ball }}</small>
            <span>Author: </span>
            <a v-bind:href="problem.author.url" v-if="problem.author">{{ problem.author.username }}</a>
            <span v-else>loading...</span>

          </b-card>
        </b-col>
        <b-col md="12">
          <b-card
              class="mb-2"
          >

            <b-card-text>
              <prism-editor class="my-editor" v-model="source" :highlight="highlighter" line-numbers></prism-editor>
            </b-card-text>

            <button class="btn btn-primary" @click="submit">Submit</button>
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
import ProblemsService from "../../services/ProblemsService";
import TasksService from "../../services/TasksService";
import { PrismEditor } from 'vue-prism-editor';
import 'vue-prism-editor/dist/prismeditor.min.css'; // import the styles somewhere

// import highlighting library (you can use any library you want just return html string)
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-sql';
import 'prismjs/themes/prism-tomorrow.css'; // import syntax highlighting styles

export default {
  components: {
    BaseProgress,
    StatsCard,
    PageVisitsTable,
    SocialTrafficTable,
    PrismEditor
  },
  data() {
    return {
      problem: [],
      source: '',
    };
  },
  mounted() {

  },
  methods: {
   async submit() {
        if (!this.$store.getters['isLoggedIn']) {
            this.$router.push('/login');
            return;
        }
      const data = {
        source: this.source,
        problem: this.problem.id
      }
      const response = await TasksService.submit(data);
      console.log(response);
      if (response.error !== 1)
        await this.$router.push('/tasks');
      else
        alert(response.message);
    },
    highlighter(code) {
      return highlight(code, languages.sql, 'markup'); // languages.<insert language> to return html with markup
    },
  },
  async created() {
    this.problem = await ProblemsService.show(this.$route.params.id);
  },
};
</script>
<style>
.el-table .cell{
  padding-left: 0;
  padding-right: 0;
}
.ace_editor.ace-chrome, .ace_gutter-active-line, .ace_text-input {
  height: 200px !important;
  font-size: 16px !important;
}
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
   border: solid 2px;
   border-left: solid 10px;
 }

/* optional class for removing the outline */
.prism-editor__textarea:focus {
  outline: none;
}
</style>
