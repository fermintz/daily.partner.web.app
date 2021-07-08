<template>
  <div class="home">
    <Snackbars ref="snackbar"/>
    <Confirm ref="confirm" />
    <Checking ref="checking"/>
    <PhotoSetModal ref="photoSet" />
    <Progress />
    <Header />
    <StateTabs @status="tabIndex = $event" />
    
    <div class="list">
      <OrderCard
        v-for="item in 2"
        :key="item"
        @modal="modalHandle($event)"
        @snack="snackHandle($event)"
      />
    </div>
  </div>
</template>

<script>
import Header from "@/components/header.vue";
import StateTabs from "@/components/stateTabs.vue";
import OrderCard from "@/components/orderCard.vue";
import Confirm from "@/components/modal/confirm.vue";
import PhotoSetModal from "@/components/modal/photo.vue";
import Snackbars from "@/components/snackbars.vue";
import Progress from '../components/modal/progress.vue';
import Checking from '@/components/modal/checking.vue'

export default {
  components: {
    Header,
    StateTabs,
    OrderCard,
    Confirm,
    PhotoSetModal,
    Snackbars,
    Progress,
    Checking
  },
  data() {
    return {
      tabIndex: 0,
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
}
</style>
