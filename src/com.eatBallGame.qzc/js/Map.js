import {CONFIG} from './CONFIG'

/**
 * 地图类
 */
class Map {
	/**
	 * 地图类构造函数，可以不传值
	 * @param  {Object} attr 地图属性，分别有一下几种
	 * int width 宽度
     * int height 高度
     * int margin 外边距
     * String background 背景色
     * String border_color 边框颜色
	 */
	constructor (attr) {
		this.init(attr)
	}

	init (attr) {
		this.width = attr.width || CONFIG.map_width
		this.height = attr.width || CONFIG.map_height
		this.margin = attr.margin || 100
		this.background = attr.background || CONFIG.map_bgColor
		this.border_color = attr.border_color || CONFIG.map_borderColor
	}
}

export default Map