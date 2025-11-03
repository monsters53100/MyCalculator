/**
 * Esegue l'operazione tra a e b
 * @param a {number}
 * @param b {number}
 * @param operation {string} l'operazione da eseguire: + - * /
 * @returns {*|Error}
 */
import {somma, sottrazione, divisione, moltiplicazione} from "./math.js";

export function performOperation(a, b, operation) {
    switch (operation) {
        case "+":
            return somma(a,b);
        case "-":
            return sottrazione(a,b);
        case "*":
            return moltiplicazione(a,b);
        case "/":
            return divisione(a,b);
        default:
            return Error("Operazione non valida");

    }

}