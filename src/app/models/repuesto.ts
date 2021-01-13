import { Categoria } from './categoria';

export class Repuesto{
    id?: number;
    codigo: String;
    nombre: String;
    precioCompra: number;
    precioVenta: number;
    idCategoria: number;
    Categoria?: Categoria;
}