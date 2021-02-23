import { Repuesto } from "./repuesto";

export class Inventario{
    id: number;
    cantidad: number;
    idRepuesto: number;
    Repuesto: Repuesto
}


export class Existencia{
    idRepuesto: number;
    cantidad: number;
    repuesto: Repuesto
}