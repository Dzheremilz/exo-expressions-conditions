let currentFloor = 7
let targetFloor = -2

if (currentFloor < -2 || currentFloor > 7 || targetFloor < -2 || targetFloor > 7) {
  console.log('Cet étage n\'existe pas')
  return
} else if (currentFloor === targetFloor) {
  console.log(`Vous vous trouvez déjà a l'étage ${currentFloor}`)
}

while (currentFloor !== targetFloor) {
  console.log(`Départ de l'étage ${currentFloor} en direction de l'étage ${currentFloor < targetFloor ? currentFloor + 1 : currentFloor - 1}`)
  currentFloor < targetFloor ? currentFloor++ : currentFloor--
  switch (currentFloor) {
    case -2:
      console.log(`Arrivé au second sous-sol`)
      break
    case -1:
      console.log(`Arrivé au premier sous-sol`)
      break
    case 0:
      console.log(`Arrivé au rez de chaussée`)
      break
    case 1:
      console.log(`Arrivé au premier étage`)
      break
    case 2:
      console.log(`Arrivé au second étage`)
      break
    case 3:
      console.log(`Arrivé au troisième étage`)
      break
    case 4:
      console.log(`Arrivé au quatrième étage`)
      break
    case 5:
      console.log(`Arrivé au cinquième étage`)
      break
    case 6:
      console.log(`Arrivé au sixième étage`)
      break
    case 7:
      console.log(`Arrivé au dernier étage`)
      break
  }
}