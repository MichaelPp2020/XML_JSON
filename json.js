const XD =[
    {"Id":0,"Apellido":"Apellido: PALACIOS PINCAY ", "Nombre":"Nombre: MICHAEL JAVIER",
     "Semestre": "Semestre: Quinto", 
    "Paralelo":" Paralelo: B", 
    "Cedula":"Cedula: 1316893161","Direccion":"Direccion: Divino Niño",
     "Telefono": "Telefono: 0991050574",
    "Correo":"Correo: e1316893161@live.uleam.edu.ec"},

    {"Id":1,"Apellido":"Apellido: MOREIRA CEDEÑO",
     "Nombre":"Nombre: JOSUHE EMILIANO", 
     "Semestre": "Semestre: Quinto", 
    "Paralelo":" Paralelo: B", 
    "Cedula":"Cedula: 1319862896", 
    "Direccion":"Direccion: Urbirrios",
     "Telefono": "Telefono: 0987596214",
    "Correo":"e1316863859@live.uleam.edu.ec"},

    {"Id":2,"Apellido":"Apellido: LOPEZ BAILON", 
    "Nombre":"Nombre: LUIS DAVID",
     "Semestre": "Semestre: Quinto", 
    "Paralelo":" Paralelo: B", 
    "Cedula":"Cedula: 1317144925",
    "Direccion":"Direccion: Los Esteros",
     "Telefono": "Telefono: 0963698741",
    "Correo":"Correo: e1317740528@live.uleam.edu.ec"},

    {"Id":3,"Apellido":"Apellido: PARRALES SOLORZANO",
     "Nombre":"Nombre: CRISTHINA MICHELL",
      "Semestre": "Semestre: Segundo", 
    "Paralelo":" Paralelo: C",
    "Cedula":"Cedula: 1317578686",
    "Direccion":"Direccion: Los Esteros",
     "Telefono": "Telefono: 0998305687",
    "Correo":"Correo: e1317740528@live.uleam.edu.ec"},

    {"Id":4,"Apellido":"Apellido:ESPINOZA SOLEDISPA",
     "Nombre":"Nombre: EDWARD ANGELO",
      "Semestre": "Semestre: Cuarto", 
    "Paralelo":" Paralelo: B",
     "Cedula":"Cedula: 1314584986",
     "Direccion":"Direccion: Los Esteros",
      "Telefono": "Telefono: 0968587848",
    "Correo":"e1314683010@live.uleam.edu.ec"},

    {"Id":5,"Apellido":"Apellido: PACHECO MACIAS",
     "Nombre":"Nombre: ANGEL GABRIEL",
      "Semestre": "Semestre: Primero", 
    "Paralelo":" Paralelo: A",
     "Cedula":"Cedula: 1317144146",
     "Direccion":"Direccion: Los Esteros",
      "Telefono": "Telefono: 0968581680",
    "Correo":"Correo: e1316661030@live.uleam.edu.ec"},

    {"Id":6,"Apellido":"Apellido: MURILLO LAJE",
     "Nombre":"Nombre:  NAUN POLICARPO", 
     "Semestre": "Semestre: Quinto", 
    "Paralelo":" Paralelo: A",
     "Cedula":"Cedula: 1317121986",
     "Direccion":"Direccion: Los Esteros",
      "Telefono": "Telefono: 099423545",
    "Correo":"Correo: e1315597433@live.uleam.edu.ec"},
    
    {"Id":7,"Apellido":"Apellido: OVIEDO INSUASTI",
     "Nombre":"Nombre: DAYANA SAMANTHA",
      "Semestre": "Semestre: Quinto", 
    "Paralelo":" Paralelo: C", 
    "Cedula":"Cedula: 1317143586",
    "Direccion":"Direccion: Los Esteros", 
    "Telefono": "Telefono: 091245887",
    "Correo":"Correo: e1722362108@live.uleam.edu.ec"},

    {"Id":8,"Apellido":"Apellido: CIFUENTES CASTRO",
     "Nombre":"Nombre: IRVIN GUSTAVO", 
     "Semestre": "Semestre: Quinto", 
    "Paralelo":" Paralelo: C",
     "Cedula":"Cedula: 13171447894",
     "Direccion":"Direccion: Los Esteros",
      "Telefono": "Telefono: 0987569423",
    "Correo":"Correo: e1313465153@live.uleam.edu.ec"},

    {"Id":9,"Apellido":"Apellido: CRESPO PACHAY",
     "Nombre":"Nombre: JEAN CARLOS", 
     "Semestre": "Semestre: Sexto", 
    "Paralelo":" Paralelo: B", 
    "Cedula":"Cedula: 1317144236",
    "Direccion":"Direccion: Los Esteros",
     "Telefono": "Telefono: 0987469621",
    "Correo":"e1317047445@live.uleam.edu.ec"},
    
    
]

const estudiantes = document.querySelectorAll('.nom_estudiante');

estudiantes.forEach((estudiante)=>{
    estudiante.addEventListener('click', (nombre)=>{
        let id=nombre.target.getAttribute('estu-id');
        XD.forEach((estudiante)=>{
            if(id == estudiante.Id){
                const verDetalle=nombre.target.parentElement.lastElementChild;
                verDetalle.innerHTML=`
                                    <div class="lista"
                                        <div class="nom">
                                        <h2>Datos del estudiante:</h2>
                                        <h2 class="list-inline-item footer-menu"><a class="nav-link" style="color:#000000" href="index.html"> REGRESAR</a></h2>
                                        <p>${estudiante.Nombre}</p>
                                        <p>${estudiante.Apellido}</p>
                                        <p>${estudiante.Correo}</p>
                                        <p>${estudiante.Telefono}</p>
                                        <p>${estudiante.Cedula}</p>
                                        <p>${estudiante.Direccion}</p>
                                        <p>${estudiante.Semestre}</p>
                                        <p>${estudiante.Paralelo}</p>
                                        </div> 
                                    </div>`

            }
        })
    })
})

