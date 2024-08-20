import { useEffect, useState } from "react";
import { getPropertyList } from "../../../../api";
import Button from "../../../../components/UI/Button"
import { FaLocationDot } from "react-icons/fa6";
import { StyledProperties } from "./styles";
import { Link } from "react-router-dom";



const Properties = () => {
    const [firstThreeProperties, setFirstThreeProperties] = useState<Imovel[]>([])

    useEffect(() => {
        async function getFirstThreeProperties() {
            try {
                const properties = await getPropertyList();
                const firstThree = properties.slice(0, 3);
                setFirstThreeProperties(firstThree);
            } catch (error) {
                console.error('Erro ao obter propriedades:', error);
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