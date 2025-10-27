
//arrey <HTMLButtonElement>
let allBtn = document.querySelectorAll("button");
let val1= document.getElementById("val1");
let val2= document.getElementById("val2");
let result = document.getElementById("result");
let memory = document.getElementById("memory");

allBtn.forEach(btn => {
    console.log(btn);

    btn.addEventListener("click", (event) => {
        console.log(event.target.attributes);
        console.log(val1);


        let a = parseFloat(val1.value);
        let b = parseFloat(val2.value);

        if (isNaN(a) || isNaN(b)) {
            result.innerText = "Error: inserisci numeri validi";
            return;
        }

        let operation = event.target.attributes["operation"].value;

        let res = performOperation(a,b, operation);
        result.innerText = "Result " + res;

        if(res instanceof Error) {
            result.innerText = "Error: " + res.message;
        }else{
            result.innerText = "Risultato " + res;

            let myLog = new MyLog(a,b,operation);
            let btnLoad = document.createElement("button");
            btnLoad.innerText = "LOAD";
            btnLoad.addEventListener("click", myLog.fnLoad);

            let logLine = document.createElement("li");
            logLine.innerText = `Eseguito ${myLog.val1} ${myLog.operation} ${myLog.val2}`;
            logLine.append(btnLoad);

            memory.appendChild(logLine);

        }
    })
});

/**
 * Esegue l'operazione tra a e b
 * @param a {number}
 * @param b {number}
 * @param operation {string} l'operazione da eseguire: + - * /
 * @returns {*|Error}
 */

function performOperation(a, b, operation) {
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

function MyLog(a, b, operation) {
    this.val1 = a;
    this.val2 = b;
    this.operation = operation;

    this.fnLoad = () => {
        val1.value = this.val1;
        val2.value = this.val2;
    }

}

function somma(a,b){
    return a + b;
}

function sottrazione(a,b){
    return a - b;
}

function divisione(a,b) {
    return a / b;
}

function moltiplicazione(a,b) {
    return a * b;
}