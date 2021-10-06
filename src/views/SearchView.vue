<template>
  <div class="searchView">
    
    <SubHeader pageTitle="주문조회"/>

    <div class="page_top">
      <h2>주문을 검색해주세요</h2>

      <div class="input_box">
        <input type="number" placeholder="주문번호(5자리)를 입력해주세요">
        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
      </div>
    </div>

    <div class="line_bar" />

    <div class="result_top">
      <span><b>35651</b> 검색결과</span>
    </div>

    <div class="searchResult">
      <OrderCard state="검수대기" next="검수" csMessage="false"/>
      <OrderCard :btns="true" state="작업완료" :csMessage="true"/>
      <OrderCard :btns="true" state="작업완료" :csMessage="true"/>
    </div>

    <div class="divider" />
  </div>
</template>

<script>
import SubHeader from '@/components/subHeader'
import OrderCard from '@/components/orderCard'

export default {
  components:{
    SubHeader, OrderCard
  },
}
</script>

<style lang="scss" scoped>
.searchView{
  height:100%;
}

.page_top{
  padding:20px;

  h2{
    margin-bottom:15px;
  }
  .input_box{
    position: relative;
    display:flex;
    align-items: center;

    input{
      height:50px;
      border:1px solid #c2c2c2;
      border-radius:5px;
      width:100%;
      padding:0 60px 0 10px;
      border-bottom:1px solid #e2e2e2;
      outline: none;
      font-size:14px;
    }
    input:focus{
      border:1px solid #008BE8;
    }

    .v-btn{
      position: absolute;
      width:50px;
      height:50px;
      right:0px;
    }
  }
}

.line_bar{
  height:10px;
  background: #f2f2f2;
}

.result_top{
  display:flex;
  align-items: center;
  padding:0 20px;
  height:50px;
  border-bottom:1px solid #e2e2e2;

  span{
    font-size:14px;
    b{
      font-weight:bold;
      color:#008BE8;
    }
  }
}

.searchResult{
  
}
</style>