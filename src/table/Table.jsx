// import { TableContainer } from "@mui/material";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
  
  const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
  ];
  


export default function ProductTable() {
    return (
      <div className='w-full h-[78vh]  overflow-y-scroll'>
      <TableContainer
        style={{
          boxShadow: "0px 13px 20px 0px #80808029",
        }}
      >
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>
                <span className="text-semibold text-base">Product Id</span>
              </TableCell>
              <TableCell align="">
                <span className="text-semibold text-base">Image</span>
              </TableCell>
              <TableCell align="right">
                <span className="text-semibold text-base">Name</span>
              </TableCell>
              <TableCell align="right">
                <span className="text-semibold text-base">Price{"(Rs)"}</span>
              </TableCell>
              <TableCell align="right">
                <span className="text-semibold text-base">
                  Quantity{"(kgs)"}
                </span>
              </TableCell>
              <TableCell align="center">
                <span className="text-semibold text-base">Actions</span>
              </TableCell>
              <TableCell align="right">
                <span className="text-semibold text-base">Total</span>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  #12345
                </TableCell>
                <TableCell>
                  <img src='data:image/jpeg;base64,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' alt='' className='w-14'/>
                </TableCell>
                <TableCell align="right">Cauli</TableCell>
                <TableCell align="right">24</TableCell>
                <TableCell align="right">22</TableCell>
                <TableCell align="right">
                  <div className='flex gap-2  justify-end'>
                    <button className='px-2 py-2 bg-blue-400 text-white text-xs'>Update</button>
                    <button className='px-2 py-1 bg-red-400 text-white text-xs'>Delete</button>

                  </div>
                </TableCell>
                <TableCell align="right"><span className='font-bold'>22</span></TableCell>

              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      </div>
    );
}
