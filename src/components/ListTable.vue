<template>
    <div class="overflow-auto m-auto w-80">
        <div v-if="options.length > 0" class="col-2 mb-2 float-right">
            <b-form-select
                    v-model="filter"
                    id="filterInput"
                    :options="options"
            ></b-form-select>
        </div>
        <div class="w-auto align-middle">
            <b-table hover borderless
                     tdClass="align-middle"
                     head-variant="dark"
                     :fields="fields"
                     :items="items"
                     :per-page="perPage"
                     :current-page="currentPage"
                     :filter="filter"
                     @filtered="onFiltered"
            >
                <template v-slot:table-colgroup="scope">
                    <col v-for="field in scope.fields"
                         :key="field.key"
                         :style="checkedWidth(field.key)">
                </template>
                <template v-slot:cell(image)="data">
                    <img width="180px;" :src="getImagePath(data.value)">
                </template>
                <template class="m-auto"  v-slot:cell(g_rank)="data">
                    <div class="align-right pt-3">
                        <b-card-title>
                            <span style="font-size: 45px;">{{data.value}}</span>
                            <span>위</span>
                        </b-card-title>
                    </div>
                </template>
                <template class="align-middle"  v-slot:cell(description)="data">
                    <a :href="data.value.link">
                        <div class="mt-4">
                            <b-card-sub-title>
                                <div class="mb-1" style="font-size: x-large">{{data.value.name}}</div>
                            </b-card-sub-title>
                            <b-card-text>
                                <div class="mt-0" style="font-size: medium">{{data.value.genre}} / {{data.value.age}} / {{data.value.company}}</div>
                            </b-card-text>
                        </div>
                    </a>
                </template>
            </b-table>
        </div>
        <div class="mt-4">
            <b-pagination
                    align="center"
                    :per-page="perPage"
                    :total-rows="totalRows"
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
            options: [],
        },
        computed: {
        },
        mounted() {
            // Set the initial number of items
            console.log(this.items)
            this.totalRows = this.items.length;
            console.log(this.items.length);
            console.log(this.totalRows)
        },
        data() {
            return{
                perPage: 10,
                currentPage: 1,
                totalRows: 1,
                fields: [
                    { key: 'g_rank', thStyle: {display: 'none'}},
                    { key: 'image', thStyle: {display: 'none'}},
                    { key: 'description', thStyle: {display: 'none'}, filterByFormatted: true},
                ],
                filter: null,
                // options: [
                //     { value: null, text: '전체'},
                //     { value: '롤플레잉', text: '롤플레잉'},
                //     { value: '아케이드', text: '아케이드'},
                //     { value: 'RPG', text: 'RPG'},
                //     { value: '퍼즐', text: '퍼즐'},
                // ],
            }
        },
        methods: {
            checkedWidth(col){
                if (col === "img") {
                    return { width: '200px'};
                } else if (col === "ranking") {
                    return { width: '170px'};
                }
            },
            onFiltered(filteredItems) {
                // Trigger pagination to update the number of buttons/pages due to filtering
                this.totalRows = filteredItems.length
                this.currentPage = 1
            },
            getImagePath(img) {
                return "/img/game/"+img;
            }
        },
    }
</script>

<style scoped>
    a {
        text-decoration: none;
        color: #343434;
    }
</style>
