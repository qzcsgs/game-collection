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
   * @param  {Object} spirit 游戏元素实例
	 */
  move (endX, endY, spirit) {
    // 半径的一半
    const halfR = parseInt(this.getRadius() / 2)

    if (endX > this.centerX &&
      this.centerX < (spirit.map.x + spirit.map.width - spirit.map.padding - halfR)) {
      // 终点大于起点，其他物体x为--
      // 撞墙停止移动，地图右边x - 内边距 - 一半半径
      spirit.map.x -= this.getSpeed()
      spirit.aiPlayerList.forEach(item => {
        item.centerX -= this.getSpeed()
      })
      spirit.foodList.forEach(item => {
        item.centerX -= this.getSpeed()
      })
    } else if (endX < this.centerX &&
      this.centerX > (spirit.map.x + spirit.map.padding + halfR)) {

      spirit.map.x += this.getSpeed()
      spirit.aiPlayerList.forEach(item => {
        item.centerX += this.getSpeed()
      })
      spirit.foodList.forEach(item => {
        item.centerX += this.getSpeed()
      })
    }
    if (endY > this.centerY &&
      this.centerY < (spirit.map.y + spirit.map.height - spirit.map.padding - halfR)) {

      spirit.map.y -= this.getSpeed()
      spirit.aiPlayerList.forEach(item => {
        item.centerY -= this.getSpeed()
      })
      spirit.foodList.forEach(item => {
        item.centerY -= this.getSpeed()
      })
    } else if (endY < this.centerY &&
      this.centerY > (spirit.map.y + spirit.map.padding + halfR)) {

      spirit.map.y += this.getSpeed()
      spirit.aiPlayerList.forEach(item => {
        item.centerY += this.getSpeed()
      })
      spirit.foodList.forEach(item => {
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
