
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getPropertyList } from '../../api';
import { formatPrice, formatCEP } from '../../utils';
import { IoIosBed } from 'react-icons/io';
import { FaCar, FaUpRightAndDownLeftFromCenter } from 'react-icons/fa6';
import { InfoList, StyledPropertyPage, Title } from './styles';
import mapa from '../../assets/mapa.png'

const Property = () => {
    const { id } = useParams<{ id: string }>();
    const [property, setProperty] = useState<Imovel | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchProperty = async () => {
            try {
                const properties = await getPropertyList();
                const foundProperty = properties.find(p => p.num === id); 
                if (foundProperty) {
                    setProperty(foundProperty);
                } else {
                    console.log("Propriedade não encontrada.");
                }
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };

        fetchProperty();
    }, [id]);

    if (loading) {
        return <h1>Carregando...</h1>;
    }

    if (!property) {
        return <h1>Imóvel não encontrado.</h1>;
    }

    return (
        <StyledPropertyPage>
            <img src={property.fachada} alt={`Fachada de ${property.nome}`} className='fachada'/>
            <div className='property-infos'>
                <h1>{property.nome}</h1>
                <h2>{formatPrice(property.planta.preco)}</h2>
                <div>
                    <Title>
                        <hr />
                        <h3>Informações</h3>
                    </Title>
                    <div>
                        <InfoList>
                            <li>
                                <IoIosBed /> {property.planta.dorms} dormitórios
                            </li>
                            <li>
                                <FaUpRightAndDownLeftFromCenter /> {property.planta.metragem}m²
                            </li>
                            <li>
                                <FaCar /> {property.planta.vagas ? (<span>{property.planta.vagas} vaga(s)</span>) : (<span>Sem vagas</span>)}
                            </li>
                        </InfoList>
                    </div>
                </div>
                <div>
                    <Title>
                        <hr />
                        <h3>Localização</h3>
                    </Title>
                    <div className='address'>
                        <p>{property.rua}, {property.num} - {property.bairro}</p>
                        <p>{property.cidade} - {formatCEP(property.cep)}</p>
                    </div>
                    <img src={mapa}/>
                </div>
            </div>
        </StyledPropertyPage>
    );
};

export default Property;
