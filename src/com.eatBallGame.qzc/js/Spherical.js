import UTIL from './UTIL'

/**
 * 球类
 */
class Spherical {
  /**
	 * 构造函数
	 * @param  {Object} attr 球的属性
	 * 包含以下属性
 	 * String name	// 名字
	 * int centerX	// 圆心横坐标
	 * int centerY	// 圆心纵坐标
	 * int weight	// 重量
	 * String color	// 背景色
	 */
  constructor (attr = {}) {
    this.init(attr)
  }

  init (attr) {
    this.name = attr.name || ''
    this.centerX = attr.centerX || UTIL.getRandomXY('x')
    this.centerY = attr.centerY || UTIL.getRandomXY('y')
    this.weight = attr.weight || UTIL.getRandomWeight()
    this.color = attr.color || UTIL.getRandomColor()
  }

  /**
	 * 移动函数
	 * @param  {Number} x 终点圆心X
	 * @param  {Number} y 终点圆心Y
	 * @return {[type]}   [description]
	 */
  move (endX, endY) {}

  /**
	 * 获取半径
	 * @param {int} 半径
	 */
  getRadius () {
    return parseInt(this.weight / 10)
  }

  /**
	 * 获取速度
	 */
  getSpeed () {
    // return speed
  }

  /**
	 * 画出自己
	 */
  drawSelf (paint) {
    paint.beginPath()
    paint.fillStyle = this.color
    paint.arc(this.centerX, this.centerY, this.getRadius(), 0, 2 * Math.PI)
    paint.fill()
  }
}

export default Spherical
