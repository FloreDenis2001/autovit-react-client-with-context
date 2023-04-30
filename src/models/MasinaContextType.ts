import React from 'react'
import Masina from './Masina';

type MasinaContextType={
    masini:Masina[];
    setMasini:(masini:Masina[])=>void;
}
export default MasinaContextType;