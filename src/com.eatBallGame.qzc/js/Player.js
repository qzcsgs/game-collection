import Spherical from './Spherical'

/**
 * 玩家类
 */
class Player extends Spherical {
  constructor (attr) {
    super(attr)
  }

  /**
	 * 重写移动函数
	 * @param  {Number} x 终点圆心X
	 * @param  {Number} y 终点圆心Y
	 */
  move (endX, endY) {

  }

  /**
	 * 吐球函数
	 * @return {[type]} [description]
	 */
  spit () {

  }

  /**
	 * 分身函数
	 * @return {[type]} [description]
	 */
  division () {

  }
}

export default Player
