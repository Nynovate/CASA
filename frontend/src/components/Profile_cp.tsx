
const Stat = () => {

}

interface  InfoProps {
    name: string;
    email: string;
    phone: string;
    type: string;
    value: string;
}


const InfoBloc = ({type, value}) => {
    return (
        <div className="flex flex-row w-full">
            <p>{type}</p>
            <strong>{value}</strong>
        </div>
    )
}

const Info = ({name, email, phone}) => {
    return (
        <div className="flex flex-col
        w-[95%] h-[30%] bg-white rounded-lg text-foreground">
           <strong>Personal Info</strong>
            <InfoBloc/>
        </div>
    );
}


export {Stat} ;
export {Info} ;