


import  React from'react';
import PDF from './pdf';
import TextField from "@material-ui/core/TextField";

    



function data() {
  
    
    
    const calcmultiply = (newValues) => {
    const first = document.querySelector('#ratePerGram').value;
    const second = document.querySelector('#weight').value;

    alert(first);
    
     // const { first,second} = newValues;
    const newMultiply = parseInt(first)*parseInt(second);
    document.querySelector('.total').value=parseInt(newMultiply);
    //setMultiply(newMultiply)
    }
    
return(

   <div className="form">
    
      <form>
      <fieldset>
        <h3> Billing Details:</h3>
        <div className="formInputs">
           <TextField id="standard-basic" label="Name" variant="standard" />
          </div>
          <div className="formInputs">
          <TextField id="standard-basic" label="Phone No." variant="standard" />
         </div>
         <div className="formInputs">
         <TextField id="standard-basic" label="Email Id" variant="standard" />
         </div>
         <div className="formInputs">             
         <TextField id="standard-basic" label="Id Proof No" variant="standard" />
         </div>
         <div className="formInputs">
         <TextField id="standard-basic" label="Address" variant="standard" />
         </div>
         <div className="formInputs">
         <TextField id="standard-basic" label="State" variant="standard" />
         </div>
         <div className="formInputs">
         
         <TextField id="standard-basic" label="State" variant="standard" />
          </div>
          <div className="formInputs">
         
          <TextField id="standard-basic" label="Date" variant="standard" />
        
          </div>

          <div className="formInputs">
         
         
          <TextField id="standard-basic" label="Days" variant="standard" />
          
          </div>

          
          <div className="formInputs">
          <TextField id="standard-basic ratePerGram" label="Rate Per Gram" variant="standard"  onChange={(e)=> calcmultiply(e.target.value)} placeholder="Rate per gram" className='ratePerGram'/>
        
         </div>
         
         <div className="formInputs">
         <TextField id="standard-basic" label="Weight" variant="standard"  onChange={(e)=> calcmultiply(e.target.value)} placeholder="weight" className='weight'/>
           {/* <input type ="text" onChange={(e)=> setOperation(e.target.value)} placeholder="operation"/> */}
        
        

         
         </div>

        




         
         
         <div className="formInputs">
        
         <TextField id="standard-basic" label="Amount" variant="standard" className="total"/>
         
         </div>


         <div className="form-group">
     <button type="button" onClick={this.submitdata} className="btn btn-primary btn-lg">Submit</button>
                                                </div>

       </fieldset>

       

     
      
       
      </form>
    </div>(
      <PDF title={this.state.title} content={this.state.content} image={this.state.image} />
    )
  
  )
  }
export default data;
