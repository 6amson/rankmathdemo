import Menu from "./component/menu/menu";
import '../src/style/global.scss';
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { FaWallet } from "react-icons/fa6";
import { FaSafari } from "react-icons/fa6";
import { IoMdNotifications } from "react-icons/io";
import { IoMdSettings } from "react-icons/io";
import './index.scss'
import { BsCurrencyBitcoin } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";
import { FaDollarSign } from "react-icons/fa6";


function App() {
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
            <IoIosArrowDown style={{ color: 'grey', cursor: 'pointer', opacity: .8, transform: `scale(1.4)`, fontWeight: 700 }} />
          </div>
        </div>

        <div className="body--subcontainer2">
          <p>Day</p>
          <p>Week</p>
          <p>Month</p>
          <p>Year</p>
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
            GRAPH DIAGRAM
          </div>
        </div>

        <div className="body--subcontainer4">
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
