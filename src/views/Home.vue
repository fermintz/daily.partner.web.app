<template>
  <div class="home">
    <Snackbars ref="snackbar"/>
    <Confirm ref="confirm" />
    <Checking ref="checking"/>
    <PhotoSetModal ref="photoSet" />
    <Progress />
    <Header />
    
    <div class="stateTabs">
      <dl
        v-for="(item, index) in stateTabs"
        :key="index"
        :class="{ active: stateTabActive === index }"
        @click="stateTabActive = index"
      >
        <dt v-html="item.name"></dt>
        <dd>{{item.number}}</dd>
      </dl>
    </div>

    <div class="list_controls">
      <v-btn 
        text 
        :class="{active:listControls === index}"
        @click="listControls = index" 
        v-for="(item, index) in ['주문순','예약일순','수거순']" :key="item">
        {{item}}
      </v-btn>
    </div>

    <div class="state_list" v-show="stateTabActive === 0">
      <OrderCard 
        state="검수대기" 
        next="검수" 
        csMessage="false" 
        @modalShow="e => $refs.productModal.handle(e)"
        v-for="item in 10" :key="item"
      />
    </div>
    <div class="state_list" v-show="stateTabActive === 1">
      <OrderCard :btns="true" :csMessage="true" state="추가결제" />
    </div>
    <div class="state_list" v-show="stateTabActive === 2">
      <OrderCard state="결제완료" next="작업시작"/>
    </div>
    <div class="state_list" v-show="stateTabActive === 3">
      <OrderCard next="작업완료" state="작업중"/>
    </div>
    <div class="state_list" v-show="stateTabActive === 4">
      <OrderCard :btns="true" state="작업완료" :csMessage="true"/>
    </div>

    <ProductModal ref="productModal"/> 
  </div>
</template>

<script>
import Header from "@/components/header.vue";
import OrderCard from "@/components/orderCard.vue";
import Confirm from "@/components/modal/confirm.vue";
import PhotoSetModal from "@/components/modal/photo.vue";
import Snackbars from "@/components/snackbars.vue";
import Progress from '../components/modal/progress.vue';
import Checking from '@/components/modal/checking.vue'
import ProductModal from '@/components/modal/product.vue';

export default {
  components: {
    Header,
    OrderCard,
    Confirm,
    PhotoSetModal,
    Snackbars,
    Progress,
    Checking,
    ProductModal
  },
  data() {
    return {
      listControls:0,
      stateTabActive: 0,
      stateTabs: [
        {
          name:"검수대기",
          number: 2,
        },
        {
          name:"추가결제",
          number: 1,
        },
        {
          name:"결제완료",
          number: 2,
        },
        {
          name: "작업중",
          number: 4,
        },
        {
          name: "작업완료",
          number: 10,
        },
      ],
    };
  },
  mounted() {},
  methods: {
    modalHandle(e) {
      this.$refs.checking.handle(e);
    },
    snackHandle(e) {
      this.$refs.snackbar.handle(e.visible)
      this.$refs.snackbar.message = e.text
    },
  },
};
</script>

<style lang="scss" scoped>
.home {
  height: 100%;
  background: #f8f8f8;

  .stateTabs {
    display: flex;
    border-bottom: 1px solid #e2e2e2;
    background:#fff;
    z-index:3;

    dl.active {
      background:#FFF8FB;
      dd {
        color: #df0e68;
      }
    }

    dl.active:after {
      content: "";
      position: absolute;
      left: 0px;
      top: 0px;
      width: 100%;
      height: 100%;
      border: 1px solid #df0e68;
    }

    dl {
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      flex: 1;
      border-right: 1px solid #e2e2e2;
      height: 64px;
      margin: 0px;
      padding: 8px;

      dt {
        font-size: 10px;
        text-align: center;
      }
      dd {
        text-align: center;
        font-size: 18px;
        line-height:1.4;
        font-weight: 600;
      }
    }
  }
}

.list_controls{
  display:flex;
  align-items: center;
  background:#fff;
  margin-top:10px;
  border-top:1px solid #292929;
  padding:10px;
  padding-left:10px;
  overflow-x:auto;

  &::-webkit-scrollbar{
    display:none;
  }


  .v-btn{
    border-radius:5px;
    height:32px;
    margin-right:5px;
    font-size:13px;
    background:#f2f2f2;
    &:last-child{
      border-right:0px;
    }
  }
  .v-btn.active{
    background:#0007EE;
    color:#fff;
  }
  
}

.no-data{
  padding:20px;
  text-align:center
}
</style>
