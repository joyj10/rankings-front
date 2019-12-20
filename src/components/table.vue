<template>
    <div class="overflow-auto m-auto w-80">
        <div class="w-auto">
            <b-table striped hover
                 head-variant="dark"
                 :items="items"
                 :per-page="perPage"
                 :current-page="currentPage"
            >
                <template v-slot:cell(title)="data">
                    <a href="/online">{{data.value}}</a>
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
    name: "table",
    components: {},
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
            perPage: 10,
            currentPage: 1,
        }
    }

}
</script>

<style scoped>

</style>
