import { Info, Stat } from "../components/Profile_cp";

const user = {
    name: "Alice", 
    email: "alice@example.com", 
    phone: "+33 612345678"
}


const Profile = () => {
    return (
        <div className="flex flex-col items-center w-full h-full">
            <Info name={user.name}  email={user.email}
            phone={user.phone}/>
            <Stat/>
        </div>
    );
}

const Profile_up = () => {
    return (
        <div className="flex flex-col items-center w-screen
         h-screen">
            <div className="w-full h-[10%]"></div>
            <div className="flex flex-col item-center 
            w-full h-[90%]">
                <Profile/>
            </div>
        </div>
    );
}

export default Profile_up;