/*
 * @Author: saber2pr
 * @Date: 2019-03-18 18:28:14
 * @Last Modified by:   saber2pr
 * @Last Modified time: 2019-03-18 18:28:14
 */
import { rand } from 'saber-rand'
import { v2 } from 'saber-canvas'

export function getRandPos({
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

export function getRandColor() {
  const sand = rand(0, 10)
  return sand > 8
    ? 'red'
    : sand > 6
    ? 'green'
    : sand > 4
    ? 'black'
    : sand > 2
    ? ''
    : 'yellow'
}
