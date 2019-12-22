<template>
    <div class="main">
        <mainHeader></mainHeader>
        <bannerText></bannerText>
        <div class="text-center mt-5 p-4" style="background-color: lightgray">
            <h2>Recommend Games</h2>
        </div>
        <mainItem
            :itemList = "itemList"
        />
        <h1>!!!!</h1>
        <mainText></mainText>
    </div>
</template>

<script>
import mainHeader from "@/components/MainHeader.vue";
import mainText from "@/components/MainText.vue";
import bannerText from "@/components/BannerText.vue";
import mainItem from "@/components/MainItem.vue";

export default {
    name: "main",
    components:  {mainItem, mainHeader,bannerText, mainText},
    data() {
        return {
            itemList: [
                {
                    id: 1,
                    name: 'Game Name1',
                    img: 'pic01.jpg',
                    description: '장르, 연령, 제작사',
                    link: 'http://www.naver.com'
                },
                {
                    id: 2,
                    name: 'Game Name2',
                    img: 'pic02.jpg',
                    description: '장르, 연령, 제작사',
                    link: 'http://www.naver.com'
                },
                {
                    id: 3,
                    name: 'Game Name3',
                    img: 'pic03.jpg',
                    description: '장르, 연령, 제작사',
                    link: 'http://www.naver.com'
                },
                {
                    id: 4,
                    name: 'Game Name4',
                    img: 'pic04.jpg',
                    description: '장르, 연령, 제작사',
                    link: 'http://www.naver.com'
                },
            ],
        }
    },
    methods: {

    }
}
</script>

<style scoped>

</style>
