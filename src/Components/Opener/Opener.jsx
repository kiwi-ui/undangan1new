import React from 'react'
// import Img1 from "../../assets/4.jpg"
import {BsHouseDoor} from 'react-icons/bs' 
import Header from '../Header/Header'

const Opener = () => {
  return (
      <section className="opener z-0 text-center mx-auto h-screen bg-hero bg-no-repeat bg-cover bg-center md:bg-contain sm:bg-contain overflow-x-hidden overflow-y-scroll">
          <div className="filteropener bg-emerald-700/30 z-1 h-screen bg-center w-screen fixed">
          </div>
          <div className='containeropener justify-content-center mt-44 mx-auto flex flex-col justify-center items-center gap-y-5 w-screen h-screen fixed '>

              {/* <img className='w-16 md:w-32 lg:w-48 object-center    ' src={Img1} alt="" /> */}
              <div>
                  <h3 className='text-white font-bold md:text-xl text-sm'>Kepada yang terhormat</h3>
                  <h3 className='text-white font-bold md:text-xl text-sm'>Saudara/saudari</h3>
                  <h4 className='judulopener md:text-5xl text-center text-orange-300 font-Merriweather font-bold my-5 text-xl'>Dummy</h4>
                  <h3 className='text-white font-bold m-3 md:text-xl text-sm'>Kami mengundang saudara/saudari pada</h3>
                  <h3 className='text-white font-bold m-3 md:text-xl text-sm'>acara pernikahan kami</h3>
              </div>
              <div>
                  <button className='btnopener bg-orange-300/70 p-3 rounded-2xl text-gray-100 font-medium w-56 inline-flex justify-center gap-4 '>
                    <BsHouseDoor className='text-xl'/> 
                    <a className='text-md' href={Header}>
                    Buka undangan
                    </a>
                  </button>
              </div>
          </div>
      </section>
  )
}

export default Opener

