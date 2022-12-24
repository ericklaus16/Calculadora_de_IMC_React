import "../../index.css"

type Props = {
    placeholder : string;
    onChangeFunction : (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input = (props: Props) => {
    return(
        <div>
            <input type="text" className="input" placeholder={props.placeholder} onChange={props.onChangeFunction}/>
        </div>
    );
}