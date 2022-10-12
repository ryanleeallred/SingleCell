const startup = document.getElementById("startup");
const code = document.getElementById("code");
const output = document.getElementById("output");


function addToOutput(s) {
    output.value = s + "\n";
}

startup.innerHTML = "Initializing...\n";

// init Pyodide
async function main() {
    let pyodide = await loadPyodide();
    startup.innerHTML = "Ready!\n";
    // startup.value += "Ready!\n";
    return pyodide;
}

let pyodideReadyPromise = main();

async function evaluatePython() {
    let pyodide = await pyodideReadyPromise;
    try {
        let output = pyodide.runPython(code.value);
        addToOutput(output);
    } catch (err) {
        addToOutput(err);
    }
}