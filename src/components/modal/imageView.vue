<template>
  <v-dialog
    v-model="visible"
  >
    <div class="imageView">
      <v-btn class="close" icon @click="visible = false">
        <v-icon>mdi-close</v-icon>
      </v-btn>
      <img src="https://picsum.photos/900/900"/>
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
      this.visible = value
    }
  }
  
}
</script>

<style lang="scss" scoped>
.imageView{
  position: relative;

  .close{
    background:rgba(0,0,0,0.8);
    position: absolute;
    top:15px;
    right:15px;

    .v-icon{
      color:#fff;
    }
  }

  img{
    display:block;
    width:100%;
  }
  
}

</style>