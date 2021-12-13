<template>
  <div class="item" @click.stop="$router.push('orderDetail')">
    <div class="item_top">
      <div class="state">
        <span class="refound">반품</span>
        <span class="state_name">{{state}}</span>
      </div>
      <div class="order_date">
        <span>입고일</span>
        <strong>21.10.31</strong>
      </div>
    </div>

    <div class="item_middle">
      <div class="d-row">
        <dl class="order_amount">
          <dt>상품</dt>
          <dd>72</dd>
        </dl>
        <dl class="order_number">
          <dt>주문번호</dt>
          <dd>3IHH27-<b>8D50</b></dd>
        </dl>
      </div>

      <div class="message" v-show="!message">
        <strong>고객요청</strong>
        <span>명품류 주의요청(단추/와펜 등) <br/><br/>청바지 접어 놓았어요 바지좀 줄여주세요!</span>
      </div>
      <div class="message cs" v-show="!csMessage">
        <strong>검토안내</strong>
        <span>
          오염이 심한 와이셔츠는 1개 취소. 나머지 상품만 작업시작
        </span>
      </div>
    </div>

    <div class="bottom_btns" v-show="!btns">
      <div class="btn_inner">
        <v-btn text class="phone">
          <v-icon>mdi-phone</v-icon>
          <span>전화</span>
        </v-btn>
        <v-btn text class="next" @click.stop="$router.push('checkOrder')">
          <span>{{next}}</span>
          <v-icon>mdi-arrow-right</v-icon>
        </v-btn>
      </div>
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

  
  .item_top{
    display:flex;
    align-items: center;
    justify-content: space-between;
    height:44px;
    border-bottom:1px solid #e2e2e2;
    padding:0 15px;

    .order_date{
      span{
        font-size:10px;
        color:#898989;
        margin-right:10px;
      }
    }
    .state{
      display:flex;
      align-items: center;
      
      span{
        display:flex;
        align-items: center;
        justify-content: center;
        height:20px;
        padding:0 5px;
        color:#fff;
        border-radius:3px;
        margin-right:5px;
        font-size:10px;
      }
      .refound{
        background:#d22828;
      }
      .state_name{
        background:#008BE8;
      }
    }
  }

  .item_middle{
    padding:15px;
    .d-row{
      display:flex;
      align-items: center;
      dl{
        margin-right:15px;
        dt{
          font-size:10px;
          color:#898989;
        }
        dd{
          font-size:16px;
          line-height:1;
          margin-top:2px;
          font-weight:bold;
        }
      }
      dl.order_number{
        dd{
          b{
            color:#008BE8
          }
        }
      }
      dl.order_amount{
        display:flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width:56px;
        height:56px;
        border:1px solid #e2e2e2;
        border-radius:5px;

      }
    }

    .message{
      display:flex;
      background:#FBF5F7;
      padding:10px;
      border-radius:5px;
      margin-top:10px;

      strong{
        color:#d22828;
        font-size:12px;
        margin-right:20px;
      }
      span{
        font-size:12px;
        flex:1;
      }
    }

    .message.cs{
      background:#f8f8f8;
      strong{
        color:#16AF80
      }
    }

  }

  
  .bottom_btns{
    padding:10px;
    padding-top:0px;

    .btn_inner{
      display:flex;
      border:1px solid #c2c2c2;
      border-radius:5px;
      overflow:hidden;
    }
    
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