<template>
  <div class="curved">
    <div class="headline"><slot></slot></div>
    <div class="DATE">{{date}}</div>
    <img src="../assets/shape.svg"
     class="SHAPE">
  </div>
</template>

<script>
export default {
  name: 'card',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  props: ['date'],
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.curved {
  width: 97%;
  height: 90px;
  border-radius: 10px;
  background-color: #ffffff;
  border-bottom: 5px solid #311b58;
  box-shadow: 0 4px 8px 0 rgba(60, 60, 60, 0.1);
  /*box-shadow: 0 4px 8px 0 rgba(49, 27, 88, 0.1);*/
  
  padding: 8px 5px;
  position: relative;
  margin-top: 8px;
}

.headline {
  /*width: 315px;*/
  height: 24.9px;
  font-family: Roboto;
  font-size: 24px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.17;
  letter-spacing: normal;
  text-align: left;
  color: #1e1e1e;
  color: var(--darker);
  position: absolute;
  left: 20px;
  top: 45px;
}

.DATE {
  width: 108px;
  height: 16px;
  font-family: Roboto;
  font-size: 14px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #989898;
  position: absolute;
  left: 22px;
  top: 75px;
}

.SHAPE {
  width: 9px;
  height: 17px;
  object-fit: contain;
  position: absolute;
  right: 25px;
  top: 45px;
}
/*#curved {
  border: 2px solid red;
  border-radius: 10px;
  padding: 10px;
  margin: 15px;
}*/
</style>
