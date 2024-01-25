/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */

// let i = 0
// var flat = function (arr, n, depthAtual = 0, index = 0) {
//   if (n === 0) return arr
//   if (depthAtual === 0) depthAtual += 1
//   if (index === arr.length) {
//     depthAtual++
//     if (depthAtual <= n) index = 0
//   }
//   i = index
//   if (index != arr.length) {
//     for (i; i < arr.length; i++) {
//       if (Array.isArray(arr[i]) && depthAtual <= n) {
//         auxIndex = i + arr[i].length
//         arr.splice(i, 1, ...arr[i])
//         return flat(arr, n, depthAtual, auxIndex)
//       }
//     }
//   }

//   return arr
// }

// console.log(
//   flat(
//     [
//       [1, 2],
//       [3, [4, [5, [6]]], 7],
//       [8, 9, 10],
//     ],
//     2
//   )
// )

// Aqui estão algumas sugestões para melhorar o seu código:

// Tratamento de índices e profundidade:

// Você está usando depthAtual para controlar a profundidade atual, mas a lógica envolvendo o depthAtual pode ser simplificada. Você pode usar diretamente a variável depthAtual no lugar de index.
// Não parece haver uma necessidade de i = index. A variável i já está sendo usada corretamente no loop.
// Tratamento de sub-arrays:

// Quando você encontra um sub-array, você está substituindo o array original na posição atual do loop pelo sub-array expandido. Isso pode causar problemas, especialmente quando você precisa continuar o loop após a expansão. Pode ser melhor criar um novo array com os elementos expandidos.
// Lógica de parada:

// A condição if (n === 0) return arr pode não ser necessária, já que o problema pede para achatar até uma certa profundidade n. Você pode remover essa condição.

//** RESOLUÇÃO DO GPT: */
var flat = function (arr, n, depthAtual = 0) {
  if (depthAtual >= n) {
    return arr
  }

  const flattenedArray = []

  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      flattenedArray.push(...flat(arr[i], n, depthAtual + 1))
    } else {
      flattenedArray.push(arr[i])
    }
  }

  return flattenedArray
}
