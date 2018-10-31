// Write a function named wait that accepts a number as a parameter,
// and returns a promise that resolves after the passed number of milliseconds.

const wait = (milliseconds) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
            }, milliseconds);
    });
};
const message = (milliseconds) =>{
    console.log(`Content is displayed in ${milliseconds / 1000} seconds`)
};
wait(3000).then( () => message(3000) );




// wait(1000).then(() => console.log('You\'ll see this after 1 second'));
// wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));

// request.then(response)

//MY Token for GITHUB API 16950e9c0c867c64201fa04753a9defa897994de


const hackGithub = (username) => {
    let fetchRequest = fetch (`https://api.github.com/users/${username}/events`, {
        headers: {'Authorization': '16950e9c0c867c64201fa04753a9defa897994de'}
    });
    fetchRequest
        .then((response) => response.json())
        .then(data => console.log(data))
};

hackGithub('theironsmith');








// return new Promise ((resolve) => {
//     setTimeout(() => {
//         resolve();
//
//         },
//     }
// }



// let gitHubExperiment = fetch('http://api.github.com/users/theironsmith/events' , {headers: {'Authorization': 'token 16950e9c0c867c64201fa04753a9defa897994de'}})
//     .then(response => response.json())
//     .then(data => console.log(data));
