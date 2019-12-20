<template>
    <div class="overflow-auto m-auto w-80">
        <div class="w-auto">
            <b-table hover borderless
                     head-variant="dark"
                     :fields="fields"
                     :items="items"
                     :per-page="perPage"
                     :current-page="currentPage"
            >
<!--                <template v-slot:cell(name)="data">-->
<!--                    <a href="/online">{{data.value}}</a>-->
<!--                </template>-->
                <template v-slot:cell(img)="data">
                    <img width="200px;" :src="data.value">
                </template>
                <template v-slot:cell(ranking)="data">
                    {{data.value}}위
                </template>
            </b-table>
        </div>
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
        name: "ListTable",
        components: {},
        props: {
            items: [],
            fields: [],
        },
        computed: {
            rows() {
                return this.items.length;
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
