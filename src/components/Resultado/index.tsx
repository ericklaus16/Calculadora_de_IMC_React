import { relative } from "path";
import "./resultado.css";

type NivelProps = {
    bgCor : string;
    good : boolean;
    nivel : string;
    imc : number;
    descricao : string;
    onClickFunction : () => void;
}

export const Resultado = (props: NivelProps) => {
    return(
        <>
        <div className="resultContainer" style={{backgroundColor: props.bgCor}}>
            {props.good === true && 
                <img className="imgThumb" style={{width: 120, height: 120, paddingTop: 70}} src="https://cdn-icons-png.flaticon.com/512/6070/6070084.png" alt=""/>
            }
            
            {props.good === false &&
                <img className="imgThumb" style={{width: 120, height: 120, paddingTop: 70}} src="https://www.rawshorts.com/freeicons/wp-content/uploads/2017/01/red_webpict44_1484337200-1.png" alt=""/>
            }
            <br/>
            <span className="resultadoTitulo">{props.nivel}</span><br/>
            <h3 className="imcText">Seu IMC é de {props.imc.toFixed(2)}kg/m²</h3><br/>
            <h4 className="description">{props.descricao}</h4>
            <button className="returnButton" onClick={props.onClickFunction}><img src="https://img.freepik.com/free-icon/back_318-928128.jpg" style={{width: 100, height: 100}}/></button>
        </div>
        </>
    );
}