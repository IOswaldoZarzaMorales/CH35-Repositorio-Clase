var dataN;
var oggi = new Date()

onmessage = function(event) {
    dataN = new Date(event.data.dataNascita);
	anni = (oggi.getYear()-dataN.getYear());
	postMessage(anni);
}



