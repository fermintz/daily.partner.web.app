<template>
  <div class="calculate">
    <SubHeader pageTitle="정산내역"/>

    <div class="page_contents">
      <dl class="comming">
        <dt 
          @click="calcDetail = !calcDetail"
        >
          <label>정산예정</label>
          <v-icon>{{calcDetail ? 'mdi-minus-circle' : 'mdi-plus-circle'}}</v-icon>
        </dt>
        <dd :class="{active:calcDetail}">
          <div class="calc_item">
            <div class="item_top">
              <div class="left">
                <span>정산기준일</span>
                <strong>2021.06.01~2021.07.12</strong>
              </div>
              
              <div class="right">
                <span>세탁건수</span>
                <strong>34건</strong>
              </div>
            </div>

            <ul>
              <li>
                <span>
                  <v-icon>mdi-minus-circle-outline</v-icon>
                  <label>서비스 이용료</label>
                </span>
                <strong>54,000 원</strong>
              </li>
              <li>
                <span>
                  <v-icon>mdi-plus-circle-outline</v-icon>
                  <label>세탁금액</label>
                </span>
                <strong>632,000 원</strong>
              </li>
            </ul>
            <div class="total">
              <span>총 정산금액</span>
              <strong>591,000</strong>
            </div>
          </div>
        </dd>
      </dl>
      <div class="line_bar" />

      <dl class="complete">
        <dt>
          <label>정산완료</label>
          <!-- <v-btn icon>
            <v-icon>mdi-magnify</v-icon>
          </v-btn> -->
        </dt>
        <dd>
          <div class="no_item">
            등록된 정산내역이 없습니다
          </div>
          <div class="calc_item fnish" v-for="item in 5" :key="item">
            <div class="item_top">
              <div class="left">
                <p>
                  <span>정산기준일</span>
                  <strong>2021.06.01~2021.07.12</strong>
                </p>
                <p>
                  <span>정산완료일</span>
                  <strong>2021.07.24</strong>
                </p>
              </div>
              <div class="right">
                <span>세탁건수</span>
                <strong>34건</strong>
              </div>
            </div>

            <ul>
              <li>
                <span>
                  <v-icon>mdi-minus-circle-outline</v-icon>
                  <label>서비스 이용료</label>
                </span>
                <strong>54,000 원</strong>
              </li>
              <li>
                <span>
                  <v-icon>mdi-plus-circle-outline</v-icon>
                  <label>세탁금액</label>
                </span>
                <strong>632,000 원</strong>
              </li>
            </ul>

            <div class="total">
              <span>총 정산금액</span>
              <strong>591,000</strong>
            </div>
          </div>

          <v-btn text class="more">
            더 보기
          </v-btn>
        </dd>
      </dl>
    </div>
  </div>
</template>

<script>
import SubHeader from '@/components/subHeader.vue'

export default {
  components:{
    SubHeader,
  },
  data(){
    return{
      calcDetail:false
    }
  }
}
</script>

<style lang="scss" scoped>
.calculate{

  .line_bar{
    height:10px;
    background:#f2f2f2;
  }

  dl{
    padding:20px;

    dt{
      display:flex;
      align-items: center;
      justify-content: space-between;

      label{
        font-size:18px;
        font-weight:bold;
      }
    }
    dd{
      margin-top:20px;
    }
  }

  
  .comming{
    dt{
      .v-icon{
        color:#DF0E68
      }
    }
    dd{
      height:0px;
      overflow:hidden;
      margin-top:0px;
      transition: margin-top 0.8s;

      ul{
        li{background:#F2F4F9}
      }
      .total{
        strong{
          color:#DF0E68;
        }
      }
    }

    dd.active{
      height:auto;
      transition: margin-top 0.8s;
      margin-top:20px;
    }  
  }

  .search_box{
    margin-bottom:20px;
  }

  .no_item{
    background:#f2f2f2;
    border-radius:5px;
    padding:20px;
    font-size:14px;
    text-align:center;
    margin-bottom:20px; 
  }
  .v-btn.more{
    width:100%;
    height:50px;
    text-align:center;
    border-radius:5px;
    background:#f2f2f2;
    font-size:14px;
  }
  .calc_item{
    .item_top{
      display:flex;
      align-items: center;
      margin-bottom:20px;
      
      .left{
        flex:1;
        text-align:left;
         border-right:1px solid #e2e2e2;
        span{
          display:block;
          font-size:12px;
          color:#898989;
          margin-bottom:5px;
        }
        strong{
          display:block;
          font-size:14px;
        }
      }
      .right{
        padding-left:20px;
       
        text-align:right;
        span{
          display:block;
          font-size:12px;
          color:#898989;
          margin-bottom:5px;
        }
        strong{
          display:block;
          font-size:14px;
        }
      }
    }

    ul{
      padding:0px;
      margin:0px;
      li{
        background:#f2f2f2;
        margin-bottom:10px;
        padding:10px;
        border-radius:5px;
        display:flex;
        justify-content: space-between;
        font-size:14px;
        span{
          .v-icon{
            font-size:18px;
            margin-right:5px;
          }
          label{font-size:13px;}
        }
      }
      li:last-child{
        margin-bottom:0px;
      }
    } 

    .total{
      margin-top:20px;
      display:flex;
      align-items: center;
      justify-content: space-between;
      font-size:14px;

      strong{
        font-size:18px;
      }
      strong:after{
        content:'원';
        font-size:14px;
        font-weight:normal;
        margin-left:5px;
        color:#292929;
      }
    }
  }

  .calc_item.fnish{
    border:1px solid #e2e2e2;
    border-radius:5px;
    padding-top:20px;
    margin-bottom:20px;
    box-shadow: 3px 3px 12px rgba(0,0,0,0.05);

    .item_top{
      align-items: flex-start;
      padding:0 20px;

      p{
        margin-bottom:10px;
      }
      p:last-child{
        margin-bottom:0px;
      }
    }

    ul{
      padding:0 20px;
    }

    .total{
      border-top:1px solid #e2e2e2;
      padding:15px 20px;
    }
  }
} 
</style>