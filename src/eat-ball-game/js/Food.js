import Spherical from './Spherical'

/**
 * 食物类
 */
class Food extends Spherical {
  constructor (attr) {
    super(attr)
  }

  /**
   * 重写getRadius
   */
  getRadius () {
    return 5
  }
}

export default Food
