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
                <div class="search-button"><button><i class="fa fa-search"></i></button></div>
                <div><a href="#">BAMBINI</a></div>
                <div class="notification-button"><i class="fa fa-bell"></i></div>
                <div class="img-account">AVATAR</div>
                <span class="down"><i class="fa fa-sort-down"></i></span>
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

    .account-header {
        .search-button {
            button {
                background-color: #1b1b1b;
                color: white;
                border: none;
            }
        }

        .notification-button, .down {
            &:hover {
                cursor: pointer;
            }
        }
    }
}
</style>