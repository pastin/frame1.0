<template>
  <div id="app">
    <el-row class="container">
      <el-col :span="24" class="header">
        <!-- <el-col :span="10" class="logo" :class="collapsed?'logo-collapse-width':'logo-width'">
          {{collapsed?'':sysName}}
        </el-col>
        <el-col :span="10">
          <div class="tools" @click.prevent="collapse">
            <i class="fa fa-align-justify"></i>
          </div>
        </el-col> -->
        <el-col :span="4" class="userinfo">
          <el-dropdown trigger="hover">
            <span class="el-dropdown-link userinfo-inner"><img :src="this.sysUserAvatar" /> {{sysUserName}}</span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>我的消息</el-dropdown-item>
              <el-dropdown-item>设置</el-dropdown-item>
              <el-dropdown-item divided @click.native="logout">退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-col>
      </el-col>
    </el-row>
    <el-container style="height: 500px; border: 1px solid #eee">
      <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
        <el-menu :default-openeds="['1', '3']" :router="true">
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-message"></i>导航一
            </template>
              <el-menu-item index="/activePublic">表格1</el-menu-item>
              <el-menu-item index="/table2">表格2</el-menu-item>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-menu"></i>导航二
            </template>
            <el-menu-item-group>
              <el-menu-item index="/echarts">echarts</el-menu-item>
              <el-menu-item index="2-2">选项2</el-menu-item>
            </el-menu-item-group>
           
          </el-submenu>
          <!-- <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-setting"></i>导航三
            </template>

          </el-submenu> -->
        </el-menu>
      </el-aside>
      <section class="content-container">
				<div class="grid-content bg-purple-light">
					<el-col :span="24" class="breadcrumb-container">
						<strong class="title">{{$route.name}}</strong>
						<el-breadcrumb separator="/" class="breadcrumb-inner">
							<el-breadcrumb-item v-for="item in $route.matched" :key="item.path">
								<!-- {{ item.name }} -->
							</el-breadcrumb-item>
						</el-breadcrumb>
					</el-col>
					<el-col :span="24" class="content-wrapper">
						<transition name="fade" mode="out-in">
							<router-view></router-view>
						</transition>
					</el-col>
				</div>
			</section>
      <!-- <el-container>
        <transition name="fade" mode="out-in">
					<router-view></router-view>
        </transition>
      </el-container> -->
    </el-container>
  </div>
</template>

<script>
export default {
  name: "app",
  data()  {
    return {
      sysUserAvatar: '',
      sysUserName: 'xys'
    }
  }
};
</script>

<style>
body {
  margin: 0;
}
.container .header {
  height: 60px;
  line-height: 60px;
  background: #20a0ff;
  color: #fff;
}
.container .header .userinfo {
  text-align: right;
  padding-right: 35px;
  float: right;
}
.container .header .userinfo .userinfo-inner {
  cursor: pointer;
  color: #fff;
}
.container .header .userinfo .userinfo-inner img {
  width: 40px;
  height: 40px;
  border-radius: 20px;
  margin: 10px 0px 10px 10px;
  float: right;
}
.container .header .logo {
  height: 60px;
  font-size: 22px;
  padding-left: 20px;
  padding-right: 20px;
  border-color: rgba(238, 241, 146, 0.3);
  border-right-width: 1px;
  border-right-style: solid;
}
.container .header .logo img {
  width: 40px;
  float: left;
  margin: 10px 10px 10px 18px;
}
.container .header .logo .txt {
  color: #fff;
}
.container .header .logo-width {
  width: 230px;
}
.container .header .logo-collapse-width {
  width: 60px;
}
.container .header .tools {
  padding: 0px 23px;
  width: 14px;
  height: 60px;
  line-height: 60px;
  cursor: pointer;
}
#app {
  min-width: 1200px;
  margin: 0 auto;
  font-family: "Helvetica Neue", "PingFang SC", Arial, sans-serif;
}
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
}
.content-container {
  flex: 1;
  overflow-y: scroll;
  padding: 20px;
}
.content-container .breadcrumb-container .title {
  width: 200px;
  float: left;
  color: #475669;
}
.content-container .breadcrumb-container .breadcrumb-inner {
  float: right;
}
.content-container .content-wrapper {
  background-color: #fff;
  box-sizing: border-box;
}
</style>
