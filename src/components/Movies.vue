<template>
    <div class="movies-album col-3 p-0">

        <div class="img-container">
            <img :src="getCompletePoster(image)" alt="Poster" >
        </div>

        <div class="hover-container">
            <div class="title"> {{title}} </div>
            <div class="original-title">Title: {{original_title}} </div>
            <div class="original_language">
                Original Language:
                <flag :iso="getLangFlag(original_language)" />
            </div>

            <!-- v-for in range (guarda vuejs.org) -->
            <div class="vote-average">
                <!-- stampo solo il numero di stelle che corrispono al voto dal data -->
                <i class="fas fa-star" v-for="star in star" :key="star"></i>
                <!-- come metto le altre vuote? differenza?             
                faccio la differenza tra il numero massimo (5) e quelle piene, 
                così rimangono vuote quelle del risultato -->
                <i class="far fa-star" v-for="(star, index) in (5 - star)" :key="index"></i>
            </div>
        </div>
    </div>

</template>

<script>

export default {
name: "Movies",
components: {},
props: {
    image: String,
    title: String,
    original_title: String,
    original_language: String,
    vote_average: Number,
},
computed: {
    // la metto qui perché è un'operazione che non altera il voto originale e 
    // non deve ripetersi come nel method, ma solo al riavvio
    star() {
        // prova a fare non arrotondata 
        return Math.floor(this.vote_average / 2);
    },
},
methods: {
    getCompletePoster(incompleteImg) {
        return `http://image.tmdb.org/t/p/w500/${incompleteImg}`;
        },
    getLangFlag(language) {
        if(language === "en") {
            return "us"
        } else {
            return language;
        }
        },
    }
}
</script>

<style lang="scss" scoped>
.movies-album {
    position: relative;
    cursor: pointer;

    .hover-container, .info-hover-container {display: none;}

    &:hover .hover-container {opacity: 1;}

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

            // PERCHE' NON FUNZIONA???
            // .vote-average {
            //     &:first-child {color: gold;}
            //     }

            .vote-average {
                .fas {color: gold;}
            }
        }
    }
}

</style>