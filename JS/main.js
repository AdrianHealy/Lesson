//! Поверхностное копирование и глубокое копирование обьектов

// let user = {
//   name: "Aisultan",
//   age: 20,
//   languages: {
//     english: " level 2",
//     french: "level 3",
//   },
// };
// console.log(user);

//let user2 = user //! Это не копирвани!

// let user2 = { ...user }; //! Поверхностное копирование - spread оператор(распоковщик)

// console.log(user2);

// user2.name = "Beka";
// user2.age = 26;
// user2.languages.english = "level 6 ";

//! Поверхностное копирование работает коректно только тогда, когда нету вложеных обьектов или массивов

// let user = {
//   name: "Aisultan",
//   age: 20,
//   languages: {
//     english: " Level 2",
//     french: "Level 3",
//   },
// };
//! Глубокое копирование - происходит за счет того, что мы приводим наш обьект в строку и в этот обрываеться связь с исходным обьектом, затем мы из строки делаем наш формат
//! JSON.stringify() - переводит в строку
//! JSON.parse - из строки в наш формат

// let user2 = JSON.parse(JSON.stringify(user));
// console.log(user2);
// console.log(user);

// user2.name = "Tom";
// user2.languages.french = "Advcance";
// user2.languages.russian = "Level 1";
// user.languages.chinese = "6 HSK";

//! Деструктуризация - это специальный синтаксис  при помощи которого мы можем брать свойства у обьектов либо же элементы у массивов и сразу же записывать в переменные.

// let student = {
//   name: "Melis",
//   lastName: "Batyrov",
// };
// let studentName = student.name;          //! Вот так писать неудобно
// let lastName = student.lastName;
// console.log(studentName);
// console.log(lastName);

// let { name, lastName } = student;
// console.log(name);
// console.log(lastName);

// let student2 = {
//   name: "Aibek",
//   lastName: "Sapashov",
// };

// let { name: stud2Name, lastName: stud2lastName } = student2;
// console.log(stud2Name);
// console.log(stud2lastName);

// let library = {
//   title: "Bootstrap",
//   version: {
//     first: "2015",
//     second: "2019",
//     third: "2021",
//   },
// };

// let {
//   version: { first: firstVersion, third: thirdVersion },
// } = library;
// console.log(firstVersion, thirdVersion);

// let arr = ["true", 10, 77, false];
// let [bolean, num, , bool] = arr;
// console.log(num, bolean, bool);

// let nums = [42, 55, 86, 690, 105];
// let [first, , third, ...rest] = nums;
// console.log(first, third, rest);

// let project = {
//   name: "Market Place",
//   frameworks: ["Angular", "Django API"],
//   liberyries: ["React", "Express JS"],
//   team: {
//     frontEnd: ["JS15", "JS13"],
//     backEnd: ["PY-16", "PY-17-EV"],
//   },
// };
// let {
//   liberyries: [, secondLibrary],
//   team: {
//     frontEnd: [, frontSecond],
//     backEnd: [firstBackEnd],
//   },
// } = project;
// console.log(firstBackEnd, frontSecond, secondLibrary);

// let obj = {
//   title: "h2",
// };
// let { title, subTitle = "default" } = obj;
// console.log(title, subTitle);

// Дан объект {name: 'John', 'age': '22', }.
// Запишите соответствующие значения в переменные name, и age.
// Сделайте так, чтобы, если какое-то значение не задано - оно принимало введенное значение с prompt.

// let arr = { name: "John", age: "22" };
// let { name = prompt("Enter name"), age = prompt("Enter age") } = arr;
// console.log(name, age);
