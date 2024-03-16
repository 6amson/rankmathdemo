import './menu.scss';
import { VscKebabVertical } from "react-icons/vsc";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { FaWallet } from "react-icons/fa6";
import { FaSafari } from "react-icons/fa6";
import { IoMdNotifications } from "react-icons/io";
import { IoMdSettings } from "react-icons/io";


export default function Menu() {
    return (

        <div className='menu--container'>
            <div className='menu--subcontainer11'>
                <MdOutlineArrowBackIosNew style={{ cursor: 'pointer', color: 'grey' }} />
                <p>Bitcoin Wallet</p>
                <VscKebabVertical style={{ transform: `scale(2)`, cursor: 'pointer', width: 10, height: 15, color: 'grey'}} />
            </div>
            <div className='menu--subcontainer12'>
                <div>
                    <FaWallet style={{ transform: `scale(1.2)`, color: 'grey' }} />
                    <p>Wallet</p>
                </div>
                <div>
                    <FaSafari style={{ transform: `scale(1.2)`, color: 'grey' }} />
                    <p>Profile</p>
                </div>
                <div>
                    <IoMdNotifications style={{ transform: `scale(1.4)`, color: 'grey' }} />
                    <p>Notification</p>
                </div>
                <div>
                    <IoMdSettings style={{ transform: `scale(1.4)`, color: 'grey' }} />
                    <p>Settings</p>
                </div>
            </div>
            
        </div>
    )
}