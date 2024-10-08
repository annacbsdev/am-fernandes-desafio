//router
import { Link } from "react-router-dom";
//ícones
import { FaLocationDot } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";
//componente, função de formatar preço e estilos
import Button from "../UI/Button"
import { StyledPropertyCard } from "./styles";
import { formatPrice } from "../../utils";

type PropertyCardProps = {
    id: string,
    nome: string,
    preco: number,
    rua: string,
    bairro: string, 
    dorms: number;
    metragem: number;
    vagas: number;
    fachada: string;
}

const PropertyCard = ({nome, bairro, dorms, fachada, metragem, preco, rua, vagas, id} : PropertyCardProps) => {
    return (
        <StyledPropertyCard>
            <img src={fachada} alt={nome}/>
            <div>
                <h2>{nome}</h2>
                <h1>{formatPrice(preco)}</h1>
                <p><FaLocationDot /> {rua}, {bairro}</p>
                <span>{dorms} dorms, {metragem}m²{vagas ? (<span>, {vagas} vaga(s)</span>) : (<span>, sem vagas</span>)}</span>
                <Link to={`/property/${id}`}>
                    <Button variant="secondary">Mais informações <IoIosArrowForward /></Button>
                </Link>
            </div>
        </StyledPropertyCard>
    )
}

export default PropertyCard