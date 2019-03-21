/*
 * @Author: saber2pr
 * @Date: 2019-03-21 18:07:54
 * @Last Modified by:   saber2pr
 * @Last Modified time: 2019-03-21 18:07:54
 */
import { Injectable, Node, Vec2, v2, Component, Inject } from 'saber-h5'
import { Front } from '../interface/IFront'
import { config } from '../config/props'
import { ISFactory } from '../interface/IFactory'
import { List } from 'saber-list'
import { InjSym } from '../symbol/Symbol'
import { ISnake } from '../interface/ISnake'

@Injectable(InjSym.Snake)
export class Snake implements ISnake {
  constructor(
    @Inject(InjSym.Node) public node: Node,
    @Inject(InjSym.Factory) public Factory: ISFactory
  ) {
    const {
      bodySize,
      colors: { body }
    } = config

    const head = this.Factory.getInstance().createListNode(
      new Node(bodySize, bodySize).setColor(body).setPosition(50, 0)
    )

    this.foot = this.Factory.getInstance()
      .createListNode(this.node.setSize(bodySize, bodySize).setColor(body))
      .set('next')(head)

    this.children = [
      this.Factory.getInstance().createComponent(head.instance),
      this.Factory.getInstance().createComponent(this.foot.instance)
    ]

    this.step = bodySize
  }

  public children: Component[]
  private foot: List<Node>
  private step: number

  private get head(): List<Node> {
    let current = this.foot
    while (current.next) {
      current = current.next
    }
    return current
  }

  public get length(): number {
    let index = 1
    let current = this.foot
    while (current.next) {
      current = current.next
      index++
    }
    return index
  }

  public move(front: Front) {
    let current = this.foot
    while (current.next) {
      const prePos = current.next.instance.getPosition()
      current.instance.setPosition(prePos)
      current = current.next
    }
    current.instance.setPosition(this.getNextPos(front))
    return this
  }

  public eat(food: Node) {
    this.head.next = new List(food)
  }

  public meet(target: Vec2) {
    const snakePos = this.head.instance.getPosition()
    return snakePos.equals(target)
  }

  private getNextPos(front: Front) {
    const p = this.head.instance.getPosition()
    switch (front) {
      case 'down':
        return v2(p.x, p.y - this.step)
      case 'left':
        return v2(p.x - this.step, p.y)
      case 'right':
        return v2(p.x + this.step, p.y)
      case 'up':
        return v2(p.x, p.y + this.step)
    }
  }
}
