
import React from 'react';
import { Link } from 'react-router-dom';



export const Home = () => {
  return (
    <>
   
    <div className='flex flex-col justify-center items-center h-screen bg-zinc-900 container mx-auto'>
      <img className='w-1/2 max-w-lg h-auto md:w-1/2 sm:w-2/3' src={require(`../images/rickandmorty.png`)} alt="" />
        <button className='bg-green-400 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full'><Link to="./browser" >Browse</Link></button> 
    </div>
    </>
  );
};