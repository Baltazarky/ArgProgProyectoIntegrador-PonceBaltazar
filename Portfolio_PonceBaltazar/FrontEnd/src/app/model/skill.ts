export class Skill {
    id: number;
    nombre: string;
    porcentaje: string;
    isSoft?: boolean; // Agregar esta propiedad opcionalmente

    constructor(nombre: string, porcentaje: string){
        this.nombre = nombre;
        this.porcentaje = porcentaje;
    }
}
