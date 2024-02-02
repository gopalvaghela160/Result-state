import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  let [name, setname] = useState('');
  let [roll, setroll] = useState('');
  let [s1, sets1] = useState('');
  let [s2, sets2] = useState('');
  let [s3, sets3] = useState('');
  let [s4, sets4] = useState('');
  let [s5, sets5] = useState('');
  let [total, setTotal] = useState('');
  let [avg, setavg] = useState('');
  let [min, setmin] = useState('');
  let [max, setmax] = useState('');
  let [grad, setgrade] = useState('');
  let [res, setres] = useState([]);
  let [temp, settemp] = useState('');


  const totalhandler = () => {



    // total
    let tot = parseInt(s1) + parseInt(s2) + parseInt(s3) + parseInt(s4) + parseInt(s5);
    setTotal(tot);

    let per = tot / 5;
    setavg(per);
    // avg

    // find min
    let Min = Math.min(parseInt(s1), parseInt(s2), parseInt(s3), parseInt(s4), parseInt(s5));
    setmin(Min);

    // find max
    let Max = Math.max(parseInt(s1), parseInt(s2), parseInt(s3), parseInt(s4), parseInt(s5));
    setmax(Max);

    let gd;
    // grade
    if (per > 90) {
      gd = "A";
    }
    else if (per > 80) {
      gd = "B";
    }
    else if (per > 70) {
      gd = "C";
    }
    else if (per > 60) {
      gd = "D";
    }
    else {
      gd = "F";
    }
    setgrade(gd);

    // result
    let temp = 0, result;
    if (s1 > 33) {
      temp++;
    }
    if (s2 > 33) {
      temp++;
    }
    if (s3 > 33) {
      temp++;
    }
    if (s4 > 33) {
      temp++;
    }
    if (s5 > 33) {
      temp++;

    }
    if (temp === 5) {
      result = "PASS";
    }
    else if(temp === 4 || temp === 3)
    {
      result ="ATKT";
    }
    else{
      result ="FAIL";
    }


    setres([...res, { name, roll, s1, s2, s3, s4, s5, tot, per, Min, Max, gd, result }])
    settemp([...res, { name, roll, s1, s2, s3, s4, s5, tot, per, Min, Max, gd, result }]);
  }
  let pass = () =>{

    res.filter((ele)=>{
      let arr = [];
      if(ele.result === "PASS")
      {
        arr.push(ele);
        setres(arr);
      }
    })
  }
  let ATKT = () =>{

    res.filter((ele)=>{
      let arr = [];
      if(ele.result === "ATKT")
      {
        arr.push(ele);
        setres(arr);
      }
    })
  }
  let FAIL = () =>{

    res.filter((ele)=>{
      let arr = [];
      if(ele.result === "FAIL")
      {
        arr.push(ele);
        setres(arr);
      }
    })
  }
  return (
    <>
      <div className='box'>
        Name <input type="text" onChange={(e) => setname(e.target.value)} /><br></br>
        Roll No <input type="text" onChange={(e) => setroll(e.target.value)} /><br></br>
        sub 1 <input type='text' onChange={(e) => { sets1(e.target.value) }}></input><br></br>
        sub 2 <input type='text' onChange={(e) => { sets2(e.target.value) }}></input><br></br>
        sub 3 <input type='text' onChange={(e) => { sets3(e.target.value) }}></input><br></br>
        sub 4 <input type='text' onChange={(e) => { sets4(e.target.value) }}></input><br></br>
        sub 5 <input type='text' onChange={(e) => { sets5(e.target.value) }}></input><br></br>
        <input type="button" value={'Click me'} onClick={(e) => totalhandler()} /><br></br>
        <input type="button" value={'PASS'} onClick={(e)=>pass()}/>
        <input type="button" value={'ATKT'} onClick={(e)=>ATKT()}/>
        <input type="button" value={'FAIL'} onClick={(e)=>FAIL()}/>
        {/* <input type="button" value={'PASS'} onClick={(e)=>pass()}/> */}

      </div>

      <table className='t-body'>
        <tr>
          <th>Name</th>
          <th>Roll No</th>
          <th>s1</th>
          <th>s2</th>
          <th>s3</th>
          <th>s4</th>
          <th>s5</th>
          <th>Total</th>
          <th>Avg</th>
          <th>Min</th>
          <th>Max</th>
          <th>grade</th>
          <th>Result</th>
        </tr>
        {
          res.map((ele) => {
            return (
              <tr className='t-box'>
                <td>{ele.name}</td>
                <td>{ele.roll}</td>
                <td>{ele.s1}</td>
                <td>{ele.s2}</td>
                <td>{ele.s3}</td>
                <td>{ele.s4}</td>
                <td>{ele.s5}</td>
                <td>{ele.tot}</td>
                <td>{ele.per}</td>
                <td>{ele.Min}</td>
                <td>{ele.Max}</td>
                <td>{ele.gd}</td>
                <td>{ele.result}</td>
              </tr>
            );
          })

        }
      </table>
    </>
  );
}

export default App;
