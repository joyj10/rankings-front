<template>
    <div class="navibar">
    <b-navbar toggleable="lg" type="dark" variant="dark" fixed="top">
        <b-navbar-brand href="#" style="font-size: 23px;"><router-link :to="{name: 'main'}">G Rankings</router-link></b-navbar-brand>

        <b-navbar-toggle target="nav-collapse" class="font-sm"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav class="font-13">
                <b-nav-item><router-link :to="{name: 'notice'}">NOTICE</router-link></b-nav-item>
                <b-nav-item><router-link :to="{name: 'online'}">ONLINE</router-link></b-nav-item>
                <b-nav-item><router-link :to="{name: 'mobile'}">MOBILE</router-link></b-nav-item>
                <b-nav-item><router-link :to="{name: 'genre'}">GENRE</router-link></b-nav-item>
            </b-navbar-nav>

            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto">
                <b-nav-item-dropdown text="Lang" right>
                    <b-dropdown-item href="#" class="font-sm">English</b-dropdown-item>
                    <b-dropdown-item href="#" class="font-sm">Korea</b-dropdown-item>
                </b-nav-item-dropdown>

                <b-nav-item href="#">User</b-nav-item>
            </b-navbar-nav>
        </b-collapse>
    </b-navbar>
    </div>
</template>

<script>
    export default {
        name: "Navibar"
    }
</script>

<style scoped>
    a {
        text-decoration: none;
        color: #eeeeee;
    }
</style>
