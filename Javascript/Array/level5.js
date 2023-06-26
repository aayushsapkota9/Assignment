const arr = [2,5,6,7]
//calculate the sum of the array using either for of or for in
let sum=0;
for(let i of arr)
  {
    sum+=i
  }
console.log(sum)


//high level
const users =['hari', 'shyam', 'hari','shyam','hari','shova']
//hint: how to know hari was already there in users array
//hint2: how to remove particular index/item
//remove from array if duplicate


// Answer 1

// users.filter((element,index)=>{
//   if(!(users.indexOf(element)<index))
//     {
//       return element
//     }
// })


//Answer 2
let tempUniqueValues=users.map((element,index)=>{
  let isRepeated=false;
  if((users.indexOf(element)<index))
    {
      isRepeated=true;
      return [element,isRepeated]
    }
  else{
    return [element,false]
  }
})
//This code is for asking questions only 
// for(let i in hello)
//   {
//     console.log(hello)
//     if(hello[i][1])
//       {
//         hello.splice(i,1);
//         i--;
//       }
//   }
// // console.log(hello)
for(let i=0;i<tempUniqueValues.length;i++)
  {
    if(tempUniqueValues[i][1])
      {
        tempUniqueValues.splice(i,1);
        i--;
      }
  }
let uniqueNames=tempUniqueValues.map((element)=>{
  return element[0]
})
console.log(uniqueNames)








const newArr = [[4,5], [5,7], [7,2]]
//calculate the sum of all the odd numbers inside this nested array
newSum=0
for (let i of newArr)
  {
    for(let j of i)
      {
        j%2==0 ? newSum : newSum+=j
      }
  }
console.log(newSum)

const myDetails = [
  {id:3, name: 'hari'},
  {id:5, name: 'shyam'},
  {id:6, name: 'gopal'},
]
let output=[]
for(let i of myDetails)
{
  output.push(i.id)
}
console.log(output)
// return only array of ids: expected output  [3,5,6]


const userDetails= [
  {score: 0, name:'hari', marks: [10,3,23]},
  {score: 0, name:'shyam', marks: [50,23,23]},
  {score: 0, name:'shyam',marks: [20,13,43]},
]
for(let i of userDetails)
{
  i.score=i.marks.reduce((accumator,value)=>{
    return accumator+=value;
  },0)
}
userDetails
//loop over the arr of objects and calculate total score, expected output is:

// [
//     {score: 36, name:'hari', marks: [10,3,23]},
//     {score: 96, name:'shyam', marks: [50,23,23]},
//     {score: 76, name:'shyam',marks: [20,13,43]},
// ]
const arr1 = ['ram','shyam','hari']
const arr2 = ['ram','shyam','hari','gopal','krish']

// ['gopal','krish']


// let unique=[]
// arr2.map((item)=>{
// if(!arr1.includes(item))
// {
//  unique.push(item)
// }
    
// })
// unique
arr2.filter((item)=>{
if(!arr1.includes(item))
{
 return item
}
})
