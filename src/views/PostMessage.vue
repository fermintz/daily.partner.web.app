<template>
  <div class="postMessage">
    <div class="header">
      <v-btn icon @click="$router.go(-1)">
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>
      <h2>메세지 보내기</h2>
    </div>
    
    <div class="inner">
      <div class="cont">
        <dl>
          <dt>안내사항 선택</dt>
          <dd>
            <div class="select">
              <div 
                class="select-item" 
                v-for="(item, index) in selectData" 
                :key="index"
                :class="{active: selectActive === index}"
                @click="selectActive = index"
                v-ripple
              >
                <strong>
                  {{item.title}}
                </strong>
                <span>
                  {{item.description}}
                </span>
              </div>
            </div>
          </dd>
        </dl>
        <dl>
          <dt>추가안내사항</dt>
          <dd>
            <textarea placeholder="추가안내사항은 직접 입력할 수 있습니다"/>
          </dd>
        </dl>
        

        <dl class="photoUpload">
          <dt>사진등록</dt>
          <dd>
          <v-row>
            <v-col cols="4">
              <div class="img-box">
                <v-btn icon>
                  <v-icon>mdi-close</v-icon>
                </v-btn>
                <img src="https://source.unsplash.com/random" />
              </div>
            </v-col>
            <v-col cols="4">
              <div class="img-box">
                <v-btn icon>
                  <v-icon>mdi-close</v-icon>
                </v-btn>
                <img src="https://source.unsplash.com/random" />
              </div>
            </v-col>
            <v-col cols="4">
              <div class="img-box">
                <v-btn icon>
                  <v-icon>mdi-close</v-icon>
                </v-btn>
                <img src="https://source.unsplash.com/random" />
              </div>
            </v-col>
            
            <v-col cols="4">
              <div class="img-btn" v-ripple>
                <v-icon>mdi-plus</v-icon>
              </div>
            </v-col>
          </v-row>
          </dd>
        </dl>
      </div>

      <div class="btns">
        <v-btn text>취소</v-btn>
        <v-btn text class="finish">메세지 보내기</v-btn>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  data(){
    return{
      visible:false,
      selectActive:0,
      selectData:[
        {
          title:'세탁시도',
          description:'세탁 진행이전 세탁물의 상태보존 및 오염제거가 원할히 진행될 수 없다는 안내메시지가 전송됩니다. 해당 상품의 사진과 안내메시지를 작성해 주세요'
        },
        {
          title:'세탁불가',
          description:'세탁작업이 불가능한 상품에 대한 안내메시지가 전송됩니다. 해당상품의 환불처리 및 세탁이 불가능하다는 점을 사진과 함께 아래 안내메시지를 작성해 주세요'
        },
      ]
    }
    
  },
  methods:{
    handle(value){
      this.visible = value
    }
  },
}
</script>

<style lang="scss" scoped>
.postMessage{
  height:100%;
  background:#fff;

  .inner{
    position: relative;
    padding:0 20px;
    overflow:hidden;
    padding-bottom:60px;
  }

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

  .cont{
    textarea{
      border:1px solid #c2c2c2;
      width:100%;
      padding:5px;
      height:150px;
      border-radius:5px;
      resize: none;
    }

    dl{
      margin-bottom:30px;

      dt{
        margin-bottom:10px;
        font-size:14px;
        font-weight:bold;
      }
    }

    .select{
      .select-item{
        margin-bottom:10px;
        padding:15px;
        background:#f2f2f2;
        border-radius:5px;
        strong{
          font-size:14px;
          display:block;
          margin-bottom:5px;
        }
        span{
          display:block;
          color:#888;
        }
      }
      .select-item.active{
        border:1px solid #d22828;
        background:#fff;
        strong{color:#d22828;}
        span{color:#000;}

      }
    }

    .photoUpload{
      h4{
        font-size:16px;
        margin-bottom:15px;
      }

      .row{
        padding:5px;
      }
      .col{
        padding:5px;
      }

      .img-box{
        display:flex;
        justify-content: center;
        align-items: center;
        position: relative;
        overflow:hidden;
        border-radius:5px;

        .v-btn{
          position:absolute;
          top:6px;
          right:6px;
          width:24px;
          height:24px;
          padding:0px;
          background:rgba(0,0,0,0.5);
          z-index:3;

          .v-icon{font-size:14px;color:#fff;}
        }

        img{
          position: absolute;
          width:150%;
        }
      }
      .img-box:after{
        content:'';
        display:block;
        padding-bottom:100%;
      }

      .img-btn{
        position: relative;
        display:flex;
        justify-content: center;
        align-items: center;
        border-radius:5px;
        background:#f2f2f2;

        .v-icon{font-size:32px;}
      }

      .img-btn:after{
        content:'';
        display:block;
        padding-bottom:100%;
      }
    }
  }

  .btns{
    left:0px;
    display:flex;
    align-items: center;
    width:100%;
    position: fixed;
    bottom:0px;
    padding:10px;
    border-top:1px solid #e2e2e2;
    background:#f8f8f8;
    z-index:99;

    .v-btn{
      flex:1;
      height:50px;
      border:1px solid #e2e2e2;
      margin-right:10px;
      font-size:14px;
      background:#fff;
    }

    .v-btn.finish{
      color:#fff;
      background:#008BE8;
      border:0px;
      margin-right:0;
    }
  }
  
}
</style>