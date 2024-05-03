const fs = require('fs');

const people = require('../models/people')

const writePeople = () => {
    fs.writeFileSync('people.json', JSON.stringify(people), 'utf8');
}

const getPeople = (req, res) => {
    fs.readFile('people.json', 'utf8', (err, data) => {
        if (err) console.log('Error reading data!');
        // const parsedData = JSON.parse(data)
        // console.log('People data by Id:');
        // console.log(parsedData);
        res.end(data)
    })
}

const getPeopleById = (re1, res, id) => {
    fs.readFile('people.json', 'utf8', (err, data) => {
        if (err) console.log('Error reading data!');
        // const parsedData = JSON.parse(data)
        // console.log('People data by Id:');
        // console.log(parsedData.find(person => person.id === id));
        const dataFind = JSON.parse(data).find(person => person.id === id)
        res.end(JSON.stringify(dataFind));
    })
}

const getPeopleByUsername = (re1, res, username) => {
    fs.readFile('people.json', 'utf8', (err, data) => {
        if (err) console.log('Error reading data!');
        // const parsedData = JSON.parse(data)
        // console.log('People data by Id:');
        // console.log(parsedData.find(person => person.id === id));
        const dataFind = JSON.parse(data).filter(person => person.username.toLowerCase().includes(username.toLowerCase()))
        res.end(JSON.stringify(dataFind));
    })
}

const createPeople = (payload) => {
    fs.readFile('people.json', 'utf8', (err, data) => {
        const parsedData = JSON.parse(data)
        parsedData.push(payload);
        console.log('People data:');
        console.log(parsedData);

        fs.writeFileSync('people.json', JSON.stringify(parsedData), 'utf8');
    })

}

module.exports = { writePeople, getPeople, getPeopleById, getPeopleByUsername, createPeople }