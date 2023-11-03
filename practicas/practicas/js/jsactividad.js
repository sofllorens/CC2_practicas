var miTemperatura = 36;
            console.log("hola mundo");
            if (miTemperatura > 36){
                console.log("Tenés fiebre, tomate un ibu");
                }else{
                console.log("No tenés fiebre, tomate un fernet");
            }

        var miTemperatura = 39;
            console.log("hola mundo");
            function termometro (){
                if (miTemperatura >36){
                    console.log("Tenés fiebre, tomate un ibu");
                }else{
                    console.log("No tenés fiebre, tomate un fernet");
                }
            }
        termometro();
        var miTemperatura = 36; //toma los datos de arriba para abajo
        termometro();

        var hambre = true;
            if(hambre == true){
                console.log("Tenés hambre"); //acá le estamos afirmando
            }else{
                console.log("No tenés hambre");
            }

        var hambre = true;

        function tengoHambre (){
            if (hambre == true){
                console.log("Tenés hambre"); //acá le estamos preguntando
            }else{
                console.log("No tenés hambre");
            }
        }

        hambre = false;
        tengoHambre ();

        var alumnos = 6;
        alumnos++;
        console.log(alumnos);

        var numeros = 0;
        function contador (){
            console.log("Sumé 1)")
            numeros++; //cada vez que ejecute esta función, le va a agregar un nro
            console.log("El valor del contador es:" + numeros); //el signo + une 
            if (numeros == 5){
                console.log("Llegué a 5");
            }else{
                console.log("Todavía no llegué a 5")
            };
        }

        console.log(numeros);

        contador();
        contador();
        contador();
        contador();
        contador();

        console.log(numeros);

//ACTIVIDAD JS - 20/10

    //1.
        var nro = 10;

        function paroimpar (){
            if(nro == 10){
                console.log("Este nro es par");
            }else{
                console.log("Este nro es impar");
            }
        }

        nro = 9;
        paroimpar ();

    //2.
        nro = 10;
        paroimpar ();

    //3.
        var frutas = ["manzanas","frutillas","peras"]; //este array contiene 3 elementos y una long de 3

        console.log(frutas[0])
        console.log(frutas[1])
        console.log(frutas[2])

    //4.
        var frutas = ["manzanas","frutillas","peras"];
        function agregarfruta (frutas){
            frutas.push("bananas");
        }

        agregarfruta(frutas);

        console.log(frutas[3]);

    //5. 
        let i;
        for (i=0; i<3; i++){    
            frutas.pop("bananas")
            console.log(i=frutas);
        }

    //6.
        var cantidad = [frutas.length];
        console.log(cantidad);
        if (cantidad == 3){
            console.log("Es un nro impar");
        }else{
            console.log("Es un nro par");
        }


//ACTIVIDAD 2

    //1. Activador de frases

    function generadorfrase(){ //esta función crea un array con posibles frases
        var frases = ["Esto está mal pero no tan mal", "Hoy es viernes y tu cuerpo lo sabe", "Lo que importa es la actitud", "Necesito café"];
        var randomIndex = Math.floor(Math.random() * frases.length);
        var randomFrase = frases[randomIndex];

        document.getElementById('frase').innerHTML = randomFrase;
    }

    document.getElementById('fraseBtn').addEventListener('click', generadorfrase);

    //2. Cambiar texto en un Div

    function cambiarTexto() {
        var textos = ["Este no es el texto original", "Este tampoco es el texto original"];
        var randomIndex = Math.floor(Math.random() * textos.length);
        var newText = textos[randomIndex];

        document.getElementById('text').innerHTML = newText;
    }

    //3. Generador de números aleatorios

    function generarNro() {
        var randomNro = Math.floor(Math.random() * 100) + 1;
        document.getElementById('randomNro').innerHTML = randomNro;
    }

    //4. Lista de Tareas (la tarea se borra con doble click)

    function addTask() {
        const taskInput = document.getElementById('taskInput');
        const taskList = document.getElementById('taskList');
        const task = taskInput.value.trim();

        if (task) {
            const li = document.createElement('li');
            li.innerText = task;
            li.addEventListener('click', () => {
                li.classList.toggle('completed');
            });
            li.addEventListener('dblclick', () => {
                taskList.removeChild(li);
            });
            taskList.appendChild(li);
            taskInput.value = '';
        }
    }

    //5. Cambiar el Color de Fondo

    function cambiarColorFondo() {
        const randomColor = 'rgb(' + Math.floor(Math.random() * 256) + ',' +
                                    Math.floor(Math.random() * 256) + ',' +
                                    Math.floor(Math.random() * 256) + ')';
        document.body.style.backgroundColor = randomColor;
    }


    //6. Alternar la Visibilidad

    function toggleVisibilidad() {
        const title = document.getElementById('title');
        title.classList.toggle('hidden');
    }


    //7. Calculadora Simple

    document.getElementById('calcular').addEventListener('click', function() {
        const number1 = parseFloat(document.getElementById('number1').value);
        const number2 = parseFloat(document.getElementById('number2').value);
        const operator = document.getElementById('calculo').value;
        let result;
    
        switch (operator) {
            case '+':
                result = number1 + number2;
                break;
            case '-':
                result = number1 - number2;
                break;
            case '*':
                result = number1 * number2;
                break;
            case '/':
                result = number1 / number2;
                break;
            default:
                console.log('Invalid operator');
                return;
        }
    
        document.getElementById('result').textContent = `Result: ${result}`;
    });


    //8. Generador de Contraseñas

    function generarPssw() {
        const length = document.getElementById('length').value;
        const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnñopqrstuvwxyz0123456789!@#$%^&*()_+<>?';
        let password = '';
    
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * charset.length);
            password += charset[randomIndex];
        }
    
        document.getElementById('password').textContent = `Generar contraseña: ${password}`;
    }


    //9. Contador de Clics

    document.getElementById('clickButton').addEventListener('click', function() {
    var counter = document.getElementById('counter');
    var currentCount = parseInt(counter.textContent);
    if (isNaN(currentCount)) {
        currentCount = 0;
    }
    counter.textContent = currentCount + 1;
});