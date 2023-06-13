//importacion de librerias
import React from 'react';
import './TablePaso3.css';

//crea un tabla con las filas de la base de dato y largo dinamico segun los registros de alumnos
const TablePaso3 = ({theadData, tbodyData, setDatos, setShowForm}) => {
  //Al apretar la fila de la pasantía, guarda los datos en la variable datos de HomePageAlumno
  const funcClick = (row) => {
    setDatos({'RUN_Alumno': row.RUN_Alumno, 
                'RUN_Empresas': row.RUN_Empresas, 
                'Nombre': row.Nombre, 
                'Calle_Direccion': row.Calle_Direccion,
                'Numero_Direccion': row.Numero_Direccion,
                'Comuna_Direccion': row.Comuna_Direccion,
                'Ciudad_Direccion': row.Ciudad_Direccion,
                'Rubro': row.Rubro,
                'Nombres': row.Nombres,
                'Apellidos': row.Apellidos,
                'Mail': row.Mail
              });
    //Activa el despliegue del formulario con la información de la pasantía
    setShowForm(true);
  }

  //Despliega la tabla
  return (
    <div className="table-container">
      <table className="table">
        <thead>
          <tr>
            {theadData.map(heading => {
            return <th key={heading}>{heading}</th>
            })}
          </tr>
        </thead>
        <tbody>
          {tbodyData.map((row, index) => {
            return <tr key={index} onClick={() => funcClick(row)}>
              {theadData.map((key, index) => {
                return <td key={row[key]}>{row[key]}</td>
              })}
            </tr>;
          })}
        </tbody>
      </table>
    </div>
  )
}

export default TablePaso3;