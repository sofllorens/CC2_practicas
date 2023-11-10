function generadorfrase(){ //esta función crea un array con varias frases como elementos, que se muestran en el HTML con el ID 'frase'
    var frases = ["Esto está mal pero no tan mal", "Hoy es viernes y tu cuerpo lo sabe", "Lo que importa es la actitud", "Necesito café"]; //este es el array que almacena las frases
    var randomIndex = Math.floor(Math.random() * frases.length); //ínidice aleatorio dentro de la long del array. Math.random() se usa para tener un nro decimal aleatorio entre 0y1 y se multiplica x cant de frases. Math.floor() redondea el resultado al nro entero más cercano y válido para el array
    var randomFrase = frases[randomIndex]; //acá se obtiene una frase aleatoria del array 'frases' usando el índice anterior y se almacena en la variable 'randomFrase'

    document.getElementById('frase').innerHTML = randomFrase; //accede al <p> con el id 'frase'. Se escribe randomFrase para establecer el cont interno.
}

document.getElementById('fraseBtn').addEventListener('click', generadorfrase); //accede al <button> con el id fraseBtn. .addEventListener() para "escuchar" el click. Tiene dos argumentos: click y la función generadorfrase para que se ejecute en ese orden.
