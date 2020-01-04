<!-- 导航 -->
<template>
    <div id="home" class="flex">
        首页
        <button @click="logout"> 退出</button>
    </div>
</template>


<script>
// 导航列表
import { mapState } from 'vuex';
import { logout } from '@/api/user';
import reConfig from '@/reConfig';
export default {
    name: 'menuIndex',

    data () {
        return {
            menuList: this.$store.state.routeInfo || {},
            // menuList,
            isCollapse: false,
        };
    },

    methods: {
        async logout () {
            logout();
            this.$store.commit('setUserInfo', null);
            this.$store.commit('setRouteInfo', null);
            window.location.href = `${location.origin}/login`
        }
    },

    computed: {
        ...mapState(['globalLoading', 'userInfo'])
    }
};
</script>

<style lang="scss" scoped>
#home {
    .el-menu {
        border-right: 1px solid $basic;
    }
    .el-submenu {
        width: 200px;
    }
    .el-menu--collapse {
        .el-submenu {
            width: auto;
        }
    }
    .is-active .el-submenu__title i {
        color: $warning;
    }
    .el-submenu__title,
    .el-menu-item {
        &:hover i {
            color: $main;
        }
    }
    .el-menu-item [class^="el-icon-"],
    .el-submenu__title [class^="el-icon-"] {
        margin-right: 15px;
        font-size: 22px;
    }

    .left-menu {
        height: 100vh;
        overflow-y: scroll;
        overflow-x: hidden;
        background-color: $basic;

        &::-webkit-scrollbar {
            width: 0;
            height: 0;
        }
    }
    .content-container {
        height: 100vh;
        overflow: hidden;
        background-color: $white;

        .login-user {
            border-bottom: 2px solid $gray;
            box-shadow: 1px 1px 2px 2px $gray;
            padding: 10px;
            background-color: $white;
            z-index: 2001;

            .avatar {
                width: 45px;
                height: 45px;
                border-radius: 50%;
                vertical-align: middle;
            }
        }

        .router-box {
            height: calc(100vh - 65px);
            padding: 30px 20px;
            overflow-y: scroll;

            &::-webkit-scrollbar {
                width: 5px;
                height: 5px;
            }
            &::-webkit-scrollbar-thumb {
                background-color: $basic;
            }
        }
    }
}
</style>
