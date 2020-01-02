<template>
    <section>
        <p class="f-10">测试</p>
        <button @click="test" class="f-10">接口测试</button>
    </section>
</template>
<script>
import { test,test_post } from '@/api/test'
export default {
    data () {
        return {
            testData: [],
            msg: ''
        }
    },

    methods: {
        async test () {
            let t = await test_post({sex:this.msg});
            console.log(t);
        }

    }
}
</script>

<style lang="scss" scoped>

.f-10 {
    font-size: 10px;
    animation-delay: 400ms;
}
</style>