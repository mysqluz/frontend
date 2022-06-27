<template>
  <nav class="navbar navbar-vertical fixed-left navbar-expand-md navbar-light bg-white" id="sidenav-main">
    <div class="container-fluid">

      <!--Toggler-->
      <navbar-toggle-button @click.native="showSidebar">

      </navbar-toggle-button>
      <router-link class="navbar-brand" to="/">
        <img :src="logo" class="navbar-brand-img" alt="...">
      </router-link>

      <slot name="mobile-right">
        <ul class="nav align-items-center d-md-none">
<!--          <base-dropdown class="nav-item" menu-on-right tag="li" title-tag="a">
            <a slot="title-container" class="nav-link nav-link-icon" href="#" role="button"
               aria-haspopup="true" aria-expanded="false">
              <i class="ni ni-bell-55"></i>
            </a>

            <a class="dropdown-item" href="#">Action</a>
            <a class="dropdown-item" href="#">Another action</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#">Something else here</a>
          </base-dropdown>-->
          <base-dropdown class="nav-item" menu-on-right tag="li" title-tag="a">
            <template v-if="!store.getters['isLoggedIn']">
              <a href="#" class="nav-link pr-0" @click.prevent slot="title-container">
                <b-media no-body class="align-items-center">
                  <span class="avatar avatar-sm rounded-circle">
                    <img alt="Image placeholder" src="img/login2.png">
                  </span>
                </b-media>
              </a>
              <template>
                <b-dropdown-header class="noti-title">
                  <h6 class="text-overflow m-0">Avtorizatsiya!</h6>
                </b-dropdown-header>
                <b-dropdown-item href="/login">
                  <i class="ni ni-lock-circle-open"></i>
                  <router-link to="/login"><span>Kirish</span></router-link>
                </b-dropdown-item>
                <b-dropdown-item href="/register">
                  <i class="ni ni-single-02"></i>
                  <router-link to="/register"><span>Ro`yxatdan o`tish</span></router-link>
                </b-dropdown-item>

              </template>
            </template>
            <template v-else>
              <a href="#" class="nav-link pr-0" @click.prevent slot="title-container">
                <b-media no-body class="align-items-center">
                  <span class="avatar avatar-sm rounded-circle">
                    <img alt="Image placeholder" :src="store.getters['getUser'].avatar">
                  </span>
                  <b-media-body class="ml-2 d-none d-lg-block">
                    <span class="mb-0 text-sm  font-weight-bold"> {{ store.getters["getUser"].fullname ? store.getters["getUser"].fullname : store.getters["getUser"].username }} </span>
                  </b-media-body>
                </b-media>
              </a>
              <template>
                <div class=" dropdown-header noti-title">
                  <h6 class="text-overflow m-0">Welcome!</h6>
                </div>
                <div class="dropdown-divider"></div>
                <b-dropdown-item href="#!">
                  <i class="ni ni-user-run"></i>
                  <router-link to="/logout"><span>Chiqish</span></router-link>
                </b-dropdown-item>
              </template>
            </template>
          </base-dropdown>
        </ul>
      </slot>
      <slot></slot>
      <div v-show="$sidebar.showSidebar" class="navbar-collapse collapse show" id="sidenav-collapse-main">

        <div class="navbar-collapse-header d-md-none">
          <div class="row">
            <div class="col-6 collapse-brand">
              <router-link to="/">
                <img :src="logo">
              </router-link>
            </div>
            <div class="col-6 collapse-close">
              <navbar-toggle-button @click.native="closeSidebar"></navbar-toggle-button>
            </div>
          </div>
        </div>

        <ul class="navbar-nav">
          <slot name="links">
          </slot>
        </ul>
        <!--Divider-->
        <hr class="my-3">
      </div>
    </div>
  </nav>
</template>
<script>
import NavbarToggleButton from '@/components/NavbarToggleButton'

export default {
  name: 'sidebar',
  components: {
    NavbarToggleButton
  },
  props: {
    logo: {
      type: String,
      default: 'img/brand/mysql1.png',
      description: 'Sidebar app logo'
    },
    autoClose: {
      type: Boolean,
      default: true,
      description: 'Whether sidebar should autoclose on mobile when clicking an item'
    }
  },
  provide() {
    return {
      autoClose: this.autoClose
    };
  },
  computed: {
    routeName() {
      const { name } = this.$route;
      return this.capitalizeFirstLetter(name);
    }
  },
  data() {
    return {
      store: this.$store,
    };
  },
  methods: {
    capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    },
    closeSidebar() {
      this.$sidebar.displaySidebar(false)
    },
    showSidebar() {
      this.$sidebar.displaySidebar(true)
    },
    logout() {
      console.log(1)
      this.$store.dispatch('logout');
    }
  },
  beforeDestroy() {
    if (this.$sidebar.showSidebar) {
      this.$sidebar.showSidebar = false;
    }
  }
};
</script>
