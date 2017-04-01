for(var i=0;i<10;i++){

	setTimeout(function(){
		console.log(i);
	},100);

}


for(var i=0;i<10;i++){

	(function(index){
	setTimeout(function(){
		console.log(index);
	},100);

})(i)

}