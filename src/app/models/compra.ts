import { DetalleCompra } from "./detalle-compra";
import { Proveedor } from "./proveedor";

export class Compra {
    id: number;
    fecha: Date;
    grandTotal: number;
    idProveedor: number;
    proveedor: Proveedor;
    detallesCompra: DetalleCompra[];
}
