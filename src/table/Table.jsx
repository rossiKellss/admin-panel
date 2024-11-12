// import { TableContainer } from "@mui/material";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';



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
  


export default function ProductTable({props,onDelete,onUpdate}) {
  
  
  
  
 
  
    return (
      <div className='w-full h-[65vh]  overflow-y-scroll'>
      <TableContainer
        style={{
          boxShadow: "0px 13px 20px 0px #80808029",
        }}
      >
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align='center'>
                <span className="text-semibold text-sm">Product Id</span>
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
            {props.map((data,index) => (
              <TableRow
                key={index}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {index+1}
                </TableCell>
                <TableCell>
                <img
                        src={`http://localhost:4000/api/admin/image/download/${data.fileName}`}
                        alt="img"
                        srcset=""
                        className="w-[5rem] rounded-lg"
                      />
                </TableCell>
                <TableCell align="right">{data.ProductName}</TableCell>
                <TableCell align="right">{data.Price}</TableCell>
                <TableCell align="right">{data.Quantity}</TableCell>
                <TableCell align="right">
                  <div className='flex gap-2  justify-end'>
                    <button className='px-2 py-2 bg-blue-400 text-white text-xs' onClick={()=>{onUpdate(data)}}>Update</button>
                    <button className='px-2 py-1 bg-red-400 text-white text-xs' onClick={()=>{onDelete(data._id)}}>Delete</button>

                  </div>
                </TableCell>
                <TableCell align="right"><span className='font-bold'>{data.Price*data.Quantity  }</span></TableCell>

              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      </div>
    );
}
