/**
 * 配置数据
 */
export default {
  /**
   * 游戏状态
   * start  游戏前
   * playing 游戏中
   * failed 游戏失败
   * success 游戏成功
   * all-success 游戏通关
   * stop 游戏暂停
   */
  status: 'start',
  score: 0,				// 得分，1:1体重计算
  map_width: 1200,		// 地图宽度
  map_height: 1200,		// 地图高度
  map_bgColor: '#000', 	// 地图背景色
  map_borderColor: 'red', // 地图边框颜色
  player_name: '曲智超', 	// 玩家初始姓名
  player_color: 'gree', 	// 玩家初始颜色
  player_weight: 100, // 玩家初始体重
  player_centerX: 100, // 玩家初始圆心横坐标
  player_centerY: 100, // 玩家初始圆心纵坐标
  AiPlayer_num: 100, // 初始AI玩家数量
  AiPlayer_name: [		// Ai玩家的名字列表

  ],
  AiPlayer_weight_length: [100, 200],	// Ai玩家初始体重范围
  AiPlayer_color: ['#82A6F5', '#EAF048', '#9FF048', '#F6D6FF'],
  food_num: 1000, // 初始食物数量
  food_weight: 10,  // 初始食物体重
  rankingList: [			// 排行列表

  ]
}
