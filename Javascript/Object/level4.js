const obj = {
    computer: 42,
    maths: 42,
    science: 50
}

//calculate the percentage he scored in the exams out of total 150 score
let calcPerc=(obj)=>{
// return `${(((obj.computer+obj.maths+obj.science)/150)*100).toFixed(2)}%`
let total=((Object.values(obj).reduce((sum,value)=>{return sum+=value;},0)/150)*100)
return `${total.toFixed(2)}%`

}
calcPerc(obj)


//install node js 16.16.0

const userDetails={
    name: "kaylin",
  maths: 23,
  science: 35,

  gk:30
}

// {
//     userName: 'kaylin',
//     subjectCodes: ['M','S','G'],
//     subjectScores: [23,35,30]
// }

let newDetails={
name: '',
subjectCodes: [],
subjectScores: []
}
// let temp=
newDetails.subjectCodes=[...Object.keys(userDetails).map((item)=>{
if(item!='name')
  {
    return item[0].toUpperCase()
    
  }
}).filter(item=>item)]
// newDetails.subjectScores

newDetails.name=userDetails.name
newDetails.subjectScores=[...Object.values(userDetails).filter((item)=>{
console.log(item)
if(typeof(item) != 'string'){
return item
}})]

console.log(newDetails)