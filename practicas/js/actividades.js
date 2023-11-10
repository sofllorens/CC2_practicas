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

//ACTIVIDAD JS - fecha 20/10

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


//ACTIVIDAD 2 - fecha 3/11

    //1. Activador de frases

    function generadorfrase(){ //esta función crea un array con varias frases como elementos, que se muestran en el HTML con el ID 'frase'
        var frases = ["Esto está mal pero no tan mal", "Hoy es viernes y tu cuerpo lo sabe", "Lo que importa es la actitud", "Necesito café"]; //este es el array que almacena las frases
        var randomIndex = Math.floor(Math.random() * frases.length); //ínidice aleatorio dentro de la long del array. Math.random() se usa para tener un nro decimal aleatorio entre 0y1 y se multiplica x cant de frases. Math.floor() redondea el resultado al nro entero más cercano y válido para el array
        var randomFrase = frases[randomIndex]; //acá se obtiene una frase aleatoria del array 'frases' usando el índice anterior y se almacena en la variable 'randomFrase'

        document.getElementById('frase').innerHTML = randomFrase; //accede al <p> con el id 'frase'. Se escribe randomFrase para establecer el cont interno.
    }

    document.getElementById('fraseBtn').addEventListener('click', generadorfrase); //accede al <button> con el id fraseBtn. .addEventListener() para "escuchar" el click. Tiene dos argumentos: click y la función generadorfrase para que se ejecute en ese orden.

    //2. Cambiar texto en un Div

    function cambiarTexto() {
        var textos = ["Este no es el texto original", "Este tampoco es el texto original"];
        var randomIndex = Math.floor(Math.random() * textos.length);
        var newText = textos[randomIndex];

        document.getElementById('text').innerHTML = newText;
    }

    //3. Generador de números aleatorios

    function generarNro() { //funciòn que genera un nro random del 1 al 100 en un <div> con el id randomNro
        var randomNro = Math.floor(Math.random() * 100) + 1; //math.random() devuelve un nro decimal aleatorio entre 0y1 y dps *100 para tener un nro entre 0 y 99.99. Math.floor() redondea para abajo ese resultado y se suma 1 para tener un nro entero
        document.getElementById('randomNro').innerHTML = randomNro; 
    }

    //4. Lista de Tareas (la tarea se borra con doble click)

    function addTask() { // función q permite agregar tareas a una lista y dentro de esta función se declaran 3 constantes. 
        const taskInput = document.getElementById('taskInput'); //sirve para obtener el valor del campo donde el usuario ingresa la tarea
        const taskList = document.getElementById('taskList'); //lista donde se van a mostrar las tareas agregadas
        const task = taskInput.value.trim(); //almacena el valor del campo 'taskInput' y se eliminan los espacios con 'trim'

        if (task) { //se verifica si esta variable tiene algún valor ingresado que no sean espacios en blanco.
            const li = document.createElement('li'); //si 'task' tiene un valor, se crea un elemento 'li' usando esto: document.createElement('li')
            li.innerText = task; //acá se establece el contenido de texto del elemento 'li' en el valor de la tarea ingresada 'task'
            li.addEventListener('click', () => { //esto podría servir como evento de click cuando el usuario hace click al elemento 'li' y con el completed para marcar o desmarcar la tarea como completada. 
                li.classList.toggle('completed');
            });
            li.addEventListener('dblclick', () => { //acá se agrega un evento de doble click al elemento 'li' para eliminar la tarea
                taskList.removeChild(li);
            });
            taskList.appendChild(li); //acá la tarea ingresada (li) se agrega como un hijo al 'taskList', mostrando la tarea en la lista. 
            taskInput.value = ''; // el campo de entrada se restablecerse para poder ingresar una nueva tarea
        }
    }

    //5. Cambiar el Color de Fondo

    function cambiarColorFondo() { //dentro de esta función se genera un color aleatorio en formato RGB y para esto es necesario 3 Math.floor que generen valores entre 0 y 255 para cada componente (rojo, verde y azul)
        const randomColor = 'rgb(' + Math.floor(Math.random() * 256) + ',' + 
                                    Math.floor(Math.random() * 256) + ',' +
                                    Math.floor(Math.random() * 256) + ')';
        document.body.style.backgroundColor = randomColor; //acá se selecciona todo el cuerpo de la página con 'body' y se establece el estilo con backgroundColor igual a un color aleatorio definido antes
    }


    //6. Alternar la Visibilidad

    function toggleVisibilidad() { //esta función se activa haciendo click en el <button>
        const title = document.getElementById('title'); //hacemos referencia al elemento <h2> con el id 'title' para alternar su visibilidad
        title.classList.toggle('hidden'); //con la clase 'hidden' se añade o quita el elemento <h2>. en CSS se puso una propiedad para que cuando hidden esté presente se aplique display:none
    }


    //7. Calculadora Simple 

    document.getElementById('calcular').addEventListener('click', function() { //selecciona el id 'calcular' y se agrega un click. Cuando el usuario haga click, sigue con el segundo argumento (function)
        const number1 = parseFloat(document.getElementById('number1').value); //acá se obtiene el valor del primer nro. Con parseFloat los nros se convierten en nros flotantes y nos aseguramos que se hagan cálculos matemáticos. 
        const number2 = parseFloat(document.getElementById('number2').value); //acá se obtiene el valor del segundo nro
        const operator = document.getElementById('calculo').value; //acá el tipo de operación. 
        let result;
    
        switch (operator) { //estructura switch para realizar el cálculo correspondiente a los valores seleccionados por el usuario. Los resultados se almcacenan en la variable 'result'.
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
                console.log('Invalid operator'); //si la operación no es válida, se va a mostrar un mje de error en la consola y se frena la ejecución de la función con 'return'
                return;
        }
    
        document.getElementById('result').textContent = `Result: ${result}`; //el resultado del cálculo se muestra en el <div> con el id 'result' 
    });


    //8. Generador de Contraseñas

    function generarPssw() {
        const length = document.getElementById('length').value; //este valor representa la longitud de la contraseña que el usuario quiere generar
        const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnñopqrstuvwxyz0123456789!@#$%^&*()_+<>?'; //cadena con todos los caracteres posibles que se pueden usar dentro de una contrseña
        let password = ''; //se usa para construir la contraseña aleatoria
    
        for (let i = 0; i < length; i++) { //bucle for para generar la contraseña aleatoria. Va a ir desde 0 hasta la long deseada. 
            const randomIndex = Math.floor(Math.random() * charset.length); //va a ir eligiendo un caracter aleatorio del 'charset' con el 'randomIndex' y ese caracter se agrega a 'password' y asì sucesivamente hasta que se complete la long deseada de contraseña
            password += charset[randomIndex];
        }
    
        document.getElementById('password').textContent = `Generar contraseña: ${password}`; //el resultado se va a ver en el <div> con el id 'password' Se muestra el resultado en formato de cadena que incluye tmb el texto 'generar contraseña' y dps la contraseña creada
    }


    //9. Contador de Clics

    document.getElementById('clickButton').addEventListener('click', function() { //selecciona el elemento con el id 'clickButton' y agrega un evento de click para que se ejecute la funcion
    var counter = document.getElementById('counter'); // el <div> con el id 'counter' representa el contador que se va a mostrar en la página
    var currentCount = parseInt(counter.textContent); //el texto de 'counter' se convierte en un nro entero con parseInt y se almacena en la variable currentCount
    if (isNaN(currentCount)) {  //acá se verifica si no es un nro válido, Si no lo es, se estrablece 0 como valor predeterminado. 
        currentCount = 0;
    }
    counter.textContent = currentCount + 1; //se incrementa el valor de currentCount en 1 y muestra el contador actualizado en la pág. 
});


//ACTIVIDAD 3 - fecha 10/11

    //1. Crear una función que, dado un array de números, devuelva el promedio.

    function calcularPromedio() {
        const numbersText = document.getElementById('numeros').value;
        const numeros = numbersText.split(',').map(Number).filter(isFinite);

        if (numeros.length === 0) {
            document.getElementById('resultadopromedio').textContent = 'Tenés que escribir una serie de números';
            return;
        }

        const sum = numeros.reduce((total, num) => total + num, 0);
        const average = sum / numeros.length;

        document.getElementById('resultadopromedio').textContent = 'El promedio es: ' + average;
        }

    //2. Crear un objeto que contenga nombre, apellido, legajo y un array de 4 notas de un estudiante (del 1 al 10).

    const estudiante = {
        nombre: "Sofía",
        apellido: "Lloréns",
        legajo: "0127000",
        notas: [7, 8, 9, 10,]
    };
    
    document.getElementById("nombre").textContent = estudiante.nombre;
    document.getElementById("apellido").textContent = estudiante.apellido;
    document.getElementById("legajo").textContent = estudiante.legajo;
    document.getElementById("notas").textContent = estudiante.notas.join(", ");

    //3. A partir del objeto creado, crear 4 objetos de estudiantes distintos en un array.

    const estudiantes = [
        new Student("Fatiga", "Argento", "0123000", [8, 9, 10, 7]),
        new Student("Simón", "Fisher", "0123001", [9, 10, 8, 7]),
        new Student("María Elena", "Fuseneco", "0123002", [8, 7, 9, 10]),
        new Student("Máximo", "Cosetti", "0123003", [10, 8, 9, 7])
    ];

    //4. Crear un botón en HTML que imprima debajo una lista con el nombre y apellido de todos los estudiantes

    function imprimirLista() {
        const listaEstudiantes = [
            {nombre: "Fatiga", apellido: "Argento"},
            {nombre: "Simón", apellido: "Fisher"},
            {nombre: "María Elena", apellido: "Fuseneco"},
            {nombre: "Máximo", apellido: "Cosetti"}
        ];
        
        let infoEstudiantes = '<ul>';
        
        listaEstudiantes.forEach(estudiante => {
            infoEstudiantes += `<li>${estudiante.nombre} ${estudiante.apellido}</li>`;
        });
        
        infoEstudiantes += '</ul>';
        
        document.getElementById('listaEstudiantes').innerHTML = infoEstudiantes;
    }

    //5. Crear en pantalla un formulario que permita agregar un nuevo estudiante. NO PUDE HACER QUE APAREZCA EN LA LISTA

    document.getElementById('addStudentForm').addEventListener('submit', function(event) {
        event.preventDefault();
    
        var nombre = document.getElementById('nombre').value;
        var apellido = document.getElementById('apellido').value;
        var email = document.getElementById('email').value;
    
        var newStudent = {
            nombre: nombre,
            apellido: apellido,
            email: email,
        };
    
        addStudentToList(newStudent);
    });
    
    function addStudentToList(student) {
        var studentList = document.getElementById('studentList');
    
        var listItem = document.createElement('li');
        listItem.textContent = student.nombre + ' ' + student.apellido + ' (' + student.email + ')';
    
        studentList.appendChild(listItem);
    }

    //6. Crear un botón que imprima debajo el promedio de cada estudiante, escrito como "nombre apellido: promedio".

    //7. Si el promedio del estudiante da un numero menor a 4 que muestre en la pantalla "Aplazado", si es mayor que 4 que muestre en la pantalla "Aprobado", si el promedio es mayor a 8 que muestre "Sobresaliente".

    //8. Genera un programa que guarde una lista de personas, que muestre en pantalla un botón, y si el usuario presiona en el boton muestre en lista una persona aleatoria generando asi un programa de sorteos donde tendrá 3 ganadores en lista.


