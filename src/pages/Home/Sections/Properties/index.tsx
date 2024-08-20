//react e router
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
//api
import { getPropertyList } from "../../../../api";
//botão, ícone e estilos
import Button from "../../../../components/UI/Button"
import { FaLocationDot } from "react-icons/fa6";
import { StyledProperties } from "./styles";

const Properties = () => {
    const [firstThreeProperties, setFirstThreeProperties] = useState<Imovel[]>([])

    //função para pegar apenas os três primeiros imóveis da api
    useEffect(() => {
        async function getFirstThreeProperties() {
            try {
                const properties = await getPropertyList();
                const firstThree = properties.slice(0, 3);
                setFirstThreeProperties(firstThree);
            } catch (error) {
                console.error(error);
            }
        }
        getFirstThreeProperties()
    }, [])
    
    return (
        <StyledProperties className="container">
            <h1>Encontre o <span>melhor para você!</span></h1>
            <ul>
                {
                    firstThreeProperties.map(
                        property => (
                            <li key={property.id}>
                                <Link to={`/property/${property.id}`}>
                                <img src={property.fachada}/>
                                <div className="infos">
                                    <h1>{property.nome}</h1>
                                    <p><FaLocationDot /> {property.rua}, {property.bairro}</p>
                                    <span>{property.planta.dorms} dorms, {property.planta.metragem}m²{property.planta.vagas ? (<span>, {property.planta.vagas} vaga(s)</span>) : (<span>, sem vagas</span>)}</span>
                                </div>    
                                </Link>
                            </li>
                        )
                    )
                }
                
            </ul>
            <Link to="/properties">
                <Button variant="secondary">Ver todos os imóveis</Button>
            </Link>
        </StyledProperties>
    )
}

export default Properties