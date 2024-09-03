<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calculadora Digital</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
            background-color: #f0f0f0;
        }
        .calculadora {
            background-color: #333;
            border-radius: 5px;
            padding: 10px;
        }
        #pantalla {
            width: 100%;
            height: 40px;
            margin-bottom: 10px;
            font-size: 20px;
            text-align: right;
            padding: 5px;
            box-sizing: border-box;
        }
        .botones {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 6px;
        }
        button {
            width: 50px;
            height: 50px;
            font-size: 16px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
        }
        button:hover {
            background-color: #ddd;
        }
    </style>
</head>
<body>
    <div class="calculadora">
        <input type="text" id="pantalla" readonly>
        <div class="botones">
            <button onclick="limpiar()">C</button>
            <button onclick="retroceder()">←</button>
            <button onclick="agregar('/')">/</button>
            <button onclick="agregar('*')">*</button>
            <button onclick="agregar('7')">7</button>
            <button onclick="agregar('8')">8</button>
            <button onclick="agregar('9')">9</button>
            <button onclick="agregar('-')">-</button>
            <button onclick="agregar('4')">4</button>
            <button onclick="agregar('5')">5</button>
            <button onclick="agregar('6')">6</button>
            <button onclick="agregar('+')">+</button>
            <button onclick="agregar('1')">1</button>
            <button onclick="agregar('2')">2</button>
            <button onclick="agregar('3')">3</button>
            <button onclick="calcular()" style="height: 105px; grid-row: span 2;">=</button>
            <button onclick="agregar('0')" style="width: 105px; grid-column: span 2;">0</button>
            <button onclick="agregar('.')">.</button>
        </div>
    </div>

    <script>
        function agregar(valor) {
            document.getElementById('pantalla').value += valor;
        }

        function limpiar() {
            document.getElementById('pantalla').value = '';
        }

        function calcular() {
            try {
                document.getElementById('pantalla').value = eval(document.getElementById('pantalla').value);
            } catch (error) {
                document.getElementById('pantalla').value = 'Error';
            }
        }

        function retroceder() {
            let valor = document.getElementById('pantalla').value;
            document.getElementById('pantalla').value = valor.slice(0, -1);
        }
    </script>
</body>
</html>