import Spherical from './Spherical'

/**
 * 玩家类
 */
class Player extends Spherical {
  constructor (attr) {
    super(attr)
    // this.setTimeId = null
  }

  /**
	 * 重写移动函数
	 * @param  {Number} endX 终点圆心X
	 * @param  {Number} endY 终点圆心Y
	 */
  move (endX, endY) {
    // 半径的一半
    const halfR = parseInt(this.getRadius() / 2)
    
    if (endX > this.centerX &&
      this.centerX < (window.spirit.map.x + window.spirit.map.width - window.spirit.map.padding - halfR)) {
      // 终点大于起点，其他物体x为--
      // 撞墙停止移动，地图右边x - 内边距 - 一半半径
      window.spirit.map.x -= this.getSpeed()
      window.spirit.aiPlayerList.forEach(item => {
        item.centerX -= this.getSpeed()
      })
      window.spirit.foodList.forEach(item => {
        item.centerX -= this.getSpeed()
      })
    } else if (endX < this.centerX &&
      this.centerX > (window.spirit.map.x + window.spirit.map.padding + halfR)) {

      window.spirit.map.x += this.getSpeed()
      window.spirit.aiPlayerList.forEach(item => {
        item.centerX += this.getSpeed()
      })
      window.spirit.foodList.forEach(item => {
        item.centerX += this.getSpeed()
      })
    }
    if (endY > this.centerY &&
      this.centerY < (window.spirit.map.y + window.spirit.map.height - window.spirit.map.padding - halfR)) {

      window.spirit.map.y -= this.getSpeed()
      window.spirit.aiPlayerList.forEach(item => {
        item.centerY -= this.getSpeed()
      })
      window.spirit.foodList.forEach(item => {
        item.centerY -= this.getSpeed()
      })
    } else if (endY < this.centerY &&
      this.centerY > (window.spirit.map.y + window.spirit.map.padding + halfR)) {

      window.spirit.map.y += this.getSpeed()
      window.spirit.aiPlayerList.forEach(item => {
        item.centerY += this.getSpeed()
      })
      window.spirit.foodList.forEach(item => {
        item.centerY += this.getSpeed()
      })
    }
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
