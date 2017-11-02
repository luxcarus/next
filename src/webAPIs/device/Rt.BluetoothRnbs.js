import Bluetooth from 'rt/device/Bluetooth'
export default class BluetoothRnbs {

  constructor () {
    this.seed = new Bluetooth()
  }

  getOne(){
    return this.seed.getOne()
  }
  getThree(){
    return this.seed.getThree()
  }
  getA(){
    return this.seed.getA()
  }
  getB(){
    return this.seed.getB()
  }  


}