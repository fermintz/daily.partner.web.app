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
      <div class="top">
        <div class="product-info">
          <dl class="box">
            <dt>11</dt>
            <dd>주문상품</dd>
          </dl>
        </div>
        <div class="user-info">
          <dl class="name">
            <dd>박수민</dd>
          </dl>
          <dl class="phone">
            <dt><v-icon>mdi-phone</v-icon></dt>
            <dd>010-8525-4561</dd>
          </dl>
          <dl class="address">
            <dt><v-icon>mdi-map-marker</v-icon></dt>
            <dd>부산광역시 금정구 부산대학로 63번길 2 과학기술연구동 201호</dd>
          </dl>
        </div>
      </div>
      <div class="bottom">
        <dl>
          <dt>주문금액</dt>
          <dd>15,900원</dd>
        </dl>
      </div>
      <v-btn class="finishBtn" text @click.stop="modal(true)">
        검수시작
      </v-btn>
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
    min-height:150px;

    .top{
      display:flex;

      .product-info{
        display:flex;
        flex-direction: column;
        align-items: flex-start;
        margin-right:20px;

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
            width:50px;
            height:50px;
            background:#f2f2f2;
            font-size:18px;
            font-weight:600;
            color:#008BE8;
            line-height:16px;
          }

          dd{font-size:10px;margin-top:5px;}
          
        }

        span{font-size:11px;margin-top:5px;color:#008BE8;text-align:center;width:100%;}
      }

      .user-info{
        flex:1;

        dl{
          display:flex;
          align-items: center;
          margin-bottom:5px;

          dt{
            display:flex;
            justify-content: center;
            align-items: center;
            margin-right:5px;
            .v-icon{
              font-size:11px;
            }
          }
          dd{
            font-size:12px;
            line-height:18px;
          }
        }
        dl.name{
          dd{
            font-size:14px;
          }
        }

        dl.phone{
          dt{
            .v-icon{color:#08B882}
          }
          dd{background:#E3F9F2;color:#08B882;padding:0 5px;border-radius:3px;}
        }

        dl.address{
          align-items:flex-start;
          dt{
            .v-icon{margin-top:3px;}
          }
        }
      }
    }

    .bottom{
      display:flex;
      margin-top:15px;

      dl{
        display:flex;
        align-items: center;
        justify-content: center;
        margin-right:5px;
        background: #F8E8EF;
        height:22px;
        padding:0 5px;
        border-radius:3px;

        dt{
          font-size:11px;
          color:#888;
          margin-right:3px;
        }
        dd{
          font-size:11px;
        }
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

  .finishBtn{
    position: absolute;
    bottom:15px;
    right:15px;
    min-width:unset;
    width:auto;
    height:34px;
    padding:0 15px;
    font-size:13px;
    font-weight:600;
    letter-spacing: 0px;
    background: #292929;
    color:#fff;
  }
}
</style>