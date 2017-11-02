export default class WebSocket {
  constructor(/*String*/protocol,/*String*/host,/*Number*/port,/*String*/path) {
    this.protocol = protocol
    this.host = host
    this.port = port
    this.path = path
    this.ws = null
  }
  connect() {
    this.ws = new WebSocket(`${this.protocol}://${host}:${port}/${path}`)
  }
  onopen(fn){
    console.info('onopen() is called')
    fn()
    return this.ws
  }
  onmessage(){
    console.info('onmessage() is called')
    return this.ws
  }
  onerror(){
    console.info('onerror() is called')
    return this.ws
  }
  onclose(){
    console.info('onclose() is called')
    return this.ws
  }

  send(){
    this.ws.send('yessssssssssssssssss')
  }
  close(){
    this.onclose()
  }

}

  // let ws = new WebSocket()
  // ws.connect().onmessage().