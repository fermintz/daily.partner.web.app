<template>
  <div class="subHeader">
    <div class="left">
      <v-btn icon @click="$router.go(-1)">
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>
      <h2>{{pageTitle}}</h2>
    </div>
  </div>
</template>

<script>
export default {
  props:[
    'pageTitle'
  ],
}
</script>

<style lang="scss" scoped>
.subHeader{
  position: sticky;
  width:100%;
  top:0px;
  display:flex;
  align-items: center;
  height:60px;
  padding:0 10px;
  background:#fff;
  z-index:3;

  .left{
    display:flex;
    align-items: center;
    .v-btn{
      width:40px;
      height:40px;
    }
    h2{
      font-size:16px;
      margin-left:5px;
    }
  }

  

}
</style>