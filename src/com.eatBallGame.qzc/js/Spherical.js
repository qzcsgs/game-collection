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
	constructor (attr) {
		this.init(attr)
	}

	init (attr) {
		if (attr) return

		this.name = attr.name
		this.centerX = attr.centerX
		this.centerY = attr.centerY
		this.weight = attr.weight
		this.color = attr.color
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
		// return radius
	}

	/**
	 * 获取速度
	 */
	getSpeed () {
		// return speed
	}

	/**
	 * 获取绘图坐标
	 */
	getXY () {
		// return {x,y}
	}

	/**
	 * 画出自己
	 */
	draw () {}
}