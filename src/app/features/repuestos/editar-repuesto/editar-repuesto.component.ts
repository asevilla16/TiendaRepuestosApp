import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Categoria } from 'src/app/models/categoria';
import { Repuesto } from 'src/app/models/repuesto';
import { CategoriasService } from 'src/app/services/categorias.service';
import { RepuestosService } from 'src/app/services/repuestos.service';

@Component({
  selector: 'app-editar-repuesto',
  templateUrl: './editar-repuesto.component.html',
  styleUrls: ['./editar-repuesto.component.css']
})
export class EditarRepuestoComponent implements OnInit {

  categorias: Categoria[];
  repuesto: Repuesto;

  constructor(
    private categoriasService: CategoriasService,
    private repuestosService: RepuestosService,
    private router: Router,
    private route: ActivatedRoute
  ) { 
    this.repuesto = new Repuesto();
  }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');

    this.categoriasService.getCategories().subscribe(res => {
      this.categorias = res;
    });

    this.repuestosService.getRepuesto(id).subscribe(res => {
      this.repuesto = res;
      console.log(this.repuesto)
    });
  }

  editarRepuesto(){
    this.repuestosService.putRepuesto(this.repuesto).subscribe(() => {
      this.router.navigate(['/repuestos']);
    })
  }

  cancelar(){
    this.router.navigate(['/repuestos']);
  }

}
