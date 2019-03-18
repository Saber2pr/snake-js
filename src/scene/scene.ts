/*
 * @Author: saber2pr
 * @Date: 2019-03-18 18:28:11
 * @Last Modified by:   saber2pr
 * @Last Modified time: 2019-03-18 18:28:11
 */
import { createBlock } from '../components/Block'
import { Canvas } from 'saber-canvas'
import { Snake } from '../core/Snake'
import { config } from '../config/props'
import { Background } from '../components/root'
import { getRandPos, getRandColor } from '../utils/rand'

export const canvas = new Canvas(config)

export function createFood() {
  const newFood = createBlock(config.bodySize)
  newFood.node.setPosition(getRandPos(config)).setColor(getRandColor())
  return newFood
}

const head = createBlock(config.bodySize)
head.node
  .setColor(config.colors.body)
  .setPosition(150, 50)
  .setColor(config.colors.head)
Background.append(head)

const body = createBlock(config.bodySize)
body.node.setColor(config.colors.body).setPosition(100, 50)
Background.append(body)

export const snake = new Snake(head.node, body.node)
