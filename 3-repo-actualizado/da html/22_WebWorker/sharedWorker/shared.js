var connessioni = 0;
var messaggio = "";
onconnect = function(event) {
  connessioni += 1;
  var port = event.ports[0];
  port.onmessage = function(e) {
  messaggio = messaggio + " " + e.data;
  port.postMessage(messaggio + "<br> num connessioni attive: " + connessioni) ;

}
}

//}	
//}
