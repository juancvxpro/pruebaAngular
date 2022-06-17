import { Component, OnInit } from '@angular/core';
import { TiendaService } from 'src/app/servicios/tienda.service';

@Component({
  selector: 'listar-productos',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss']
})
export class ListarComponent implements OnInit {
  productos: any[] =[];
  lista:string[]=["nombre","precio","categoria"];
  seleccionados:string="";
  filtro:string="";

  constructor(private tiendaService:TiendaService) { }

  ngOnInit(): void {
    this.getObras();
  }

  getObras(){
    if (this.seleccionados==""){
    this.tiendaService.getProductos().subscribe(data => {
      this.productos=[];
      data.forEach((element:any) => {
          this.productos.push({
         id:element.payload.doc.id,
         ...element.payload.doc.data()
          })
        });
        console.log(this.productos);
      });
    }
  
    if (this.seleccionados=="nombre" && this.filtro!=null){
    
    this.tiendaService.getProductosNombre(this.filtro).subscribe(data => {
      this.productos=[];
      data.forEach((element:any) => {
          this.productos.push({
         id:element.payload.doc.id,
         ...element.payload.doc.data()
          })
        });
        console.log(this.productos);
      });

   }else if (this.seleccionados=="precio" && this.filtro!=null){
    
    this.tiendaService.getProductosPrecio(Number(this.filtro)).subscribe(data => {
      this.productos=[];
      data.forEach((element:any) => {
          this.productos.push({
         id:element.payload.doc.id,
         ...element.payload.doc.data()
          })
        });
        console.log(this.productos);
      });

   }else if (this.seleccionados=="categoria"&& this.filtro!=null){
    
    this.tiendaService.getProductosCategoria(this.filtro).subscribe(data => {
      this.productos=[];
      data.forEach((element:any) => {
          this.productos.push({
         id:element.payload.doc.id,
         ...element.payload.doc.data()
          })
        });
        console.log(this.productos);
      });

   }

  }

}
