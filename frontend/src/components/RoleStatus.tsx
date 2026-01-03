
interface ToggleRoleProps {
    role: string;
    setRole: (r: string) => void;
}


const ToggleRole = ({role, setRole} : ToggleRoleProps) => {
    return (
        <div className="flex flex-row space-x-2 
        bg-black p-4 w-1/3 h-10 items-center rounded-lg 
        text-white justify-between">
            <button
                onClick={() => setRole("Customer")}
                className={`rounded-lg w-25 
                    ${role === "Customer" ? "bg-white text-black" : "bg-black text-white"}`}
            >
                Customer                    
            </button>

            <button
                onClick={() => setRole("Seller")}
                className={`rounded-lg w-25
                    ${role === "Seller" ? "bg-white text-black" : "bg-black text-white"}`}
            >
                Seller
            </button>

        </div>
    );
}

export default ToggleRole;