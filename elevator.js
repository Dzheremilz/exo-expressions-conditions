const chalk = require('chalk');

let currentFloor = -1
let targetFloor = 7

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
      console.log(chalk.green(`Arrivé au second sous-sol`))
      break
    case -1:
      console.log(chalk.red(`Arrivé au premier sous-sol`))
      break
    case 0:
      console.log(chalk.green.bgRedBright(`Arrivé au rez de chaussée`))
      break
    case 1:
      console.log(chalk.yellow.bgGreenBright(`Arrivé au premier étage`))
      break
    case 2:
      console.log(chalk.blue.bgYellowBright(`Arrivé au second étage`))
      break
    case 3:
      console.log(chalk.magenta.bgBlueBright(`Arrivé au troisième étage`))
      break
    case 4:
      console.log(chalk.cyan.bgMagentaBright(`Arrivé au quatrième étage`))
      break
    case 5:
      console.log(chalk.whiteBright.bgCyanBright(`Arrivé au cinquième étage`))
      break
    case 6:
      console.log(chalk.blackBright.bgWhiteBright(`Arrivé au sixième étage`))
      break
    case 7:
      console.log(chalk.redBright.bgBlackBright(`Arrivé au dernier étage`))
      break
  }
}