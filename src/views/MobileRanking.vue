<template>
    <div>
        <img src="/img/game4.jpg" class="top-img">
        <div id="wrapper">
            <top-section icon="fa-mobile-phone" title="Mobile Game Ranking"></top-section>
            <list-table :items="gameList" :options="options"></list-table>
        </div>
    </div>

</template>

<script>
    import TopSection from "../components/TopSection";
    import Card from "../components/Card";
    import ListTable from "../components/ListTable";
    export default {
        name: "MobileGame",
        components: {ListTable, Card, TopSection},
        data() {
            return {
                gameList: [],
                options: [],
                // gameList: [
                //     {name: 'game1', company: 'com1', genre: '롤플레잉', age:'12세 이상', img: 'pic01.jpg', ranking: 1},
                //     {name: 'game2', company: 'com1', genre: '롤플레잉', age:'12세 이상', img: 'pic02.jpg', ranking: 2},
                //     {name: 'game3', company: 'com1', genre: '롤플레잉', age:'12세 이상', img: 'pic03.jpg', ranking: 3},
                //     {name: 'game4', company: 'com1', genre: '롤플레잉', age:'12세 이상', img: 'pic01.jpg', ranking: 4},
                //     {name: 'game5', company: 'com1', genre: '롤플레잉', age:'12세 이상', img: 'pic02.jpg', ranking: 5},
                //     {name: 'game6', company: 'com1', genre: '롤플레잉', age:'12세 이상', img: 'pic03.jpg', ranking: 6},
                //     {name: 'game7', company: 'com1', genre: '롤플레잉', age:'12세 이상', img: 'pic01.jpg', ranking: 7},
                //     {name: 'game8', company: 'com1', genre: '롤플레잉', age:'12세 이상', img: 'pic02.jpg', ranking: 8},
                //     {name: 'game2', company: 'com1', genre: '롤플레잉', age:'12세 이상', img: 'pic02.jpg', ranking: 2},
                //     {name: 'game3', company: 'com1', genre: '롤플레잉', age:'12세 이상', img: 'pic03.jpg', ranking: 3},
                //     {name: 'game4', company: 'com1', genre: '롤플레잉', age:'12세 이상', img: 'pic01.jpg', ranking: 4},
                //     {name: 'game5', company: 'com1', genre: '롤플레잉', age:'12세 이상', img: 'pic02.jpg', ranking: 5},
                //     {name: 'game6', company: 'com1', genre: '롤플레잉', age:'12세 이상', img: 'pic03.jpg', ranking: 6},
                //     {name: 'game7', company: 'com1', genre: '롤플레잉', age:'12세 이상', img: 'pic01.jpg', ranking: 7},
                //     {name: 'game8', company: 'com1', genre: '롤플레잉', age:'12세 이상', img: 'pic02.jpg', ranking: 139},
                //     {name: 'game1', company: 'com1', genre: '롤플레잉', age:'12세 이상', img: 'pic01.jpg', ranking: 1},
                //     {name: 'game2', company: 'com1', genre: '롤플레잉', age:'12세 이상', img: 'pic02.jpg', ranking: 2},
                //     {name: 'game3', company: 'com1', genre: '롤플레잉', age:'12세 이상', img: 'pic03.jpg', ranking: 3},
                //     {name: 'game4', company: 'com1', genre: '롤플레잉', age:'12세 이상', img: 'pic01.jpg', ranking: 4},
                //     {name: 'game5', company: 'com1', genre: '롤플레잉', age:'12세 이상', img: 'pic02.jpg', ranking: 5},
                //     {name: 'game6', company: 'com1', genre: '롤플레잉', age:'12세 이상', img: 'pic03.jpg', ranking: 6},
                //     {name: 'game7', company: 'com1', genre: '롤플레잉', age:'12세 이상', img: 'pic01.jpg', ranking: 7},
                //     {name: 'game8', company: 'com1', genre: '롤플레잉', age:'12세 이상', img: 'pic02.jpg', ranking: 8},
                //     {name: 'game2', company: 'com1', genre: '롤플레잉', age:'12세 이상', img: 'pic02.jpg', ranking: 2},
                //     {name: 'game3', company: 'com1', genre: '롤플레잉', age:'12세 이상', img: 'pic03.jpg', ranking: 3},
                //     {name: 'game4', company: 'com1', genre: '롤플레잉', age:'12세 이상', img: 'pic01.jpg', ranking: 4},
                //     {name: 'game5', company: 'com1', genre: '롤플레잉', age:'12세 이상', img: 'pic02.jpg', ranking: 5},
                //     {name: 'game6', company: 'com1', genre: '롤플레잉', age:'12세 이상', img: 'pic03.jpg', ranking: 6},
                //     {name: 'game7', company: 'com1', genre: '롤플레잉', age:'12세 이상', img: 'pic01.jpg', ranking: 7},
                //     {name: 'game8', company: 'com1', genre: '롤플레잉', age:'12세 이상', img: 'pic02.jpg', ranking: 123},
                // ]
            }
        },
        methods: {
            fetchMobileGame() {
                this.$axios.get("api/game/mobile")
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
        async created() {
            await this.fetchMobileGame();
            console.log("1111", this.gameList.length);
        },
    }
</script>

<style scoped>

</style>
