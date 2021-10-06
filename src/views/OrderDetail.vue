<template>
  <div class="orderDetail">
    <div class="header">
      <v-btn icon @click="$router.go(-1)">
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>
      <h2>12346 상세보기</h2>
    </div>

    <div class="page_top">
      <div class="pickup_date">
        <span>입고날짜</span>
        <strong>2021.09.13 13:34</strong>
      </div>

      <div class="user_number">
        <span>사용자번호</span>
        <strong>48164</strong>
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
      <dl class="user_message">
        <dt>고객 요청사항</dt>
        <dd>
          <p>빠른 배송 부탁드립니다.</p>
        </dd>
      </dl>

      <div class="divider" />

      <dl class="admin_message">
        <dt>본사 작업안내</dt>
        <dd>
          <span>21.09.12</span>
          <strong>
            오염이 심한 와이셔츠는 1개 취소. 나머지 상품만 작업시작
          </strong>
        </dd>
      </dl>
  
      <div class="divider" />

      <dl class="user_product">
        <dt>검수 완료 후 변동내역</dt>
        <dd>
          <div class="item check">
            <div class="left">
              <label>와이셔츠</label>
              <div class="price">
                <span>4,000원</span>
                <strong>3,000원</strong>
              </div>
            </div>
            <div class="amount">
              2
            </div>
            <div class="total">
              8,000 원
            </div>
          </div> <!-- item -->
          <div class="item">
            <div class="left">
              <label>정장하의</label>
              <div class="price">
                <span>4,000원</span>
                <strong>3,000원</strong>
              </div>
            </div>
            <div class="amount">
              3
            </div>
            <div class="total">
              12,000 원
            </div>
          </div>
        </dd>
      </dl>

      <div class="divider"/>

      <dl class="user_product">
        <dt>고객 주문내역</dt>
        <dd>
          <div class="item">
            <div class="left">
              <label>와이셔츠</label>
              <div class="price">
                <span>4,000원</span>
                <strong>3,000원</strong>
              </div>
            </div>
            <div class="amount">
              3
            </div>
            <div class="total">
              12,000 원
            </div>
          </div>
          <div class="item">
            <div class="left">
              <label>정장하의</label>
              <div class="price">
                <span>4,000원</span>
                <strong>3,000원</strong>
              </div>
            </div>
            <div class="amount">
              3
            </div>
            <div class="total">
              12,000 원
            </div>
          </div>
        </dd>
      </dl>

      <div class="divider" />

      <dl class="add_work">
        <dt>추가작업 결제 요청내역</dt>
        <dd class="cont">
          <div class="price">
            <span>요청금액</span>
            <strong>5,000 원</strong>
          </div>
          <div class="post">
            <strong>맡기신 와이셔츠의 오염도정도가 심해 
추가세탁이 필요합니다. 사진 참고부탁드립니다</strong>
          </div>
        </dd>
        <dd class="photos">
          <div class="photo">
            <img src="https://source.unsplash.com/random" />
          </div>
          <div class="photo">
            <img src="https://source.unsplash.com/random" />
          </div>
          <div class="photo">
            <img src="https://source.unsplash.com/random" />
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
   
  </div>
</template>

<script>


export default {
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
    padding-top:0px;

    .user_number{
      display:flex;
      flex-direction: column;
      align-items: center;
      margin-bottom:30px;
      span{
        font-size:14px;
        color:#008BE8;
        margin-bottom:4px;
      }
      strong{
        font-size:36px;
        line-height:1;
        font-weight:600;
        
      }
    }

    .pickup_date{
      display:flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom:20px;

      span{
        margin-right:8px;
        color:#898989;
      }
      strong{
        font-weight:normal;
      }
    }

    .history{
      display:flex;
      align-items: center;
      background:#f2f2f2;
      border-radius:5px;
      overflow: hidden;

      span{
        display:flex;
        justify-content: center;
        align-items: center;
        flex:1;
        margin-right:10px;
        height:40px;
        font-size:12px;
        color:#898989;
      }
      span.active{
        color:#fff;
        background:#008BE8;
        font-weight:bold;
      }
      span:last-child{
        margin-right:0px;
      }
    }

    
  }

  .page_tabs{
    display:flex;
    align-items: center;
    background:#ffff;
    border-top:1px solid #292929;
    border-bottom:1px solid #e2e2e2;

    .v-btn{
      font-size:14px;
      font-weight:bold;
      flex:1;
      height:50px;
      border-radius:0px;
    }
    .v-btn.active{
      color:#008be8;
    }
    .v-btn.active:after{
      content:'';
      position: absolute;
      width:100%;
      bottom:0;
      height:2px;
      background:#008be8;
    }
  }

  .page_cont{
    background:#fff;
    padding:20px;

    .divider{
      height:1px;
      background:#e2e2e2;
      margin:30px 0;
    }

    dl{
      dt{
        font-size:16px;
        font-weight:bold;
        margin-bottom:15px;
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
          border:1px solid #e2e2e2;
          padding:15px;
          border-radius:5px;
          margin-bottom:10px;

          .left{
            flex:1;
            label{
              display:block;
              font-size:14px;
            }
            .price{
              display:flex;
              align-items: center;
              font-size:12px;
              span{
                text-decoration: line-through;
                color:#999;
              }
              strong{
                margin-left:5px;
              }
            }
          }

          .amount{
            display:flex;
            justify-content: center;
            align-items: center;
            border-radius:18px;
            width:30px;
            height:30px;
            font-size:12px;
            background:#f2f2f2;
          }
          .total{
            width:90px;
            text-align:right;
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

        .price_total{
          background:#f2f2f2;
          border-radius:5px;
          padding:15px;
          display:flex;
          align-items: center;
          justify-content: space-between;
          span{font-size:12px;}
          strong{font-weight:bold;}
        }  
      }
    }


    .user_message {
      p {
        padding: 15px;
        background: #f8f6f1;
        margin-bottom:5px;
        border-radius:5px;
      }
    }

    .admin_message{
      dd{
        border:1px solid #16AF80;
        padding:15px;
        border-radius:5px;

        span{
          display:block;
          color:#898989;
        }
        strong{
          display:block;
          font-size:14px;
          margin-top:5px;
        }
      }
    }

    .add_work{
      
      .cont{
        
        .price{
          display:flex;
          align-items: center;
          
          span{
            width:70px;
            color:#898989;
          }
          strong{
            font-size:14px;
            flex:1;
          }
        }

        .post{
          display:flex;
          margin-top:10px;
          background:#f2f2f2;
          padding:15px;
          border-radius:5px;

          strong{
            font-size:14px;
            flex:1;
            font-weight:normal;
          }
        }
      }
      
      
      .photos{
        display:flex;
        flex-wrap: wrap;
        margin-top:30px;

        .photo{
          width:25%;
          margin-right:10px;
          display:flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow:hidden;
          border-radius:5px;
          border:1px solid #e2e2e2;

          img{
            position:absolute;
            width:150%;
          }
        }
        .photo:after{
          content:'';
          display:block;
          padding-bottom:100%;
        }

        .photo:nth-child(4n){
          margin-right:0px;
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
