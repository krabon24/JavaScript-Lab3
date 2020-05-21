const submissions = [
    {name: "Jane", score: 95, date: 2020-01-24, passed: "true"},
    {name: "Joe", score: 77, date: 2018-05-14, passed: "true"},
    {name: "Jack", score: 59, date: 2019-07-05, passed: "false"},
    {name: "Jill", score: 88, date: 2020-04-22, passed: "true"},
]

function addSubmission(array, newName, newScore, newDate) {
    let newSubmission =  {name: newName, score: newScore, date: newDate};
    let is = newScore ;
        if (is >= 60) {
            newSubmission.passed = true;
        }   else {
            newSubmission.passed = false;
        }
        array.push(newSubmission);
}
addSubmission(submissions, "John", 100, 2020-09-20);
console.log(submissions);

function deleteSubmissionByIndex(array, index) {
    array.splice(index, 1);
}

function deleteSubmissionByName(array, name) {
    array.forEach((n, index) => {
        if(n.name === name){
            array.splice(index, 1);
        }
})};


function editSubmission(array, index, score) {
    array[index].score = score
        if(score >= 60) {
            array[index].passed = true;
        } else {array[index].passed = false;}
}

function findSubmissionsByName(array, name) {
    console.log(array.find(array => array.name === name))
}

function findLowestScore(array) {
    let lowestScoreObject = array[0];
    for (let art of array) {
        if (art.score < lowestScoreObject.score) {
            lowestScoreObject = art;
        }
    } return lowestScoreObject;
}

function findAverageScore(array) {
    let arraySize = array.length;
    let total = 0;
    for (const item of array) {
        total = item.score + total 
    } return total / arraySize;
}

function filterPassing(array) {
    let newArray = array.filter(item => item.passing === true);
    return newArray;
}

function filter90AndAbove(array) {
    let filterArray = array.filter(x => x.score >= 90);
    return filterArray;
}


// Using filter() 
let people = [
    { name: 'jacob', age: 29, level: 100 },
    { name: 'James', age: 29, level: 80 },
    { name: 'jon', age: 30, level: 70 },
    { name: 'marie', age: 26, level: 55 },
    { name: 'michelle', age: 58, level: 67 },
    { name: 'david', age: 60, level: 35 },
    { name: 'alyssa', age: 29, level: 20 },
];

let findJ = people.filter(person => person.name[0] === 'j');
console.log(findJ);

