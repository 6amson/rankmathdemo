'use client'

import { useState } from "react";


import Menu from "./component/menu/menu";
import '../src/style/global.scss';
import { FaWallet } from "react-icons/fa6";
import { FaSafari } from "react-icons/fa6";
import { IoMdNotifications } from "react-icons/io";
import { IoMdSettings } from "react-icons/io";
import './index.scss'
import { BsCurrencyBitcoin } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";
import { FaDollarSign } from "react-icons/fa6";
import { AreaChart, ResponsiveContainer, XAxis, YAxis, CartesianGrid, Tooltip, ReferenceLine, Area } from "recharts";


function App() {

  const [display, setDisplay] = useState(false);

  const [condition1, setCondition1] = useState(true);
  const [condition2, setCondition2] = useState(false);
  const [condition3, setCondition3] = useState(false);
  const [condition4, setCondition4] = useState(false);

  const handleDisplayChange = () => {
    setDisplay((prev) => !prev);
  }

  const handleButtonClick = (conditionNumber) => {
    switch (conditionNumber) {
      case 1:
        setCondition1(true);
        setCondition2(false);
        setCondition3(false);
        setCondition4(false);
        break;
      case 2:
        setCondition1(false);
        setCondition2(true);
        setCondition3(false);
        setCondition4(false);
        break;
      case 3:
        setCondition1(false);
        setCondition2(false);
        setCondition3(true);
        setCondition4(false);
        break;
      case 4:
        setCondition1(false);
        setCondition2(false);
        setCondition3(false);
        setCondition4(true);
        break;
      default:
        break;
    }
  };


  const data = [
    {
      "name": "Monday",
      "$1 Bitcoin": 4000,
      "pv": 2400,
      "amt": 2400
    },
    {
      "name": "Tuesday",
      "$1 Bitcoin": 3000,
      "pv": 1398,
      "amt": 2210
    },
    {
      "name": "Wed",
      "$1 Bitcoin": 2000,
      "pv": 9800,
      "amt": 2290
    },
    {
      "name": "Thurs",
      "$1 Bitcoin": 2780,
      "pv": 3908,
      "amt": 2000
    },
    {
      "name": "Fri",
      "$1 Bitcoin": 1890,
      "pv": 4800,
      "amt": 2181
    },
    {
      "name": "Sat",
      "$1 Bitcoin": 2390,
      "pv": 3800,
      "amt": 2500
    },
    {
      "name": "Sunday",
      "$1 Bitcoin": 3490,
      "pv": 4300,
      "amt": 2100
    }
  ]


  const data2 = [
    {
      "name": "Jan-Mar",
      "$1 Bitcoin": 7000,
      "pv": 2400,
      "amt": 2400
    },
    {
      "name": "Apr-June",
      "$1 Bitcoin": 23000,
      "pv": 1398,
      "amt": 2210
    },
    {
      "name": "July-Sept",
      "$1 Bitcoin": 32000,
      "pv": 9800,
      "amt": 2290
    },
    {
      "name": "Oct-Dec",
      "$1 Bitcoin": 2780,
      "pv": 3908,
      "amt": 2000
    },
  ]

  const data3 = [
    {
      "name": "Week 1",
      "$1 Bitcoin": 44000,
      "pv": 2400,
      "amt": 2400
    },
    {
      "name": "Week 2",
      "$1 Bitcoin": 33000,
      "pv": 1398,
      "amt": 2210
    },
    {
      "name": "Week 3",
      "$1 Bitcoin": 42000,
      "pv": 9800,
      "amt": 2290
    },
    {
      "name": "Week 4",
      "$1 Bitcoin": 2780,
      "pv": 3908,
      "amt": 2000
    },
  ]


  const data4 = [
    {
      "name": "2018",
      "$1 Bitcoin": 10000,
      "pv": 2400,
      "amt": 2400
    },
    {
      "name": "2019",
      "$1 Bitcoin": 23000,
      "pv": 1398,
      "amt": 2210
    },
    {
      "name": "2020",
      "$1 Bitcoin": 50000,
      "pv": 9800,
      "amt": 2290
    },
    {
      "name": "2021",
      "$1 Bitcoin": 32780,
      "pv": 3908,
      "amt": 2000
    },
    {
      "name": "2022",
      "$1 Bitcoin": 44890,
      "pv": 4800,
      "amt": 2181
    },
    {
      "name": "2023",
      "$1 Bitcoin": 52390,
      "pv": 3800,
      "amt": 2500
    },
    {
      "name": "2024",
      "$1 Bitcoin": 63490,
      "pv": 4300,
      "amt": 2100
    }
  ]


  return (
    <div className="App">
      {/* <Hero/> */}
      <Menu />
      <div className='menu--subcontainer13'>
        <FaWallet style={{ transform: `scale(1.2)`, color: 'black' }} />
        <FaSafari style={{ transform: `scale(1.2)`, color: 'grey' }} />
        <IoMdNotifications style={{ transform: `scale(1.4)`, color: 'grey' }} />
        <IoMdSettings style={{ transform: `scale(1.4)`, color: 'grey' }} />
      </div>
      <div className="body--container">
        <div className="body--subcontainer1">
          <div className="body--subcontainer11">
            <div className="body--subcontainer11--div1">
              <div className="body--subcontainer11--div11">
                <div className="bitcoin--div" style={{ background: '#FFAB2D', }}>
                  <BsCurrencyBitcoin style={{ color: 'white', fontSize: 24 }} />
                </div>
                <p>Bitcoin</p>
              </div>
            </div>
            <p>
              BTC
            </p>
          </div>

          <div className="body--subcontainer12">
            <p className="body--subcontainer12--texta">3.529020 BTC</p>
            <div>
              <p>$19.0956 USD</p>
              <p>-2.3%</p>
            </div>
          </div>

          <div style={{ width: '100%', textAlign: 'center' }} className="body--subcontainer13">
            <IoIosArrowDown onClick={() => handleDisplayChange()} style={{ color: 'grey', cursor: 'pointer', opacity: .8, transform: `scale(1.4)`, fontWeight: 700 }} />
          </div>
        </div>

        <div style={{height: `${display ? '30px' : '0'}`, transition: 'height .4s ease-in' }} className="body--subcontainer2">
          <p onClick={() => handleButtonClick(1)}>Day</p>
          <p onClick={() => handleButtonClick(3)}>Week</p>
          <p onClick={() => handleButtonClick(2)}>Month</p>
          <p onClick={() => handleButtonClick(4)}>Year</p>
        </div>

        <div className="body--subcontainer3">
          <div className="body--subcontainer31">
            <div className="body--subcontainer31a">
              <div style={{ background: '#EF2755' }}></div>
              <p>Lower $4.80</p>
            </div>

            <div className="body--subcontainer31a">
              <div style={{ background: 'green' }}></div>
              <p>Higher $4.80</p>
            </div>
          </div>

          <div className="body--subcontainer32">
            <ResponsiveContainer width={'100%'} height={400}>
              <AreaChart data={condition1 ? data : condition2? data2 : condition3? data3 : condition4? data4 : ''}
                margin={{ top: 20, right: 0, left: 0, bottom: 0 }}>
                {/* <XAxis dataKey="name" /> */}
                {/* <YAxis /> */}
                {/* <CartesianGrid strokeDasharray="3 3" /> */}
                <Tooltip />
                {/* <ReferenceLine x="Page C" stroke="green" label="Min PAGE" /> */}
                {/* <ReferenceLi/ne y={4000} label="Max" stroke="red" strokeDasharray="3 3" /> */}
                <Area type="monotone" dataKey="$1 Bitcoin" stroke="#FFAE2F" fill="#FFF7EE" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="body--subcontainer4" style={{height: `${display ? '150px' : '0'}`, transition: 'height .4s ease-in' }} >
          <div className="body--subcontainer41">
            <div style={{ width: 50, height: 50, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%', background: 'linear-gradient(to bottom, #18BCFA, #1C80F3)' }}>
              <FaDollarSign color="white" fontSize={'24px'} />
            </div>
            <p>Buy BTC</p>
          </div>
          <div className="body--subcontainer41">
            <div style={{ width: 50, height: 50, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%', background: 'linear-gradient(to bottom, #FE7E9A, #FC319B)' }}>
              <FaDollarSign color="white" fontSize={'24px'} />
            </div>
            <p>Sell BTC</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
