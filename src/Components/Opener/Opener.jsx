import React from 'react'
// import Img1 from "../../assets/4.jpg"
 
const Opener = () => {
  return (
      <section className="text-center mx-auto h-screen bg-hero bg-no-repeat bg-cover bg-center md:bg-contain sm:bg-contain overflow-x-hidden">
          <div className='container mx-auto'>

              {/* <img className='w-16 md:w-32 lg:w-48 object-center    ' src={Img1} alt="" /> */}
              <div>
                  <h4 className='judul text-5xl text-center'>Kepada yang terhormat</h4>
                  <h3>Saudara/saudari</h3>
                  <h2>Yusni Anggara</h2>
              </div>
              <div>
                  <button className='btn bg-amber-50 text-center '>
                      Buka undangan
                  </button>
              </div>
          </div>
      </section>
  )
}

export default Opener

