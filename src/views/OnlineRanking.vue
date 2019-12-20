<template>
    <div id="wrapper">
        <top-section icon="fa-star" title="Online Game Ranking"></top-section>
        <card :game-list="gameList"></card>
    </div>
</template>

<script>
    import TopSection from "../components/TopSection";
    import Card from "../components/Card";
    export default {
        name: "OnlineGame",
        components: {Card, TopSection},
        data() {
            return {
                gameList: [
                    {name: 'game1', company: 'com1', genre: '롤플레잉', age:'12세 이상', img: 'pic01.jpg', ranking: 1},
                    {name: 'game2', company: 'com1', genre: '롤플레잉', age:'12세 이상', img: 'pic02.jpg', ranking: 2},
                    {name: 'game3', company: 'com1', genre: '롤플레잉', age:'12세 이상', img: 'pic03.jpg', ranking: 3},
                    {name: 'game4', company: 'com1', genre: '롤플레잉', age:'12세 이상', img: 'pic01.jpg', ranking: 4},
                    {name: 'game5', company: 'com1', genre: '롤플레잉', age:'12세 이상', img: 'pic02.jpg', ranking: 5},
                    {name: 'game6', company: 'com1', genre: '롤플레잉', age:'12세 이상', img: 'pic03.jpg', ranking: 6},
                    {name: 'game7', company: 'com1', genre: '롤플레잉', age:'12세 이상', img: 'pic01.jpg', ranking: 7},
                    {name: 'game8', company: 'com1', genre: '롤플레잉', age:'12세 이상', img: 'pic02.jpg', ranking: 8},
                ]
            }
        }
    }
</script>

<style scoped>

</style>
