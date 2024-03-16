import './menu.scss';
import { VscKebabVertical } from "react-icons/vsc";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { FaWallet } from "react-icons/fa6";
import { FaSafari } from "react-icons/fa6";
import { IoMdNotifications } from "react-icons/io";
import { IoMdSettings } from "react-icons/io";
import { useState } from 'react';
import { LiaEditSolid } from "react-icons/lia";
import { MdOutlineInfo } from "react-icons/md";
import { IoShareOutline } from "react-icons/io5";
import { IoMdRemoveCircleOutline } from "react-icons/io";


export default function Menu() {

    const [display, setDisplay] = useState(false);

    const handleDisplayChange = () => {
        setDisplay((prev) => !prev);
    }


    return (

        <div className='menu--container'>
            <div className='menu--subcontainer11'>
                <MdOutlineArrowBackIosNew style={{ cursor: 'pointer', }} />
                <p>Bitcoin Wallet</p>
                <VscKebabVertical onClick={() => handleDisplayChange()} style={{ transform: `scale(2)`, cursor: 'pointer', width: 10, height: 15, }} />
            </div>
            <div className='menu--subcontainer12'>
                <div>
                    <FaWallet style={{ transform: `scale(1.2)`, }} />
                    <p>Wallet</p>
                </div>
                <div>
                    <FaSafari style={{ transform: `scale(1.2)`, }} />
                    <p>Profile</p>
                </div>
                <div>
                    <IoMdNotifications style={{ transform: `scale(1.4)`, }} />
                    <p>Notifs</p>
                </div>
                <div>
                    <IoMdSettings style={{ transform: `scale(1.4)`, }} />
                    <p>Settings</p>
                </div>
            </div>

            <div style={{height: `${display ? '220px' : '0'}`}}  className='menu--subcontainer14'>
                <div>
                    <p>Edit</p>
                    <LiaEditSolid/>
                </div>
                <div>
                    <p>Courier info</p>
                    <MdOutlineInfo/>
                </div>
                <div>
                    <p>Share</p>
                    <IoShareOutline/>
                </div>
                <div style={{color: 'red'}}>
                    <p>Remove</p>
                    <IoMdRemoveCircleOutline/>
                </div>
            </div>

        </div>
    )
}