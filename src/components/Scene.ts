/*
 * @Author: saber2pr
 * @Date: 2019-03-21 18:07:57
 * @Last Modified by: saber2pr
 * @Last Modified time: 2019-03-21 18:16:25
 */
import { Injectable, Inject, Component, Node, Bootstrap, Label } from 'saber-h5'
import { config } from '../config/props'
import { TouchFront } from 'saber-dom'
import { Front } from '../interface/IFront'
import { ISnake } from '../interface/ISnake'
import { ISFactory } from '../interface/IFactory'
import { IRander } from '../interface/IRander'
import { InjSym } from '../symbol/Symbol'

@Bootstrap
@Injectable(InjSym.Scene)
export class Scene implements Component {
  constructor(
    @Inject(InjSym.Snake) private snake: ISnake,
    @Inject(InjSym.Node) public node: Node,
    @Inject(InjSym.TouchFront) private TouchFront: TouchFront,
    @Inject(InjSym.Factory) private Factory: ISFactory,
    @Inject(InjSym.Rander) private Rander: IRander
  ) {
    const {
      MaxHeight,
      MaxWidth,
      colors: { background }
    } = config

    this.currentFood = this.createFood()
    this.TouchFront.onLeft(() => (this.currentFront = 'left'))
      .onRight(() => (this.currentFront = 'right'))
      .onUp(() => (this.currentFront = 'down'))
      .onDown(() => (this.currentFront = 'up'))
      .listen()

    this.node.setSize(MaxHeight, MaxWidth).setColor(background)
    this.score = new Label(String(this.snake.length)).setPosition(100, 0)
    const scoreLabel = new Label('score:')

    this.children.push(
      this.snake,
      this.Factory.getInstance().createComponent(this.score),
      this.Factory.getInstance().createComponent(scoreLabel)
    )
  }

  public children: Component[] = []
  private currentFood: Node
  private currentFront: Front = 'right'
  private score: Label

  private createFood() {
    const { bodySize } = config
    const food = new Node(bodySize, bodySize)
      .setPosition(this.Rander.getRandPos(config))
      .setColor(this.Rander.getRandColor())

    this.children.push(this.Factory.getInstance().createComponent(food))
    return food
  }

  public update() {
    if (
      this.snake.move(this.currentFront).meet(this.currentFood.getPosition())
    ) {
      this.snake.eat(this.currentFood)
      this.score.text = String(Number(this.score.text) + 1)
      this.currentFood = this.createFood()
    }
  }
}
