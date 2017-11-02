// // import VISClient from 'rt/vehicle/VISClient'
// // import B from 'rt/device/B'
// import 'rt/connection/AbstractWs'

// (function(){

//   console.log(8888);
//   // console.log(VISClient)

//   // window.VISClient = VISClient
//   // window.b = B

// }());


import ObgWebSocket from 'rt/connection/ObgWebSocket'

let ws = new ObgWebSocket()
ws.setProtocol('wss').setHost('localhost').setPort('443')
ws.connect()
ws.onopen(() => {
  ws.send('message from client')
}).onmessage((d) => {
  console.log(d)
})
