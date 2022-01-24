<template>
  <div class="finish_check">
    <div class="header">
      <v-btn icon @click="$router.go(-1)">
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>
      <h2>최종확인</h2>
    </div>

    <div class="page_cont">
      <div class="inner">
        <dl class="product_list not_check">
          <dt>사용자가 요청한 세탁목록</dt>
          <dd>
            <div class="item" v-for="item in 2" :key="item">
              <div class="item_top">
                <div class="left">
                  <strong>바지/스커트</strong>
                  <span>9,800원 (단가 4,900원)</span>
                </div>
                <div class="right">
                  <div class="sum">
                    7,800 원
                  </div>
                  <div class="amount">
                    2
                  </div>
                </div>
              </div>
          
            </div>
          </dd>
        </dl>
        <dl class="product_list">
          <dt>검수완료된 목록</dt>
          <dd>
            <div class="item" v-for="item in 2" :key="item">
              <div class="item_top">
                <div class="left">
                  <strong>바지/스커트</strong>
                  <span>9,800원 (단가 4,900원)</span>
                </div>
                <div class="right">
                  <div class="amount">
                    2
                  </div>
                </div>
              </div>
          
            </div>
          </dd>
        </dl>

        <div class="change_price">
          <span>상품 변동금액</span>
          <strong>12,000 원</strong>
        </div>
      </div> <!--inner -->

      <div class="line_bar" />

      <div class="inner">
        <dl class="add_charge">
          <dt>추가세탁 필요요청</dt>
          <dd>
            <div class="price">
              <span>요청금액</span>
              <strong>5,000 원</strong>
            </div>
            <div class="why">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat, nulla cum vitae perspiciatis at quo eveniet fuga voluptatem enim fugit voluptate consectetur voluptas? Quos omnis harum, incidunt doloremque ullam enim.
            </div>
          </dd>
        </dl>

        <dl class="add_photo">
          <dt>추가세탁필요 참고 사진첨부</dt>
          <dd>
            <v-row>
              <v-col cols="3" v-for="item in 3" :key="item">
                <div class="photo">
                  <img src="https://source.unsplash.com/random"/>
                </div>
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
                  추가요청 금액
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
      margin:10px 0;
    }

    dl{
      dt{
        font-size:16px;
        font-weight:bold;
        margin-bottom:15px;
      }
    }
  
    dl.product_list{
      margin-bottom:30px;

      &.product_list.not_check{
        dd{
          .item{
            background:#f4f4f4;
            border:0px;
          }
        } 
        
      }

      dt{
        font-size:16px;
        font-weight:bold;
        margin-bottom:10px;
      }
      dd{
        .no_data{
          background:#f8f8f8;
          padding:10px;
          margin-bottom:10px;
          border-radius:5px;
          color:#808989;
        }
        .item{
          border:1px solid #d2d2d2;
          border-radius:5px;
          margin-bottom:10px;
          .item_top{
            display:flex;
            justify-content: space-between;
            align-items: center;
            padding:15px;
            .left{
              flex:1;
              margin-right:15px;
              strong{
                font-size:14px;
                display:block;
              }
              span{
                font-size:12px;
                display:block;
                color:#898989;
              }
            }
            .right{
              display:flex;
              align-items: center;
              .amount{
                display:flex;
                align-items: center;
                justify-content: center;
                width:34px;
                height:34px;
                background:#e2e2e2;
                margin-left:10px;
                border-radius:17px;
                font-weight:500;
              }
              .v-btn{
                margin-left:10px;
                width:34px;
                height:34px;
                background:#e2e2e2;
                .v-icon{
                  font-size:18px;
                }
              }
            }
            
          }
          .item_bottom{
            display:flex;
            justify-content: space-between;
            align-items: center;
            padding:0 15px;
            height:50px;
            border-top:1px solid #e2e2e2;

            .amount{
              display:flex;
              align-items: center;
              .v-btn{
                padding:0;
                border:1px solid #c2c2c2;
                height:24px;
                min-width:30px;
                border-radius:3px;
                .v-icon{
                  font-size:14px;
                }
              }
              span{
                display:flex;
                justify-content: center;
                align-items: center;
                width:40px;
                border-radius:3px;
                height:24px;
                background:#f2f2f2;
                margin:0 5px;
              }
            }

            strong{
              font-size:14px;
            }
          }
        }
      }
    }

    dl:last-child{
      margin-bottom:0px;
    }

    .change_price{
      display:flex;
      justify-content: space-between;
      margin-top:15px;
      align-items: flex-end;
      
      span{}
      strong{
        font-size:18px;
        font-family:'Roboto';
      }
    }

    .add_charge{
      .price{
        display:flex;
        align-items: flex-end;
        justify-content: space-between;
        margin-bottom:15px;
        strong{
          font-size:18px;
          font-family:'Roboto';
        }
      }

      .why{
        background:#f2f2f2;
        padding:10px;
        border-radius:5px;
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
      padding-bottom:20px;
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
    border-top:1px solid #d2d2d2;
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