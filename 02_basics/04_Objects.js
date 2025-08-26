// singleton object
// const instaUser = new Object();

// non singleton object
const tinderUser = {};
tinderUser.id = "123abc";
tinderUser.name = "Sam";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUser = {
    email : "sam@gmail.com",
    fullname : {
        userFullName : {
            fName : "Tirth",
            lName : "Vyas"
        }
    }
}


// console.log(regularUser.fullname.userFullName.fName);

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"a", 4:"b"}
const obj3 = {5:"a", 6:"b"}
// we have to merge these objects

// const obj5 = { obj1, obj2, obj3}
// console.log(obj5);
// const obj4 = Object.assign({},obj1, obj2, obj3);
// const obj4 = Object.assign(obj1, obj2, obj3);
// console.log(obj4);
// console.log(obj1 == obj4);
// console.log(obj1);   // bcoz obj1 is the target and other are sources

const obj6 = {...obj1, ...obj2, ...obj3}
// console.log(obj6);

// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty("isLoggedIn"));


//  Objects video 3

const course = {
    courseName : "JS in Hindi",
    price : "999",
    courseInstructor : "Hitesh"
}

// console.log(course.courseInstructor);
// const {courseInstructor} = course;
const {courseInstructor : instructor} = course;   // this curly braces are used for destructuring the object
console.log(instructor);








