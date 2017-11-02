import AbstractWebClient from '../AbstractWebClient'
import ObgWebSocket from 'rt/connection/ObgWebSocket'
export default class VISClient extends AbstractWebClient {

  constructor () {
    this.ws = null
  }
  
  /*void*/ get(/*String*/path, /*GetCallback*/getCallback, /*ErrorCallback*/eCb) {
    if (isFunction(getCallback)) {
      cb(/*VISValue*/ value)
    }
  }
  /*void*/ set(/*String*/path, /*Any*/value, /*SetCallback*/setCallback, /*ErrorCallback*/eCb) {

  }
  /*VISSubscription*/ subscribe(/*String*/path, /*SubscriptionCallback*/subscriptionCallback, /*ErrorCallback*/eCb, /*optional SubscribeFilters*/filters) {

  }  
  /*void*/ unsubscribe(/*VISSubscription*/subscription, /*UnsubscribeCallback*/unsubscribeCallback, /*ErrorCallback*/eCb) {

  }
  /*void*/ unsubscribeAll(/*UnsubscribeCallback*/unsubscribeCallback, /*ErrorCallback*/eCb) {
    
  }
  /*void*/ connect(/*ConnectCallback*/ connectCallback, /*ErrorCallback*/ eCb) {

    // @job : need to check if any connection is established
    let ws = new ObgWebSocket()
    this.ws = ws
    ws.setProtocol(this.protocoal).setHost(this.host).setPort(this.port)
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

  }
  /*void*/ disconnect(/*DisconnectCallback*/ disconnectCallback, /*ErrorCallback*/ eCb) {
    try {
      this.ws.close()
      this.disconnectCallback()
    } catch (error) {
      eCb(error)
    }
  }
  /*void*/ authorize(/*object*/ tokens, /*AuthorizeCallback*/ authorizeCallback, /*ErrorCallback*/ eCb) {

  }
  /*void*/ getVSS(/*String*/ path, /*GetVSSCallback*/ getVSSCallback, /*ErrorCallback*/ eCb) {

  }
}