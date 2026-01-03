interface FormFieldProps {
    type: string;
    value: string;
}

const FormField : React.FC<FormFieldProps> = ({type, value}: FormFieldProps) => {
    return (
        <div className="flex flex-row">
            <strong>{type} : </strong>
            <span className="ml-2">{value}</span>
        </div>
    );
}

export default FormField;