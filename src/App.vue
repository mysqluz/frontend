<template>
  <router-view></router-view>
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
