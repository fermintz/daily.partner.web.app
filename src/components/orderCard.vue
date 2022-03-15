<template>
  <div class="item" @click.stop="$router.push('orderDetail')">
    <div class="item_top">
      <div class="state">
        <span>검수대기</span>
      </div>
      <div class="order-num">
        <dl class="date">
          <dt>주문</dt>
          <dd>21.01.26</dd>
        </dl>
        <div class="v-divider" />
        <dl class="num">
          <dt>번호</dt>
          <dd>EE6B12-<span>2600</span></dd>
        </dl>
      </div>
    </div>
    
    <div class="item_middle">
      <div class="left">
        <div class="order-info">
          <div class="box">
            <span class="date">01.26</span>
            <span class="week">월요일</span>
            <span class="time">20시</span>
          </div>
          <div class="user">
            <span class="name">박수민</span>
            <span class="phone">
              <a @click.stop="()=>{}">010-8525-4561</a>
            </span>
            <span class="address">부산 부산진구 중앙대로 956 마레블루 803호</span>
          </div>
        </div>
        <div class="product-info">
          <dl class="amount" @click.stop="()=>{}" v-ripple>
            <dt>상품</dt>
            <dd>3</dd>
          </dl>
          <dl class="price">
            <dt>금액</dt>
            <dd>28,800원</dd>
          </dl>
        </div>
      </div>
      <div class="right">
        <v-btn text @click.stop="()=>{}">
          검수시작
        </v-btn>
      </div>
      
    </div>
    <div class="item_bottom">
      <dl class="user">
        <dt>고객</dt>
        <dd>
          <span>명품류 주의요청(단추/와펜 등)</span>
          <span>조심해서 다뤄주세요</span>
        </dd>
      </dl>
      <dl class="memo">
        <dt>메모</dt>
        <dd>
          <span>명품류 확인/명품 자켓 재세탁</span>
        </dd>
      </dl>
      <dl class="master">
        <dt>본사</dt>
        <dd>
          <span>추가결제가 완료되었습니다 세탁요망</span>
        </dd>
      </dl>
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
    padding:0 10px;

    .state{
      display:flex;
      align-items: center;
      
      span{
        display:flex;
        align-items: center;
        justify-content: center;
        background:#f2f2f2;
        padding:0 10px;
        border-radius:5px;
        height:24px;
        font-size:12px;
      }
    }

    .order-num{
      display:flex;
      align-items: center;
      .v-divider{
        height:12px;
        width:1px;
        background:#e2e2e2;
        margin:0 10px;
      }
      dl{
        display:flex;
        align-items: center;

        dt{
          font-size:10px;
          margin-right:5px;
        }
        dd{
          font-size:13px;
          font-weight:bold;
        }
      }

      dl.num{
        dd{
          span{color:#de0059;}
        }
      }
    }
  }

  .item_middle{
    display:flex;
    padding:10px;

    .left{
      flex:1;
      margin-right:15px;
    }

    .right{
      display:Flex;
      align-items: flex-end;
      .v-btn{
        width:80px;
        background:#292929;
        color:#fff;
        height:50px;
      }
    }

    .order-info{
      display:flex;


      .box{
        display:flex;
        align-items: center;
        justify-content: center;
        flex-direction:column;
        width:70px;
        height:70px;
        border-radius:5px;
        border:1px solid #008BE8;
        margin-right:10px;
        span{
          line-height:1.2;
        }
        span.date{
          color:#797979;
          font-size:10px;
        }
        span.week{
          margin:2px 0;
          font-size:14px;
          color:#008BE8
        }
        span.time{
          font-size:12px;
        }
      }
      .user{
        flex:1;
        span{display:block;}
        span.name{
          margin-bottom:3px;
        }
        span.phone{
          margin-bottom:3px;
          a{color:#08B882;}
        }
      }
    }

    .product-info{
      display:flex;
      align-items: center;
      margin-top:10px;
      dl{
        display:flex;
        align-items: center;
        margin-right:5px;
        background:#f2f2f2;
        height:24px;
        padding:0 10px;
        border-radius:5px;
        dt{
          font-size:10px;
          margin-right:5px;
        }
        dd{
          font-weight:bold;
        }
      }
      dl.amount{
        background:#F6E8EE;
        dd{
          color:#de0059;
        }
      }
    }
  }

  .item_bottom{
    padding:10px;
    padding-top:0px;
    dl{
      background:#f2f2f2;
      margin-bottom:5px;
      display:flex;
      border-radius:5px;
      padding:10px;
      &:last-child{
        margin-bottom:0;
      }
      dt{
        width:40px;
        font-size:10px;
      }
      dd{
        span{
          display:block;
          margin-bottom:3px;
          font-size:12px;

          &:last-child{
            margin-bottom:0;
          }
        }
      }
    }
    .user{
      background: #F8F7F4;
      dt{
        color:#F07810;
      }
    }
    .memo{
      background: #F2F2FE;
      dt{
        color:#0007EE;
      }
    }
    .master{
      background: #F7F0F5;
      dt{
        color:#de0059
      }
    }
    
  }

}
</style>