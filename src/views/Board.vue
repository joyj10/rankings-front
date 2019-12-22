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
export default {
    name: "board",
    components: {Write, TableShow, TopSection},
    data() {
        return {
            items: [
                { no: 40, title: 'Dickerson', content: '내용입니다.!!!!!!', writer: 'Macdonald', date: '2019-12-11' },
                { no: 21, title: 'Larsen', content: '내용입니다.!!!!!!',  writer: 'Shaw', date: '2019-12-11'  },
                { no: 89, title: 'Geneva', content: '내용입니다.!!!!!!', writer: 'Wilson', date: '2019-12-11'  },
                { no: 38, title: 'Jami', content: '내용입니다.!!!!!!', writer: 'Carney', date: '2019-12-11'  },
                { no: 40, title: 'Dickerson', content: '내용입니다.!!!!!!', writer: 'Macdonald', date: '2019-12-11' },
                { no: 21, title: 'Larsen', content: '내용입니다.!!!!!!', writer: 'Shaw', date: '2019-12-11'  },
                { no: 89, title: 'Geneva', content: '내용입니다.!!!!!!', writer: 'Wilson', date: '2019-12-11'  },
                { no: 38, title: 'Jami', content: '내용입니다.!!!!!!', writer: 'Carney', date: '2019-12-11'  },
                { no: 40, title: 'Dickerson',content: '내용입니다.!!!!!!',  writer: 'Macdonald', date: '2019-12-11' },
                { no: 21, title: 'Larsen', content: '내용입니다.!!!!!!', writer: 'Shaw', date: '2019-12-11'  },
                { no: 89, title: 'Geneva', content: '내용입니다.!!!!!!', writer: 'Wilson', date: '2019-12-11'  },
                { no: 38, title: 'Jami', content: '내용입니다.!!!!!!', writer: 'Carney', date: '2019-12-11'  },
                { no: 40, title: 'Dickerson', content: '내용입니다.!!!!!!', writer: 'Macdonald', date: '2019-12-11' },
                { no: 21, title: 'Larsen', content: '내용입니다.!!!!!!', writer: 'Shaw', date: '2019-12-11'  },
                { no: 89, title: 'Geneva',content: '내용입니다.!!!!!!',  writer: 'Wilson', date: '2019-12-11'  },
                { no: 38, title: 'Jami',content: '내용입니다.!!!!!!',  writer: 'Carney', date: '2019-12-11'  },
            ]
        }
    }
}
</script>

<style scoped>

</style>
