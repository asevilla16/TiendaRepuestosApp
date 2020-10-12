import { Categoria } from './categoria';

export class Repuesto{
    id?: Number;
    Codigo: String;
    Nombre: String;
    PrecioCompra: Number;
    PrecioVenta: Number;
    idCategoria: Number;
    Categoria?: Categoria;
}