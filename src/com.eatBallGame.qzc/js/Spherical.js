import UTIL from './UTIL'
import CONFIG from './CONFIG'

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
   * Boolean life // 生命
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
    this.life = attr.life || true

    // 自减体重
    this.reduceWeight()
  }

  /**
	 * 移动函数
	 * @param  {Number} endX 终点圆心X
	 * @param  {Number} endY 终点圆心Y
	 * @return {[type]}   [description]
	 */
  move (endX, endY) {
    // 半径的一半
    const halfR = parseInt(this.getRadius() / 2),
          map = window.spirit.map,
          mapRightX = map.x + map.width - map.padding - halfR,
          mapBottomY = map.y + map.height - map.padding - halfR,
          mapLeftX = map.x + halfR + map.padding,
          mapTopY = map.y + halfR + map.padding,
          sx = endX - this.centerX,
          sy = endY - this.centerY,
          // 两点间距离
          pp = Math.sqrt(Math.pow(sx, 2) + Math.pow(sy, 2)),
          addX = sx * this.getSpeed() / pp,
          addY = sy * this.getSpeed() / pp
    
    if (isNaN(addX) || isNaN(addY)) return  // 数值异常退出
    
    // 边界
    if (this.centerX <= mapRightX && addX > 0) {
      this.centerX += addX
    } else if (this.centerX >= mapLeftX && addX < 0) {
      this.centerX += addX
    }

    if (this.centerY <= mapBottomY && addY > 0) {
      this.centerY += addY
    } else if (this.centerY >= mapTopY && addY < 0) {
      this.centerY += addY
    }
  }

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
    return CONFIG.player_weight * 8 / this.weight
  }

  /**
	 * 画出自己
	 */
  drawSelf (paint) {
    if (!this.life) return
    // 身体
    paint.beginPath()
    paint.fillStyle = this.color
    paint.arc(this.centerX, this.centerY, this.getRadius(), 0, 2 * Math.PI)
    paint.fill()
    // 名字
    paint.beginPath()
    paint.fillStyle = '#fff'
    paint.font = '40px serif'
    paint.textAlign = 'center'
    paint.fillText(this.name, this.centerX, this.centerY + 10)
  }

  /**
   * 增加体重
   * @param {Number} num 增加的体重数
   */
  addWeight (num) {
    this.weight += parseInt(num / 5)
  }

  /**
   * 自减体重
   */
  reduceWeight () {
    if (this.weight > 800) {
      // 每增加400体重，每秒多减5
      this.weight -= parseInt(this.weight / 800) * 5
    }
    setTimeout(this.reduceWeight.bind(this), 1000)
  }
}

export default Spherical
