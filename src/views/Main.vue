<template>
    <div class="main">
        <mainHeader></mainHeader>
        <bannerText></bannerText>
        <mainItem></mainItem>
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
        components:  {mainItem, mainHeader,bannerText, mainText}
    }
</script>

<style scoped>

</style>
