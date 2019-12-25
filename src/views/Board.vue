<template>
    <div id="wrapper">
<!--        <b-button><router-link to="/board/post">POST</router-link></b-button>-->
        <top-section icon="fa-newspaper-o" title="Board"></top-section>
        <write type="board"></write>
        <table-show :items="items"></table-show>
    </div>
</template>

<script>
import TopSection from "../components/TopSection";
import TableShow from "../components/TableShow";
import Write from "../components/Write";
import axios from 'axios';

export default {
    name: "board",
    components: {Write, TableShow, TopSection},
    data() {
        return {
            items: []
        }
    },
    methods: {
        fetchBoard() {
            axios.get('api/board/list')
            .then((response) => {
                console.log(response);
                this.items = response.data;
            })
            .catch((e) => {
                console.log("Error:", e)
            })
        }
    },
    mounted() {
        this.fetchBoard();
    }
}
</script>

<style scoped>

</style>
