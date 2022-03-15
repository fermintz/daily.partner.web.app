<template>
  <v-dialog
    v-model="visible"
  >
    <div class="product-modal">
      <div class="modal-head">
        <h2>EE6B12-2600 상품정보</h2>
        <v-btn icon @click="visible = false">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </div>
      <div class="product-table">
        <div class="item head">
          <span class="name">상품명</span>
          <span class="amount">수량</span>
          <span class="price">금액</span>
        </div>
        <div class="divider"/>
        <div class="item">
          <span class="name">흰색 와이셔츠</span>
          <span class="amount">1</span>
          <span class="price">3,000</span>
        </div>
        <div class="item">
          <span class="name">맨투맨/후드티</span>
          <span class="amount">2</span>
          <span class="price">5,000</span>
        </div>
        <div class="item">
          <span class="name">솜 패딩 롱(내장재 합성섬유)</span>
          <span class="amount">1</span>
          <span class="price">9,000</span>
        </div>
      </div>
    </div>
  </v-dialog>
</template>

<script>
export default {
  data(){
    return{
      visible:false,
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

.product-modal{
  background:#fff;
  border-radius:10px;

  .modal-head{
    height:50px;
    display:flex;
    align-items: center;
    justify-content: space-between;
    padding:0 15px;

    h2{
      font-size:16px;
    }

    .v-btn{
      
    }
  }
}
.product-table{
  padding:15px;

  .divider{
    height:1px;
    background:#e2e2e2;
    margin:10px 0;
  }

  .item{
    display:flex;
    align-items: center;
    margin-bottom:10px;
    justify-content: space-between;

    
    span.name{
      flex:1;
      margin-right:15px;
    }
    span.amount{
      text-align:center;
      width:30px;
    }
    span.price{
      text-align:right;
      width:60px;
    }
    span.minus{
      color:#d22828;
    }
  }
}
</style>