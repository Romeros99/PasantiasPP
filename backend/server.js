const express       = require('express'),
      cors          = require('cors'),
      path          = require('path'),
      db_operation  = require('./db/db_files/db_operation.js'),
      clases        = require('./db/db_files/db_clases.js');

const API_PORT = process.env.PORT || 5000;
const app = express();
let client;
let session;
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

app.get('/api/bd/pendientes', async(req, res) => {
  const result = await db_operation.getAlumnosPendientes();
  res.send(result.recordset);
});


app.post('/api/bd/eliminar', async(req, res) => {
  const result = await db_operation.crearAlumno(req.body);
})

app.post('/api/bd/crear', async(req, res) => {
  const result = await db_operation.crearAlumno(req.body);
})

app.get('/api/pdf/:filename', (req, res) => {
    const folderPath = path.join(__dirname, 'pdfs');
    const filePath = path.join(folderPath, req.params.filename);
    res.sendFile(filePath);
  });  

//let NicolasGomez = new Alumno("19.436.418-9", "Nicolas Adolfo", "Gomez Marchesse", "nicogomez@alumnos.uai.cl", "nicogomezmarchesse@gmail.com");
//db_operation.crearAlumno(NicolasGomez);

//db_operation.getAlumnos('20.358.429-6')

app.listen(API_PORT, () => console.log(`Listening on Port ${API_PORT}`));