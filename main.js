function rideCalc (){
	ride = document.getElementById("ride").value;
	monthlyFare = ride * 2.75;
	rightRide();
}

function rightRide(){
	if (monthlyFare < 116.50) {
	alert("Stick with Singleride!");
	}else{
		alert("Buy a Monthly Metrocard!")
	}

}