"use strict";
const users = [

        


    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];
const userLang = users.filter(user => user.languages >= 3);
console.log(userLang);

const arr = users.map(user => user.email);
console.log(arr);

const userYears = users.reduce((total, user) => {return total + user.yearsOfExperience}, 0);
console.log(userYears);

let longestEmail = users.reduce((total, user) => {
    if (total.length < user.email.length){
        return user.email;
    }
    return total
}, '');
console.log(longestEmail);

const userName = users.reduce((total, user) => {
    if(user.id === users.length){
        total += ` ${user.name}.`
    } else {
        total += ` ${user.name},`
    }
    return total
}, 'Your instructors are:');
 console.log(userName);