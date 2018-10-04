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
    this.init()
  }

  init () {
    // 获取相应元素
    this.container = document.getElementById('game')
    const canvas = document.getElementById('canvas')
    this.context = canvas.getContext('2d')

    this.game = document.getElementById('game')

    // 开始游戏按钮
    this.sectionButton = document.querySelector('.section-button')
    // 玩家颜色名字，敌人数量
    this.sectionMyColor = document.querySelector('.section-myColor')
    this.myName = document.getElementById('myName')
    this.sectionAiNum = document.querySelector('.section-aiNum')

    // 得分，排行
    this.score = document.querySelector('.score span')
    this.rankingList = document.querySelector('.ranking-list')

    // 兼容定义 requestAnimFrame
    window.requestAnimFrame =
      window.requestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.oRequestAnimationFrame ||
      window.msRequestAnimationFrame ||
      function (callback) {
        window.setTimeout(callback, 1000 / 30)
      }
    console.log('游戏配置', CONFIG)
    // 创建相应类实例
    this.player = new Player({

    })

    this.event()
  }

  /**
   * 事件
   */
  event () {
    this.sectionButton.onclick = () => {
      switch (CONFIG.status) {
        case 'start':
          this.start()
          break
        case 'playing':
          // TODOS:
          break
        case 'failed':
          // TODOS:
          break
        case 'success':
          // TODOS:
          break
        case 'all-success':
          // TODOS:
          break
        case 'stop':
          // TODOS:
          break
      }
    }
  }

  /**
   * 开始游戏
   */
  start () {
    console.log('开始游戏')
    this.updateConfig()
    // 更新UI
    this.game.setAttribute('data-status', CONFIG.status)
    this.repaint()
  }

  /**
   * 更新配置文件
   */
  updateConfig () {
    CONFIG.status = 'playing'
    CONFIG.player_name = this.myName.value
    CONFIG.player_color = this.sectionMyColor.value
    CONFIG.AiPlayer_num = this.sectionAiNum.value

    console.log('更新游戏配置', CONFIG)
  }

  /**
   * 重绘
   */
  repaint () {
    // 更新得分
    UTIL.updateScore(this.score)
    // 更新排行
    UTIL.updateRankingList(this.rankingList)
    requestAnimFrame(this.repaint.bind(this))
  }
}

export default Game
