import Spherical from './Spherical'
import Vomit from './Vomit'

/**
 * 玩家类
 */
class Player extends Spherical {
  constructor (attr) {
    super(attr)
  }

  /**
	 * 重写移动函数
	 * @param  {Number} endX 终点圆心X
	 * @param  {Number} endY 终点圆心Y
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
    
    // 相反方向移动其他元素
    if (this.centerX <= mapRightX && addX > 0) {
      this.moveOther(addX, 'x')
    } else if (this.centerX >= mapLeftX && addX < 0) {
      this.moveOther(addX, 'x')
    }

    if (this.centerY <= mapBottomY && addY > 0) {
      this.moveOther(addY, 'y')
    } else if (this.centerY >= mapTopY && addY < 0) {
      this.moveOther(addY, 'y')
    }
  }

  moveOther (num, type) {
    if (type === 'x') {
      window.spirit.map.x -= num
      window.spirit.aiPlayerList.forEach(item => {
        item.centerX -= num
      })
      window.spirit.foodList.forEach(item => {
        item.centerX -= num
      })
      window.spirit.vomitList.forEach(item => {
        item.centerX -= num
      })
    } else if (type === 'y') {
      window.spirit.map.y -= num
      window.spirit.aiPlayerList.forEach(item => {
        item.centerY -= num
      })
      window.spirit.foodList.forEach(item => {
        item.centerY -= num
      })
      window.spirit.vomitList.forEach(item => {
        item.centerY -= num
      })
    }
  }

  /**
	 * 吐球函数
	 * @return {[type]} [description]
	 */
  spit () {
    if (this.weight < 1000) return

    window.spirit.vomitList.push(new Vomit({
      centerX: this.centerX,
      centerY: this.centerY,
      weight: 200,
      color: this.color
    }))
    this.weight -= 200
  }

  /**
	 * 分身函数
	 * @return {[type]} [description]
	 */
  division () {

  }
}

export default Player
