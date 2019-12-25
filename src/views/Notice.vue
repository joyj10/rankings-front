<template>
    <div id="wrapper">
        <top-section icon="fa-newspaper-o" title="NOTICE"></top-section>
        <table-show :items="items"></table-show>
    </div>
</template>

<script>
import TopSection from "../components/TopSection";
import TableShow from "../components/TableShow";
import axios from 'axios';

export default {
    name: "Notice",
    components: {TableShow, TopSection},
    data() {
        return {
            items: [],
            // items: [
            //     { no: 40, title: 'Dickerson', content: '내용입니다.!!!!!!', writer: 'Macdonald', date: '2019-12-11' },
            //     { no: 21, title: 'Larsen', content: '내용입니다.!!!!!!',  writer: 'Shaw', date: '2019-12-11'  },
            //     { no: 89, title: 'Geneva', content: '내용입니다.!!!!!!', writer: 'Wilson', date: '2019-12-11'  },
            //     { no: 38, title: 'Jami', content: '내용입니다.!!!!!!', writer: 'Carney', date: '2019-12-11'  },
            //     { no: 40, title: 'Dickerson', content: '내용입니다.!!!!!!', writer: 'Macdonald', date: '2019-12-11' },
            //     { no: 21, title: 'Larsen', content: '내용입니다.!!!!!!', writer: 'Shaw', date: '2019-12-11'  },
            //     { no: 89, title: 'Geneva', content: '내용입니다.!!!!!!', writer: 'Wilson', date: '2019-12-11'  },
            //     { no: 38, title: 'Jami', content: '내용입니다.!!!!!!', writer: 'Carney', date: '2019-12-11'  },
            //     { no: 40, title: 'Dickerson',content: '내용입니다.!!!!!!',  writer: 'Macdonald', date: '2019-12-11' },
            //     { no: 21, title: 'Larsen', content: '내용입니다.!!!!!!', writer: 'Shaw', date: '2019-12-11'  },
            //     { no: 89, title: 'Geneva', content: '내용입니다.!!!!!!', writer: 'Wilson', date: '2019-12-11'  },
            //     { no: 38, title: 'Jami', content: '내용입니다.!!!!!!', writer: 'Carney', date: '2019-12-11'  },
            //     { no: 40, title: 'Dickerson', content: '내용입니다.!!!!!!', writer: 'Macdonald', date: '2019-12-11' },
            //     { no: 21, title: 'Larsen', content: '내용입니다.!!!!!!', writer: 'Shaw', date: '2019-12-11'  },
            //     { no: 89, title: 'Geneva',content: '내용입니다.!!!!!!',  writer: 'Wilson', date: '2019-12-11'  },
            //     { no: 38, title: 'Jami',content: '내용입니다.!!!!!!',  writer: 'Carney', date: '2019-12-11'  },
            // ]
        }
    },
    methods: {
        fetchNotice() {
            axios.get('api/notice')
                .then((response) => {
                    console.log(response);
                    this.items = response.data;
                })
                .catch((e)=>{
                    console.log("Error! :", e)
                })
        }
    },
    mounted() {
        this.fetchNotice();
    }
}
</script>

<style scoped>

</style>
