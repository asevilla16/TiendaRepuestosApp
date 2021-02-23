import { Repuesto } from "./repuesto";
import { Venta } from "./venta";

export class DetalleVenta{
    id?: number;
    cantidad: number;
    total: number;
    idVenta: number;
    Venta?: Venta;
    idRepuesto: number;
    repuesto?: Repuesto;
}