var botones = document.querySelectorAll(".boton");

for (let key in botones) {
    botones[key].onclick = botonApretado;
}

function botonApretado() {
    let indice;
    let hijos = this.parentNode.children;
    for (let key in hijos) {
        if (this == hijos[key]) {
            indice = key
        }
        clearConsole();
    }

    switch (indice) {
        case "0":
            exercici1();
            break;
        case "1":
            exercici2();
            break;
        case "2":
            exercici3();
            break;
        case "3":
            exercici4();
            break;
        case "4":
            exercici5();
            break;
    }
}

function exercici1() {
    console.log("-".repeat(40) + "\nExercici 1\n" + "-".repeat(40));
    var nombre = "Ebert".toUpperCase();

    //Convierte un string a un array
    arrayNombre = Array.from(nombre);

    //Recorrer el nuevo array
    for (let iterator of arrayNombre) {
        console.log(iterator);
    }
}
function exercici2() {
    console.log("-".repeat(40) + "\nExercici 2\n" + "-".repeat(40));
    arrayNombre = ['E', 'b', '1', 'e', 'r', 't'];
    for (let iterator of arrayNombre) {
        if (iterator.match(/[aeiou]/gi)) {
            console.log("Vocal: " + iterator);
        } else if (iterator.match(/[0-9]/gi)) {
            console.log("Els noms de persones no contenen el número:" + iterator);
        } else {
            console.log("Consonante:" + iterator);

        }

    }

}
function exercici3() {
    console.log("-".repeat(40) + "\nExercici 3\n" + "-".repeat(40));
    var nombre = "Ebert".toUpperCase();
    //Convierte un string a un array
    arrayNombre = Array.from(nombre).sort();
    var nuevo_array = new Map();
    let count = 0;
    let valor = arrayNombre[0];
    arrayNombre.map(function (value, index) {
        if (value == valor) {
            count++;
            nuevo_array[value] = count;
        } else {
            count = 1;
            nuevo_array[value] = count;
        }
        valor = value;
    });
    console.log(nuevo_array);

}

function exercici4() {
    console.log("-".repeat(40) + "\nExercici 4\n" + "-".repeat(40));
    var name = ['E', 'B', 'E', 'R', 'T'];
    var surname = ['P', 'E', 'R', 'E', 'Z'];
    var fullname = [...name, " ", ...surname];
    console.log(fullname);

}
function exercici5() {
    console.log("-".repeat(40) + "\nExercici 5\n" + "-".repeat(40));
    let str = 'Una dirección de correo electrónico es la dirección que utiliza para recibir y enviar correos electrónicos. Se muestra a los destinatarios de sus correos electrónicos para que sepan quién le envió un correo electrónico. Cada dirección de correo electrónico sólo se puede asignar una vez en todo el mundo y, por lo tanto, está disponible exclusivamente para usted. No puede cambiar las direcciones de correo electrónico, pero puede eliminarlas en cualquier momento. Una dirección de correo electrónico consiste en el signo @ (arroba), el nombre de usuario delante y el dominio detrás, por ejemplo, nombre-de-usuario@ionos.es: La parte del dominio depende del dominio bajo el cual se crea la dirección de correo electrónico: en nuestro ejemplo es ionos.es. Esta información varía de proveedor a proveedor, por lo que una parte del dominio también puede ser gmail.com o gmx.es si utiliza una dirección de correo electrónico de estos proveedores. Si ha registrado su propio dominio, por ejemplo, www.el-nombre-de-sus-sueños.es, las direcciones de correo electrónico que configura para el dominio lo tienen como parte del dominio (nombre-de-usuario@el-nombre-de-sus-sueños.es o nombre-de-usuario@el-nombre-de-sus-sueños.ES). El nombre de usuario es la parte de una dirección de correo electrónico que puede seleccionar libremente en la medida de lo posible. Puede, por ejemplo, utilizar su propio nombre o el nombre o departamento de una empresa. Si utiliza una dirección de correo electrónico con un proveedor de correo como gmail.com o gmx.es, es posible que la combinación con la parte del dominio deseada ya esté registrada. En este caso, deberá considerar alternativas para el nombre de usuario de su dirección de correo electrónico. Si utiliza su propio dominio, estas restricciones no se aplican porque sólo usted puede crear direcciones de correo electrónico que coincidan con su propio dominio. En resumen, nombre-de-usuario@ionos.es es un email';
    let expresion = /([a-z\-]+)@([a-zñ\-])+\.([es]{2})/gi;
    let nuevostr = new Set(str.match(expresion));
    console.log(nuevostr);

}

function clearConsole() {
    console.clear();
}
