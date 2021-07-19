<template>
    <div class="movies-album col-3 p-0">

        <div class="img-container">
            <img :src="getCompletePoster(image)" alt="prova">
        </div>

        <div class="hover-container">
            <div class="title"> {{title}} </div>
            <div class="original-title">Title: {{original_title}} </div>
            <div class="original_language">
                Language: {{original_language}}
                <img :src="getLangFlag(original_language)" />
            </div>

            <!-- v-for in range (guarda vuejs.org) -->
            <div class="vote-average">
                <!-- stampo solo il numero di stelle che corrispono al voto dal data -->
                <i class="fas fa-star" v-for="star in star" :key="star"></i>
                <!-- come metto le altre vuote? differenza? -->
            </div>
        </div>
    </div>

</template>

<script>


export default {
    name: "Movies",
    props: {
        image: String,
        title: String,
        original_title: String,
        original_language: String,
        vote_average: Number,
    },
    computed: {
        // la metto qui perché è un'operazione che non altera il voto originale e non deve ripetersi come nel method, ma solo al riavvio
        star() {
            return Math.round(this.vote_average / 2);
        }
    },
    methods: {
        getCompletePoster(incompleteImg) {
            return `http://image.tmdb.org/t/p/w500/${incompleteImg}`;
        },
        //NOT WORKING
        getLangFlag(language) {
            // con require si spacca prorpio
            return `../assets/flags/${language}.svg`;
        },
    }
}
</script>

<style lang="scss" scoped>
.movies-album {
    position: relative;
    cursor: pointer;

    .hover-container, .info-hover-container {display: none;}

    &:hover .hover-container {
        opacity: 1;
    }

    .img-container {
        
        img {width: 100%;}
    }

    &:hover {

        .hover-container {
            display: inline-block;
            position: absolute; 
            bottom: 0; 
            background: rgba(0, 0, 0, 0.8);
            color: #f1f1f1; 
            width: 100%;
            padding: 24px;
            text-align: center;

            .title {
                font-size: 24px;
                font-weight: bold;
                font-style: italic;
                border-bottom: 1px solid gray;
            }

            .original-title, .original_language, .vote-average {
                font-size: 15px;
                color: whitesmoke;
            }

            .vote-average {color: gold;}
        }
        
    }
}

</style>