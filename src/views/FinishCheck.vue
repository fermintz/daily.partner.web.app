<template>
  <div class="finish_check">
    <div class="header">
      <v-btn icon @click="$router.go(-1)">
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>
      <h2>변동사항 확인</h2>
    </div>

    <div class="page_cont">
      <div class="inner">
        <dl class="user_product">
          <dt>고객 주문내역</dt>
          <dd>
            <div class="item">
              <div class="left">
                <label>와이셔츠</label>
                <div class="price">
                  <strong>3,000원</strong>
                </div>
              </div>
              <div class="amount">
                <span>1</span>
                <v-icon>
                  mdi-chevron-right
                </v-icon>
                <strong>2</strong>
              </div>
              <div class="total">
                <span>12,000원</span>
                <strong>24,000원</strong>
              </div>
            </div>
            <div class="item">
              <div class="left">
                <label>정장하의</label>
                <div class="price">

                  <strong>3,000원</strong>
                </div>
              </div>
              <div class="amount">
                <span>1</span>
                <v-icon>
                  mdi-chevron-right
                </v-icon>
                <strong>2</strong>
              </div>
              <div class="total">
                <span>12,000원</span>
                <strong>24,000원</strong>
              </div>
            </div>
          </dd>
        </dl>

        <!-- <dl class="user_product check">
          <dt>변동내역</dt>
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
                2
              </div>
              <div class="total">
                8,000 원
              </div>
            </div> 
          </dd>
        </dl> -->
      </div> <!--inner -->

      <div class="line_bar" />

      <div class="inner">
        <dl class="add_wash">
          <dt>추가금액 필요 요청</dt>
          <dd>
            <div class="input_box">
              <input type="number" placeholder="추가요청금액을 입력">
              <span>원</span>
            </div>

            <textarea placeholder="추가세탁이 필요한 이유를 상세히 작성해주세요" />
          </dd>
        </dl>

        <dl class="add_photo">
          <dt>추가세탁필요 참고 사진첨부</dt>
          <dd>
            <v-row>
              <v-col cols="4" v-for="item in 5" :key="item">
                <div class="photo">
                  <img src="https://source.unsplash.com/random"/>
                  <v-btn text icon class="close">
                    <v-icon>mdi-close</v-icon>
                  </v-btn>
                </div>
              </v-col>
              <v-col cols="4">
                <v-btn text class="add_btn">
                  <v-icon>mdi-plus</v-icon>
                </v-btn>
              </v-col>
            </v-row>
          </dd>
        </dl>
      </div> <!-- inner -->

      <div class="line_bar" />

      <div class="total_info">
        <dl>
          <dt>변동사항 내역</dt>
          <dd>
            <div class="gray_box">
              <div class="info_item">
                <span>
                  <v-icon class="minus">mdi-minus-circle</v-icon>
                  상품변동 환불금액
                </span>
                <strong>0 원</strong>
              </div>
              <div class="info_item">
                <span>
                  <v-icon class="plus">mdi-plus-circle</v-icon>
                  상품변동 추가금액
                </span>
                <strong>8,000 원</strong>
              </div>
              <div class="info_item">
                <span>
                  <v-icon class="plus">mdi-plus-circle</v-icon>
                  추가요청
                </span>
                <strong>5,000 원</strong>
              </div>
            </div>
          </dd>
        </dl>
      </div>
    </div> <!-- page_cont -->

    <div class="page_bottom">
      <div class="total_price">
        <span>추가요청 합계</span>
        <strong>13,000</strong>
      </div>
      <div class="btns">
        <v-btn text class="next" @click="$router.push('finishCheck')">검수 완료하기</v-btn>
      </div>
    </div>

  </div>
</template>

<style lang="scss" scoped>
.finish_check{
  padding-bottom:120px;
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

  

  .page_cont{

    .inner{
      padding:20px;
    }

    .line_bar{
      height:10px;
      background:#f2f2f2;
    }

    dl{
      dt{
        font-size:16px;
        font-weight:bold;
        margin-bottom:10px;
      }
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
            }
            .price{
              display:flex;
              align-items: center;
              font-size:12px;
              span{
                text-decoration: line-through;
                color:#999;
                margin-right:5px;
              }

            }
          }

          .amount{
            display:flex;
            align-items: center;
            border-radius:18px;
            height:30px;
            border-radius:15px;
            font-size:12px;
            background:#f2f2f2;
            padding:0 10px;
            
            span{
              
            }

            .v-icon{
              font-size:18px;
              margin:0 5px;
            }
          
            strong{
              color:#f11064
            }
          }
          .total{
            width:90px;
            text-align:right;

            span{
              display:block;
            }
            strong{
              display:block;
              color:#f11064
            }
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

    .user_product.check{
      margin-top:30px;
      dd{
        .item{
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
      }      
    }

    .add_wash{
      .input_box{
        position: relative;
        display:flex;
        overflow: hidden;
        align-items: center;

        input{
          width:100%;
          height:50px;
          padding:0 60px 0 10px;
          font-size:14px;
          border:1px solid #c2c2c2;
          border-radius:5px;
        }
        span{
          display:flex;
          justify-content: center;
          align-items: center;
          width:50px;
          height:50px;
          position: absolute;
          right:0px;
        }
      }
      textarea{
        width:100%;
        border:1px solid #c2c2c2;
        border-radius:5px;
        margin-top:15px;
        height:100px;
        resize: none;
        padding:10px;
      }
    }

    .add_photo{
      margin-top:30px;

      .row{padding:5px;}
      .col{
        padding:5px;
      }
      
      .photo{
        display:flex;
        width:100%;
        justify-content: center;
        align-items: center;
        background:#f8f8f8;
        overflow:hidden;
        border-radius:5px;
        position: relative;
      
        img{
          position: absolute;
          width:150%;
        }

        .v-btn{
          width:24px;
          height:24px;
          position: absolute;
          right:6px;
          top:6px;
          padding:0;
          background:rgba(0,0,0,0.3);
          .v-icon{
            font-size:18px;
            color:#fff;
          }
        }
      }

      .photo:after{
        content:'';
        display:block;
        padding-bottom:100%;
      }

      .v-btn.add_btn{
        width:100%;
        height:100%;
        background:#f2f2f2;
      }
      .v-btn.add_btn:after{
        content:'';
        display:block;
        padding-bottom:100%;
      }
    }

    .total_info{
      padding:20px;
      .gray_box{
        margin-top:20px;

        .info_item{
          display:flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom:5px;

          span{
            font-size:13px;
            .v-icon{
              font-size:18px;
              margin-right:4px;
              color:#292929;
            }
            .v-icon.plus{
              color:#f11064;
            }
            .v-icon.minus{
              color:#292929
            }
          }
          strong{
            font-size:14px;
          }
        }
        .info_item:last-child{
          margin-bottom:0px;
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

    .total_price{
      display:flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom:10px;
      
      span{
        font-size:14px;
      }
      strong{
        display:flex;
        align-items: center;
        font-size:20px;
        color:#f11064;
      }
      strong:after{
        content:'원';
        font-size:14px;
        font-weight:normal;
        margin-left:10px;
        color:#292929;
      }
    }

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
      }
      .v-btn.next{
        background:#008BE8;
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