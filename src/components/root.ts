/*
 * @Author: saber2pr
 * @Date: 2019-03-18 18:28:02
 * @Last Modified by:   saber2pr
 * @Last Modified time: 2019-03-18 18:28:02
 */
import { createBlock } from './Block'
import { config } from '../config/props'

export const Background = createBlock(config.MaxWidth, config.MaxHeight)

Background.node.setColor(config.colors.background)
