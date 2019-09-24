<template>
    <div class="animals">
        <div class="block">
            <draggable class="animals-list" :list="listAnimalsFirst" group="animals">
                    <animal v-for="element in listAnimalsFirst"
                            :animal="element"
                            :key="element.id"/>
            </draggable>
            <div v-if="info">
                {{ listAnimalsFirst }}
            </div>
        </div>
        <div class="block">
            <draggable class="animals-list" :list="listAnimalsSecond" group="animals">
                    <animal v-for="element in listAnimalsSecond"
                            :animal="element"
                            :key="element.id"/>
            </draggable>
            <div v-if="info">
                {{ listAnimalsSecond }}
            </div>
        </div>
        <div class="block">
            <span>Доп. <input type="checkbox" v-model="info"></span>
        </div>
    </div>
</template>

<script>
    import draggable from 'vuedraggable';
    import Animal from "./Animal";

    export default {
        name: 'AnimalsList',
        components: {
            Animal,
            draggable,
        },
        data () {
            return {
                info: false,
                listAnimalsFirst: [
                    {
                        id: 0,
                        name: 'Лев'
                    },
                    {
                        id: 1,
                        name: 'Слон'
                    },
                    {
                        id: 2,
                        name: 'Бегемот'
                    },
                    {
                        id: 3,
                        name: 'Жираф'
                    },
                    {
                        id: 4,
                        name: 'Кенгуру'
                    },
                    {
                        id: 5,
                        name: 'Крокодил'
                    },
                    {
                        id: 6,
                        name: 'Шимпанзе'
                    },
                ],
                listAnimalsSecond: [

                ]
            }
        },
    }
</script>

<style scoped lang="less">
    .animals {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-gap: 10px;

        padding: 10px;

        & .animals-list {
            display: grid;
            grid-template-columns: 1fr;
            grid-auto-rows: 80px;
            grid-gap: 10px;

            padding: 5px;

            min-height: 80px;
            border: 2px solid #bfbfbf;
            border-radius: 10px;
        }
    }
</style>
