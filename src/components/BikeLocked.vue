<template>
  <div class="outer">
  	
  	<div class="center-align">
  		<div class="title">E-BIKE 1</div>
  	</div>

  	<div class="text-2">You locked your bike</div>

  	<div class="text-3">Do you want to end the ride?</div>

  	<ae-divider></ae-divider>

  	<div class="stats">
  		<div class="text-4">STATS</div>
  		<div class="number-1">30</div>
  		<div class="text-5">Minutes</div>
  		<div> 
  			<div class="text-align-center"><span class="text-6">~ 25</span><span class="text-7">AE </span></div>
  		</div>
  	</div>

  	<ae-divider></ae-divider>
	
	<div class="center-align">
		<ae-button type="dramatic" block class="btn max-width-500 margin-top-86" @click="modalVisible=true">
			End Ride & Pay
		</ae-button>
	</div>
	<!-- 
		SMART CONTRACT-
			Close state channel here
				OffChain
				5. closing_created(by user)
				6. closing_signed(by e-bike renter)
				//app waits for some time, if no closing_signed is recieved, it closes the channel unilaterally 
				
				OnChain
				//if closing_signed recieved
				7. channel_close_mutual(by user or renter)
				//else
				7. channel_close_solo(by user)
	 -->

	<ae-modal
    v-if="modalVisible"
    @close="modalVisible = false"
    title="Sign Transaction"
  >
  	<!-- making the whole image a button for now  -->
  	<button @click="redirectToThankYou">
  		<img src="@/assets/signTransaction.png" alt="" class="sign-image">
  	</button>
  </ae-modal>

  
  </div>
</template>

<script>
import { AeButton, AeInput, AeIcon, AeDivider, AeModal } from '@aeternity/aepp-components'
export default {
  name: 'bikeLocked',
  data (){
  	return{
  		modalVisible: false,
  	}
  }, 
  components: {
  	AeButton, AeInput, AeIcon, AeDivider, AeModal
  },
  methods: {
  	redirectToThankYou(){
  		this.$router.push('thankYou') 
  	}
  }
  
}
</script>

<style type="text/css">
	.outer{
		position: relative;
		margin: 5% 8%;
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

	.text-2 {
	  height: 38px;
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
	  margin-top: 40px;
	}

	.text-3 {
	  height: 28px;
	  font-family: Roboto;
	  font-size: 18px;
	  font-weight: normal;
	  font-style: normal;
	  font-stretch: normal;
	  line-height: 1.56;
	  letter-spacing: normal;
	  text-align: center;
	  color: #1e1e1e;
	  color: var(--black);
	  margin-top: 5px;
	  margin-bottom: 54px; 
	}

	.text-4 {
	  height: 16px;
	  font-family: Roboto;
	  font-size: 12px;
	  font-weight: 500;
	  font-style: normal;
	  font-stretch: normal;
	  line-height: 1.33;
	  letter-spacing: 0.3px;
	  text-align: center;
	  color: #989898;
	}

	.number-1{
	  height: 94px;
	  font-family: RobotoMono;
	  font-size: 80px;
	  font-weight: 300;
	  font-style: normal;
	  font-stretch: normal;
	  line-height: normal;
	  letter-spacing: -1.3px;
	  text-align: center;
	  color: #f7296e;
	}

	.text-5 {
	  height: 28px;
	  font-family: Roboto;
	  font-size: 16px;
	  font-weight: normal;
	  font-style: normal;
	  font-stretch: normal;
	  line-height: 1.75;
	  letter-spacing: normal;
	  text-align: left;
	  color: #1e1e1e;
	  text-align: center;
	}

	.text-align-center{
		text-align: center;
	}

	.text-6{
		height: 30px;
	  font-family: RobotoMono;
	  font-size: 26px;
	  font-weight: normal;
	  font-style: normal;
	  font-stretch: normal;
	  line-height: normal;
	  letter-spacing: -0.4px;
	  color: #f7296e;
	}

	.text-7 {
	  width: 18px;
	  height: 28px;
	  font-family: Roboto;
	  font-size: 14px;
	  font-weight: normal;
	  font-style: normal;
	  font-stretch: normal;
	  line-height: 2;
	  letter-spacing: normal;
	  text-align: left;
	  color: #1e1e1e;
	  color: var(--black);
	  margin-left: 5px;
	}

	.margin-top-86{
		margin-top: 86px;
	}
	
	@media screen and (max-width: 600px) {
		.sign-image{
			width: 80vw;
		}
	}

	.max-width-500{
		max-width: 500px;
	}
	
</style>