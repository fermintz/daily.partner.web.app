<template>
  <div class="question">
    <div class="header">
      <v-btn icon @click="$router.go(-1)">
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>
      <h2>4561 주문검수</h2>
    </div>

    <div class="page_title">
      <h2>검수된 세탁물에<br>추가세탁이 필요한가요?</h2>
    </div>

    <div class="page_cont">
      <div class="btn" v-ripple  @click="$router.push('addCharge')">
        <span>네 오염도가 심해 추가세탁이 필요합니다.</span>
        <v-icon>
          mdi-chevron-right
        </v-icon>
      </div>
      <div class="btn" v-ripple @click="$router.push('finishCheck')">
        <span>아니요, 필요없습니다.</span>
        <v-icon>
          mdi-chevron-right
        </v-icon>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.question{
  .header{
    position: sticky;
    width:100%;
    top:0px;
    display:flex;
    align-items: center;
    height:60px;
    padding:0 10px;
    background:#fff;
    z-index:3;

    .v-btn{
      width:40px;
      height:40px;
    }
    h2{
      font-size:16px;
      margin-left:5px;
    }
  }

  .page_title{
    padding:20px;
    h2{
      font-size:24px;

    }
  }

  .page_cont{
    padding:20px;
    .btn{
      border:1px solid #c2c2c2;
      margin-bottom:20px;
      padding:15px;
      display:flex;
      justify-content: space-between;
      border-radius:5px;
      span{
        flex:1;
        font-size:16px;
      }
      .v-icon{
        margin-left:30px;
      }
    }
  }
}
</style>