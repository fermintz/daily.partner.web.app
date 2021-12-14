<template>
  <div class="orderDetail">
    <div class="header">
      <v-btn icon @click="$router.go(-1)">
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>
      <h2>12346 상세보기</h2>
    </div>

    <div class="page_top">
      <div class="d-row">
        <dl class="pickup_date">
          <dt>입고일시</dt>
          <dd>
            <span>2021.09.13</span>
            <span>13:34</span>
          </dd>
        </dl>

        <dl class="order_number">
          <dt>사용자번호</dt>
          <dd>3IHH27-<strong>8D50</strong></dd>
        </dl>
      </div>
      
      <div class="history">
        <span>검수대기</span>
        <span>검토중</span>
        <span class="active">검토완료</span>
        <span>작업중</span>
        <span>작업완료</span>
      </div>      
    </div>

    <div class="line_bar" />

    <div class="page_cont">
      <dl class="message user">
        <dt>고객 요청사항</dt>
        <dd>
          <div class="message_item">
            <span>명품류 주의 요청(단추/와펜 등)<br><br>조심히 다루어 주세요</span>
          </div>
        </dd>
      </dl>

      <dl class="add_price">
        <dt>추가결제요청</dt>
        <dd>
          <div class="complete">
            추가결제가 완료되었습니다
          </div>
          <div class="price">
            <span>요청금액</span>
            <strong>30,000 원</strong>
          </div>
          <div class="text">
            1,000원 무지성 추가입니다 무조건 결제해주세요
          </div>
          <div class="divider"/>
          <div class="images">
            <v-row>
              <v-col cols="3" v-for="item in 5" :key="item">
                <div class="image_box" v-ripple @click="$refs.imageView.handle(true)">
                  <img src="https://picsum.photos/300/300">
                </div>
              </v-col>
            </v-row>
          </div>
        </dd>
      </dl>

      <dl class="message admin">
        <dt>본사 작업안내</dt>
        <dd>
          <div class="message_item">
            <strong>2021-12-10 14:13</strong>
            <span>상품검증이 완료되었습니다 작업을 진행해주세요</span>
          </div>
          <div class="message_item">
            <strong>2021-12-10 14:13</strong>
            <span>상품검증이 완료되었습니다 작업을 진행해주세요</span>
          </div>
        </dd>
      </dl>

      <dl class="user_product accordion">
        <dt v-ripple>
          <label>사용자 주문내역</label>
          <v-icon>mdi-chevron-down</v-icon>
        </dt>
        <dd>
          <div class="item">
            <label>와이셔츠</label>
            <span>3</span>
          </div>
          <div class="item">
            <label>와이셔츠</label>
            <span>3</span>
          </div>
        </dd>
      </dl>

      <dl class="user_product accordion">
        <dt v-ripple>
          <label>검수된 물건내역</label>
          <v-icon>mdi-chevron-down</v-icon>
        </dt>
        <dd>
          <div class="item">
            <label>와이셔츠</label>
            <span>3</span>
          </div>
        </dd>
      </dl>

      <dl class="user_product accordion">
        <dt v-ripple>
          <label>본사최종 검수내역</label>
          <v-icon>mdi-chevron-down</v-icon>
        </dt>
        <dd>
          <div class="item">
            <label>와이셔츠</label>
            <span>3</span>
          </div>
        </dd>
      </dl>
  
    </div>

    <div class="page_bottom">
      <div class="btns">
        <v-btn text class="finish">
          <label>세탁시작</label>
          <v-icon> mdi-arrow-right-circle </v-icon>
        </v-btn>
      </div>
    </div>

    <ImageView ref="imageView"/>
  </div>
</template>

<script>
import ImageView from '@/components/modal/imageView'

export default {
  components:{ImageView,},
  data() {
    return {
      tabActive:0,
      photos: [
        {
          src: "https://source.unsplash.com/random",
        },
        {
          src: "https://source.unsplash.com/random",
        },
      ],
    };
  },
  watch:{
    
  },
  methods:{
    modalHandle(refs, value, title, message){
      refs.handle(value);
      refs.title = title;
      refs.message = message;
    }
  },
};
</script>

<style lang="scss" scoped>
.orderDetail {
  position: relative;
  padding-bottom:90px;

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

  .line_bar{
    height:15px;
    background:#f2f2f2;
  }

  .page_top{
    padding:20px;

    .d-row{
      display:flex;
      margin-bottom:20px;

      dl{
        display:flex;
        flex-direction: column;
        justify-content: space-between;
        padding-right:20px;
        margin-right:20px;
        border-right:1px solid #e2e2e2;
        dt{
          font-size:11px;
          color:#898989;
          margin-bottom:5px;
        }
      }
      dl:last-child{
        border-right:0px;
      }
    }

    .pickup_date{
      dd{
        span{
          display:block;
          line-height:1.3;
        }
      }
    }
    .order_number{
      dd{
        font-size:28px;
        line-height:1;
        font-weight:500;
        strong{
          font-weight:500;
          color:#f11064;
        }
      }
    }

    .history{
      display:flex;
      align-items: center;
      border:1px solid #e2e2e2;
      border-radius:4px;
      overflow: hidden;
      height:40px;

      span{
        display:flex;
        justify-content: center;
        align-items: center;
        flex:1;
        height:30px;
        border-radius:4px;
        margin-right:10px;
        font-size:11px;
        color:#898989;
      }
      span.active{
        color:#fff;
        background:#008BE8;
      }
      span:last-child{
        margin-right:0px;
        padding-right:5px;
      }
      span:first-child{
        padding-left:5px;
      }
    }

    
  }



  .page_cont{
    background:#fff;
    
    dl{
      border-bottom:1px solid #e2e2e2;
      dt{
        padding:20px 15px;
        padding-bottom:10px;
        font-size:12px;
        font-weight:bold;
      }
      dd{
        padding:20px 15px;
        padding-top:0px;
      }
    }

    dl.accordion{
      dt{
        display:flex;
        align-items: center;
        justify-content: space-between;
        height:50px;
        padding:0 15px;
      }
    }

    dl:last-child{
      margin-bottom:0px;
    }

    dl.user_product{
      dd{
        .item{
          display:flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom:10px;
          
          label{
            display:flex;
            align-items: center;
            padding:0 10px;
            flex:1;
            background:#f8f8f8;
            margin-right:10px;
            font-size:13px;
            border-radius:4px;
            height:40px;
          }

          span{
            display:flex;
            justify-content: center;
            align-items: center;
            width:40px;
            height:40px;
            font-size:13px;
            border-radius:4px;
            padding:10px;
            font-weight:500;
            background:#FBF5F7;
          }
        }

        .item.check{
          background:#FBEFF4;
          border:0px;
          .amount{
            color:#f11064;
            background:#fff;
          }
          .total{
            color:#f11064;
          }
        }

        .item:last-child{
          margin-bottom:0px;
        }

      
      }
    }

    .message {
      dd{
        .message_item{
          background:#F8F5F1;
          border-radius:5px;
          padding:10px;
          margin-bottom:10px;
          strong{
            font-weight:normal;
            font-size:11px;
            color:#898989;
            display:block;
            margin-bottom:5px;
          }
          span{
            display:block;
            font-size:13px;
          }
        }
        .message_item:last-child{
          margin-bottom:0px;
        }
      }
    }
    .message.admin {
      dd{
        .message_item{
          background:#EFF5F3;
        }
      }
    }

    .add_price{
      .complete{
        display:flex;
        align-items: center;
        justify-content: center;
        border:1px solid #DF0E68;
        margin-bottom:10px;
        height:40px;
        border-radius:4px;
        color:#DF0E68;
      }
      .price{
        display:flex;
        align-items: center;
        justify-content: space-between;
        height:40px;
        padding:0 10px;
        border:1px solid #e2e2e2;
        margin-bottom:10px;
        border-radius:4px;

        span{
          font-size:11px;
          color:#898989;
        }
      }
      .text{
        font-size:13px;
        padding:10px;
        border-radius:4px;
        background:#f2f2f2;
      }
      .divider{
        height:1px;
        background:#e2e2e2;
        margin:15px 0;
      }

      .images{
        .row{
          margin:-5px;
        }
        .col{
          padding:5px;
        }

        .image_box{
          display:flex;
          align-items: center;
          justify-content: center;
          position: relative;
          height:100%;
          border-radius:4px;
          overflow:hidden;

          img{
            position: absolute;
            width:100%;
          }
        }

        .image_box:after{
          content:'';
          display:block;
          padding-bottom:100%;
        }
      }
    }
  }

  .page_bottom{
    width:100%;
    border-top:1px solid #e2e2e2;
    position: fixed;
    bottom:0px;
    padding:10px;
    background:#fff;

    .btns{
      display:flex;
      align-items: center;

      .v-btn{
        flex:1;
        height:50px;
        border:1px solid #c2c2c2;
        margin-right:10px;
        font-size:14px;
        font-weight:bold;

        .v-icon{
          margin-left:5px;
          font-size:18px;
        }
      }

      .v-btn.finish{
        background:#008be8;
        color:#fff;
        border:0px;
      }

      .v-btn:last-child{
        margin-right:0px;
      }
    }
  }
}






</style>
