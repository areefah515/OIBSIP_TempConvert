function convertTemperature() {
    const inputTemp = parseFloat(document.getElementById('inputTemperature').value);
    const inputUnit = document.getElementById('inputUnit').value;

    let celsius, fahrenheit, kelvin;

    if (isNaN(inputTemp)) {
        alert("Please enter a valid number.");
        return;
    }

    // Convert based on the input unit
    switch (inputUnit) {
        case "Celsius":
            celsius = inputTemp;
            fahrenheit = (inputTemp * 9/5) + 32;
            kelvin = inputTemp + 273.15;
            break;
        case "Fahrenheit":
            celsius = (inputTemp - 32) * 5/9;
            fahrenheit = inputTemp;
            kelvin = (inputTemp - 32) * 5/9 + 273.15;
            break;
        case "Kelvin":
            celsius = inputTemp - 273.15;
            fahrenheit = (inputTemp - 273.15) * 9/5 + 32;
            kelvin = inputTemp;
            break;
    }

    // Display the results
    document.getElementById('resultCelsius').textContent = `Celsius: ${celsius.toFixed(2)} °C`;
    document.getElementById('resultFahrenheit').textContent = `Fahrenheit: ${fahrenheit.toFixed(2)} °F`;
    document.getElementById('resultKelvin').textContent = `Kelvin: ${kelvin.toFixed(2)} K`;
}
