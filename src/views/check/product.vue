<template>
  <div class="check_order">
    <div class="header">
      <v-btn icon @click="$router.go(-1)">
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>
      <h2>4561 주문검수</h2>
    </div>

    <div class="page_title">
      <h2>입고된 상품을<br>꼼꼼하게 검수해주세요</h2>
    </div>

    <div class="page_cont">
      <dl class="user_list">
        <dt>사용자가 주문한 상품</dt>
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
                <v-btn icon>
                  <v-icon>mdi-check</v-icon>
                </v-btn>
              </div>
            </div>
        
          </div>
        </dd>
      </dl>
      <dl class="admin_list">
        <dt>검수중인 상품</dt>
        <dd>
          <div class="no_data">
            추가된 상품이 없습니다
          </div>
          <div class="item" v-for="item in 3" :key="item">
            <div class="item_top">
              <div class="left">
                <strong>바지/스커트</strong>
                <span>단가 4,900원</span>
              </div>
              <div class="right">
                <v-btn icon>
                  <v-icon>mdi-close</v-icon>
                </v-btn>
              </div>
              
            </div>
            <div class="item_bottom">
              <div class="amount">
                <v-btn text>
                  <v-icon>mdi-minus</v-icon>
                </v-btn>
                <span>1</span> <!-- 최소단위 1 -->
                <v-btn text>
                  <v-icon>mdi-plus</v-icon>
                </v-btn>
              </div>
              <strong>12,900 원</strong>
            </div>
          </div>
        </dd>
      </dl>
    </div>  
    
    <div class="page_bottom">
      <v-btn text class="add" @click="$router.push('product')">상품추가</v-btn>
      <v-btn text class="next" @click="$router.push('question')">다음으로</v-btn>
    </div>
  </div>  
</template>

<script>
export default {
  data(){
    return{

    }
  },
}
</script>

<style lang="scss" scoped>
.check_order{
  padding-bottom:100px;

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

  .line_box{
    height:10px;
    background:#f2f2f2;
  }

  .page_title{
    padding:20px;
    h2{
      font-size:24px;

    }
  }

  .page_cont{
    padding:20px;

    dl{
      margin-bottom:30px;
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
              .amount{
                display:flex;
                align-items: center;
                justify-content: center;
                width:34px;
                height:34px;
                background:#e2e2e2;
                border-radius:17px;
                font-weight:500;
              }
              .v-btn{
                margin-left:10px;
                width:34px;
                height:34px;
                background:#F8EEF2;
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