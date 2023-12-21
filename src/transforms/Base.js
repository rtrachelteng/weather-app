export default class Transform {
  static fetchCollection(items) {
    return items.map(item => this.fetch(item));
  }
}