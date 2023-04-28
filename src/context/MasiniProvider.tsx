import { createContext, useState } from "react";
import Masina from "../models/Masina";
import ServiceCar from "../services/Api";
type Props = {
    children?: React.ReactNode;
}



export const  ContextMasini = createContext(({ masina: [] as Masina[], setMasini: (masini: Masina[]) => { } }));


const MasinaProvider: React.FC<Props> =  ({ children }) => {

    const [masina, setMasina] = useState([] as Masina[]);
    let serviceCar= new ServiceCar();
       
           if(masina.length===0){ 
                  serviceCar.getAllCars().then(data=>{console.log(data);setMasina(data)})}else {console.log("test")
          };
        
    //@ts-ignore
    return  <ContextMasini.Provider  value={{masina,setMasina}}> {children}  </ContextMasini.Provider>
};

export default MasinaProvider
