import "./botao.css"

type Props = {
    text? : string;
    clickFunction : () => void;
    disabled : boolean;
}

export const Botao = (props: Props) => {
    return(
        <div>
            <button disabled={props.disabled} className="botao" onClick={props.clickFunction}>{props.text}</button>
        </div>
    );
}