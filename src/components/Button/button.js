import './button.css';

const Button = ({
    id = "",
    action,
    type = "btn",
    texto = "",
    value = "",
    titulo = "",
    children
}) => {
    return (
        <button
            id={id}
            className={`${type} `}
            onClick={action}
            title={titulo}
            value={value}
        >
            {texto === '' ?
                <div className="btn-content">
                    {children}
                </div> :
                <div className="btn-content">
                    <p>{texto}</p>
                    {children}
                </div>
            }
        </button>
    );

};
export default Button;