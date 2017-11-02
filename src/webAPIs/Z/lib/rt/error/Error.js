export default class Error {
  constructor () {
    this.message = null
    this.details = null
  }
  get FUNCTION_IS_REQUIRED_1 () { return 'Function is required.' }
  get FUNCTION_IS_REQUIRED_2 () {
    this.setMessage('Function is required.')
    this.setDetails('')
    return this
  }
  setMessage (m) {
    this.message = m
  }
  setDetails (d) {
    this.details = d
  }
}
