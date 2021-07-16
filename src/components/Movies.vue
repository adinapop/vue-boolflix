<template>
    <div class="movies-album col-4 p-0">

        <div class="img-container"></div>

        <div class="hover-container">
            <div class="title"> {{title}} </div>
            <div class="original-title">Title: {{original_title}} </div>
            <div class="original_language">Language: {{original_language}} </div>
            <div class="vote-average">Vote: {{vote_average}} </div>
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
        height: 450px;
        background-image: url("https://image.tmdb.org/t/p/w342/hQq8xZe5uLjFzSBt4LanNP7SQjl.jpg");
        background-repeat: no-repeat;
        background-size: 100%;
    }

    &:hover {

        .hover-container {
            display: inline-block;
            position: absolute; 
            bottom: 0; 
            background: rgba(0, 0, 0, 0.6);
            color: #f1f1f1; 
            width: 100%;
            padding: 24px;
            text-align: center;

            .title {
                font-size: 30px;
                font-weight: bold;
                font-style: italic;
                border-bottom: 1px solid gray;
            }

            .original-title, .original_language, .vote-average {
                font-size: 15px;
                color: whitesmoke;
            }
        }
    }
}

</style>