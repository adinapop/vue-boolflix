<template>

    <main>

        <div class="cards-container container">

            <div class="row">
                <h1 class="p-0">ORIGINALI NETFLIX</h1>
                <div class="search-container df p-0" >
                    <input 
                    class="search-input" 
                    type="Search" 
                    placeholder="Search here your movie..." 
                    v-model="searchInput"
                    @keyup.enter="$emit('search', searchInput)">
                    <button class="search-button" @click="$emit('search', searchInput)">Search</button>
                </div>

            <div v-if="movies.length === 0 && series.length === 0">
                <h2>Popular</h2>
                <div class="popular-container df">
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
            </div>

            <div v-else>

                <h2>Movies</h2>
                <div class="movies-container df">
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

                <h2 class="mt-5">Series</h2>
                <div class="series-container df mb-5">
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
        popular: Array,
        movies: Array,
        series: Array,
    },
    data() {
        return {
            searchInput: "",
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
    }

    .popular-container, .movies-container, .series-container {
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