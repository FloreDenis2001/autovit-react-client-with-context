import Masina from "../models/Masina";
import { useNavigate } from "react-router-dom";


interface CarProps{
  
    car:Masina;
}




export const Car: React.FC<CarProps>= ({car}) => {

    let navigate=useNavigate();
   
    let getId=():void=>{
       

        navigate("/update/"+car.id);
     
    }

    return (
        <tr>
            <td>{car.marca}</td>
            <td onClick={getId}>{car.model}</td>
            <td>{car.culoare}</td>
            <td>{car.an}</td>
        </tr>
    )
}