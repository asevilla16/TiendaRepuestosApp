import { Repuesto } from "./repuesto";
import { Compra } from "./compra";

export class DetalleCompra{
    id: number;
    cantidad: number;
    idCompra: number;
    compra: Compra;
    idRepuesto: number;
    repuesto: Repuesto;
}