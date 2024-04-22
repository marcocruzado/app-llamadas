import {
  SimpleUser,
  SimpleUserOptions,
  SimpleUserDelegate,
} from "../node_modules/sip.js/lib/platform/web";



const server = "ws://127.0.0.1:8443"; //ip del servidor en express y puerto 5066 en el servidor de sip

const aor = "sip:5003@192.168.1.33"; //sip del usuario
//comentario
const options: SimpleUserOptions = {
  aor
};

let simpleUser = new SimpleUser(server, options);

console.log("====================================");
console.log("SimpleUser", simpleUser);
console.log("====================================");

// obtener el click del boton de llamada
let callButton1: any = document.getElementById("callButton");

callButton1.addEventListener("click", async () => {
  console.log("presionaste para llamar");
  //conexion
  await simpleUser.connect();

  //obtener el click del boton de registro
  await simpleUser.register()

  await simpleUser.call("sip:5002@192.168.1.33");
});

let endButton: any = document.getElementById("endCallButton");

endButton.addEventListener("click", async () => {
  console.log("presionaste para colgar");
  await simpleUser.hangup();
});
