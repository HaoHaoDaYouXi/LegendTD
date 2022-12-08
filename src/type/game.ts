/** 游戏详情页类型 */

import { GridInfo, MapGridInfo } from "@/dataSource/mapData"
import { SkillType } from "@/dataSource/skillData"
import { TowerType } from "@/dataSource/towerData"

/** 游戏基础信息 */
export type GameBaseInfo = {
  /** 游戏结束 */
  isGameOver: boolean
  /** 设置游戏的暂停 */
  isPause: boolean
  /** 是否播放背景音乐 */
  isPlayBgAudio: boolean,
  /** 当前等级 */
  level: number
  /** 生命值 */
  hp: number
  /** 金钱 */
  money: number
  /** 敌人生成间隔时间 */
  intervalTime: number
  /** 当前关卡地图信息 */
  mapGridInfoItem: MapGridInfo
}

/** 游戏配置信息 */
export type GameConfigType = {
  /** 浏览器大小变化 */
  resizeTimer: NodeJS.Timer | null,
  /** canvas 默认大小 */
  defaultCanvas: {w: number, h: number},
  /** canvas 对象 */
  canvas: {},
  /** 得到 canvas 的 2d 上下文 */
  ctx: {},
  /** canvas 画布距离浏览器左边和顶部的距离 */
  canvasInfo: {left: number, top: number},
  /** requestAnimationFrame api的保存对象 */
  animationFrame: null,
  /** 是否加载完成 */
  loadingDone: boolean,
  /** 游戏开始遮罩 */
  isGameBeginMask: boolean,
}

/** 敌人数据 */
export type EnemyState = {
  /** 当前等级需要的敌人索引 */
  levelEnemy: number[]
  /** 已上场的敌人数量 */
  createdEnemyNum: number
  /** 敌人的移动轨迹 x坐标, y坐标, x_y(方向): 1:左 2:下 3:右 4:上 */
  movePath: {x: number, y: number, x_y: 1 | 2| 3 | 4}[]
}

/** 子弹类型 */
export type BulletType = {
  x: number
  y: number
  /** 往目标方向增加的 x */
  addX: number
  /** 往目标方向增加的 y */
  addY: number
  /** 当前距离 */
  xy: number
  /** 目标距离 */
  x_y: number
  /** 目标索引 */
  e_i: number
}

/** 塔防的类型 */
export type TowerStateType = {
  x: number
  y: number
  /** 防抖的射击函数 */
  shootFn: any
  /** 攻击的目标 */
  targetIndexList: number[]
  /** 子弹数组 */
  bulletArr: BulletType[]
  /** 子弹图片 */
  bulletImg: string
} & TowerType
/** 塔防的数据 */
export type TowerState = {
  /** 塔防的位置 */
  building: {left: number, top: number, isShow: boolean}
  /** 塔防的攻击范围 */
  buildingScope: {left: number, top: number, r: 0, isShow: boolean, towerIndex: number}
}

/** 游戏基本数据 */
export type GameBaseData = {
  /** 偏移量y 是用来计算敌人与地板底部的距离 (两个地板(50*2)-敌人(h(75)+y(10))) = 10 */
  offset: {y: number},
  /** 终点位置 */
  terminal?: GridInfo,
  /** 地板：大小 数量 */
  floorTile: {size: number, num: number},
  /** 格子数量信息 arr: [[ 0:初始值(可以放塔)，1:地板，2:有阻挡物，10(有塔防：10塔防一，11塔防二...) ]] */
  gridInfo: { x_num: number, y_num: number, size: number, arr: [number[]] },
}

/** 游戏音乐 */
export type GameAudio = {
  // 所有音乐数据
  audioList: {[key in string]: string},
  // 终点音乐
  audioEnd: string,
  // 当前技能音乐
  audioSkill: string,
}

/** 游戏人物技能 */
export type GameMasterSkill = {
  /** 生产的金钱 */
  proMoney: {isShow: boolean, interval: number, money: number},
  /** 增加的金钱 */
  addMoney: {num: string, timer: NodeJS.Timer | null, time: number},
  /** 底部技能栏 */
  skillList: SkillType[],
}
