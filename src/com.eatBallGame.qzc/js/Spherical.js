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
    if (this.weight <= 2000) return this.weight / 10

    let r = 200
    const lastWeight = this.weight - 2000
    const len = parseInt(lastWeight / 1000) + 1

    for (let i = 2; i <= len + 1; i++) {
      if (i === len + 1) {
        r += (lastWeight % 1000) / (i * 10)
      } else {
        r += 1000 / (i * 10)
      }
    }

    return r
  }

  /**
	 * 获取速度
	 */
  getSpeed () {
    const speed =  200 * 8 / this.weight
    // 因为不能分身最小速度限制为1
    return speed < 1 ? 1 : speed
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
