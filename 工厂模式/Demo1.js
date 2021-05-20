/* 创建一个用户~ 好办！*/
// const liLei = {
//   name: '李雷',
//   age: 25,
//   career: 'coder',
// }

/* 创建两个用户~ 好办！*/
// const liLei = {
//   name: '李雷',
//   age: 25,
//   career: 'coder',
// }

// const hanMeiMei = {
//   name: '韩梅梅',
//   age: 24,
//   career: 'product manager',
// }

/* 创建500个用户，单独写就恐怖了~于是可以写个构造函数 */
function User(name, age, career) {
  this.name = name;
  this.age = age;
  this.career = career;
}
/* User 就是一个构造器 */
// 构造器即用来初始化对象的特殊函数
const user = new User(name, age, career)

// 构造器确保了共性的不变，和个性的灵活！！

// 如果说构造器模式是抽象了每个对象实例的变与不变。那么工厂模式，我们要做的就是去抽离
// 不同构造函数(类)之间的变与不变

