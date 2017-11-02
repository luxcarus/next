var wss = new WebSocket("wss://localhost")
wss.onopen = function(){
  // wss.send("Message to send")
  wss.send("message from client")
  console.log("Message is sent...")
}
wss.onmessage = function (evt) { 
  var received_msg = evt.data
  console.log(received_msg)
  // console.log("Message is received...")
}
wss.onclose = function(){ 
  console.warn("Connection is closed...") 
}
// window.onbeforeunload = function(event) {
//   socket.close()
// }