import React from 'react'
// import Img1 from "../../assets/4.jpg"
 
const Opener = () => {
  return (
      <section className="opener z-0 text-center mx-auto h-screen bg-hero bg-no-repeat bg-cover bg-center md:bg-contain sm:bg-contain overflow-x-hidden overflow-y-hidden">
          <div className="filteropener bg-black opacity-50 z-1 h-screen bg-center w-screen fixed">
          </div>
          <div className='containeropener mt-72 mx-auto flex flex-col justify-center items-center gap-y-10 w-screen h-screen fixed '>

              {/* <img className='w-16 md:w-32 lg:w-48 object-center    ' src={Img1} alt="" /> */}
              <div>
                  <h3 className='text-white font-bold text-xl'>Kepada yang terhormat</h3>
                  <h3 className='text-white font-bold text-xl'>Saudara/saudari</h3>
                  <h4 className='judulopener text-5xl text-center text-orange-300 font-semibold'>Yusni Anggara</h4>
                  <h3 className='text-white font-bold m-3 text-xl'>Pada acara pernikahan kami</h3>
              </div>
              <div>
                  <button className='btnopener bg-orange-300 text-center p-3 rounded-2xl text-white font-semibold'>
                      Buka undangan
                  </button>
              </div>
          </div>
      </section>
  )
}

export default Opener

