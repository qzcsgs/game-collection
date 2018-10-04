import CONFIG from './CONFIG'

/**
 * 地图类
 */
class Map {
  /**
	 * 地图类构造函数，可以不传值
	 * @param  {Object} attr 地图属性，分别有一下几种
	 * int width 宽度
     * int height 高度
     * int padding 内边距
     * String background 背景色
     * String border_color 边框颜色
	 */
  constructor (attr = {}) {
    this.init(attr)
  }

  init (attr) {
    this.x = attr.x || -parseInt((CONFIG.map_width + CONFIG.map_padding) / 2)
    this.y = attr.y || -parseInt((CONFIG.map_height + CONFIG.map_padding) / 2)
    this.width = attr.width || CONFIG.map_width
    this.height = attr.width || CONFIG.map_height
    this.padding = attr.padding || 100
    this.background = attr.background || CONFIG.map_bgColor
    this.border_color = attr.border_color || CONFIG.map_borderColor
  }

  drawSelf (paint) {
    // 背景
    paint.beginPath()
    paint.fillStyle = this.background
    paint.fillRect(this.x, this.y, this.width, this.height)
    // 边框
    paint.beginPath()
    paint.lineWidth = 1
    paint.strokeStyle = this.border_color
    paint.strokeRect(this.x + this.padding, this.y + this.padding,
    this.width - 2 * this.padding, this.height - 2 * this.padding)
  }
}

export default Map
