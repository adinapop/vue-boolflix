<template>
    <main>

        <div class="cards-container container">
            <!-- Input che vorrei rendere dinamica quando fai click sull'icona all'header -->
            <input type="Search" placeholder="Search" v-model="Search">
            <button>Search</button>

            <h1>ORIGINALI NETFLIX</h1>

            <div class="row">
                <Movies 
                    v-for="movie in movies"
                    :key="movie.ids"
                    :title="movie.title"
                    :original_title="movie.original_title"
                    :original_language="movie.original_language"
                    :vote_average="movie.vote_average"
                />
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
        movies: Array,
    }
}
</script>

<style lang="scss" scoped>
h1 {color: whitesmoke}


</style>