import Spherical from './Spherical'
import UTIL from './UTIL'

class AiPlayer extends Spherical {
  constructor (attr) {
    super(attr)
    this.setRandomXY()
  }

  setRandomXY () {
    this.randomX = UTIL.getRandomXY('x')
    this.randomY = UTIL.getRandomXY('y')

    // 随机1~3秒，改变运动轨迹
    const randomNum = parseInt(Math.random() * 3 + 1) * 1000

    setTimeout(this.setRandomXY.bind(this), randomNum)
  }

  /**
   * ai移动
   */
  aiMove () {
    // 根据随机的终点值移动
    this.move(this.randomX, this.randomY)
  }
}

export default AiPlayer
