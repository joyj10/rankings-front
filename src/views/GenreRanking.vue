<template>
    <div id="wrapper">
        <top-section icon="fa-star" title="Genre Game Ranking"></top-section>
        <ListTable :items="gameList"></ListTable>
    </div>

</template>

<script>
    import ListTable from "../components/ListTable";
    import TopSection from "../components/TopSection";

    export default {
        name: "GenreRanking",
        components: {TopSection, ListTable},
        data() {
            return {
                fields: [
                    { key: 'name', sortable: true },
                    { key: 'img', sortable: true },
                    { key: 'ranking', sortable: true },
                    { key: 'company', sortable: true },
                ],
                gameList: [
                    {name: 'game1', company: 'com1', genre: '롤플레잉', age:'12세 이상', img: '/img/pic01.jpg', ranking: 1},
                    {name: 'game2', company: 'com1', genre: '롤플레잉', age:'12세 이상', img: 'pic02.jpg', ranking: 2},
                    {name: 'game3', company: 'com1', genre: '롤플레잉', age:'12세 이상', img: 'pic03.jpg', ranking: 3},
                    {name: 'game4', company: 'com1', genre: '롤플레잉', age:'12세 이상', img: 'pic01.jpg', ranking: 4},
                    {name: 'game5', company: 'com1', genre: '롤플레잉', age:'12세 이상', img: 'pic02.jpg', ranking: 5},
                    {name: 'game6', company: 'com1', genre: '롤플레잉', age:'12세 이상', img: 'pic03.jpg', ranking: 6},
                    {name: 'game7', company: 'com1', genre: '롤플레잉', age:'12세 이상', img: 'pic01.jpg', ranking: 7},
                    {name: 'game8', company: 'com1', genre: '롤플레잉', age:'12세 이상', img: 'pic02.jpg', ranking: 8},
                    {name: 'game1', company: 'com1', genre: '롤플레잉', age:'12세 이상', img: 'pic01.jpg', ranking: 1},
                    {name: 'game2', company: 'com1', genre: '롤플레잉', age:'12세 이상', img: 'pic02.jpg', ranking: 2},
                    {name: 'game3', company: 'com1', genre: '롤플레잉', age:'12세 이상', img: 'pic03.jpg', ranking: 3},
                    {name: 'game4', company: 'com1', genre: '롤플레잉', age:'12세 이상', img: 'pic01.jpg', ranking: 4},
                    {name: 'game5', company: 'com1', genre: '롤플레잉', age:'12세 이상', img: 'pic02.jpg', ranking: 5},
                    {name: 'game6', company: 'com1', genre: '롤플레잉', age:'12세 이상', img: 'pic03.jpg', ranking: 6},
                    {name: 'game7', company: 'com1', genre: '롤플레잉', age:'12세 이상', img: 'pic01.jpg', ranking: 7},
                    {name: 'game8', company: 'com1', genre: '롤플레잉', age:'12세 이상', img: 'pic02.jpg', ranking: 8},
                    {name: 'game1', company: 'com1', genre: '롤플레잉', age:'12세 이상', img: 'pic01.jpg', ranking: 1},
                    {name: 'game2', company: 'com1', genre: '롤플레잉', age:'12세 이상', img: 'pic02.jpg', ranking: 2},
                    {name: 'game3', company: 'com1', genre: '롤플레잉', age:'12세 이상', img: 'pic03.jpg', ranking: 3},
                    {name: 'game4', company: 'com1', genre: '롤플레잉', age:'12세 이상', img: 'pic01.jpg', ranking: 4},
                    {name: 'game5', company: 'com1', genre: '롤플레잉', age:'12세 이상', img: 'pic02.jpg', ranking: 5},
                    {name: 'game6', company: 'com1', genre: '롤플레잉', age:'12세 이상', img: 'pic03.jpg', ranking: 6},
                    {name: 'game7', company: 'com1', genre: '롤플레잉', age:'12세 이상', img: 'pic01.jpg', ranking: 7},
                    {name: 'game8', company: 'com1', genre: '롤플레잉', age:'12세 이상', img: 'pic02.jpg', ranking: 8},
                    {name: 'game1', company: 'com1', genre: '롤플레잉', age:'12세 이상', img: 'pic01.jpg', ranking: 1},
                    {name: 'game2', company: 'com1', genre: '롤플레잉', age:'12세 이상', img: 'pic02.jpg', ranking: 2},
                    {name: 'game3', company: 'com1', genre: '롤플레잉', age:'12세 이상', img: 'pic03.jpg', ranking: 3},
                    {name: 'game4', company: 'com1', genre: '롤플레잉', age:'12세 이상', img: 'pic01.jpg', ranking: 4},
                    {name: 'game5', company: 'com1', genre: '롤플레잉', age:'12세 이상', img: 'pic02.jpg', ranking: 5},
                    {name: 'game6', company: 'com1', genre: '롤플레잉', age:'12세 이상', img: 'pic03.jpg', ranking: 6},
                    {name: 'game7', company: 'com1', genre: '롤플레잉', age:'12세 이상', img: 'pic01.jpg', ranking: 7},
                    {name: 'game8', company: 'com1', genre: '롤플레잉', age:'12세 이상', img: 'pic02.jpg', ranking: 8},
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
