/**
 * 导航列表
 * @title: 一级目录
 * @icon: 图标
 * @path: 导航组件唯一标识；一级目录无跳转目标使用模块名作为path，子类目录使用路由访问路径作为path
 * @children: 二级目录数组 path 为跳转路径, 如需三级目录，二级应设置 type 为 'select', 再增加一个children 数组，三级目录数组设置同二级目录
 */
export default [{
        title: '用户管理',
        path: '/user',
        icon: 'el-icon-user-solid',
        children: [
            { title: '用户列表', path: '/user/userList' },
            { title: '预约列表', path: '/user/appointmentList' }
        ]
    },
    {
        title: '课程管理',
        icon: 'el-icon-notebook-2',
        path: '/course',
        children: [
            { title: '课程列表', path: '/course/courseList' },
            { title: '题库管理', path: '/course/subjectManage' },
            { title: '素材中心', path: '/course/materialManage' }
            // { title: '游戏模型',
            //     path: '/course/gameMode',
            //     type: 'select',
            //     children: [
            //         { title: '单击选择', path: '/course/gameMode/clickMode' },
            //         { title: '拖拉匹配', path: '/course/gameMode/dragMode' },
            //         { title: '滚动带', path: '/course/gameMode/rollingMode' },
            //         { title: '连线配对', path: '/course/gameMode/connectionMode' },
            //         { title: '拼图', path: '/course/gameMode/puzzleMode' }
            //     ]
            // }
        ]
    },
    {
        title: '商品管理',
        icon: 'el-icon-s-goods',
        path: '/goods',
        children: [
            { title: '商品列表', path: '/goods/goodsList' }
        ]

    },
    {
        title: '订单管理',
        icon: 'el-icon-s-order',
        path: '/order',
        children: [
            { title: '订单列表', path: '/order/orderList' }
        ]

    },
    {
        title: '运营管理',
        icon: 'el-icon-s-ticket',
        path: '/market',
        children: [
            { title: '优惠券管理', path: '/market/couponManage' },
            { title: '轮播图管理', path: '/market/bannerManage' },
        ]
    },
    {
        title: '系统管理',
        icon: 'el-icon-s-tools',
        path: '/systems',
        children: [
            { title: '权限管理', path: '/systems/permissions' },
            { title: '微信管理', path: '/systems/wechatManager' },
            { title: '菜单管理', path: '/systems/menuManager' },
            { title: '微信组管理', path: '/systems/wechatGroupManage' }
        ]
    }
];