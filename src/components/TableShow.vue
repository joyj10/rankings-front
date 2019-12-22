<template>
    <div class="overflow-auto m-auto w-80">
        <div class="w-auto">
            <b-table striped hover
                 head-variant="dark"
                 :items="items"
                 :per-page="perPage"
                 :fields="fields"
                 :current-page="currentPage"
            >
                <template v-slot:cell(actions)="row">
                    <b-button size="sm" variant="outline-primary" @click="row.toggleDetails">
                        {{ row.detailsShowing ? 'Hide' : 'Detail' }}
                    </b-button>
                </template>

                <template v-slot:row-details="row">
                    <b-card>
                        <ul>
                            <li v-for="(value, key) in row.item" :key="key">{{ key }}: {{ value }}</li>
                        </ul>
                    </b-card>
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
import Write from "./Write";
export default {
    name: "tableShow",
    components: {Write},
    props: {
        items: [],
    },
    computed: {
      rows() {
          return this.items.length;
      }
    },
    data() {
        return{
            fields: [
                { key: 'no', label: 'No.', sortable: true, sortDirection: 'desc' },
                { key: 'title', label: '제목', sortable: true },
                { key: 'writer', label: '작성자', sortable: true },
                { key: 'date', label: '작성일', sortable: true },
                { key: 'actions', label: '상세' }
            ],
            perPage: 10,
            currentPage: 1,
        }
    }

}
</script>

<style scoped>
</style>
