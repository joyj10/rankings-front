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
    name: "Notice",
    components: {TopSection, compoTable},
    data() {
        return {
            items: [
                { no: 40, title: 'Dickerson', 작성자: 'Macdonald', 작성일: '2019-12-11' },
                { no: 21, title: 'Larsen', 작성자: 'Shaw', 작성일: '2019-12-11'  },
                { no: 89, title: 'Geneva', 작성자: 'Wilson', 작성일: '2019-12-11'  },
                { no: 38, title: 'Jami', 작성자: 'Carney', 작성일: '2019-12-11'  },
                { no: 40, title: 'Dickerson', 작성자: 'Macdonald', 작성일: '2019-12-11' },
                { no: 21, title: 'Larsen', 작성자: 'Shaw', 작성일: '2019-12-11'  },
                { no: 89, title: 'Geneva', 작성자: 'Wilson', 작성일: '2019-12-11'  },
                { no: 38, title: 'Jami', 작성자: 'Carney', 작성일: '2019-12-11'  },
                { no: 40, title: 'Dickerson', 작성자: 'Macdonald', 작성일: '2019-12-11' },
                { no: 21, title: 'Larsen', 작성자: 'Shaw', 작성일: '2019-12-11'  },
                { no: 89, title: 'Geneva', 작성자: 'Wilson', 작성일: '2019-12-11'  },
                { no: 38, title: 'Jami', 작성자: 'Carney', 작성일: '2019-12-11'  },
                { no: 40, title: 'Dickerson', 작성자: 'Macdonald', 작성일: '2019-12-11' },
                { no: 21, title: 'Larsen', 작성자: 'Shaw', 작성일: '2019-12-11'  },
                { no: 89, title: 'Geneva', 작성자: 'Wilson', 작성일: '2019-12-11'  },
                { no: 38, title: 'Jami', 작성자: 'Carney', 작성일: '2019-12-11'  },
            ]
        }
    }
}
</script>

<style scoped>

</style>
