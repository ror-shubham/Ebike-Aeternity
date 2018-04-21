<template>
  <div class="outer">
  	<div class="SHAPE">
  		<img src="../assets/left_shape.svg" class="left-svg">
  	</div>
  	<div class="title center-align">E-BIKE 1</div>
  	<div class="Scan-the-QR-Code-of">Scan the QR Code of the Bike to unlock</div>
    <img class="camera" src="https://camo.githubusercontent.com/c79f9b11d3b822c9648fd8e0fc9a646c8ac23f0b/68747470733a2f2f7261772e6769746875622e636f6d2f6d65746566696368612f6469616772616d732d7172636f64652f6d61737465722f6578616d706c65732f7172636f64652e706e67">
    <router-link to="/unlockWithCode">
    	<ae-button type="dramatic" block class="btn">Unlock with code</ae-button>
    </router-link>
  </div>
</template>

<script>
import { AeButton } from '@aeternity/aepp-components'
export default {
  name: 'scanQR',
  components: {
  	AeButton
  }
  
}
</script>

<style type="text/css">
	.outer{
		position: relative;
		margin: 11% 8%;
	}

	.Scan-the-QR-Code-of {
	  width: 80%;
	  height: 76px;
	  font-family: Roboto;
	  font-size: 30px;
	  font-weight: bold;
	  font-style: normal;
	  font-stretch: normal;
	  line-height: 1.27;
	  letter-spacing: normal;
	  text-align: center;
	  color: #1e1e1e;
	  color: var(--black);
	  text-align: center;
	  padding: 4% 10%;
	}

	.title{
	  height: 28px;
	  font-family: Roboto;
	  font-size: 24px;
	  font-weight: bold;
	  font-style: normal;
	  font-stretch: normal;
	  line-height: normal;
	  letter-spacing: normal;
	  text-align: center;
	  color: #1e1e1e;
	  color: var(--black);
	  text-align: center;
	  
	}

	.SHAPE {
		position: absolute;
	}

	.left-svg{
		margin: 6px 0 0 0;
	}

	.camera{
  	width: 234px;
  	height: 234px;
  	margin: 15%;
	}

	.center-align{
		display: flex;
		align-items: center;
		justify-content: center;
	}



</style>