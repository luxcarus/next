import ObgWebSocket from 'rt/connection/ObgWebSocket'

let ws = new ObgWebSocket()
ws.setProtocol('wss').setHost('localhost').setPort('443')
ws.connect().onOpen(onopen).onMessage(onmessage).onError(onerror)

function onopen () {
  ws.send('message from client')
}
function onmessage (res) {
  console.log(res)
}
function onclose () {
  console.warn('closed')
}
function onerror (err) {
  console.error(err)
}