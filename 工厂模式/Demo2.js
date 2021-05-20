/* 简单的工厂模式 */

// 现在有给不同的User提供不同的职责说明
// ----------------------------------------
function Coder(name, age) {
  this.name = name;
  this.age = age;
  this.career = 'coder'
  this.work = ['写代码', '写系分', '修Bug']
}
function ProductManager(name, age) {
  this.name = name;
  this.age = age;
  this.career = 'product manager';
  this.work = ['订会议室', '写PRD', '催更']
}
//...

// 再次提取共性

function Factory(name, age, career) {
  switch(career) {
    case 'coder':
      return new Coder(name, age);
      break;
    case 'product manager':
      return new ProductManager(name, age)
      break;
  }
  // ...
}
// ----------------------------------------


// 基于前面的工厂再提取共性
// ----------------------------------------
function User(name, age, career, work) {
  this.name = name;
  this.age = age;
  this.career = career;
  this.work = work;
}

function Factory(name, age, career) {
  let work;
  switch(career) {
    case 'coder':
      work = ['写代码', '写系分', '修Bug']
      break;
    case 'product manager':
      work = ['订会议室', '写PRD', '催更']
      break;
    case 'boss':
      work = ['喝茶', '看报', '见客户']
      break;
    // .....
  }
  return new User(name, age, career, work)
}

// 长远来看，这样的书写代码量，更少，逻辑清晰，可改性也更好
// --------------------------------------------