<template>
    <div class="login-container" @keyup.enter.native="login">
        <div class="flex flex-column pt-20" style="width:400px;margin:auto">
            用户名: <input class="mb-10" v-model="loginForm.tel" />
            密码: <input class="mb-10" v-model="loginForm.password" />
            <button style="padding:0;height:30px;" class="fz-14" @click="login">登录</button>
        </div>

        <!-- <el-form ref="loginForm" :model="loginForm" :rules="loginRules" class="login-form" auto-complete="on" label-position="left">
            <div class="title-container">
                <h3 class="title">
                    {{title}}
                </h3>
            </div>

            <el-form-item prop="username" class="flex">
                <span class="svg-container">
                    <img :src="oss+'/userName.png'" alt="">
                </span>
                <el-input v-model="loginForm.username" name="username" type="text" auto-complete="on" class="flex-1" />
            </el-form-item>

            <el-form-item prop="password" class="flex">
                <span class="svg-container">
                    <img :src="oss+'/passWord.png'" alt="">
                </span>
                <el-input show-password name="password" auto-complete="on" @keyup.enter.native="handleLogin" class="flex-1" />
            </el-form-item>

            <el-button :loading="loading" type="primary" style="width:100%;margin-bottom:30px;" @click.native.prevent="handleLogin">
                {{ !loading ? '登录' : '登录中...' }}
            </el-button>
        </el-form> -->
    </div>
</template>

<script>
import { login } from '@/api/user'
export default {
    name: 'Login',
    data () {
        return {
            oss: 'https://resource.oss.yatiku.com/papaThinking/login',
            loginForm: {
                tel: '',
                password: ''
            },

            title: this.$route.meta.title || ''
        };
    },

    methods: {
        // 用户登录
        async login () {
            let params = this.loginForm;

            let { code, data, message } = await login(params)
            if (code == 200) {
                this.loading = false;
                this.$store.commit('setUserInfo', { 'username': params.tel });
                this.$router.push('/home');
            } else {
                this.loading = false;
                console.log(message);
            }
        }
    }
};
</script>

<style rel="stylesheet/scss" lang="scss">
$dark_gray: #889aa4;

.login-container {
    min-height: 100%;
    width: 100%;
    background-color: $basic;
    overflow: hidden;
    height: 100vh;
    .login-form {
        position: relative;
        width: 450px;
        max-width: 100%;
        padding: 160px 35px 0;
        margin: 0 auto;
        overflow: hidden;
        .el-form-item {
            .el-form-item__content {
                width: 100%;
                .el-input__inner {
                    flex: 1;
                }
            }
        }
    }

    .svg-container {
        text-align: center;
        padding-top: 7px;
        padding-left: 10px;
        color: $dark_gray;
        vertical-align: middle;
        width: 30px;
        display: inline-block;
        img {
            width: 20px;
        }
    }

    .title-container {
        position: relative;
        .title {
            font-size: 26px;
            color: $border;
            margin: 0px auto 40px auto;
            text-align: center;
            font-weight: bold;
            img {
                width: 50px;
                vertical-align: middle;
                margin-right: 5px;
            }
        }
    }
    .el-input {
        display: inline-block;
        height: 47px;
        width: 90%;
        input {
            background: transparent;
            border: 0px;
            -webkit-appearance: none;
            border-radius: 0px;
            padding: 12px 5px 12px 15px;
            color: $border;
            height: 47px;
            caret-color: $white;
            &:-webkit-autofill {
                box-shadow: 0 0 0px 1000px $basic inset !important;
                -webkit-text-fill-color: $white !important;
            }
        }
    }
    .el-form-item {
        border: 1px solid rgba(255, 255, 255, 0.1);
        background: rgba(0, 0, 0, 0.1);
        border-radius: 5px;
        color: #454545;
    }
}
</style>
