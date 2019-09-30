<template>
    <section>
        <button @click="test">接口测试</button>
    </section>
</template>
<script>
import { test } from '@/api/test'
export default {
    data () {
        return {
            testData:[]
        }
    },

    methods: {
        test () {
            test().then((res) => {
                console.log(res)
            }).catch((e) => {

            })
        }

    }
}
</script>
<style lang="scss" scoped>
</style>