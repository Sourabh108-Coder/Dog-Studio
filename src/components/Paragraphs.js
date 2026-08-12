import React from 'react'

const Paragraphs = () => {
  return (
    <div className='para-final'>
      <div className='paragraphs'>
          <div className="third-line"></div>
          <div className='info-bottom'>
              <div className = "info-bottom-left"></div>
              <div className = "info-bottom-right">
                  <div className='first-para'>
                      <p className='info-bottom-right-para'>Dogstudio is a design & <br/> technology firm working globally<br/> from our offices based in<br/> Belgium and Chicago.<br/>
                      Our strong focus on producing<br/> high quality & emotional<br/> brandings, digital products and<br/> experiences became a signature.</p>
                      <div className='values-box'>
                          <p className='values-para'>Discover our values</p>
                          <div className='fourth-line'></div>
                      </div>
                  </div>
           
                  <p className='info-bottom-right-para right-para-two'>We’re passionate about moving<br/> people and solving problems for<br/> the likes of Microsoft, The<br/> Museum of Science And Industry
                  <br/> Of Chicago, The Kennedy Center<br/> of Washington, Dragone, Quanta<br/> Magazine, and many more.</p>
        
              </div>
          </div>
        
      </div>
       <footer className='footer'>
            <div className='foot-left'>
                <h2>Chicago</h2>
                <h2>Amsterdam</h2>
                <h2>Paris</h2>
            </div>
            <div className='foot-right'>
               <a href='https://github.com/Sourabh108-Coder'><i className="ri-github-fill" ></i></a>
               <a href='https://www.linkedin.com/in/sourabh-kumar-407079267'><i className="ri-linkedin-box-fill"></i></a>
            </div>
        </footer> 

  </div>
  )
}

export default Paragraphs
