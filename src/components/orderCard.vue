<template>
  <div class="item" @click="$router.push('orderDetail')">
    <div class="item-head">
      <div class="icons">
        <span>검수대기</span>
        <span class="refound">반품</span>
      </div>
      <div class="order-date">
        2021.01.23 12:34
      </div>
    </div>
    <div class="item-body">

      <div class="product-info">
        <dl class="box">
          <dt>11</dt>
          <dd>주문상품</dd>
        </dl>
      </div>
      <div class="user-info">
        <dl class="phone">
          <dt>4561</dt>
          <dd>010-8525-4561</dd>
        </dl>
        <dl class="date">
          <dt>입고</dt>
          <dd>2021.01.26 13:34</dd>
        </dl>
        <dl class="name">
          <dt>이름</dt>
          <dd>김아무개</dd>
        </dl>
        <dl class="price">
          <dt>금액</dt>
          <dd>105,900 원</dd>
        </dl>
      </div>
      <div class="item-btns">
        <v-btn text @click.stop="modal(true)">
          전화걸기
        </v-btn>
        <v-btn text @click.stop="modal(true)">
          추가결제
        </v-btn>
        <v-btn class="finishBtn" text @click.stop="modal(true)">
          검수시작
        </v-btn>
      </div>
 
    </div>
    <div class="item-bottom">
      <dl>
        <dt><v-icon>mdi-message</v-icon></dt>
        <dd>문앞에 걸어둘게요!</dd>
      </dl>
    </div>
  </div> <!-- item -->
</template>

<script>
export default {
  methods:{
    modal(value){
      this.$emit('modal', value)
    },
    snackbar(value, text){
      this.$emit('snack', {visible:value, text:text})
    }  
  },
}
</script>

<style lang="scss" scoped>

.item{
  position: relative;
  margin-top:10px;
  background:#fff;
  border-top:1px solid #e2e2e2;
  border-bottom:1px solid #c2c2c2;
  min-height:100px;

  .item-head{
    display:flex;
    justify-content: space-between;
    align-items: center;
    height:40px;
    border-bottom:1px solid #e2e2e2;
    padding:0 10px;

    .icons{
      display:flex;
      align-items:center;

      span{
        display:flex;
        align-items: center;
        justify-content: center;;
        font-size:11px;
        background:#292929;
        border-radius:3px;
        color:#fff;
        height:20px;
        padding:0 5px;
        margin-right:5px;
      }

      .refound{
        background:#DF0E68
      }
    }
    .order-date{
      font-size:11px;
    }
  }
  .item-body{
    position: relative;
    padding:15px;
    display:flex;
    
 
    .product-info{
      display:flex;
      flex-direction: column;
      align-items: flex-start;
      margin-right:30px;

      dl{
        display:flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;


        dt{
          display:flex;
          justify-content: center;
          align-items: center;
          border-radius:100px;
          width:60px;
          height:60px;
          background:#f2f2f2;
          font-size:24px;
          font-weight:600;
          color:#292929;
          line-height:16px;
        }

        dd{font-size:10px;margin-top:5px;}
        
      }

      span{font-size:11px;margin-top:5px;color:#008BE8;text-align:center;width:100%;}
    }

    .user-info{
      flex:1;

      dl.phone{
        align-items: flex-end;
        margin-bottom:10px;
        dt{font-size:24px;line-height:24px;color:#08B882}
      }

      dl{
        display:flex;
        align-items: center;
        margin-bottom:5px;

        dt{
          display:flex;
          justify-content: center;
          align-items: center;
          margin-right:5px;
          font-size:12px;
          color:#888;
        }
        dd{
          font-size:12px;
          color:#292929;
        }
      }
      dl:last-child{
        margin-bottom:0px;
      }
    }

    .item-btns{
      display:flex;
      flex-direction:column;
      width:70px;

      .v-btn{
        width:100%;
        margin-bottom:5px;
        max-height:30px;
        padding:0 15px;
        font-size:12px;
        font-weight:500;
        letter-spacing: 0px;
        background: #08B882;
        color:#fff;
      }

      .finishBtn{
        background: #292929;
        color:#fff;
      }
    }
  }


  .item-bottom{
    padding:10px;
    background: #F2F0E7;

    dl{
      display:flex;
      align-items: flex-start;

      dt{
        .v-icon{margin-right:8px;font-size:14px;}
      }
      dd{
        font-size:12px;
      }
    }
  }

  
}
</style>