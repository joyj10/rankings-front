<template>
    <div id="wrapper">
        <section class="main items">
            <article class="item" v-for="item in itemList">
                <header>
                    <a :href="item.link" target="_blank"><img :src="`/img/${item.img}`" alt="" /></a>
                    <h3>{{item.name}}</h3>
                </header>
                <p>{{item.description}}</p>
                <ul class="actions">
                    <li><a :href="item.link" class="button" target="_blank">More</a></li>
                </ul>
            </article>
        </section>
    </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex';

export default {
    name: "mainItem",
    props: {
        itemList : [],
    },
    computed: {
        ...mapGetters(['getImagePath'])
    },
    methods: {
    }
}
</script>

<style scoped>

</style>
