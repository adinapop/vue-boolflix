<template>
    <main>

        <div class="cards-container container">
            <div class="row">

                <h1 class="p-0">ORIGINALI NETFLIX</h1>

                <!-- Input che vorrei rendere dinamica quando fai click sull'icona all'header -->
                <div class="search-container df p-0">
                    <input 
                    class="search-input" 
                    type="Search" 
                    placeholder="Search here your movie..." 
                    v-model="searchInput"
                    @keyup.enter="$emit('search', searchInput)">
                    <button class="search-button" @click="$emit('search', searchInput)">Search</button>

                </div>

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

    </main>
</template>

<script>
import Movies from "./Movies.vue"

export default {
    name: "Main",
    data() {
        return {
            searchInput: "",
        }
    },
    components: {
        Movies,
    },
    props: {
        popular: Array,
    }
}
</script>

<style lang="scss" scoped>
.cards-container {

    h1 {color: whitesmoke}

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
}



</style>