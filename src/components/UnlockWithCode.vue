<!-- On submit, Open channel here  -->
<template>
  <div class="outer">
  	<div class="center-align">
	  	<div class="left-absolute-15">
	  		<img src="../assets/left_shape.svg" class="left-svg">

	  	</div>
	  		<div class="title">Unlock with Code</div>
	  </div>
  	<div>
	  	<div class=" center-align">
	  		<input 
	  			type="text" 
	  			v-model="code" 
	  			placeholder="Enter Code Here" 
	  			class="input-code"
	  			@keyup.delete="removeFromEnd"
	  		>
	  		<img src="@/assets/clear.svg" alt="clear-btn" class="margin-top-15" @click="removeFromEnd()">
		  </div>

		  <ae-modal
        v-if="modalVisible"
        @close="modalVisible = false"
        title="Sign Transaction"
      >
      	<!-- making the whole image a button for now  -->
      	<button @click="redirectToUnlocked">
      		<img src="@/assets/signTransaction.png" alt="" class="sign-image">
      	</button>
      </ae-modal>
	    <div class="margin-top-53">
				<div class="center-align">
			    <button class="btn-digit round-button" @click="addToCode('1')">
			    	<div class="btn-font">1</div>
			    </button>

				  <button class="btn-digit round-button" @click="addToCode('2')">
				  	<div class="btn-font">2</div>
				  </button>

				  <button class="btn-digit round-button" @click="addToCode('3')">
				  	<div class="btn-font">3</div>
				  </button>
				</div>


				<div class="center-align">
			    <button class="btn-digit round-button" @click="addToCode('4')">
			    	<div class="btn-font">4</div>
			    </button>

				  <button class="btn-digit round-button" @click="addToCode('5')">
				  	<div class="btn-font">5</div>
				  </button>

				  <button class="btn-digit round-button" @click="addToCode('6')">
				  	<div class="btn-font">6</div>
				  </button>
				</div>
				<div class="center-align">
			    <button class="btn-digit round-button" @click="addToCode('7')">
			    	<div class="btn-font">7</div>
			    </button>


				  <button class="btn-digit round-button" @click="addToCode('8')">
				  	<div class="btn-font">8</div>
				  </button>

				  <button class="btn-digit round-button" @click="addToCode('9')">
				  	<div class="btn-font">9</div>
				  </button>
				</div>


				<div class="center-align">
				  	<button class="btn-digit round-button" @click="addToCode('0')">
				  		<div class="btn-font">0</div>
				  	</button>
				</div>
			</div>
		</div>
  </div>
</template>

<script>
import { AeButton, AeInput, AeIcon, AeModal } from '@aeternity/aepp-components'
export default {
  name: 'unlockWithCode',
  components: {
  	AeButton, AeInput, AeIcon, AeModal
  },
  data (){
  	return{
  		code: '',
  		modalVisible: false,
  	}
  },

  //if length of code is 6(i.e. full code entered, it will redirect to sign page)
  watch: {
    code: function (val) {
      if(val.length==6){
      	this.modalVisible = true
      	//this.$router.push('bikeUnlocked') 
      }
    }
  },
  methods: {
  	addToCode(str){
  		this.code+=String(str);
  	},

  	removeFromEnd(){
  		this.code = this.code.substring(0, this.code.length - 1);
  	},

  	redirectToUnlocked(){
  		this.$router.push('bikeUnlocked') 
  	},  	

  	isNumber: function(evt) {
  		//only lets user type number
      evt = (evt) ? evt : window.event;
      var charCode = (evt.which) ? evt.which : evt.keyCode;
      if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        evt.preventDefault();;
      } else {
        return true;
      }
    }

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

	.left-absolute-15 {
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

	button:focus {
		outline:0;
	}
	
	@media screen and (max-width: 600px) {
		.sign-image{
			width: 80vw;
		}
	}

	

</style>