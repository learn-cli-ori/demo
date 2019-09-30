<template>
    <keep-alive>
        <router-view></router-view>
    </keep-alive>
</template>

<script>
export default {
    name: 'App'
};
</script>

<style>
html,
body {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-size: 16px;
}
</style>
