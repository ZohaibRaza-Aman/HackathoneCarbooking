import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 200 ,},
  { field: 'UserName', headerName: 'User Name', width: 200 },
  {
    field: 'contactno',
    headerName: 'Contact No',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 200,
    valueGetter: (params) =>
      `${params.row.UserName || ''} ${params.row.contact || ''}`,
  },
  {
    field: 'useremail',
    headerName: 'User Email',
    type: 'text',
    width: 200,
  },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 150,
  },
  
];

const rows = [
  { id: 2, UserName: 'asim', age: 42, contact: '+92312320902',useremail:'asim@gmail.com'},
  { id: 3, UserName: 'moin', age: 45, contact: '+92312320903',useremail:'moin@gmail.com'},
  { id: 1, UserName: 'kami', age: 35, contact: '+92312320901',useremail:'kami@gmail.com'},
  { id: 4, UserName: 'talha', age: 16, contact: '+92312320904',useremail:'talha@gmail.com'},
  { id: 5, UserName: 'khan', age: 40, contact: '+92312320905',useremail:'khan@gmail.com'},
  { id: 6, UserName: 'saad', age: 150, contact: '+92312320906',useremail:'saad@gmail.com'},
  { id: 7, UserName: 'ramzan', age: 44, contact: '+92312320907',useremail:'ramzan@gmail.com'},
  { id: 8, UserName: 'ruby', age: 36, contact: '+92312320908',useremail:'ruby@gmail.com'},
  { id: 9, UserName: 'basit', age: 65, contact: '+92312320909',useremail:'basit@gmail.com'},
];

export default function SMTable() {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
     
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}
