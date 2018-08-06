import CONFIG from './CONFIG'
import UTIL from './UTIL'
import Map from './Map'
import AiPlayer from './AiPlayer'
import Food from './Food'
import Player from './Player'
import Vomit from './Vomit'

/**
 * 游戏类
 */
class Game {
    constructor () {
        console.log(1)
        this.init()
    }

    init () {
        // 获取相应元素
        this.container = doc.getElementById('game')
        const canvas = doc.getElementById('canvas')
        this.context = canvas.getContext('2d')

        // 兼容定义 requestAnimFrame
        window.requestAnimFrame =
        window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        function(callback) {
            window.setTimeout(callback, 1000 / 30)
        }
        console.log(CONFIG)
        // 创建相应类实例

    }

    /**
     * 重绘
     */
    repaint () {
        requestAnimFrame(this.repaint)
    }
}

export default Game