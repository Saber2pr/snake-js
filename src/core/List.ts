/*
 * @Author: saber2pr
 * @Date: 2019-03-17 19:00:50
 * @Last Modified by: saber2pr
 * @Last Modified time: 2019-03-18 16:27:16
 */
export class ListNode<T> {
  constructor(public instance: T) {}
  public pre: ListNode<T> = null as any
  set = <T extends keyof this>(key: T) => (value: this[T]) => {
    this[key] = value
    return this
  }
}
