import "../../index.css";

type NivelProps = {
    bgCor : string;
    good : boolean;
    nivel : string;
    descricao : string;
}

export const Nivel = (props: NivelProps) => {
    return(
        <div style={{backgroundColor: props.bgCor, color: "white", width: 300, height: 250, marginRight: 30, marginBottom: 30, borderRadius: 30, display: "inline-block", textAlign: "center"}}>
            {props.good === true && 
                <img style={{width: 60, height: 60, paddingTop: 70}} src="https://cdn-icons-png.flaticon.com/512/6070/6070084.png" alt=""/>
            }
            
            {props.good === false &&
                <img style={{width: 60, height: 60, paddingTop: 70}} src="https://www.rawshorts.com/freeicons/wp-content/uploads/2017/01/red_webpict44_1484337200-1.png" alt=""/>
            }
            <br/>
            <span className="nivelTitulo">{props.nivel}</span><br/>
            <span className="nivelDesc">{props.descricao}</span>
        </div>
    );
}