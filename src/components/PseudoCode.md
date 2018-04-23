# PseudoCode  
## State channel is opened
When QR code scanned or code entered manually,
#### OffChain
1. channel_open(by user) -> channel_accept (by e-bike renter, if everything is good)
2. funding_created(by user) -> funding_signed(by e-bike renter)  
   //transaction pop-up does the signing of funding_created
      			  
#### OnChain
3. channel_create (by user or renter)  
//default can be set to renter creating the channel as soon as it sends funding_signed

## State is updated
After every n minutes
#### Offchain
4. state_update (signed by both every 2 or 5 minutes)  
// wallet needs to have a protocol to authorize signing a specific amount of tokens on user's behalf at given time interval.



## State channel is closed
When user locks the e-bike and ends the ride, or goes off network
#### OffChain
5. closing_created(by user)
6. closing_signed(by e-bike renter)
//app waits for some time, if no closing_signed is recieved, it closes the channel unilaterally 
				
#### OnChain 
7. channel_close_mutual(by user or renter)  
 //if closing_signed recieved
7. channel_close_solo(by user)  
 //else