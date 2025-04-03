import React from 'react'

const Awards = () => {
  return (
    <div className="container mt-5">
        <div className="row">
            <div className="col-6 p-5">
                <img src="media/images/largestBroker.svg" />

            </div>
            <div className="col-6 mt-5">
                <h1>Largest stock broker in India</h1>
                <p className="mb-5"> 2+million zerodha client contribute to over 15% of all retail orders in India daily by ading and investing in:</p>
                <div className="row"> 
                    <div className="col-6 p-5">
                    <ul>
                    <li>
                        <p>Futures and options</p>
                    </li>
                    <li>
                        <p>Commodity and Derivatives</p>
                    </li>
                    <li>
                        <p>Currency derivatives</p>
                    </li>
                </ul>
                    </div>
                    <div className="col-6">
                    <ul>
                    <li>
                        <p>Stocks and IPO</p>
                    </li>
                    <li>
                        <p>Direct Mutual Funds</p>
                    </li>
                    <li>
                        <p>Bonds and Govt. Securities</p>
                    </li>
                </ul>

                    </div>

                </div>
                

            <img src="media/images/pressLogos.png" className="mt-5" style={{width:'90%'}} />    
            </div>
        </div>
        
      
    </div>
  )
}

export default Awards
