<template>
  <div id="app" class="m-auto">
    <b-navbar toggleable="md" type="dark" variant="info">
      <div class="container">
        <b-navbar-brand href="#">Gradebook</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="ml-auto">
            <div>
              <b-button-group>
                <b-button variant="light"><router-link class="link" to="/">Home</router-link></b-button>
                <b-button variant="light"><router-link class="link" to="/all-students">Students</router-link></b-button>
                <b-button variant="light"><router-link class="link" to="/all-assignments">Assignments</router-link></b-button>
              </b-button-group>
            </div>
          </b-navbar-nav>
        </b-collapse>
      </div>
    </b-navbar>
  <router-view />
  </div>
</template>

<script>
export default {

}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.link,
.link:hover {
  text-decoration: none;
  color:#555;
}
</style>
