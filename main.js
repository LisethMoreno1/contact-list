let contactos = {
  contacto: "Liseth Moreno",
  contacto1: "Patricia Marrugo",
  contacto2: "Alison Alison",
};

function Agregarcontacto() {
  contactos["contacto3"] = "luis f";
  console.log(contactos);
}
Agregarcontacto();

function eliminarContacto() {
  delete contactos["contacto"];
}
eliminarContacto();

function imprimir(){
  contactos["contacto3"];
console.log(contactos.toString());
}
imprimir();

