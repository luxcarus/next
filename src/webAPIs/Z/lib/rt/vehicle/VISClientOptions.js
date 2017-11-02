export default class VISClientOptions {
  constructor (/*String*/host = 'wwwivi', /*String*/protocol = 'wss', /*Number*/port = 443) {
    /*String*/this.host = host
    /*String*/this.protocol = protocol
    /*Number*/this.port = port
  }
  setHost(v) {this.host = v}
  setProtocol(v) {this.protocol = v}
  setPort(v) {this.port = v}
}