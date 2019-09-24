<template>
    <div class="animal">
        <span>{{ animal.name }}</span>
    </div>
</template>

<script>
    export default {
        name: "Animal",
        props: ['animal']
    }
</script>

<style scoped lang="less">
    .animal {
        display: flex;
        justify-content: center;
        align-items: center;

        cursor: pointer;
        width: 100%;
        padding: 10px;
        box-sizing: border-box;
        border-radius: 10px;

        font-size: 24px;
        font-family: 'Oswald', sans-serif;

        background: #f2f2f2;
        color: #333;
        box-shadow: 0 0 5px #bdbdbd;

        transition: 0.2s;
    }
</style>