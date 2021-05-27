const csv = require('csvtojson')
const fs = require('fs')
const HOME = __dirname + '/../'
const csvs = ['1.assets','2.liabilities','3.common','4.equity','5.expense','6.revenue']
const categories=  [
    { id:1,name:'资产类',en:'assets'},
    { id:2,name:'负债类',en:'liabilities'},
    { id:3,name:'共同类',en:'common'},
    { id:4,name:'所有者权益类',en:'equity'},
    { id:5,name:'成本类',en:'expense'},
    { id:6,name:'损益类',en:'revenue'},
]

function go(){
    let all = []
    csvs.forEach(name => {
        csv().fromFile(`${HOME}/csv/${name}.csv`).then((json) => {
            let tmp = name.split('.')
            let id = parseInt(tmp[0])
            let category = categories.find( e => e.id === id)
            category.titles =  json
            all.push(category)
            // console.log(all)
            fs.writeFile(`${HOME}/json/${name}.json`,JSON.stringify(json), 'utf8', err => console.log(err))
        })
    })

    setTimeout(() =>{
        fs.writeFile(`${HOME}/json/all.json`, JSON.stringify(all), 'utf8', err => console.log(err))
    },3000)

}


go()





