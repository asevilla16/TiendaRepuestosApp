import { Categoria } from './categoria';

export class Repuesto{
    id?: Number;
    codigo: String;
    nombre: String;
    precioCompra: Number;
    precioVenta: Number;
    idCategoria: Number;
    Categoria?: Categoria;
}