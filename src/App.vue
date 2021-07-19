<template>
  <div id="app">
    <Header />
    <Main :popular="popular" @search="searchMulti" />
  </div>
</template>

<script>
import axios from "axios";
import Header from "./components/Header.vue";
import Main from "./components/Main.vue";

export default {
  name: 'App',
  components: {
    Header,
    Main,
  },

  data: function() {
    return {
      popular: [],
    }
  },

  created() {
    this.callPopularApi();
  },

  // DA RIVEDERE
  methods: {
    // function per richiamare l'API con i film più popolari
    callPopularApi() {
      axios.get("https://api.themoviedb.org/3/movie/popular?api_key=557ce10c821b70880c7de5a864524185&language=it-IT&page=1")
      .then((result) => {this.popular = result.data.results;});
    },

    // faccio la nuova chiamata API tramite search dell'utente per cercare film o serie
    searchMulti(searchInput) {
      if(searchInput.length === 0) {
          return this.callPopularApi();
      }
      axios.get(`https://api.themoviedb.org/3/search/multi?api_key=557ce10c821b70880c7de5a864524185&query=${searchInput}`).then((result) => {
        this.popular = result.data.results;
      });
    },
  }
}
</script>

<style lang="scss">

@import "./style/app.scss";
@import url('https://fonts.googleapis.com/css2?family=Mukta&display=swap');
#app {
  background-color: $bg-color;
}

</style>
