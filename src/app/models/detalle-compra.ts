import { Repuesto } from "./repuesto";
import { Compra } from "./compra";

export class DetalleCompra{
    id?: number;
    cantidad: number;
    total: number;
    idCompra: number;
    compra?: Compra;
    idRepuesto: number;
    repuesto?: Repuesto;
}