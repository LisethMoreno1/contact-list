

let contactos = ["Liseth Moreno", "Juan Perez", "Maria Julio"];

console.log(contactos);


function agregarContacto(nombre){
  contactos.unshift(nombre);
}

agregarContacto(nombre= "Patricia Marrugo");

function eliminarContacto(){
  contactosdelete=contactos.pop()
  console.log("Contacto Eliminado: " + contactosdelete);
}

eliminarContacto();

function listasContactos(){
  console.log("Listas Contactos son:" + contactos);
}

listasContactos();