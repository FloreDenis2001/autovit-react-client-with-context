
import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Masina from '../models/Masina';
import ServiceCar from '../services/Api';
import { Car } from './Car';
import { ContextMasini } from '../context/MasiniProvider';


const Home: React.FC = () => {

    //@ts-ignore
    let [masina,setMasina]=useContext(ContextMasini);

    let navigate=useNavigate();

  

   

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
                   {/* { masini.length && 
                       (masini as Masina[]).map(car=>{
                            return <Car car={car} key={car.id}/>
                        })
                        
                    } */}
                </tbody>
            </table>

            <button type='button' onClick={add}>Add Car</button>
        </>
    )
}


export default Home;