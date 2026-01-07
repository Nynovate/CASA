import SellerStat, {CustomerStat} from "../components/SellerStat";
import { useState } from "react";
import UserToggle, {ModeratorToggle } from "../components/RoleStatus";

const InfoBloc = ({type, value}) => {
    return (
        <div className="flex flex-col justify-center w-1/3 h-full overflow-hidden p-3">            
            <p>{type}</p>
            <strong className="w-full truncate">{value}</strong>
        </div>
    );
}

const UserPfp = () => {
    return (
        <div className="h-[30%] w-full flex flex-col font-icon text-black 
        rounded-lg border border-white bg-white items-center  p-3">
            <div className="flex flex-row  justify-between items-center w-[95%] h-[20%]
            rounded-lg
            ">
                <strong className="">Personal Info</strong>
                <button className="border border-black rounded-lg px-2 font-icon"> editing</button>
            </div>
            <div className="flex flex-col w-[95%] h-[75%] p-1 rounded-lg">
                <div className="flex flex-row w-full h-full justify-center gap-4 ">
                    <InfoBloc type="Full Name" value="Ronald Richards"/>
                    <InfoBloc type="Email" value="RonaldRich@example.com"/>
                    <InfoBloc type="Phone" value="(209) 555-0114"/>
                </div>
            </div>
        </div>
    );
}



const CircleChart = ({value , type , total, rate}) => {
    const percent = (value / total) * 100;
    return (
        <div className="flex flex-col h-[20%] w-full items-center  rounded-lg">
            <div>
                <strong className="w-full h-[20%]" style={{ color: "#FFFF00" }}>
                    {type}
                </strong>
            </div>
            <div className="relative w-32 h-32 flex flex-justify-center items-center">
                <svg className="w-full h-[95%]" viewBox="0 0 36 36">
                    <circle cx="18" cy="18" r="15.9155"
                        fill="none"
                        stroke="gray"
                        strokeWidth="3" >
                    </circle>
                    <circle cx="18" cy="18" r="15.9155"
                        fill="none"
                        stroke="#FFFF00"
                        strokeWidth="3" 
                        strokeDasharray={`${percent}, 100`}
                        >
                    </circle> 
                
                </svg>
                <div className="font-icon inset-0 absolute text-yellow-200 
                flex items-center justify-center text-xl font-bold"
                style={{ color: "#FFFF00" }}>
                    {rate} {value}
                </div>
            </div>
        </div>
    );
}

const CoinBlock = ({value, type}) => {
    return (
        <div className="flex flex-col justify-center h-[20%] w-full items-center rounded-lg">
           <div className="flex flex-col w-full h-[50%] justify-center items-center border border-white rounded-lg">
                <div className="">
                    <strong className="w-full h-[10%]" style={{ color: "#FFFF00" }}>
                        {type}
                    </strong>
                </div>
                <div className="flex flex-row justify-center items-center space-x-2">
                    <div>
                        <strong className="w-full h-[10%]" style={{ color: "#FFFF00" }}>
                            {value}
                        </strong>
                    </div>
                    <div className="font-icon text-3xl  flex items-center justify-center" style={{ color: "#FFFF00" }}>
                        
                    </div>
                </div>
            </div>
        </div>        
    );
}

const StatBlock = () => {
    return (
        <div className="flex flex-col w-full h-[98%] items-center gap-2">
            <CircleChart value="1" type="Successful Sales" total="5"/>
            <CircleChart value="4" type="Active Listings" total="5"/>
            <CircleChart value="5" type="Total Listing" total="5"/>
            <CircleChart value="3.5" type="Average Rating" total="5" rate="󰓎"/>
            <CoinBlock value="2000" type="Credit Balance"/>
        </div>
    );
}


const BlockSetting = ({icon , type}) => {
    return type === "Logout" ?(
        <div className="h-full w-full flex flex-row justify-center items-between px-4">
            <div className="h-full w-[60%] flex justify-center items-center">
                <div className="font-icon text-3xl w-[30%]">{icon}</div>
                <div className="w-[50%]">
                    <strong>{type}</strong>
                </div>
            </div>
        </div>) :
        (<div className="h-[5%] w-full flex flex-row justify-start items-center px-4">
            <div className="font-icon text-3xl w-[20%]">{icon}</div>
            <div className="w-[80%]">
                <strong>{type}</strong>
            </div>
        </div>);
}

const SettingBloc = () => {
    return (
        <div className="flex flex-col w-full h-[99%] rounded-lg text-white items-center 
        border border-white py-5 justify-between">
            <div className="flex flex-col w-full h-[95%] items-center">
                <BlockSetting icon="" type="Edit profile"/>
                <BlockSetting icon="󰯄" type="Change password"/>
                <BlockSetting icon="󰗨" type="Delete profile"/>
            </div>
            <div className="flex flex-col w-full h-[5%] items-center justify-center">
                <BlockSetting icon="󰍂" type="Logout"/>
            </div>
        </div>
    );
}

const FavoritePost = () => {
    return (
        <div className="h-[68%] w-full flex flex-col font-icon text-white 
        rounded-lg border border-white items-center  p-3">

        </div>
    );
}

const Profiles = () => {
    return (
        <div className="flex flex-col w-screen h-screen">
            <div className="h-20 w-full"></div>
            <div className="flex flex-row w-full h-full gap-4">
                    <div className="flex flex-col items-center 
                    rounded-lg h-full w-[15%]">
                        <StatBlock/>
                    </div>
                    <div className="flex flex-col h-full w-[90%] items-center space-y-2">
                           <UserPfp/>
                           <FavoritePost/>                  
                    </div>
                    <div className="flex flex-col w-[15%] h-full rounded-lg">
                            <SettingBloc/>
                    </div>
            </div>
        </div>
    );
}

export default Profiles;