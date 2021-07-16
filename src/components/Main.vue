<template>
    <main>

        <div class="cards-container container">

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


</style>