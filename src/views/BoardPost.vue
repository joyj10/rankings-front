<template>
    <div>
        <board-form title="글쓰기" type="board" img-path="/img/game24.jpg"></board-form>
    </div>
</template>

<script>
    import BoardForm from "../components/BoardForm";
    export default {
        name: "BoardPost",
        components: {BoardForm}
    }
</script>

<style scoped>

</style>