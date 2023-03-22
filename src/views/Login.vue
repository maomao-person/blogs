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
  </div>
</template>
<script lang="ts" setup>
import {reactive, ref} from 'vue'
import {userLogin} from "../api/user/login"
const labelPosition = ref('right');
const formLabelAlign = reactive({
  mailBox: '',
  passWord: '',
});
const enter = () => {
  userLogin(formLabelAlign).then(res=>{
    console.log(res)
  })
}
</script>
<style scoped>

</style>