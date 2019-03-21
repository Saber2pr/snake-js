/*
 * @Author: saber2pr
 * @Date: 2019-03-21 17:57:34
 * @Last Modified by: saber2pr
 * @Last Modified time: 2019-03-21 18:04:35
 */
import { Component, Injectable, Node, Singleton } from 'saber-h5'
import { IFactory } from '../interface/IFactory'
import { List } from 'saber-list'
import { InjSym } from '../symbol/Symbol'

@Singleton
@Injectable(InjSym.Factory)
export class Factory implements IFactory {
  private constructor() {}

  public static instance: Factory

  public static getInstance() {
    return this.instance || (this.instance = new Factory())
  }

  public createComponent(node: Node): Required<Pick<Component, 'node'>> {
    return { node }
  }

  public createListNode<T>(instance: T): List<T> {
    return new List(instance)
  }
}
