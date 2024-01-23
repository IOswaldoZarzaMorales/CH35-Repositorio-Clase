var i;
onmessage = function(event) {
 i = event.data;
}
setInterval(generaSequenza, 300)
function generaSequenza() {
	if (i){
	i*=2;
    
	if (i>1000)	{
		close()
	}else{
			postMessage(i);
		}
	}
}
