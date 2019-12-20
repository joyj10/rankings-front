<template>
    <div>
        <!-- card -->
        <div class="mt-4" v-for="game in gameList">
            <b-card :img-src="`/img/${game.img}`" img-width="200" img-alt="Card image" img-left class="mb-3">
                <div class="">
                    <b-card-title class="d-inline-block align-right align-middle mr-5" style="width: 140px;">
                        <span style="font-size: 50px;">{{game.ranking}}</span>위
                    </b-card-title>
                    <div class="d-inline-block align-middle">
                        <b-card-sub-title>
                            <div class="mb-1" style="font-size: x-large">{{game.name}}</div>
                        </b-card-sub-title>
                        <b-card-text>
                            <div class="m-0">{{game.genre}} / {{game.age}} / {{game.company}}</div>
                        </b-card-text>
                    </div>

                </div>
            </b-card>
        </div>
        <!--pagination-->
        <div class="mt-4">
            <b-pagination
                    align="center"
                    :per-page="perPage"
                    :total-rows="rows"
                    :current-page="currentPage"
                    v-model="currentPage"
            ></b-pagination>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Card",
        props: {
            gameList: []
        },
        computed: {
            rows() {
                return this.gameList.length;
            }
        },
        data() {
            return{
                perPage: 10,
                currentPage: 1,
            }
        }
    }
</script>

<style scoped>
</style>
