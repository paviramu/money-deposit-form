import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import jsPDF from "jspdf";
import ReactDOMServer from "react-dom/server";

import "./App.css";

function App({ a }) {
  const [twoThousand, setTwoThousand] = useState(0);
  const [fiveHundred, setFiveHundred] = useState(0);
  const [twoHundred, setTwoHundred] = useState(0);
  const [hundred, setHundred] = useState(0);
  const [fifty, setFifty] = useState(0);
  const [twenty, setTwenty] = useState(0);
  const [ten, setTen] = useState(0);
  const [five, setFive] = useState(0);
  const [two, setTwo] = useState(0);
  const [one, setOne] = useState(0);

  const [total, setTotal] = useState(0);

  const calcTwoThousand = (newvalues) => {
    setTwoThousand(newvalues);

    calcTotal(
      newvalues,
      fiveHundred,
      twoHundred,
      hundred,
      fifty,
      twenty,
      ten,
      five,
      two,
      one
    );
  };

  const calcFiveHundred = (newvalues) => {
    setFiveHundred(newvalues);

    calcTotal(
      twoThousand,
      newvalues,
      twoHundred,
      hundred,
      fifty,
      twenty,
      ten,
      five,
      two,
      one
    );
  };

  const calcTwoHundred = (newvalues) => {
    setTwoHundred(newvalues);

    calcTotal(
      twoThousand,
      fiveHundred,
      newvalues,
      hundred,
      fifty,
      twenty,
      ten,
      five,
      two,
      one
    );
  };

  const calcHundred = (newvalues) => {
    setHundred(newvalues);

    calcTotal(
      twoThousand,
      fiveHundred,
      twoHundred,
      newvalues,
      fifty,
      twenty,
      ten,
      five,
      two,
      one
    );
  };

  const calcFifty = (newvalues) => {
    setFifty(newvalues);

    calcTotal(
      twoThousand,
      fiveHundred,
      twoHundred,
      hundred,
      newvalues,
      twenty,
      ten,
      five,
      two,
      one
    );
  };

  const calcTwenty = (newvalues) => {
    setTwenty(newvalues);

    calcTotal(
      twoThousand,
      fiveHundred,
      twoHundred,
      hundred,
      fifty,
      newvalues,
      ten,
      five,
      two,
      one
    );
  };

  const calcTen = (newvalues) => {
    setTen(newvalues);

    calcTotal(
      twoThousand,
      fiveHundred,
      twoHundred,
      hundred,
      fifty,
      twenty,
      newvalues,
      five,
      two,
      one
    );
  };

  const calcFive = (newvalues) => {
    setFive(newvalues);

    calcTotal(
      twoThousand,
      fiveHundred,
      twoHundred,
      hundred,
      fifty,
      twenty,
      ten,
      newvalues,
      two,
      one
    );
  };

  const calcTwo = (newvalues) => {
    setTwo(newvalues);

    calcTotal(
      twoThousand,
      fiveHundred,
      twoHundred,
      hundred,
      fifty,
      twenty,
      ten,
      five,
      newvalues,
      one
    );
  };

  const calcOne = (newvalues) => {
    setOne(newvalues);

    calcTotal(
      twoThousand,
      fiveHundred,
      twoHundred,
      hundred,
      fifty,
      twenty,
      ten,
      five,
      two,
      newvalues
    );
  };

  const calcTotal = (
    twoThousand,
    fiveHundred,
    twoHundred,
    hundred,
    fifty,
    twenty,
    ten,
    five,
    two,
    one
  ) => {
    setTotal(
      twoThousand * 2000 +
        fiveHundred * 500 +
        twoHundred * 200 +
        hundred * 100 +
        fifty * 50 +
        twenty * 20 +
        ten * 10 +
        five * 5 +
        two * 2 +
        one * 1
    );
  };

  const tableStyle = {
    width: "10%",
    height: "5px !important",
  };

  const tdStyle = {
    textAlign: "center",
    height: "100px",
  };

  const generatePDF = (event) => {
    const Prints = () => (
      <div>
        <div align="center">
          <table style={tableStyle}>
            <tr>
              <th>Denomination</th>
              <th>Count</th>
              <th>Amount</th>
            </tr>
            <tr>
              <td className="text-left">2000</td>
              <td style={{ height: "10px!important" }}>
                123{event.target.elements.x2000.value}
              </td>
              <td style={tdStyle}>{event.target.elements.total2000.value}</td>
            </tr>
            <tr>
              <td style={{ height: "10px!important" }}>500</td>
              <td style={{ height: "10px!important" }}>
                {event.target.elements.x500.value}
              </td>
              <td style={{ height: "10px!important" }}>
                {event.target.elements.total500.value}
              </td>
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
              <td className="text-left">
                <td>{event.target.elements.grandTotal.value}</td>
              </td>
            </tr>
          </table>
        </div>

        <div className="sign">
          <span align="Left">Signature</span>&nbsp;
          <span className="emptySpan">&nbsp;&nbsp;&nbsp;</span>
          <span align="Right">Incharge Signature</span>
        </div>
      </div>
    );

    const string = ReactDOMServer.renderToString(<Prints />);
    const pdf = new jsPDF("p", "mm", "a3");

    pdf.fromHTML(string);
    pdf.save("mydocument.pdf");
  };

  return (
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
                  <td>
                    {" "}
                    <input
                      type="text"
                      className="noteCount"
                      id="x2000"
                      onChange={(e) => calcTwoThousand(e.target.value)}
                    />
                  </td>

                  <td className="grand" id="t2000">
                    <TextField
                      id="total2000"
                      variant="standard"
                      value={twoThousand * 2000}
                      className="total"
                    />
                  </td>
                </tr>
                <tr>
                  <td className="text-left">500</td>
                  <td>
                    {" "}
                    <input
                      type="text"
                      className="noteCount"
                      id="x500"
                      onChange={(e) => calcFiveHundred(e.target.value)}
                    />
                  </td>
                  <td className="grand" id="t500">
                    <TextField
                      id="total500"
                      variant="standard"
                      value={fiveHundred * 500}
                      className="total"
                    />
                  </td>
                </tr>
                <tr>
                  <td className="text-left">200</td>
                  <td>
                    <input
                      type="text"
                      className="noteCount"
                      id="x200"
                      onChange={(e) => calcTwoHundred(e.target.value)}
                    />
                  </td>
                  <td className="grand" id="t200">
                    <TextField
                      id="total200"
                      variant="standard"
                      value={twoHundred * 200}
                      className="total"
                    />
                  </td>
                </tr>
                <tr>
                  <td className="text-left">100</td>
                  <td>
                    <input
                      type="text"
                      className="noteCount"
                      id="x100"
                      onChange={(e) => calcHundred(e.target.value)}
                    />
                  </td>
                  <td className="grand" id="t100">
                    <TextField
                      id="total100"
                      variant="standard"
                      value={hundred * 100}
                      className="total"
                    />
                  </td>
                </tr>
                <tr>
                  <td className="text-left">50</td>
                  <td>
                    <input
                      type="text"
                      className="noteCount"
                      id="x50"
                      onChange={(e) => calcFifty(e.target.value)}
                    />
                  </td>
                  <td className="grand" id="t50">
                    <TextField
                      id="total50"
                      variant="standard"
                      value={fifty * 50}
                      className="total"
                    />
                  </td>
                </tr>
                <tr>
                  <td className="text-left">20</td>
                  <td>
                    <input
                      type="text"
                      className="noteCount"
                      id="x20"
                      onChange={(e) => calcTwenty(e.target.value)}
                    />
                  </td>
                  <td className="grand" id="t20">
                    <TextField
                      id="total20"
                      variant="standard"
                      value={twenty * 20}
                      className="total"
                    />
                  </td>
                </tr>
                <tr>
                  <td className="text-left">10</td>
                  <td>
                    <input
                      type="text"
                      className="noteCount"
                      id="x10"
                      onChange={(e) => calcTen(e.target.value)}
                    />
                  </td>
                  <td className="grand" id="t10">
                    <TextField
                      id="total10"
                      variant="standard"
                      value={ten * 10}
                      className="total"
                    />
                  </td>
                </tr>
                <tr>
                  <td className="text-left">5</td>
                  <td>
                    <input
                      type="text"
                      className="noteCount"
                      id="x5"
                      onChange={(e) => calcFive(e.target.value)}
                    />
                  </td>
                  <td className="grand" id="t5">
                    <TextField
                      id="total5"
                      variant="standard"
                      value={five * 5}
                      className="total"
                    />
                  </td>
                </tr>
                <tr>
                  <td className="text-left">2</td>
                  <td>
                    <input
                      type="text"
                      className="noteCount"
                      id="x2"
                      onChange={(e) => calcTwo(e.target.value)}
                    />
                  </td>
                  <td className="grand" id="t2">
                    <TextField
                      id="total2"
                      variant="standard"
                      value={two * 2}
                      className="total"
                    />
                  </td>
                </tr>
                <tr>
                  <td className="text-left">1</td>
                  <td>
                    <input
                      type="text"
                      className="noteCount"
                      id="x1"
                      onChange={(e) => calcOne(e.target.value)}
                    />
                  </td>
                  <td className="grand" id="t1">
                    <TextField
                      id="total1"
                      variant="standard"
                      value={one}
                      className="total"
                    />
                  </td>
                </tr>
                <tr>
                  <td className="text-left">Total</td>
                  <td>
                    <input
                      type="text-left"
                      readOnly={true}
                      className="noteCount"
                      value={total}
                    />
                  </td>
                  <td className="text-left">
                    <TextField
                      id="grandTotal"
                      variant="standard"
                      value={total}
                      className="grandTotal"
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="sign">
            <br></br>
            <br></br>
            <br></br>
            <span align="Left">Signature</span>&nbsp;
            <span className="emptySpan">&nbsp;&nbsp;&nbsp;</span>
            <span align="Right">Incharge Signature</span>
            <br></br>
            <br></br>
            <br></br>
          </div>

          <div align="center">
            <button variant="contained" align="center" line-height="2">
              Submit
            </button>
          </div>
        </form>
      </div>
    </fieldset>
  );
}

export default App;
