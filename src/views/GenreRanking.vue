<template>
    <div>
        <img src="/img/game3.jpg" class="top-img">
        <div id="wrapper">
            <top-section icon="fa-star" title="Genre Game Ranking"></top-section>
            <ListTable :items="gameList"></ListTable>
        </div>
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
                gameList: [
                    { img: '/img/pic01.jpg', ranking: 111, description: {name: 'game1', company: 'com1', genre: '롤플레잉', age:'12세 이상', link:"/notice"}},
                    { img: '/img/pic02.jpg', ranking: 2, description: {name: 'game2', company: 'com1', genre: '롤플레잉', age:'12세 이상', link:"/notice"}},
                    { img: '/img/pic03.jpg', ranking: 3, description: {name: 'game3', company: 'com1', genre: '아케이드', age:'12세 이상', link:"/notice"}},
                    { img: '/img/pic04.jpg', ranking: 4, description: {name: 'game1', company: 'com1', genre: '아케이드', age:'12세 이상', link:"/notice"}},
                    { img: '/img/pic01.jpg', ranking: 5, description: {name: 'game1', company: 'com1', genre: '아케이드', age:'12세 이상', link:"/notice"}},
                    { img: '/img/pic02.jpg', ranking: 6, description: {name: 'game3', company: 'com1', genre: '퍼즐', age:'12세 이상', link:"/notice"}},
                    { img: '/img/pic04.jpg', ranking: 7, description: {name: 'game4', company: 'com1', genre: '롤플레잉', age:'12세 이상', link:"/notice"}},
                    { img: '/img/pic01.jpg', ranking: 8, description: {name: 'game5', company: 'com1', genre: '퍼즐', age:'12세 이상', link:"/notice"}},
                    { img: '/img/pic02.jpg', ranking: 9, description: {name: 'game6', company: 'com1', genre: '롤플레잉', age:'12세 이상', link:"/notice"}},
                    { img: '/img/pic03.jpg', ranking: 10, description: {name: 'game7', company: 'com1', genre: '롤플레잉', age:'12세 이상', link:"/notice"}},
                    { img: '/img/pic01.jpg', ranking: 11, description: {name: 'game9', company: 'com1', genre: '롤플레잉', age:'12세 이상', link:"/notice"}},
                    { img: '/img/pic02.jpg', ranking: 12, description: {name: 'game10', company: 'com1', genre: '롤플레잉', age:'12세 이상', link:"/notice"}},
                    { img: '/img/pic03.jpg', ranking: 13, description: {name: 'game11', company: 'com1', genre: '롤플레잉', age:'12세 이상', link:"/notice"}},
                    { img: '/img/pic01.jpg', ranking: 14, description: {name: 'game12', company: 'com1', genre: '퍼즐', age:'12세 이상', link:"/notice"}},
                ]
            }
        }
    }
</script>

<style scoped>

</style>
