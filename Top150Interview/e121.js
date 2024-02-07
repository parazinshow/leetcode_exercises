/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  if (prices.length === 0) {
    return 0 // Se não houver preços, o lucro máximo é 0
  }

  let minPrice = prices[0] // Inicializa o preço mínimo como o primeiro preço
  let maxProfit = 0 // Inicializa o lucro máximo como 0

  for (let i = 1; i < prices.length; i++) {
    // Verifica se o preço atual é menor do que o preço mínimo conhecido
    if (prices[i] < minPrice) {
      minPrice = prices[i]
    } else {
      // Calcula o lucro potencial se vendermos no preço atual
      let currentProfit = prices[i] - minPrice
      // Atualiza o lucro máximo se o lucro potencial for maior
      maxProfit = Math.max(maxProfit, currentProfit)
    }
  }
  return maxProfit
}
//RESOLUÇÃO COM DOIS FOR. 95% ACC
// var maxProfit = function (prices) {
//   let min,
//     max,
//     profit = 0
//   for (let i = 0; i < prices.length; i++) {
//     min = prices[i]
//     for (let j = i + 1; j < prices.length; j++) {
//       max = prices[j]
//       profit = max - min > profit ? max - min : profit
//     }
//   }
//   console.log(profit)
//   return profit
// }

console.log(maxProfit([7, 3, 2, 6, 1, 5]))
