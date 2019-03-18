/*
 * @Author: saber2pr
 * @Date: 2019-03-18 18:28:18
 * @Last Modified by:   saber2pr
 * @Last Modified time: 2019-03-18 18:28:18
 */
import { schedule } from 'saber-interval'
import { walkAll } from 'saber-list'
import { IBlock } from './components/Block'
import { Background } from './components/root'
import { canvas, createFood, snake } from './scene/scene'
import { TouchFront } from 'saber-dom'
import { Front } from './core/Snake'
import { config } from './config/props'

const renderTree = (Root: IBlock) =>
  walkAll(Root, block => {
    canvas.draw(block.node)
  })

function renderFrame(Root: IBlock) {
  canvas.clear()
  renderTree(Root)
}

let currentFood = createFood()
Background.append(currentFood)
let currentFront: Front = 'right'

const update = () => {
  if (snake.move(currentFront).meet(currentFood.node.getPosition())) {
    snake.eat(currentFood.node)
    currentFood = createFood()
    Background.append(currentFood)
  }
  renderFrame(Background)
}

update()

schedule(update, { delta: config.fps })

new TouchFront()
  .onLeft(() => (currentFront = 'left'))
  .onRight(() => (currentFront = 'right'))
  .onUp(() => (currentFront = 'down'))
  .onDown(() => (currentFront = 'up'))
  .listen()
