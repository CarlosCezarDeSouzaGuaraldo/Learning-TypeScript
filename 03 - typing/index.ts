// implicit typing

let myName = "Carlos";
let age = 23;
let isAdmin = true;

/**
 * You can't assing another type to the variable that was initialized
 * e.g.: myName = 23;
 */

let names = ['Carlos', 'Peter'];
names.push('John');
// names.push(007); You can't do that, because the array type is string

let object = {
	name: 'Carlos',
	age: 23
};

object.name = 'Fred';
// object.age = '23'; You can't do that, because the object's attribute type is number
