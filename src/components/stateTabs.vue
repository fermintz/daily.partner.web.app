<template>
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
</template>


<script>
export default {
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
  mounted(){

  },
  watch: {
    stateTabActive(newValue) {
      this.$emit('status', newValue);
    }
  },
  methods:{

  }
};
</script>

<style lang="scss" scoped>
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
      font-size: 20px;
      font-weight: 500;
      margin-top: 4px;
    }
  }
}

</style>
