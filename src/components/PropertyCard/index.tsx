import Button from "../UI/Button"
import { StyledPropertyCard } from "./styles";
import { formatPrice } from "../../utils";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

type PropertyCardProps = {
    nome: string,
    preco: number,
    rua: string,
    bairro: string, 
    dorms: number;
    metragem: number;
    vagas: number;
    fachada: string;
    num: string
}

const PropertyCard = ({nome, bairro, dorms, fachada, metragem, preco, rua, vagas, num} : PropertyCardProps) => {
    return (
        <StyledPropertyCard>
            <img src={fachada} alt={nome}/>
            <div>
                <h2>{nome}</h2>
                <h1>{formatPrice(preco)}</h1>
                <p><FaLocationDot /> {rua}, {bairro}</p>
                <span>{dorms} dorms, {metragem}m²{vagas ? (<span>, {vagas} vaga(s)</span>) : (<span>, sem vagas</span>)}</span>
                <Link to={`/property/${num}`}>
                <Button variant="secondary">Mais informações <IoIosArrowForward /></Button>
                </Link>
            </div>
        </StyledPropertyCard>
    )
}

export default PropertyCard