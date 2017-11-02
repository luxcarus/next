import AbstractConnection from './AbstractConnection'
export default class ObgWebSocket extends AbstractConnection{
  constructor() {
    super()
    this.ws = null
    this.port = null
  }
  connect(path) {
    if (this.protocol === null) throw new Error('Protocol is required.')
    if (this.host === null) throw new Error('Host is required.')
    if (this.port === null) throw new Error('Port is required.')
    this.ws = new WebSocket(`${this.protocol}://${this.host}:${this.port}`)
    return this
  }
  onopen(fn){
    console.log('onopen() is called')
    this.ws.onopen = fn
    return this
  }
  onmessage(fn){
    console.log('onmessage() is called')
    this.ws.onmessage = fn
    return this
  }
  onerror(fn){
    console.warn('onerror() is called')
    this.ws.onerror = fn
    return this
  }
  onclose(fn){
    console.warn('onclose() is called')
    this.ws.onclose = fn
    return this
  }
  send (/*Any*/data) {
    this.ws.send(data)
  }
  close(data){
    this.ws.onclose(data)
  }

}