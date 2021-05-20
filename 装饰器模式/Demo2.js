// 装饰器函数, 它的第一个参数是目标类
function classDecorator(target) {
  target.hasDecorator = true
  return target;
}