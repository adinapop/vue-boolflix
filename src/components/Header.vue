<template>
    <header>
        <div class="header-content">

            <div class="info-header df">
                <div class="logo-container">
                    LOGO
                </div>
                <div class="info-content df">
                    <div><a href="#">Menu</a></div>
                    <div><a href="#">Serie TV</a></div>
                    <div><a href="#">Film</a></div>
                    <div><a href="#">Originali</a></div>
                    <div><a href="#">Aggiunti di recente</a></div>
                    <div><a href="#">La mia lista</a></div>
                </div>
            </div>

            <div class="account-header df">
                <!-- emit -->
                <div><button>SEARCH</button></div>
                <div><a href="#">BAMBINI</a></div>
                <div>BELL</div>
                <div class="img-account">
                    IMG Account ^
                </div>

                
            </div>
        </div>
    </header>
</template>

<script>
export default {
    name: "Header"
}
</script>

<style lang="scss" scoped>
.header-content {
    color: white;
    display: flex;
    justify-content: space-between;
    padding: 24px 12px;

    .logo-container {
        margin-right: 12px;
    }

    .info-content > div, .account-header > div {
        padding: 0 6px;
    }
}
</style>