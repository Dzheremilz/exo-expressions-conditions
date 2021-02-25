let age = 5
let canVote = false
if (age >= 18) {
  canVote = true
} else {
  canVote = false
}
if (canVote) {
  console.log('You can vote')
} else {
  console.log('You can not vote')
}

let canVote2 = age >= 18 ? 'You can vote' : 'You can not vote'
console.log(canVote2)

let canVote3 = false
age < 18 ? canVote3 = false : canVote3 = true
canVote3 ? console.log('You can vote') : console.log('You can not vote')