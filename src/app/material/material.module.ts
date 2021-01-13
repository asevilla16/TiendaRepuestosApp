import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    MatIconModule,
    MatDialogModule,
    MatExpansionModule,
    MatDialogModule
  ],
  exports: [
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    MatIconModule,
    MatDialogModule,
    MatExpansionModule,
    MatDialogModule
  ]
})
export class MaterialModule { }