/*
 * @Author: saber2pr
 * @Date: 2019-03-21 18:08:06
 * @Last Modified by:   saber2pr
 * @Last Modified time: 2019-03-21 18:08:06
 */
import { Component, Node } from 'saber-h5'
import { List } from 'saber-list'

export interface IFactory {
  createComponent(node: Node): Required<Pick<Component, 'node'>>
  createListNode<T>(instance: T): List<T>
}

export interface ISFactory {
  getInstance(): IFactory
}
