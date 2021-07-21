<template>

    <main>

        <div class="cards-container container">

            <div class="row">
                <h1 class="p-0">HOME</h1>
                <div class="search-container p-0" v-if="flagShow">
                    <div class="df" v-if="closeButton">
                        <input 
                        class="search-input" 
                        type="Search" 
                        placeholder="Search here your movie..." 
                        v-model="searchInput"
                        @keyup.enter="$emit('search', searchInput)">
                        <button class="search-button" @click="$emit('search', searchInput)">Search</button>
                    </div>
                    <div class="close-button-container"><button @click="$emit('close')" class="close-button" v-if="closeButton">CHIUDI LA BARRA DI RICERCA</button></div>
                </div>
                    
            <div v-if="movies.length === 0 && series.length === 0">

                <h2 class="mt-2">I film più popolari su Netflix</h2>
                <div class="movie-container df">
                    <Movies 
                        v-for="movie in popular"
                        :key="movie.id"
                        :title="movie.title"
                        :original_title="movie.original_title"
                        :original_language="movie.original_language"
                        :vote_average="movie.vote_average"
                        :getCompletePoster="movie.poster_path"
                        :image="movie.poster_path"
                    />
                </div>

                <h2 class="mt-5">I titoli del momento</h2>
                <div class="movie-container df mb-5">
                    <Movies 
                        v-for="movie in topRatedMovies"
                        :key="movie.id"
                        :title="movie.title"
                        :original_title="movie.original_title"
                        :original_language="movie.original_language"
                        :vote_average="movie.vote_average"
                        :getCompletePoster="movie.poster_path"
                        :image="movie.poster_path"
                    />
                </div>

                <h2>Le serie TV più popolari su Netflix</h2>
                <div class="movie-container df">
                    <Movies 
                        v-for="serie in popularSeries"
                        :key="serie.id"
                        :name="serie.name"
                        :original_name="serie.original_name"
                        :original_language="serie.original_language"
                        :vote_average="serie.vote_average"
                        :getCompletePoster="serie.poster_path"
                        :image="serie.poster_path"
                    />
                </div>

                <h2 class="mt-5">Le serie TV del momento</h2>
                <div class="movie-container mb-5 df">
                    <Movies 
                        v-for="serie in topRatedSeries"
                        :key="serie.id"
                        :name="serie.name"
                        :original_name="serie.original_name"
                        :original_language="serie.original_language"
                        :vote_average="serie.vote_average"
                        :getCompletePoster="serie.poster_path"
                        :image="serie.poster_path"
                    />
                </div>
            </div>

            <div v-else>

                <h2>Film</h2>
                <div class="movie-container df">
                    <Movies 
                        v-for="movie in movies"
                        :key="movie.id"
                        :title="movie.title"
                        :original_title="movie.original_title"
                        :original_language="movie.original_language"
                        :vote_average="movie.vote_average"
                        :getCompletePoster="movie.poster_path"
                        :image="movie.poster_path"
                    />
                </div>

                <h2 class="mt-5">Serie</h2>
                <div class="movie-container df mb-5">
                    <Movies 
                        v-for="serie in series"
                        :key="serie.id"
                        :name="serie.name"
                        :original_name="serie.original_name"
                        :original_language="serie.original_language"
                        :vote_average="serie.vote_average"
                        :getCompletePoster="serie.poster_path"
                        :image="serie.poster_path"
                    />
                </div>

            </div>

            </div>
        </div>

    </main>
</template>

<script>
import Movies from "./Movies.vue"

export default {
    name: "Main",
    components: {
        Movies,
    },
    props: {
        popularSeries: Array,
        popular: Array,
        topRatedMovies: Array,
        movies: Array,
        series: Array,
        topRatedSeries: Array,
        flagShow: Boolean,
        closeButton: Boolean,
    },
    data() {
        return {
            searchInput: "",
            showSearchBar: false,
        }
    },
}
</script>

<style lang="scss" scoped>

.cards-container {

    h1, h2 {color: whitesmoke}

    .search-container {
        .search-input {
            flex-grow: 1;
            border: 1px solid lightslategray;
            border-radius: 15px;
            background-color: #1b1b1b;
            padding: 3px;
            margin-bottom: 12px;
            color: white;
            outline: none;

            &::placeholder {
                color: whitesmoke;
                padding-left: 6px;
                vertical-align: middle;
                font-weight: bold;
            }

            &:hover {
                background-color: rgba(255, 255, 255, 0.2);
                color: black;
                border: none;
                font-weight: normal;

                &::placeholder {color: black;}
            }
        }

        .search-button {
            background-color: #1b1b1b;
            border: 1px solid lightslategray;
            border-radius: 15px;
            margin-bottom: 12px;
            padding: 3px 24px;
            font-weight: bold;
            color: white;

            &:hover {
                background-color: rgba(255, 255, 255, 0.2);
                color: black;
                border: none;
            }
        }

        .close-button-container {
            text-align: end;

            .close-button {
                background-color: #1b1b1b;
                border: none;
                font-size: 12px;
                color: #555;
                font-weight: bold;
                text-align: end;

                &:hover {
                    text-decoration: underline;
                    color: white;
                }
            }
        }
    }

    .movie-container {
        overflow-y: auto;

        &::-webkit-scrollbar {
            width: 6px;
        }

        &::-webkit-scrollbar-track {
            background: #1b1b1b; 
            border-radius: 12px;
        }
        
        &::-webkit-scrollbar-thumb {
            background: #242424; 
            border-radius: 12px;
        }
        
        &::-webkit-scrollbar-thumb:hover {
            background: #555; 
        }
    }

}



</style>