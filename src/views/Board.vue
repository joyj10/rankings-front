<template>
    <div id="wrapper">
        <top-section icon="fa-newspaper-o" title="NOTICE"></top-section>
        <compoTable :items="items"/>
    </div>
</template>

<script>
import compoTable from "../components/table";
import TopSection from "../components/TopSection";
export default {
    name: "board",
    components: {TopSection, compoTable},
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
