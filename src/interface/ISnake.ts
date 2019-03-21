/*
 * @Author: saber2pr 
 * @Date: 2019-03-21 18:08:14 
 * @Last Modified by:   saber2pr 
 * @Last Modified time: 2019-03-21 18:08:14 
 */
import { Front } from './IFront'
import { Vec2, Node, Component } from 'saber-h5'

export interface ISnake extends Component {
  meet(target: Vec2): boolean
  eat(food: Node): void
  move(front: Front): this
  length: number
}
