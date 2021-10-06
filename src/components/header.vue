<template>
  <div class="header">
    <div class="logo">
      <strong>데일리세탁</strong>
      <span>Partner</span>
    </div>
    <div class="btns">
      <v-btn text @click="$router.push('calculate')">
        <v-icon>mdi-chart-bar</v-icon>
      </v-btn>
      <v-btn text @click="$router.push('searchView')">
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
    </div>
  </div>
</template>


<style lang="scss" scoped>
.header{
  display:flex;
  justify-content: space-between;
  align-items: center;
  height:56px;
  background:#292929;
  padding:0 10px;

  .logo{
    color:#fff;

    strong{
      font-size:20px;
      letter-spacing:-0.7px;
    }
    span{color:#FFF700;margin-left:5px;}
  }

  .btns{
  
    .v-btn{
      height:46px;
      min-width:46px;
      padding:0px;
      border-radius:5px;

      .v-icon{
        font-size:20px;
        color:#fff;
      }
    }
  }
}
</style>
