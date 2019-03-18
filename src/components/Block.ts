/*
 * @Author: saber2pr
 * @Date: 2019-03-18 18:27:59
 * @Last Modified by:   saber2pr
 * @Last Modified time: 2019-03-18 18:27:59
 */
import { Component } from 'saber-list'
import { Node } from 'saber-canvas'

export interface IBlock extends Component {
  node: Node
  children: this[]
}

export function createBlock(w: number, h: number = w) {
  return new Block(new Node(w, h))
}

export class Block implements IBlock {
  constructor(public node: Node) {}
  public children: this[] = []
  append(block: this) {
    this.children.push(block)
  }
}
