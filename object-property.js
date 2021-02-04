
const Students = [

    {id : 21 , name: 'Robi'},
    {id : 18 , name: 'Nazmul'},
    {id : 20 , name: 'Shahadat'}
]


const names = Students.map( s => s.name)
const ids = Students.map(s => s.id)
const bigger = Students.filter( s => s< 20);
console.log(bigger)
console.log(ids)
console.log(names)