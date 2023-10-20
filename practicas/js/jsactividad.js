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
