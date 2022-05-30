import  React   from 'react';
import TextField from "@material-ui/core/TextField";
import jsPDF from 'jspdf';
import ReactDOMServer from 'react-dom/server';



import './App.css';


function App({a}) {
  

  const calcValue = (newvalues) => {
    
    let total = 0;
    let twoThousand = 0;
    let fiveHundred = 0;
    let twoHundred = 0;
    let hundred = 0;
    let fifty = 0;
    let twenty = 0;
    let ten = 0;
    let five = 0;
    let two = 0;
    let one = 0;


    if(document.querySelector('#x2000') !== null && document.querySelector('#x2000').value !== "")
    {
      twoThousand = document.querySelector('#x2000').value;
      total = parseFloat(twoThousand) * 2000;
      document.querySelector('#total2000').value = total;
    }
    if(document.querySelector('#x500') !== null && document.querySelector('#x500').value !== "")
    {
      fiveHundred = document.querySelector('#x500').value;
      document.querySelector('#total500').value = parseFloat(fiveHundred) * 500;
      total = total + parseFloat(fiveHundred) * 500;
    }
    if(document.querySelector('#x200') !== null && document.querySelector('#x200').value !== "")
    {
      twoHundred = document.querySelector('#x200').value;
      document.querySelector('#total200').value = parseFloat(twoHundred) * 200;
      total = total + parseFloat(twoHundred) * 200;
    }
    if(document.querySelector('#x100') !== null && document.querySelector('#x100').value !== "")
    {
      hundred = document.querySelector('#x100').value;
      document.querySelector('#total100').value = parseFloat(hundred) * 100;
      total = total + parseFloat(hundred) * 100;
    }
    if(document.querySelector('#x50') !== null && document.querySelector('#x50').value !== "")
    {
      fifty = document.querySelector('#x50').value;
      document.querySelector('#total50').value = parseFloat(fifty) * 50;
      total = total + parseFloat(fifty) * 50;
    }
    if(document.querySelector('#x20') !== null && document.querySelector('#x20').value !== "")
    {
      twenty = document.querySelector('#x20').value;
      document.querySelector('#total20').value = parseFloat(twenty) * 20;
      total = total + parseFloat(twenty) * 20;
    }
    
    if(document.querySelector('#x10') !== null && document.querySelector('#x10').value !== "")
    {
      ten = document.querySelector('#x10').value;
      document.querySelector('#total10').value = parseFloat(ten) * 10;
      total = total + parseFloat(ten) * 10;
    }
    if(document.querySelector('#x5') !== null && document.querySelector('#x5').value !== "")
    {
      five= document.querySelector('#x5').value;
      document.querySelector('#total5').value = parseFloat(five) * 5;
      total = total + parseFloat(five) * 5;
    }
    if(document.querySelector('#x2') !== null && document.querySelector('#x2').value !== "")
    {
      two= document.querySelector('#x2').value;
      document.querySelector('#total2').value = parseFloat(two) * 2;
      total = total + parseFloat(two) * 2;
    }
    if(document.querySelector('#x1') !== null && document.querySelector('#x1').value !== "")
    {
      one = document.querySelector('#x1').value;
      document.querySelector('#total1').value = parseFloat(one) * 1;
      total = total + parseFloat(one) * 1;
    }

    document.querySelector('#grandTotal').value = total;
    
    
    
    //return total;
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
              <th>Denomination</th>
              <th>Count</th>
              <th>Amount</th>

            </tr>
          </thead>
          <tbody>
            <tr>
              <td>2000</td>
              <td>{event.target.elements.x2000.value}</td>
              <td>{event.target.elements.total2000.value}</td>
            </tr>
            <tr>
              <td>500</td>
              <td>{event.target.elements.x500.value}</td>
              <td>{event.target.elements.total500.value}</td>
            </tr>
            <tr>
              <td>200</td>
              <td>{event.target.elements.x200.value}</td>
              <td>{event.target.elements.total200.value}</td>
            </tr>
            <tr>
              <td>100</td>
              <td>{event.target.elements.x100.value}</td>
              <td>{event.target.elements.total100.value}</td>
            </tr>
            <tr>
              <td>50</td>
              <td>{event.target.elements.x50.value}</td>
              <td>{event.target.elements.total50.value}</td>
            </tr>
            <tr>
              <td>20</td>
              <td>{event.target.elements.x20.value}</td>
              <td>{event.target.elements.total20.value}</td>
            </tr>
            <tr>
              <td>10</td>
              <td>{event.target.elements.x10.value}</td>
              <td>{event.target.elements.total10.value}</td>
            </tr>
            <tr>
              <td>5</td>
              <td>{event.target.elements.x5.value}</td>
              <td>{event.target.elements.total5.value}</td>
            </tr>
            <tr>
              <td>2</td>
              <td>{event.target.elements.x2.value}</td>
              <td>{event.target.elements.total2.value}</td>
            </tr>
            <tr>
              <td>1</td>
              <td>{event.target.elements.x1.value}</td>
              <td>{event.target.elements.total1.value}</td>
            </tr>


            <tr>
                    <td>Total</td>
                    <td className="text-left" >
                    <td>{event.target.elements.grandTotal.value}</td>
                    </td>
                </tr>
          </tbody>
        </table> 

        <div className="sign">
        <span align="Left">Signature</span>&nbsp;
        <span className="emptySpan">&nbsp;&nbsp;&nbsp;</span>
        <span align="Right">Incharge Signature</span>
    </div>
       
      </div>
    );

      
      // const doc = new jsPDF();

      const string = ReactDOMServer.renderToString(<Prints />);
      const pdf = new jsPDF("p", "mm", "a4");

     // renderToString(<Prints />);
     // doc.fromHTML(ReactDOMServer.renderToString(<Prints />));
    //  doc.save("myDocument.pdf");

      pdf.fromHTML(string);
      pdf.save("mydocument.pdf");
    }
    

    return(
      <fieldset>
  
        <div className="form">
        
          <form onSubmit={generatePDF}>


          <div className="table-title">
        <h3 align="center">CASH PAYMENT</h3>
    </div>
    <div align="left">
        <table className="table-fill">
            <thead>
                <tr>
                    <th className="text-left">Denomination</th>
                    <th className="text-left">Count</th>
                   
                    <th className="text-left">Amount &#8377;</th>
                 
                </tr>
            </thead>
            <tbody className="table-hover">
                <tr>
                    <td className="text-left">2000</td>
                    <td> <input type="text" className="noteCount" id="x2000" onChange={(e)=> calcValue('x2000')}/></td>
                     
                    <td className="grand" id="t2000">
                    <TextField id="total2000" variant="standard"   className="total"/>
                      
                    </td>
                </tr>
                <tr>
                    <td className="text-left">500</td>
                    <td> <input type="text" className="noteCount" id="x500" onChange={(e)=> calcValue('x500')}/></td>
                    <td className="grand" id="t500">
                    <TextField id="total500" variant="standard"   className="total"/>
                    </td>
                </tr>
                <tr>
                    <td className="text-left">200</td>
                    <td><input type="text" className="noteCount" id="x200" onChange={(e)=> calcValue('x200')}/></td>
                    <td className="grand" id="t200">
                    <TextField id="total200" variant="standard"   className="total"/>
                    </td>
                </tr>
                <tr>
                    <td className="text-left">100</td>
                    <td><input type="text" className="noteCount" id="x100" onChange={(e)=> calcValue('x100')}/></td>
                    <td className="grand" id="t100">
                    <TextField id="total100" variant="standard"   className="total"/>
                    </td>
                </tr>
                <tr>
                    <td className="text-left">50</td>
                    <td><input type="text" className="noteCount" id="x50" onChange={(e)=> calcValue('x50')}/></td>
                    <td className="grand" id="t50">
                    <TextField id="total50"  variant="standard"   className="total"/>
                    </td>
                </tr>
                <tr>
                    <td className="text-left">20</td>
                    <td><input type="text" className="noteCount" id="x20" onChange={(e)=> calcValue('x20')}/></td>
                    <td className="grand" id="t20">
                    <TextField id="total20" variant="standard"   className="total"/>
                    </td>
                </tr>
                <tr>
                    <td className="text-left">10</td>
                    <td><input type="text" className="noteCount" id="x10" onChange={(e)=> calcValue('x10')}/></td>
                    <td className="grand" id="t10">
                    <TextField id="total10" variant="standard"   className="total"/>
                    </td>
                </tr>
                <tr>
                    <td className="text-left">5</td>
                    <td><input type="text" className="noteCount" id="x5" onChange={(e)=> calcValue('x5')}/></td>
                    <td className="grand" id="t5">
                    <TextField id="total5" variant="standard"   className="total"/>
                    </td>
                </tr>
                <tr>
                    <td className="text-left">2</td>
                    <td><input type="text" className="noteCount" id="x2" onChange={(e)=> calcValue('x2')}/></td>
                    <td className="grand" id="t2">
                    <TextField id="total2" variant="standard"   className="total"/>
                    </td>
                </tr>
                <tr>
                    <td className="text-left">1</td>
                    <td><input type="text" className="noteCount" id="x1" onChange={(e)=> calcValue('x1')}/></td>
                    <td className="grand" id="t1">
                    <TextField id="total1" variant="standard"   className="total"/>
                    </td>
                </tr>
                <tr>
                    <td className="text-left">Total</td>
                 
                    <td className="text-left" >
                    <TextField id="grandTotal"  variant="standard" className="grandTotal"/>
                    </td>
                   
                </tr>
            </tbody>
        </table>
    </div>



    <div className="sign">
      <br></br>
      <br></br>
      <br></br>
      <br></br>
        <span align="Left">Signature</span>&nbsp;
        <span className="emptySpan">&nbsp;&nbsp;&nbsp;</span>
        <span align="Right">Incharge Signature</span>
        
        <br></br>
        <br></br>
    </div>
            
            
  <div align="center">
    

    <button variant="contained" align="center" line-height="2" >Submit</button>
    </div>
   
          </form>
          
    
    
             
             
             
    
          
    
           
    
    
           
          
        </div>
         </fieldset>
      )

      }
      
    export default App;

    
    
