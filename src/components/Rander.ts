/*
 * @Author: saber2pr
 * @Date: 2019-03-21 17:56:27
 * @Last Modified by: saber2pr
 * @Last Modified time: 2019-03-21 18:04:43
 */
import { rand } from 'saber-rand'
import { v2 } from 'saber-canvas'
import { Injectable, Static } from 'saber-h5'
import { InjSym } from '../symbol/Symbol'

@Static
@Injectable(InjSym.Rander)
export class Rander {
  public static getRandPos({
    bodySize,
    MaxWidth,
    MaxHeight
  }: {
    bodySize: number
    MaxWidth: number
    MaxHeight: number
  }) {
    const stepX = rand(MaxWidth / bodySize)
    const stepY = rand(MaxHeight / bodySize)
    return v2(bodySize * stepX, bodySize * stepY)
  }
  public static getRandColor() {
    const sand = rand(0, 10)
    return sand > 8
      ? 'red'
      : sand > 6
      ? 'green'
      : sand > 4
      ? 'black'
      : sand > 2
      ? 'grey'
      : 'yellow'
  }
}
