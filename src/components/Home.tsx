
import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Masina from '../models/Masina';
import ServiceCar from '../services/Api';
import { Car } from './Car';
import { ContextMasini } from '../context/MasiniProvider';
import MasinaContextType from '../models/MasinaContextType';


const Home: React.FC = () => {
    let serviceCar = new ServiceCar();

    let {masini,setMasini}=useContext(ContextMasini) as MasinaContextType;

    let navigate=useNavigate();
    let load = async () => {
        if (masini.length === 0) {
            let masini= await serviceCar.getAllCars();
            setMasini(masini);
        } else {
            console.log("test")
        };
    }
    
    
    useEffect(()=>{

        load();

    },[])

   

    let add=()=>{


         navigate("/add");
    }


    return (
        <>
            <h1>Cars</h1>
            <p><a>Cars</a></p>
            <table>
                <thead>
                    <tr>
                        <th>Marca</th>
                        <th>Model</th>
                        <th>Culoare</th>
                        <th>Anul</th>
                    </tr>
                </thead>
                <tbody>
                   { masini.length && 
                       (masini as Masina[]).map(car=>{
                            return <Car car={car} key={car.id}/>
                        })
                        
                    }
                </tbody>
            </table>

            <button type='button' onClick={add}>Add Car</button>
        </>
    )
}


export default Home;