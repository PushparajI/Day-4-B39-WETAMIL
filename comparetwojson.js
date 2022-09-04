var obj1 = {name: 'Raj', age: 30};
var obj2 = {age: 30, name: 'Raj'};


for ( var i in obj1.name, obj1.age) {
    console.log(i);
}
for (var k in obj2.name, obj2.age) {
    console.log(k);
}
var i = k

console.log (i == k);