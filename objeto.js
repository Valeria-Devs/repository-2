class animal {
    constructor(especie, edad, color) {
            //This --> este atributo;
            this.especie = especie;
            this.edad = edad;
            this.color = color;
            this.info = `Soy ${this.especie}, tengo ${this.edad} años y soy de color ${this.color}`;
        }
        //metodo va dentro de la clase
    verInformacion() {
        document.write(this.info + "<br>");
    }
}
let perro = new animal('perro', 5, 'cafe');
let gato = new animal('gato', 3, 'negro');
perro.verInformacion();
gato.verInformacion();