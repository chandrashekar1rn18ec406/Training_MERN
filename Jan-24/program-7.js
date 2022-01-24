let people = [
    { name: 'Suraj', age: 21 },
    { name: 'Manoj', age: 20 },
    { name: 'Joshi', age: 20 },
    { name: 'Varun', age: 22 }
  ];
  
function groupBy(objectArray, property) {
    return objectArray.reduce(function (acc, obj) {
      let key = obj[property]
      if (!acc[key]) {
        acc[key] = []
      }
      acc[key].push(obj)
      return acc
    }, {})
  }

let groupedPeople = groupBy(people, 'age')
console.log(groupedPeople);