<template>
  <div id="app">
    <router-view name="header" />
    <div class="wrapper">
      <router-view @authenticated="setAuthenticated" />
    </div>
    <router-view name="footer" />
  </div>
</template>
<script>
export default {
  data() {
    return {
      authenticated: false,
    }
  },
  mounted() {
    if (!this.authenticated) {
      // this.$router.replace({ name: 'login' });
    }
  },
  methods: {
    setAuthenticated(status) {
      this.authenticated = status;
    },
    logout() {
      this.authenticated = false;
    }
  }
};
</script>
