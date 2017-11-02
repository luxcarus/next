import WebClientOptions from './WebClientOptions'
export default class AbstractWebClient {

  constructor (/*optional VISClientOptions*/ options = {host:'wwwivi',protocoal:'wss',port:443}) {
    this.host = options.host
    this.protocoal = options.protocoal
    this.port = options.port
  }

  /*abstract*/ get(){}
  /*abstract*/ set(){}
  /*abstract*/ subscribe(){}
  /*abstract*/ unsubscribe(){}
  /*abstract*/ unsubscribeAll(){}
  /*abstract*/ connect(){}
  /*abstract*/ disconnect(){}

  setHost(v){this.host = v}
  setProtocoal(v){this.protocoal = v}
  setPort(v){this.port = v}

}