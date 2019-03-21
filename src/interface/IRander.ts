/*
 * @Author: saber2pr 
 * @Date: 2019-03-21 18:08:12 
 * @Last Modified by:   saber2pr 
 * @Last Modified time: 2019-03-21 18:08:12 
 */
import { Vec2 } from 'saber-h5'

export interface IRander {
  getRandPos({
    bodySize,
    MaxWidth,
    MaxHeight
  }: {
    bodySize: number
    MaxWidth: number
    MaxHeight: number
  }): Vec2
  getRandColor(): 'red' | 'green' | 'black' | 'grey' | 'yellow'
}
