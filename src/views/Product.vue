<template>
  <div class="product">
    <div class="header">
      <v-btn icon @click="$router.go(-1)">
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>
      <h2>상품추가</h2>
    </div>

    <div class="page_top">
      <h2>상품을 검색해보세요</h2>
      <div class="input_box">
        <input type="text" placeholder="상품명을 입력해주세요">
        <v-icon>mdi-magnify</v-icon>
      </div>
    </div>

    <div class="page_tabs">
      <v-btn text>검색결과</v-btn>
      <v-btn text class="active">직접선택</v-btn>
    </div>

    <div class="line_bar" />

    <div class="page_cont">
      <div class="cate_btns">
        <v-btn 
          text
          v-for="(item,index) in category" :key="index"
          :class="{active:cateActive === index}"
          @click="cateActive = index"
        >
          {{item}}
        </v-btn>
      </div>

      <div class="product_items">
        <div class="item" v-for="item in 10" :key="item">
          <div class="left">
            <strong>바지/스커트</strong>
            <span>단가 4,500원</span>
          </div>
          <v-btn icon>
            <v-icon>mdi-plus</v-icon>
          </v-btn>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      cateActive:0,
      category:[
        '물빨래','상의','상의외투','하의','침구류','커튼/러그',
      ],
    }
  }
}
</script>

<style lang="scss" scoped>
.product{
  padding-bottom:20px;

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

  .page_top{
    padding:20px;

    h2{
      margin-bottom:10px;
    }
    .input_box{
      display:flex;
      position: relative;
      align-items: center;
      border:1px solid #c2c2c2;
      border-radius:5px;
      input{
        width:100%;
        height:40px;
        padding:0 50px 0 10px;
      }
      .v-icon{
        position:absolute;
        right:0px;
        width:40px;
        height:40px;
        font-size:18px;
      }
    }
  }

  .line_bar{
    height:10px;
    background:#f2f2f2;
  }

  .page_tabs{
    display:flex;
    border-top:1px solid #e2e2e2;
    border-bottom:1px solid #c2c2c2;
    .v-btn{
      position: relative;
      flex:1;
      font-size:14px;
      height:46px;
      border-radius:0;
    }
    .v-btn.active{
      color:#008BE8;
    }
    .v-btn.active:after{
      content:' ';
      position: absolute;
      display:block;
      width:100%;
      bottom:0;
      height:2px;
      background:#008BE8;
    }
  }

  .page_cont{
    .cate_btns{
      display:flex;
      flex-wrap: wrap;
      align-items: center;
      padding-bottom:10px;
      border-top:1px solid #292929;
      border-bottom:1px solid #c2c2c2;


      .v-btn{
        position: relative;
        width:25%;
        height:40px;
        background:#fff;
        border-right:1px solid #c2c2c2;
        border-bottom:1px solid #c2c2c2;
        border-radius:0;
        font-size:13px;
        font-weight:bold;
      }
      .v-btn.active{
        color:#de0059;
        background:#FBEFF4;
      }
      .v-btn.active:after{
        content:' ';
        position: absolute;
        left:0;
        top:0;
        width:100%;
        height:40px;
        border:1px solid #de0059;
      }

      .v-btn:nth-child(4n){
        border-right:0px;
      }
    }

    .product_items{
      .item{
        display:flex;
        align-items: center;
        justify-content: space-between;
        padding:20px;
        border-bottom:1px solid #e2e2e2;

        .left{
          strong{
            display:block;
            font-size:14px;
          }
          span{
            display:block;
            font-size:12px;
            color:#898989
          }
        }

        .v-btn{
          background:#f2f2f2;
        }
      }
    }
  }
}
</style>