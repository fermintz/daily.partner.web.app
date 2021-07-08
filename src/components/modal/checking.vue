<template>
  <v-dialog
    v-model="visible"
    fullscreen
    hide-overlay
    transition="dialog-bottom-transition"
  >
    <div class="checking">
      <div class="head">
        <v-btn icon @click="visible = false">
          <v-icon>mdi-arrow-left</v-icon>
        </v-btn>
        <h2>상품검수하기</h2>
      </div>
      <div class="tabs">
        <div class="tab-head">
          <div
            v-ripple v-for="(item, index) in tabs" 
            :key="index"
            :class="{tab:true, active:tabActive === index}"
            @click="tabActive = index"
          >
            {{item}}
          </div>
        </div>
        <div 
          class="tab-cont basket" 
          v-show="tabActive === 0" 
          
        >
          <div class="basket-item" v-for="item in 5" :key="item">
            <div class="top">
              <div class="left">
                <strong>바지/스커트</strong>
                <span>단가 4,900원</span>
              </div>
              <v-btn text icon>
                <v-icon>mdi-close</v-icon>
              </v-btn>
            </div>
            <div class="bottom">
              <div class="amount">
                <v-btn text>
                  <v-icon>mdi-minus</v-icon>
                </v-btn>
                <div class="amount-num">
                  0
                </div>
                <v-btn text>
                  <v-icon>mdi-plus</v-icon>
                </v-btn>
              </div>
              <div class="price">
                23,800 원 
              </div>
            </div>

          </div>
        </div>

        <div 
          class="tab-cont product-list" 
          v-show="tabActive === 1" 
          
        >
          <div class="left">
            <ul>
              <li 
                v-ripple
                v-for="(item, index) in productCate" 
                :key="index"
                @click="productCateActive = index"
                :class="{active:productCateActive === index}"
              >
                {{item}}
              </li>
            </ul>
          </div>
          <div class="right">
            <ul v-for="(items, index) in productCate" :key="index" v-show="productCateActive === index">
              <li v-if="productCateActive === 0" class="searchBox">
                <v-icon>mdi-magnify</v-icon>
                <input type="text">
              </li>
              <li class="no-data">
                데이터가 없습니다.
              </li>
              <li v-for="item in 10" :key="item">
                <div class="product-info">
                  <span class="cate">사장님전용</span>
                  <span class="name">미용실 수건류 80L</span>
                  <span class="price">21,900 원</span>
                </div>
                <v-btn icon>
                  <v-icon>mdi-plus</v-icon>
                </v-btn>
              </li>
            </ul>
          </div>
        </div>

        <v-btn class="finish" text @click="visible = false">
          <span>검수완료</span>
          <v-icon>mdi-chevron-right</v-icon>
        </v-btn>
      </div>
    </div>
  </v-dialog>
</template>

<script>
export default {
  data(){
    return{
      visible:false,
      tabActive:0,
      tabs:[
        '주문자상품','상품추가'
      ],
      productCate:[
        '검색','사장님','명품관','물빨래','상의','상의 외투','하의','침구류','커튼/러그','신발류/기타'
      ],
      productCateActive:0,
    }
  },
  methods:{
    handle(value){
      this.visible = value;
    }
  },
}
</script>

<style lang="scss" scoped>
.checking{
  height:100%;

  .head{
    display:flex;
    align-items: center;
    height:50px;
    padding:0 10px;
    background:#fff;

    .v-btn{
      width:40px;
      height:40px;
    }
    h2{
      font-size:16px;
      margin-left:5px;
    }
  }

  .tabs{
    height:100%;
    background:#f8f8f8;
    
    .tab-head{
      position: sticky;
      top:0px;
      display:flex;
      border-bottom:1px solid #e2e2e2;
      background:#fff;
      z-index:2;
  
      .tab{
        position: relative;
        flex:1;
        display:flex;
        justify-content: center;
        align-items: center;
        height:50px;
      }

      .active:after{
        content:'';
        position: absolute;
        bottom:0; 
        left:0;
        width:100%;
        height:2px;
        background:#008BE8;
      }
    }
  }

  .basket{
    padding:10px;
    padding-bottom:50px;

    .basket-item{
      background:#fff;
      border:1px solid #e2e2e2;
      margin-bottom:10px;

      .top{
        display:flex;
        padding:15px;
        justify-content: space-between;

        .left{
          strong{
            font-size:14px;
            display:block;
          }
          span{
            display:block;
            font-size:12px;
            color:#888;
            margin-top:3px;
          }
        }

        .v-btn{
          background:#f2f2f2;
          .v-icon{font-size:18px}
        }
      }
      .bottom{
        display:flex;
        justify-content: space-between;
        align-items: center;
        border-top:1px solid #e2e2e2;
        height:50px;
        padding:0 15px;

        .amount{
          display:flex;

          .amount-num{
            display:flex;
            justify-content: center;
            align-items: center;
            height:26px;
            width:40px;
            background:#f2f2f2;;
            border-radius:4px;
            margin:0 5px;
          }
          .v-btn{
            height:26px;
            border:1px solid #e2e2e2;
            min-width:unset;
            width:auto;
            padding:0 10px;

            .v-icon{font-size:14px;}
          }
        }
        .price{
          font-size:14px;
          font-weight:bold;
        }
      }
    }
  }

  .finish{
    position:fixed;
    bottom:0px;
    width:100%;
    background:#008BE8;
    border-radius:0px;
    height:50px;
    color:#fff;
    font-size:16px;
  }

  .product-list{
    display:flex;
    min-height:100%;

    ul{padding:0;margin:0;}

    .left{
      background:#fff;
      border-right:1px solid #e2e2e2;
      width:100px;

      ul{
        li{
          position: relative;
          display:flex;
          justify-content: center;
          align-items: center;
          height:45px;
          border-bottom:1px solid #e2e2e2;
          font-size:12px;
          font-weight:bold;
        }
        li.active{
          background:#FFF8FB;
        }
        li.active:after{
          content:'';
          border:1px solid #DF0E68;
          border-left:0px;
          width:100%;
          height:100%;
          position: absolute;
        }
      }
    }
    .right{
      flex:1;
      background:#f8f8f8;

      ul{
        padding:10px;
        padding-bottom:60px;

        li.searchBox{
          display:Flex;;
          align-items: center;
          padding:0px;
          .v-icon{
            width:50px;
            font-size:18px;
          }
          input{
            height:40px;
            width:100%;
            outline:none;
          }
        }

        li.no-data{
          background:#e2e2e2;
          border:0;
          justify-content: center;
        }

        li{
          display:flex;
          border:1px solid #e2e2e2;
          background:#fff;
          padding:10px;
          margin-bottom:10px;
          justify-content: space-between;
          align-items: center;

          .product-info{
            span{display:block;}
            span.cate{font-size:11px;color:#008BE8}
            span.name{}
            span.price{
              font-size:11px;
            }
          }

          .v-btn{
            background:#f2f2f2;
            .v-icon{font-size:18px;}
          }
        }
        li.last-child{
          margin-bottom:0px;
        }
      }
    }
  }
}
</style>