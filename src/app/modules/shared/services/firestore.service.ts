import { Injectable } from '@angular/core';

import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Usuario } from 'src/app/models/usuario';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
  //definimos una coleccion privada que referencia a la interfaz usuario
  //Va a ser una coleccion Firestor
  //Respetara la estructura de datos de la interfaz usuario
  private usuariosCollection: AngularFirestoreCollection<Usuario>

  constructor(private database: AngularFirestore) { 
    this.usuariosCollection = this.database.collection<Usuario>('usuarios');
  }
//promesa pura
  agregarUsuario(usuario: Usuario, id: string){
    /*Generamos nueva promesa y utiliza los metodos:
      RESOLVE: promesa resuelta -> funciona correctamente
      REJECT: promesa rechazada -> ocurrió una falla

    */
    return new Promise(async (resolve,reject) =>{
      try{
        usuario.uid = id;

        //Const resultado = coleccion de usuarios, envia como documento el UID
        //Y setea la informacion que ingresemos en el REGISTRO

        const resultado = await this.usuariosCollection.doc(id).set(usuario);
        resolve(resultado);
        // Bloque CATCH encapsula una falla y la vuelve un error

      }catch(error){
        reject(error);
      }
    })
  }
}

