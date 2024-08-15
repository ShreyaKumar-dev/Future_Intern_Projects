function convertTemperature() {
    const input = document.getElementById('input').value;
    const fromUnit = document.getElementById('fromSelect').value;
    const toUnit = document.getElementById('toSelect').value;
    const output = document.getElementById('output');

    // Check if the input is a valid number
    if (isNaN(input) || input === '') {
        output.value = 'Invalid input!';
        return;
    }

    let result;

    if (fromUnit === toUnit) {
        result = parseFloat(input);
    } else if (fromUnit === 'C') {
        if (toUnit === 'F') {
            result = (input * 9/5) + 32;
        } else if (toUnit === 'K') {
            result = parseFloat(input) + 273.15;
        }
    } else if (fromUnit === 'F') {
        if (toUnit === 'C') {
            result = (input - 32) * 5/9;
        } else if (toUnit === 'K') {
            result = ((input - 32) * 5/9) + 273.15;
        }
    } else if (fromUnit === 'K') {
        if (toUnit === 'C') {
            result = input - 273.15;
        } else if (toUnit === 'F') {
            result = (input - 273.15) * 9/5 + 32;
        }
    }

    output.value = `${result.toFixed(2)} °${toUnit}`;
}

