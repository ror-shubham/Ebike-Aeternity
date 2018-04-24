<template>
  <div class="outer">
  	
  	<div class="text-2">Thanks for riding with us</div>

  	<ae-divider></ae-divider>

  	<div class="stats">
  		<div class="text-4">STATS</div>
  		<div class="number-1">30</div>
  		<div class="text-5">Minutes</div>
  		<div> 
  			<div class="text-align-center"><span class="text-6">25</span><span class="text-7">AE </span></div>
  		</div>
  	</div>

  	<ae-divider></ae-divider>
	
	<div class="center-align">	
		<ae-button type="dramatic" block class="max-width-500 margin-top-86" @click="redirectToHome">
			Go to Home
		</ae-button>
	</div>
  
  </div>
</template>

<script>
import { AeButton, AeDivider} from '@aeternity/aepp-components'
export default {
  name: 'thankYou',
  data (){
  	return{
  		modalVisible: false,
  	}
  }, 
  components: {
  	AeButton, AeDivider
  },
  methods: {
  	redirectToHome(){
  		this.$router.push('/') 
  	}
  }
  
}
</script>

<style type="text/css">
	.outer{
		position: relative;
		margin: 5% 8%;
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
	

	.max-width-500{
		max-width: 500px;
	}

	.center-align{
		display: flex;
		align-items: center;
		justify-content: center;
	}
	
</style>