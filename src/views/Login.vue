<template>
  <div class="login">
        <el-form
            :label-position="labelPosition"
            :model="formLabelAlign"
            label-width="100px"
            style="max-width: 460px"
        >
          <el-form-item label="Name">
            <el-input v-model="formLabelAlign.mailBox"/>
          </el-form-item>
          <el-form-item label="Activity zone">
            <el-input v-model="formLabelAlign.passWord"/>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="enter">登录</el-button>
          </el-form-item>
        </el-form>
<!--    <div class="video-box">-->
<!--      <video autoplay class="video-background" loop muted="muted" playsinline-->
<!--             preload="auto"-->
<!--             src="https://lf3-cdn-tos.bytescm.com/obj/eden-cn/lmeh7pfuho/campus/campus_intro_20200522.mp4"-->
<!--             tabindex="-1"></video>-->
<!--    </div>-->

  </div>
</template>
<script lang="ts" setup>
import {reactive, ref} from 'vue'
import {userLogin} from "../api/user/login"
import { useRouter } from 'vue-router';
const router:any = useRouter()
const labelPosition = ref('right');
const formLabelAlign = reactive({
  mailBox: '',
  passWord: '',
});
const enter = () => {
  userLogin(formLabelAlign).then((res:any) => {
    console.log(res)
    sessionStorage.setItem("Token",res.token);
    sessionStorage.setItem("UserName",res.userName);
    sessionStorage.setItem("UserId",res.userId);
    router.push("/home");
  })
}
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
}
.login{
  width: 100%;
  height: 100vh;
}
.video-box {
  position: relative;
  height: 100vh;
  background-color: #C1CFF7;
  /*进行视频裁剪*/
  overflow: hidden;
}

.video-box .video-background {
  position: absolute;
  left: 50%;
  top: 50%;

  /*保证视频内容始终居中*/
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  /*保证视频充满屏幕*/
  object-fit: cover;
  min-height: 800px;
}

</style>