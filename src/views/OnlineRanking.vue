<template>
    <div>
        <img src="/img/game1.jpg" class="top-img">
        <div id="wrapper">
            <top-section icon="fa-star" title="Online Game Ranking"></top-section>
            <list-table :items="gameList" :options="options"></list-table>
        </div>
    </div>
</template>

<script>
import TopSection from "../components/TopSection";
import ListTable from "../components/ListTable";
import axios from "axios"

export default {
    name: "OnlineGame",
    components: {ListTable, TopSection},
    data() {
        return {
            gameList: {
                type: Array,
            },
            options: {
                type: Array,
            },
            // options: [
            //     { value: null, text: '전체'},
            //     { value: '롤플레잉', text: '롤플레잉'},
            //     { value: '아케이드', text: '아케이드'},
            //     { value: 'RPG', text: 'RPG'},
            //     { value: '퍼즐', text: '퍼즐'},
            // ],
            // gameList: [
            //     {name: 'game1', company: 'com1', genre: '롤플레잉', age:'12세 이상', img: 'pic01.jpg', ranking: 1},
            //     {name: 'game2', company: 'com1', genre: '롤플레잉', age:'12세 이상', img: 'pic02.jpg', ranking: 2},
            //     {name: 'game3', company: 'com1', genre: '롤플레잉', age:'12세 이상', img: 'pic03.jpg', ranking: 3},
            //     {name: 'game4', company: 'com1', genre: '롤플레잉', age:'12세 이상', img: 'pic01.jpg', ranking: 4},
            //     {name: 'game5', company: 'com1', genre: '롤플레잉', age:'12세 이상', img: 'pic02.jpg', ranking: 5},
            //     {name: 'game6', company: 'com1', genre: '롤플레잉', age:'12세 이상', img: 'pic03.jpg', ranking: 6},
            //     {name: 'game7', company: 'com1', genre: '롤플레잉', age:'12세 이상', img: 'pic01.jpg', ranking: 7},
            //     {name: 'game8', company: 'com1', genre: '롤플레잉', age:'12세 이상', img: 'pic02.jpg', ranking: 8},
            // ]
        }
    },
    methods: {
        fetchOnlineGame() {
            axios.get("api/game/online")
                .then((response) => {
                    console.log(response);
                    this.gameList = response.data;
                    }
                )
                .catch((e) => {
                    console.log("Error : ", e);
                })
        }
    },
    mounted() {
        this.fetchOnlineGame();
    }
}
</script>

<style scoped>

</style>
