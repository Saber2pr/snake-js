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

const renderTree = (Root: IBlock) =>
  walkAll(Root, block => {
    canvas.draw(block.node)
  })

function renderFrame(Root: IBlock) {
  canvas.clear()
  renderTree(Root)
}

const update = () => {
  console.log('updata')
  snake.move('right')
  // Background.append(createFood())
  renderFrame(Background)
}

update()

schedule(update, { delta: 1000 })
