import { Cliente } from "./cliente";
import { DetalleVenta } from "./detalle-venta";

export class Venta {
    id?: number;
    fecha: Date;
    grandTotal: number;
    estado: string;
    idCliente: number;
    cliente?: Cliente;
    detallesVenta: DetalleVenta[];
}