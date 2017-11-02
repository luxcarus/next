export default class AbstractConnection {
  // constructor(/*String*/protocol = null,/*String*/host = null,/*Number*/port = null,/*String*/path = null) {
  constructor() {
    /*String*/ this.protocol = null
    /*String*/ this.host = null
    /*String*/ this.port = null
    /*String*/ this.path = null
  }
  setProtocol (protocol) {
    this.protocol = protocol
    return this
  }
  setHost (host) {
    this.host = host
    return this
  }
  setPort (port) {
    this.port = port
    return this
  }
  setPath (path) {
    this.path = path
    return this
  }
}