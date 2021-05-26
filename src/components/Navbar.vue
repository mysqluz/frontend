<template>
  <div class="nav-bar">
    <nav class="navbar navbar-expand-lg navbar-light bg-white nav-1">
      <div class="container mw-0 px-3">
        <a href="" class="navbar-brand">
          <img src="../assets/logo.png" alt="" height="30" class="d-inline-block align-top">
        </a>
        <button class="navbar-toggler">
          <span class="navbar-toggler-icon">

          </span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <router-link :to = "{ name: 'news'}" exact>News</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>
<style scoped>
  a {
    color: #000;
  }
</style>
