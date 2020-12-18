const csv = require('csvtojson')
const fs = require('fs')
const HOME = __dirname + '/../'
const csvs = ['assets','commons','equity','expense','liabilities','revenue']

async function go(){
    // return new Promise( (resolve,reject) => {
        csvs.forEach(name => {
            csv().fromFile(`${HOME}/csv/${name}.csv`)
                .then((json) => {
                    all = all.concat(json)
                    // console.log(all)
                    fs.writeFile(`${HOME}/json/${name}.json`, JSON.stringify(json), 'utf8', err => console.log(err))
                })
        })
    // })
}


var all = []
 go()

setTimeout(() =>{
    fs.writeFile(`${HOME}/json/all.json`, JSON.stringify(all), 'utf8', err => console.log(err))
},3000)




