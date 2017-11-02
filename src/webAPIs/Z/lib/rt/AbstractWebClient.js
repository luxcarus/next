import WebClientOptions from './WebClientOptions'
export default class AbstractWebClient {

  constructor (/*optional VISClientOptions*/ options = {host:'wwwivi',protocoal:'wss',port:443}) {
    this.protocoal = options.protocoal
    this.host = options.host
    this.port = options.port
  }

  /*void*/ /*abstract*/ get(){}
  /*void*/ /*abstract*/ set(){}
  /*VISSubscription*/ /*abstract*/ subscribe(){}
  /*void*/ /*abstract*/ unsubscribe(){}
  /*void*/ /*abstract*/ unsubscribeAll(){}
  /*void*/ /*abstract*/ connect(){}
  /*void*/ /*abstract*/ disconnect(){}

  setHost(v){this.host = v}
  setProtocoal(v){this.protocoal = v}
  setPort(v){this.port = v}

}