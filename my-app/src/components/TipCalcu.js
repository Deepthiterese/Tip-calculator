import React,{useState} from 'react'
import background from '../components/images/chef.webp' 

export const TipCalcu = () => {
 const[billAmount, setBillAmount] = useState('');
 const[tipPercentage, setTipPercentage] = useState(15);
 const [totalAmount, setTotalAmount] = useState(0);
 
 
 const calculateTip = () => {
    const bill = parseFloat(billAmount);
    const tip = (bill * tipPercentage) / 100;
    const total = bill + tip;
    setTotalAmount(total)
 }
 
    return (
    <div style={{ backgroundImage: `url(${background})`,height: "600px",
    
   
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat", }}>
    <h1 style={{paddingLeft:'450px',paddingBottom:'100px', fontSize: "70px",}}>Tip Calculator</h1>
    <div style={{paddingTop:'100px',fontSize: "40px"}}>
      <label style={{paddingLeft:'500px',fontSize: "40px",paddingTop:'100px',paddingBottom:'200px'}}>
        Bill Amount:
        <input
          type="number"
          value={billAmount}
          onChange={(e) => setBillAmount(e.target.value)}
          style={{paddingLeft:'1px',paddingRight:'1px'}}
        />
      </label>
    </div>
    <div>
        <label style={{paddingLeft:'500px',fontSize: "40px"}}>
          Tip Percentage:
          <select
            value={tipPercentage}
            onChange={(e) => setTipPercentage(parseInt(e.target.value, 10))}
          >
            <option value={10}>10%</option>
            <option value={15}>15%</option>
            <option value={20}>20%</option>
            <option value={25}>25%</option>
          </select>
        </label>
      </div>
      <div style={{paddingLeft:'500px',fontSize: "40px"}}>
        <button onClick={calculateTip} >Calculate Amount Payable</button>
      </div>
      <div>
      
      <p style={{paddingLeft:'500px',fontSize: "40px"}}>Total Amount: {totalAmount}</p>
    </div>
    
      </div>
  )
}
