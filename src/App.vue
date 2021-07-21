<template>
  <div id="app">
    <!-- @send="sendComand"  -->
    <Header />
    <!-- se movies and series is empty, allora visualizzo popular -->
    <Main :popular="popular" :movies="movies" :series="series" @search="[searchMulti($event), searchMovie($event), searchSerie($event)]" />
    <!-- $event = $searchInput -->
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
      movies: [],
      series: [],
      type: "",
    }
  },

  created() {
    this.getApiUrl();
    this.callPopularApi();
  },

  methods: {

    getApiUrl() {
      return `https://api.themoviedb.org/3${this.type}?api_key=557ce10c821b70880c7de5a864524185&language=it-IT&page=1&query=${this.search}`
    },

    // function per richiamare l'API con i film più popolari
    callPopularApi() {
      this.type = "/movie/popular";
      axios.get(this.getApiUrl()).then((result) => {
        this.popular = result.data.results;
      });
    },

    searchMulti(searchInput) {
      this.type = "/search/multi";
      if(searchInput.length === 0) {
        return this.callPopularApi();
      }
    },

    searchMovie(searchInput) {
      this.type = "/search/movie";
      this.search = searchInput;
      return axios.get(this.getApiUrl()).then((result) => {
        this.movies = result.data.results;
      });
    },

    searchSerie(searchInput) {
      this.type = "/search/tv";
      this.search = searchInput;
      return axios.get(this.getApiUrl()).then((result) => {
        this.series = result.data.results;
      });
    },

  }
}
</script>

<style lang="scss">

@import "./style/app.scss";
@import url('https://fonts.googleapis.com/css2?family=Mukta&display=swap');
.none {display: none;}
.show {display: inline-block;}

</style>
