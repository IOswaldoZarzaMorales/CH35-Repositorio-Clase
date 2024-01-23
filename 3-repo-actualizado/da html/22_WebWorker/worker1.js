var i = 1;
setInterval(moltiplica, 300)
function moltiplica() {
	i*=2
	postMessage(i);
}