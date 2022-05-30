import  React ,{useState} from 'react';
import TextField from "@material-ui/core/TextField";
import jsPDF from 'jspdf';
import ReactDOMServer from 'react-dom/server';



import './App.css';


function App({a}) {
  

  const calcValue = (a) => {
    
    let total = 0;
    let twoThousand = 0;
    let fiveHundred = 0;
    let twoHundred = 0;


    if(document.querySelector('#x2000') !== null && document.querySelector('#x2000').value !== "")
    {
      twoThousand = document.querySelector('#x2000').value;
      total = parseFloat(twoThousand) * 2000;
    }
    if(document.querySelector('#x500') !== null && document.querySelector('#x500').value !== "")
    {
      fiveHundred = document.querySelector('#x500').value;
      total = total + parseFloat(fiveHundred) * 500;
    }
    if(document.querySelector('#x200') !== null && document.querySelector('#x200').value !== "")
    {
      twoHundred = document.querySelector('#x200').value;
      total = total + parseFloat(twoHundred) * 200;
    }
    //document.querySelector('.grandTotal').value = total;
    
    
    
    return total;
  }
 

  
    



    const styles = {
      fontFamily: "sans-serif",
      textAlign: "center"
    };
    const colstyle = {
      width: "30%"
    };
    const tableStyle = {
      width: "100%"
    };
    const divStyle = {
      lineheight: "10px"
    };
   
    const generatePDF = (event) => {
    

    
    
     const Prints = () => (


      <div>
        
        <table id="tab_customers" class="table table-striped" style={tableStyle}>
          <colgroup>
            <col span="1" style={colstyle} />
            <col span="1" style={colstyle} />
          </colgroup>
          <thead>
            <tr class="warning">
              <th>Cash Received</th>
              <th>Denomination</th>
            
              <th>Amount</th>

            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{event.target.elements.cashreceived.value}</td>
              <td>{event.target.elements.Denomination.value}</td>
             
              <td>{event.target.elements.total.value}</td>
            </tr>
          </tbody>
        </table>
       
      </div>
    );

      
      // const doc = new jsPDF();

      const string = ReactDOMServer.renderToString(<Prints />);
      const pdf = new jsPDF("p", "mm", "a4");

     // renderToString(<Prints />);
     // doc.fromHTML(ReactDOMServer.renderToString(<Prints />));
    //  doc.save("myDocument.pdf");

      pdf.fromHTML(string);
      pdf.save("mydocument.pdf");
    }
    

    return(
      <fieldset>
  
        <div className="form">
        
          <form onSubmit={generatePDF}>


          <div class="table-title">
        <h3 align="center">CASH PAYMENT</h3>
    </div>
    <div align="left">
        <table class="table-fill">
            <thead>
                <tr>
                    <th class="text-left">Denomination</th>
                    <th class="text-left">Count</th>
                    <th class="text-left">Amount</th>
                </tr>
            </thead>
            <tbody class="table-hover">
                <tr>
                    <td class="text-left">2000</td>
                    <td><input type="text" id="x2000" onChange={()=>calcValue('x2000')} /></td>
                    <td class="grand" id="t2000">0</td>
                </tr>
                <tr>
                    <td class="text-left">500</td>
                    <td> <input type="text" className="noteCount" id="x500" onChange={(e)=> calcValue('x500')}/></td>
                    <td class="grand" id="t500">0</td>
                </tr>
                <tr>
                    <td class="text-left">200</td>
                    <td><input type="text" className="noteCount" id="x200" onChange={(e)=> calcValue('x200')}/></td>
                    <td class="grand" id="t200">0</td>
                </tr>
                <tr>
                    <td class="text-left">100</td>
                    <td><input type="text" className="noteCount" id="x100" onChange={(e)=> calcValue('x100')}/></td>
                    <td class="grand" id="t100">0</td>
                </tr>
                <tr>
                    <td class="text-left">50</td>
                    <td><input type="text" className="noteCount" id="x50" onChange={(e)=> calcValue('x50')}/></td>
                    <td class="grand" id="t50">0</td>
                </tr>
                <tr>
                    <td class="text-left">20</td>
                    <td><input type="text" className="noteCount" id="x20" onChange={(e)=> calcValue('x20')}/></td>
                    <td class="grand" id="t20">0</td>
                </tr>
                <tr>
                    <td class="text-left">10</td>
                    <td><input type="text" className="noteCount" id="x10" onChange={(e)=> calcValue('x10')}/></td>
                    <td class="grand" id="t10">0</td>
                </tr>
                <tr>
                    <td class="text-left">5</td>
                    <td><input type="text" className="noteCount" id="x5" onChange={(e)=> calcValue('x5')}/></td>
                    <td class="grand" id="t5">0</td>
                </tr>
                <tr>
                    <td class="text-left">2</td>
                    <td><input type="text" className="noteCount" id="x2" onChange={(e)=> calcValue('x2')}/></td>
                    <td class="grand" id="t2">0</td>
                </tr>
                <tr>
                    <td class="text-left">1</td>
                    <td><input type="text" className="noteCount" id="x1" onChange={(e)=> calcValue('x1')}/></td>
                    <td class="grand" id="t1">0</td>
                </tr>
                <tr>
                    <td class="text-left">Total</td>
                    <td class="text-left" >
                    <TextField id="standard-basic" label="Amount" variant="standard" className="grandTotal"/>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>



    <div class="sign">
        <span align="Left">Signature</span>&nbsp;
        <span class="emptySpan">&nbsp;&nbsp;&nbsp;</span>
        <span align="Right">Incharge Signature</span>
    </div>
            
            
  <div align="center">
    
    <button variant="contained" align="center" >Submit</button>
    </div>
   
          </form>
          
    
    
             
             
             
    
          
    
           
    
    
           
          
        </div>
         </fieldset>
      )

      }
      
    export default App;

    
    