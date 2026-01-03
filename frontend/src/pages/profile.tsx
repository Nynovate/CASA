import FormField from "../components/FormField"
import ToggleRole from "../components/RoleStatus";
import { useState } from "react";

const UserProfile : React.FC = () => {
     const [role, setRole] = useState("Customer");
    return (
        <div className="flex flex-col w-2/3 h-2/3 text-black bg-gray-300 rounded-lg p-10 space-y-10">
            <div className="flex justify-center">
                <FormField type="Role" value="User"/>
            </div>
            
            <div className="flex flex-row justify-between space-x-5">
                <div className="flex flex-col">
                    <FormField type="FistName" value="Elia"/>
                    <FormField type="LastName" value="Zakharov"/>
                    <FormField type="Email adress" value="user@gmail.com"/>
                </div>
               
                <div>
                    <FormField type="Creat AT" value="10/11/2025"/>
                </div>
            </div>
            <div className="flex justify-center">
                <ToggleRole role={role} setRole={setRole}/>
            </div>
            <div className="bg-gray-800 text-white w-full h-full rounded-lg">
                {role === "Customer" && 
                    <div className="flex flex-col items-center justify-center h-full">
                        <FormField type="Credit balance" value="2000"/>
                    </div>
                }
                {role === "Seller" &&
                    <div className="flex flex-col items-center justify-center h-full">
                        <FormField type="TotalListing" value="5"/>
                        <FormField type="ActiveListing" value="3"/>
                        <FormField type="SuccessFulSales" value="2"/>
                        <FormField type="AverageRating" value="4.5"/>                        
                    </div>
                }
            </div>
        </div>
    );
}

const Profile : React.FC = () => {
    return(
        <div className="flex flex-col w-screen h-screen justify-center items-center">
           <UserProfile/>
        </div>
    );
}

export default Profile;