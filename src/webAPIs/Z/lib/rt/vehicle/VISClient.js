import AbstractWebClient from '../AbstractWebClient'
import WebSocket from '../connection/WebSocket'
export default class VISClient extends AbstractWebClient {
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
    let ws = WebSocket.connect()

  }
  /*void*/ disconnect(/*DisconnectCallback*/ disconnectCallback, /*ErrorCallback*/ eCb) {

  }
  /*void*/ authorize(/*object*/ tokens, /*AuthorizeCallback*/ authorizeCallback, /*ErrorCallback*/ eCb) {

  }
  /*void*/ getVSS(/*String*/ path, /*GetVSSCallback*/ getVSSCallback, /*ErrorCallback*/ eCb) {

  }
}