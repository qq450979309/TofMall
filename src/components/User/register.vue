<template>
  <div style="width:100%">
   	<myHeader></myHeader>
    <div class="clearfix"></div>
    <div :style="{backgroundImage: 'url(' +bg + ')'}" class="css-bg">
    <div style="margin:0 auto;height:760px;padding-right:40px;padding-bottom:50px;">


      <!-- 注册框 开始 -->
      <div style="width:300px;height:500px;float:right;margin-top:85px;margin-right:130px">
      <registerBox></registerBox>
      </div>
      <!-- 注册框 结束 -->
    </div>
  </div>
<div style="margin-top:-55px;">
      <!-- <myFooter></myFooter> -->
</div>
  </div>
</template>

<script>
import myHeader from './../Public/Header/Header'
import registerBox from './comsforUser/registerBox'
// import myFooter from './../components/myfooter'

export default {
  components:{
    myHeader,
    registerBox,
    // myFooter
  },
  data () {
    return {
      imgSource:[	//轮播图
        require('./../../assets/img/car7.jpg'),
        require('./../../assets/img/car9.jpg'),
        require('./../../assets/img/car8.jpg'),
		  ],
      bg:require('./../../assets/img/loginBG.jpg'),
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.el-carousel{
}
.el-carousel-item{
}
.el-carousel__item h3 {
	color: #475669;
	font-size: 18px;
	opacity: 0.75;
	line-height: 300px;
	margin: 0;
}
.el-carousel__item:nth-child(2n) {
	background-color: #99a9bf;
}
.el-carousel__item:nth-child(2n+1) {
	background-color: #d3dce6;
}

</style>
