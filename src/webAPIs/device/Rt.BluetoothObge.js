import Bluetooth from 'rt/device/Bluetooth'
export default class BluetoothObge {
  constructor () {
    this.seed = new Bluetooth()
    window.device.bluetooth = this
  }
  getOne(){
    return this.seed.getOne()
  }
}