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
                        <b-card-text class="m-3 mb-4">
                            {{row.item.content}}
                        </b-card-text>
                        <hr>
                        <div v-if = "row.item.image !=null" class="mt-3 text-center">
                            <img :src="getImagePath(row.item.image)" style="width: 90%"><br/>
                        </div>
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
        items: {
            type: Array,
            deafult: () => []
        },
    },
    computed: {
      rows() {
          return this.items.length;
      }
    },
    data() {
        return{
            fields: [
                { key: 'id', label: 'No.', sortable: true, sortDirection: 'desc' },
                { key: 'title', label: '제목', sortable: true },
                { key: 'writer', label: '작성자', sortable: true },
                { key: 'created_at', label: '작성일', sortable: true },
                { key: 'actions', label: '상세' }
            ],
            perPage: 10,
            currentPage: 1,
        }
    },
    methods: {
        getImagePath(img) {
            return "/img/"+img;
        }
    }

}
</script>

<style scoped>
</style>
