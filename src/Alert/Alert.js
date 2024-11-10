import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";


export const Alert = (props) => {
  // let colors=['green','#EF4444'];
  const mySwal = withReactContent(Swal);
  
  

  mySwal.fire({
    title: props.message,
    icon: props.icon,
    confirmButtonColor: props.color,
    showCloseButton:true,
    
  });
};