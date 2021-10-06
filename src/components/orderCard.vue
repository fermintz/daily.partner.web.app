<template>
  <div class="item" @click.stop="$router.push('orderDetail')">
    <div class="item_top">
      <div class="state">
        <strong>반품</strong>
        <span>{{state}}</span>
        
      </div>
      <div class="amount">
        <span>상품</span>
        <strong>72</strong>
      </div>
      <div class="right">
        <div class="number">48164</div>
        <div class="in_date">
          <span>입고일</span>
          <strong>2021.09.30 (목)</strong>
        </div>
      </div>
    </div>
    <div class="message" v-show="!message">
      <span>청바지 접어 놓았어요 바지좀 줄여주세요!</span>
    </div>
    <div class="cs_message" v-show="!csMessage">
      <strong>검토안내</strong>
      <span>
        오염이 심한 와이셔츠는 1개 취소. 나머지 상품만 작업시작
      </span>
    </div>
    <div class="bottom_btns" v-show="!btns">
      <v-btn text class="phone">
        <v-icon>mdi-phone</v-icon>
        <span>전화</span>
      </v-btn>
      <v-btn text class="next" @click.stop="$router.push('checkOrder')">
        <span>{{next}}</span>
        <v-icon>mdi-arrow-right</v-icon>
      </v-btn>
    </div>

  </div> <!-- item -->
</template>

<script>
export default {
  props:['state','message','csMessage','btns','next'],
}
</script>

<style lang="scss" scoped>

.item{
  position: relative;
  margin-top:10px;
  background:#fff;
  border-top:1px solid #e2e2e2;
  border-bottom:1px solid #c2c2c2;
  min-height:100px;
  padding:15px;
  
  .item_top{
    display:flex;
    .state{
      display:Flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      height:50px;
      background:#292929;
      padding:0 10px;
      border-radius:5px;
      color:#ffff;     
      margin-right:5px;

      span{
        font-size:13px;
        line-height:1;
        font-weight:bold;
      }
      strong{
        font-weight:normal;
        font-size:11px;
        line-height:1;
        color:#FFC400;
        margin-bottom:5px;
      }
    }

    .amount{
      display:flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height:50px;
      width:50px;
      background:#EBF1F5;
      border-radius:5px;

      span{
        font-size:10px;
        margin-bottom:2px;
        font-weight:bold;
      }
      strong{
        font-size:18px;
        line-height: 1;
        color:#008BE8;
      ;}
    }
    .right{
      display:flex;
      flex-direction: column;
      justify-content: center;
      margin-left:15px;
      .number{
        font-size:20px;
        line-height: 1;
        font-weight:500;
      }
      .in_date{
        display:flex;
        margin-top:5px;
        align-items: center;
        font-size:12px;
        span{color:#898989;}
        strong{margin-left:5px;font-weight:normal;}
      }
    }
  }

  .message{
    margin-top:15px;
    span{
      display:block;
      padding:5px 10px;
      background:#F8F6F1;
      margin-bottom:5px;
      border-radius:5px;
      font-size:13px;
    }
    span:last-child{
      margin-bottom:0px;
    }
  }

  .cs_message{
    display:flex;
    border:1px solid #16AF80;
    padding:10px;
    border-radius:5px;
    margin-top:15px;

    strong{
      color:#16AF80;
      font-size:13px;
      margin-right:15px;
    }
    span{
      font-size:13px;
      flex:1;
    }
  }

  .bottom_btns{
    display:flex;
    border:1px solid #c2c2c2;
    margin-top:15px;
    border-radius:5px;
    overflow:hidden;
    
    .v-btn{
      fleX:1;
      height:40px;
      border-radius:0px;
      font-size:14px;
      border-right:1px solid #c2c2c2;

      .v-icon{
        font-size:14px;
        
      }
    }
    .v-btn.phone{
      .v-icon{
        color:#16AF80;
        margin-right:5px;
      }
    }

    .v-btn.next{
      flex:2;
      border-right:0;
      .v-icon{
        margin-right:0;
        margin-left:5px;
        color:#008BE8;
      }
    }
  }
}
</style>