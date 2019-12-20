<template>
    <div class="mt-0">
        <section id="intro" class="main pt-3">
            <span :class="iconClass"></span>
            <h1 class="text-center mt-3">{{title}}</h1>
        </section>
    </div>
</template>

<script>
    export default {
        name: "topSection",
        props: {
            icon: {
                type: String,
                value: null,
            },
            title: {
                type: String,
                value: null,
            }
        },
        mounted() {
            this.iconClass.push(this.icon);
        },
        data() {
            return {
                iconClass: ['icon', 'major-sm']
            }
        }
    }
</script>

<style scoped>

</style>
