function convertTemperature() {
    const temperatureInput = document.getElementById('temperatureInput').value;
    const unitSelect = document.getElementById('unitSelect').value;
    const errorMessage = document.getElementById('errorMessage');
    const result = document.getElementById('result');

    if (isNaN(temperatureInput) || temperatureInput === '') {
        errorMessage.textContent = 'Please enter a valid number!';
        result.textContent = '';
        return;
    }

    errorMessage.textContent = '';
    let convertedTemperature;

    if (unitSelect === 'C') {
        convertedTemperature = `${(temperatureInput * 9/5) + 32} °F | ${parseFloat(temperatureInput) + 273.15} K`;
    } else if (unitSelect === 'F') {
        convertedTemperature = `${(temperatureInput - 32) * 5/9} °C | ${((temperatureInput - 32) * 5/9) + 273.15} K`;
    } else if (unitSelect === 'K') {
        convertedTemperature = `${temperatureInput - 273.15} °C | ${(temperatureInput - 273.15) * 9/5 + 32} °F`;
    }

    result.textContent = `Converted Temperature: ${convertedTemperature}`;
}
