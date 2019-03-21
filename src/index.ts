/*
 * @Author: saber2pr
 * @Date: 2019-03-21 18:08:22
 * @Last Modified by:   saber2pr
 * @Last Modified time: 2019-03-21 18:08:22
 */
import { TouchFront } from 'saber-dom'
import { createCanvas, registerModule } from 'saber-h5'
import { config } from './config/props'
import { Snake } from './components/Snake'
import { Scene } from './components/Scene'
import { Factory } from './components/Factory'
import { Rander } from './components/Rander'

registerModule(TouchFront)

alert('鼠标滑动方向控制移动！准备好了么？')

createCanvas(config)(Snake, Scene, Factory, Rander)
