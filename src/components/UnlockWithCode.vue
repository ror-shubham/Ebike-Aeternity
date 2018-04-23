<!-- On submit, Open channel here  -->
<template>
  <div class="outer">
  	<div class="center-align">
	  	<div class="SHAPE">
	  		<img src="../assets/left_shape.svg" class="left-svg">
	  	</div>
	  		<div class="title">Unlock with Code</div>
	  </div>
  	<div>
	  	<div class=" center-align">
	  		<input type="text" v-model="code" placeholder="Enter Code Here" class="input-code">
	  		<img src="@/assets/clear.svg" alt="clear-btn" class="margin-top-15">
		  </div>
	    <div class="margin-top-53">
				<div class="center-align">
			    <button class="btn-digit round-button"><div class="btn-font">1</div></button>
				  <button class="btn-digit round-button"><div class="btn-font">2</div></button>
				  <button class="btn-digit round-button"><div class="btn-font">3</div></button>
				</div>
				<div class="center-align">
				  <button class="btn-digit round-button"><div class="btn-font">4</div></button>
				  <button class="btn-digit round-button"><div class="btn-font">5</div></button>
				  <button class="btn-digit round-button"><div class="btn-font">6</div></button>
				</div>
				<div class="center-align">
				  <button class="btn-digit round-button"><div class="btn-font">7</div></button>
				  <button class="btn-digit round-button"><div class="btn-font">8</div></button>
				  <button class="btn-digit round-button"><div class="btn-font">9</div></button>
				</div>
				<div class="center-align">
				  	<button class="btn-digit round-button"><div class="btn-font">0</div></button>
				</div>
			</div>
		</div>
  </div>
</template>

<script>
import { AeButton, AeInput, AeIcon } from '@aeternity/aepp-components'
export default {
  name: 'unlockWithCode',
  components: {
  	AeButton, AeInput, AeIcon
  }
  
}
</script>

<style type="text/css">
	.outer{
		position: relative;
		margin: 11% 8%;
	}


	.title{
		width: 278px;
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
		left: 15px;
	}

	.left-svg{
		margin: 6px 0 0 0;
	}


	.round-button {border-radius: 100%;}

	.btn-digit {
    
    border: none;
    color: white;
    padding: 20px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 20px;
    margin: 7.5px;
    width: 80px;
	  height: 80px;
	  background-color: #F0F0F0;	
	}


	.btn-font{
		font-family: Roboto;
	  font-size: 24px;
	  font-weight: bold;
	  font-style: normal;
	  font-stretch: normal;
	  line-height: 1.17;
	  letter-spacing: normal;
	  text-align: center;
	  color: #1e1e1e;
	  background-color: #F0F0F0;	
	}

	.center-align{
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.margin-top-53{
		margin-top: 52.5px;
	}

	input:focus{
    outline: none;
	}

	input[type="text"]{
    background: transparent;
    border: none;
	}

	.input-code{
	  width: 270px;
	  font-family: RobotoMono;
	  font-size: 60px;
	  font-weight: 300;
	  font-style: normal;
	  font-stretch: normal;
	  line-height: normal;
	  letter-spacing: -1px;
	  text-align: center;
	  color: #f7296e;
	}

	::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
    font-size: 26px;
	}

	:-ms-input-placeholder { /* Internet Explorer 10-11 */
    font-size: 26px;
	}

	::-ms-input-placeholder { /* Microsoft Edge */
		font-size: 26px;
	}

	.margin-top-15{
		margin-top: 15px;
	}

	

</style>