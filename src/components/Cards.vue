<template>
  <div class="padding-sides-10">
  	<div class="title-Cards">
  		<span>E-BIKE Rental</span>
  		<router-link to="/scanQR">
	  		<button class="qr-btn">
	  			<img src="../assets/qr.svg" class="qr-img">
	  		</button>
	  	</router-link>
  	</div>
    <a href="/#/scanQR">
    	<card v-for="task in tasks" date="some meters away">
				{{task.description}}
			</card>
	</a>
  </div>
</template>

<script>
import card from './Card'
export default {
  name: 'cards',
  components: {
      card
    },
  data(){
		return {
			tasks: [
				{'description': 'Bike1', 'completed': true},
				{'description': 'Bike2', 'completed': true},
				{'description': 'Bike3', 'completed': false},
				{'description': 'Bike4', 'completed': true},
				{'description': 'Bike5', 'completed': false},
				{'description': 'Bike6', 'completed': true}
			]	
		}
	},
}
</script>

<style type="text/css">
	.title-Cards {
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
	  margin: 8vw;
	}

	.qr-img {
	  width: 30px;
	  height: 30px;
	  object-fit: contain;
	}
	.qr-btn{
		background-color: Transparent;
		background-repeat:no-repeat;
		border: none;
		outline:none;
		float: right;
	}

	.padding-sides-10{
		padding-left: 10px;
		padding-right: 10px;
	}

	a{
		text-decoration: none;
		color: #1e1e1e;
	}

</style>