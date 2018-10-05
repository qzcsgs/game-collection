import CONFIG from './CONFIG'
/**
 * 工具类
 */
const familyNames = new Array(
  '赵', '钱', '孙', '李', '周', '吴', '郑', '王', '冯', '陈',
  '褚', '卫', '蒋', '沈', '韩', '杨', '朱', '秦', '尤', '许',
  '何', '吕', '施', '张', '孔', '曹', '严', '华', '金', '魏',
  '陶', '姜', '戚', '谢', '邹', '喻', '柏', '水', '窦', '章',
  '云', '苏', '潘', '葛', '奚', '范', '彭', '郎', '鲁', '韦',
  '昌', '马', '苗', '凤', '花', '方', '俞', '任', '袁', '柳',
  '酆', '鲍', '史', '唐', '费', '廉', '岑', '薛', '雷', '贺',
  '倪', '汤', '滕', '殷', '罗', '毕', '郝', '邬', '安', '常',
  '乐', '于', '时', '傅', '皮', '卞', '齐', '康', '伍', '余',
  '元', '卜', '顾', '孟', '平', '黄', '和', '穆', '萧', '尹'
)
const givenNames = new Array(
  '子璇', '淼', '国栋', '夫子', '瑞堂', '甜', '敏', '尚', '国贤', '贺祥', '晨涛',
  '昊轩', '易轩', '益辰', '益帆', '益冉', '瑾春', '瑾昆', '春齐', '杨', '文昊',
  '东东', '雄霖', '浩晨', '熙涵', '溶溶', '冰枫', '欣欣', '宜豪', '欣慧', '建政',
  '美欣', '淑慧', '文轩', '文杰', '欣源', '忠林', '榕润', '欣汝', '慧嘉', '新建',
  '建林', '亦菲', '林', '冰洁', '佳欣', '涵涵', '禹辰', '淳美', '泽惠', '伟洋',
  '涵越', '润丽', '翔', '淑华', '晶莹', '凌晶', '苒溪', '雨涵', '嘉怡', '佳毅',
  '子辰', '佳琪', '紫轩', '瑞辰', '昕蕊', '萌', '明远', '欣宜', '泽远', '欣怡',
  '佳怡', '佳惠', '晨茜', '晨璐', '运昊', '汝鑫', '淑君', '晶滢', '润莎', '榕汕',
  '佳钰', '佳玉', '晓庆', '一鸣', '语晨', '添池', '添昊', '雨泽', '雅晗', '雅涵',
  '清妍', '诗悦', '嘉乐', '晨涵', '天赫', '玥傲', '佳昊', '天昊', '萌萌', '若萌'
)

export default {
  /**
   * 碰撞检测(圆)
   */
  collisionDetection () {

  },
  /**
   * 缓动函数
   */
  easing () {

  },
  /**
   * 更新排行榜
   * @param {Object} elem 排行DOM
   * @param {Object} spirit 游戏元素实例
   */
  updateRankingList (elem, spirit) {
    const compare = (attr) => (a, b) => {
      var value1 = a[attr]
      var value2 = b[attr]
      return value2 - value1
    }
    // 拼接玩家和ai成一个数组
    const plList = spirit.aiPlayerList.concat(spirit.player)
    // 排序
    plList.sort(compare('weight'))

    let htmlText = []

    plList.some((item, index) => {
      // 第10次跳出
      if (index === 10) return true
      htmlText.push(`<li${item.name === CONFIG.player_name ? ' class="my"' : ''}>${index + 1}.${item.name}</li>`)
    })

    elem.innerHTML = htmlText.join('')
  },
  /**
   * 更新得分
   */
  updateScore (elem) {
    elem.innerText = CONFIG.score
  },
  /**
   * 获得一个随机名字
   */
  getRandomName () {
    let i = parseInt(10 * Math.random()) * 10 + parseInt(10 * Math.random())
    let familyName = familyNames[i]

    let j = parseInt(10 * Math.random()) * 10 + parseInt(10 * Math.random())
    let givenName = givenNames[i]

    return familyName + givenName
  },
  /**
   * 获取随机坐标
   * @param {String} type x 获取x值， y获取y值， undefined获取x和y的值
   */
  getRandomXY (type) {
    // 最小坐标x： 地图坐标 + 左边内边距 + 防止溢出
    // 最大坐标x： 地图坐标 + 地图自身宽度 = 地图右边x， 地图右边x - 右内边距 - 防止溢出
    const xMin = CONFIG.map_x + CONFIG.map_padding + 10
    const xMax = CONFIG.map_x + CONFIG.map_width - CONFIG.map_padding - 10
    const yMin = CONFIG.map_y + CONFIG.map_padding + 10
    const yMax = CONFIG.map_y + CONFIG.map_height - CONFIG.map_padding - 10

    if (type === 'x') {
      const x = parseInt(Math.random() * (xMax - xMin)) + xMin
      return x
    } else if (type === 'y') {
      const y = parseInt(Math.random() * (yMax - yMin)) + yMin
      return y
    } else {
      const y = parseInt(Math.random() * (yMax - yMin)) + yMin
      const x = parseInt(Math.random() * (xMax - xMin)) + xMin
      return { x, y }
    }
  },
  /**
   * 获取随机体重
   */
  getRandomWeight () {
    return parseInt(Math.random() *
      (CONFIG.AiPlayer_weight_length[1] - CONFIG.AiPlayer_weight_length[0])) +
      CONFIG.AiPlayer_weight_length[0]
  },
  /**
   * 获取随机颜色
   */
  getRandomColor () {
    const index = parseInt(Math.random() * CONFIG.AiPlayer_color.length)
    return CONFIG.AiPlayer_color[index]
  }
}
