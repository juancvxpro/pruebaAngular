import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TiendaService {

  constructor(private afs : AngularFirestore) { }

  getProductos(): Observable<any> {
  
    return this.afs.collection('productos', ref => ref.orderBy('nombre','asc') ).snapshotChanges();

  }

  getProductosNombre(nombre:string):Observable<any>{

    return this.afs.collection('productos').doc(nombre).snapshotChanges();
  }
  
  getProductosCategoria(categoria:string):Observable<any>{

    return this.afs.collection('productos').doc(categoria).snapshotChanges();
  }
 
  getProductosPrecio(precio:number):Observable<any>{

    return this.afs.collection('productos').doc(precio.toString()).snapshotChanges();
  }

}
