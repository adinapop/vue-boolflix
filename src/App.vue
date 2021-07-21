<template>
  <div id="app">
    <Header @send="showSearchBar" />
    <Main :flagShow="flagShow" :closeButton="closeButton" :popular="popular" :movies="movies" :series="series" :topRatedMovies="topRatedMovies" :topRatedSeries="topRatedSeries" :popularSeries="popularSeries" @search="[searchMulti($event), searchMovie($event), searchSerie($event)]" @close="closeSearchBar"/>
    <Loader v-if="popular.length === 0 && topRatedMovies.length === 0 && popularSeries.length === 0 && topRatedSeries.length === 0"/>
    <!-- $event = $searchInput -->
  </div>
</template>

<script>
import axios from "axios";
import Header from "./components/Header.vue";
import Main from "./components/Main.vue";
import Loader from "./components/Loader.vue"

export default {
  name: 'App',
  components: {
    Header,
    Main,
    Loader,
  },

  data: function() {
    return {
      popular: [],
      movies: [],
      series: [],
      topRatedMovies: [],
      popularSeries: [],
      topRatedSeries: [],
      type: "",
      flagShow: false,
      closeButton: true,
    }
  },

  created() {
    this.getPopularMovie();
    this.getTopRated();
    this.getPopularSeries();
    this.getTopRatedSeries();
  },

  methods: {

    getApiUrl() {
      return `https://api.themoviedb.org/3${this.type}?api_key=557ce10c821b70880c7de5a864524185&language=it-IT&page=1&query=${this.search}`
    },

    // function per richiamare l'API con i film più popolari
    getPopularMovie() {
      this.type = "/movie/popular";
      axios.get(this.getApiUrl()).then((result) => {
        this.popular = result.data.results;
      });
    },

    // not showing data on page
    getTopRated() {
      this.type = "/movie/top_rated";
      axios.get(this.getApiUrl()).then((result) => {
        this.topRatedMovies = result.data.results;
      });
    },

    getPopularSeries() {
      this.type = "/tv/popular";
      axios.get(this.getApiUrl()).then((result) => {
        this.popularSeries = result.data.results;
      });
    },

    getTopRatedSeries() {
      this.type = "/tv/top_rated";
      axios.get(this.getApiUrl()).then((result) => {
        this.topRatedSeries = result.data.results;
      });
    },

    // PROVA
    // condition() {
    //   if(this.searchInput.length === 0) {
    //     //se la lunghezza dell'input è vuoto, svuota anche gli array
    //     this.movies = [];
    //     this.series = [];
    //   } else { // altrimenti se è diverso da zero, quindi pieno, fai chiamata
    //     return chiamata serie o movie
    //   }
    // },

    searchMulti(searchInput) {
      this.type = "/search/multi";
      if(searchInput.length === 0) {
        return this.getPopularMovie();
      }
    },

    searchMovie(searchInput) {
      this.type = "/search/movie";
      this.search = searchInput;
      return axios.get(this.getApiUrl())
      .then((result) => {
        this.movies = result.data.results;
      }).catch((error) => {
        console.log(`erore dall'api: ${error}`);
        this.movies = [];
      });
    },

    searchSerie(searchInput) {
      this.type = "/search/tv";
      this.search = searchInput;
      return axios.get(this.getApiUrl()).then((result) => {
        this.series = result.data.results;
      }).catch((error) => {
        console.log(`erore dall'api: ${error}`);
        this.series = [];
      });
    },

    showSearchBar() {
      this.flagShow = true;
    },

    closeSearchBar() {
      this.closeButton = false;
    }

  }
}
</script>

<style lang="scss">

@import "./style/app.scss";
@import url('https://fonts.googleapis.com/css2?family=Mukta&display=swap');
.none {display: none;}
.show {display: inline-block;}

</style>
