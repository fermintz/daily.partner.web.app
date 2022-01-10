<template>
  <div class="add_charge">
    <div class="header">
      <v-btn icon @click="$router.go(-1)">
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>
      <h2>변동사항 확인</h2>
    </div>

    <div class="page_title">
      <h2>
        추가세탁이 필요한 사유와 요청금액을 입력해주세요
      </h2>
    </div>

    <div class="page_cont">

        <dl class="add_price">
          <dt>추가금액입력</dt>
          <dd>
            <input type="number" placeholder="0">
            <span>원</span>
          </dd>
        </dl>

        <dl class="why">
          <dt>사유입력</dt>
          <dd>
            <textarea placeholder="추가세탁이 필요한 이유를 작성해주세요"/>
          </dd>
        </dl>

        <dl class="add_photo">
          <dt>사진첨부</dt>
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


    </div> <!-- page_cont -->

    <div class="page_bottom">
      <v-btn text class="add" @click="$router.push('productCheck')">뒤로가기</v-btn>
      <v-btn text class="next" @click="$router.push('finishCheck')">다음으로</v-btn>
    </div>

  </div>
</template>

<style lang="scss" scoped>
.add_charge{
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

  .page_title{
    padding:20px;
    h2{
      font-size:24px;
    }
  }

  .page_cont{
     padding:20px;
   
    .line_bar{
      height:10px;
      background:#f2f2f2;
    }

    dl{
      margin-bottom:40px;
      dt{
        font-size:16px;
        font-weight:bold;
        margin-bottom:15px;
      }
    }

    dl.add_price{
      dt{}
      dd{
        display:flex;
        align-items: center;
        position: relative;

        input{
          flex:1;
          border-bottom:1px solid #292929;
          height:40px;
          text-align:right;
          outline: none;
          padding-right:30px;
          font-size:24px;
          font-weight:bold;
          font-family:'Roboto';
          &:focus{
            border-bottom:2px solid #008BE8
          }
        }

        span{
          position: absolute;
          right:0;
        }
      }
    }

    dl.why{
      dd{
        textarea{
          width:100%;
          resize:none;
          height:150px;
          padding:10px;
          border:1px solid #292929;
          border-radius:5px;
          outline: none;

          &:focus{
            border:2px solid #008BE8
          }
        }
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
    display:flex;
    align-items: center;
    width:100%;
    border-top:1px solid #e2e2e2;
    position: fixed;
    bottom:0px;
    height:70px;
    padding:0 10px;
    background:#fff;

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
</style>