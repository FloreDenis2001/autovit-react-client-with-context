import { createContext, useState } from "react";
import Masina from "../models/Masina";
import ServiceCar from "../services/Api";
import MasinaContextType from "../models/MasinaContextType";
type Props = {
    children?: React.ReactNode;
}



export const ContextMasini = createContext<MasinaContextType | null>(null);


const MasinaProvider: React.FC<Props> = ({ children }) => {

    const [masini, setMasina] = useState<Masina[]>([]);
    
   
     function setMasini(masini:Masina[]):void{

        setMasina(masini);
    }

    return <ContextMasini.Provider value={{ masini, setMasini }}> {children}  </ContextMasini.Provider>
};

export default MasinaProvider
