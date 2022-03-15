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

    </div>

    <div class="state_list" v-show="stateTabActive === 0">
      <OrderCard state="검수대기" next="검수" csMessage="false" @modalShow="e => $refs.productModal.handle(e)"/>
    </div>
    <div class="state_list" v-show="stateTabActive === 1">
      <OrderCard :btns="true" :csMessage="true" state="검토중"/>
    </div>
    <div class="state_list" v-show="stateTabActive === 2">
      <OrderCard state="검토완료" next="작업시작"/>
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
      stateTabActive: 0,
      stateTabs: [
        {
          name:"검수대기",
          number: 2,
        },
        {
          name:"검토중",
          number: 1,
        },
        {
          name:"검토완료",
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
    position:sticky;
    top:0px;
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

.no-data{
  padding:20px;
  text-align:center
}
</style>
