import AbstractConnection from './AbstractConnection'
export default class ObgWebSocket extends AbstractConnection{
  constructor() {
    super()
    /*WebSocket*/ this.ws = null
  }
  /*ObgWebSocket*/ connect(path) {
    if (this.protocol === null) throw new Error('Protocol is required.')
    if (this.host === null) throw new Error('Host is required.')
    if (this.port === null) throw new Error('Port is required.')
    this.ws = new WebSocket(`${this.protocol}://${this.host}:${this.port}`)
    return this
  }
  /*ObgWebSocket*/ onOpen(/*Function*/ fn){
    this.ws.onopen = fn
    return this
  }
  /*ObgWebSocket*/ onMessage(/*Function*/ fn){
    this.ws.onmessage = fn
    return this
  }
  /*ObgWebSocket*/ onError(/*Function*/ fn){
    this.ws.onerror = fn
    return this
  }
  /*ObgWebSocket*/ onClose(/*Function*/ fn){
    this.ws.onclose = fn
    return this
  }
  /*ObgWebSocket*/ send (/*String*/ data) {
    this.ws.send(data)
    return this
  }
  /*ObgWebSocket*/ close(/*Number*/ code, /*String*/ reason){
    this.ws.close(code, reason)
    return this
  }
}
