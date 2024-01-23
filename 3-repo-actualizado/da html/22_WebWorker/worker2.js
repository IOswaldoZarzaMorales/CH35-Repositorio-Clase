var i
onmessage = function(event) {
    i = event.data;
}
setInterval(generaSequenza, 300);
function generaSequenza() {
if (i){
	i*=2;
	      
	postMessage(i);
}	
}
