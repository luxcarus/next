export default class AbstractConnection {
  // constructor(/*String*/protocol = null,/*String*/host = null,/*Number*/port = null,/*String*/path = null) {
  constructor() {
    /*String*/ this.protocol = null
    /*String*/ this.host = null
    /*String*/ this.port = null
  }
  /*AbstractConnection*/ setProtocol (protocol) {
    this.protocol = protocol
    return this
  }
  /*AbstractConnection*/ setHost (host) {
    this.host = host
    return this
  }
  /*AbstractConnection*/ setPort (port) {
    this.port = port
    return this
  }
}
