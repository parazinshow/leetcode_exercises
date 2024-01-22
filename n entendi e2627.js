// Given a function fn and a time in milliseconds t, return a debounced version of that function.

// A debounced function is a function whose execution is delayed by t milliseconds and whose execution is cancelled if it is called again within that window of time. The debounced function should also receive the passed parameters.

// For example, let's say t = 50ms, and the function was called at 30ms, 60ms, and 100ms. The first 2 function calls would be cancelled, and the 3rd function call would be executed at 150ms. If instead t = 35ms, The 1st call would be cancelled, the 2nd would be executed at 95ms, and the 3rd would be executed at 135ms.

// Debounce Schematic

// The above diagram shows how debounce will transform events. Each rectangle represents 100ms and the debounce time is 400ms. Each color represents a different set of inputs.

/**
 * @param {Function} fn
 * @param {number} t milliseconds
 * @return {Function}
 */
var debounce = function (fn, t) {
  let timer
  return function (...args) {
    clearTimeout(timer)
    timer = setTimeout(() => fn(...args), t)
  }
}

/**
 * const log = debounce(console.log, 100);
 * log('Hello'); // cancelled
 * log('Hello'); // cancelled
 * log('Hello'); // Logged at t=100ms
 */

// Aqui está uma explicação passo a passo de como clearTimeout funciona no contexto do código que você forneceu:
// Quando a função debounce é chamada, a variável timer é declarada para armazenar a referência ao temporizador.
// Sempre que a função debounce é chamada novamente (por exemplo, quando a função debouncada é chamada várias vezes dentro de um curto período), a linha clearTimeout(timer) é executada.
// clearTimeout(timer) cancela o temporizador associado à referência armazenada em timer. Isso significa que a execução da função original (fn) que estava agendada para ocorrer após um certo período (t) é cancelada.
// Após o clearTimeout, um novo temporizador é configurado na linha seguinte (timer = setTimeout(() => fn(...args), t)). Isso reinicia o processo de espera e agendamento da execução da função original.
// Em resumo, clearTimeout interrompe a execução futura de uma função que foi agendada para ocorrer após um certo período, proporcionando um controle preciso sobre a temporização e evitando que múltiplas execuções indesejadas ocorram em sequência.
