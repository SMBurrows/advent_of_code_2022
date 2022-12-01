import { readFile } from 'fs';

const elves: number[] = []

const totalForElf = (elf: string) => {
  let elfTotal = 0

  elf.split(/\r?\n/).forEach((cal: string) => {
    try {
      elfTotal += parseInt(cal)
    } catch (e) {
      console.log(e)
    }
  })

  return elfTotal
}

readFile('./1/input.txt', { encoding: "utf8" }, (_err, data) => {
  const calsFromElves = data.split(/\r?\n\r?\n/);

  calsFromElves.forEach((carrying) => {
    elves.push(totalForElf(carrying))
  })
  
  console.log(`Top Elf: ${Math.max(...elves)}`)

  const top3 = elves.sort((a, b) => b - a).slice(0, 3)
  console.log(`Sum of Top 3: ${top3.reduce((a, b) => a + b, 0)}`)

})