import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getPropertyList } from '../../api';
import { formatPrice, formatCEP } from '../../utils';
import { IoIosArrowBack, IoIosBed } from 'react-icons/io';
import { FaCar, FaLocationDot, FaUpRightAndDownLeftFromCenter } from 'react-icons/fa6';
import { InfoList, StyledPropertyPage} from './styles';
import Button from '../../components/UI/Button';
import PropertyMap from '../../components/PropertyMap';

const Property = () => {
    const { id } = useParams();
    const [property, setProperty] = useState<Imovel | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchProperty = async () => {
            try {
                const properties = await getPropertyList();
                const foundProperty = properties.find((p: Imovel) => p.id === id);
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


    const navigate = useNavigate();

    const handleBack = () => {
        navigate(-1);  // Volta uma página no histórico
    };


    if (loading) {
        return <h1>Carregando...</h1>;
    }

    if (!property) {
        return <h1>Imóvel não encontrado.</h1>;
    }



    return (
        <>
        <StyledPropertyPage>
            <div className='main'>
                <img src={property.fachada} alt={`Fachada de ${property.nome}`} className='fachada'/>
                <div className='property-infos'>
                    <Button variant='text' onClick={handleBack} className='back-button'><IoIosArrowBack /> Voltar</Button>
                    <h1>{property.nome}</h1>
                    <h2><FaLocationDot />{property.rua}, {property.bairro}</h2>
                    <div className='price'>
                        <h2>{formatPrice(property.planta.preco)}</h2>
                        <span>Valor à vista</span>
                    </div>
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
                    <Button variant='secondary'>Solicitar uma visita</Button>
                </div>
            </div>
            <div className='container address-container'>
                <h1>Localização</h1>
                <div className='address'>
                    <p>{property.rua}, {property.num} - {property.bairro}</p>
                    <p>{property.cidade} - {formatCEP(property.cep)}</p>
                </div>
                <PropertyMap latitude={property.location._lat} longitude={property.location._long}/>
                <p>Precisa de mais informações? <span>Fale com um especialista.</span></p>
            </div>
        </StyledPropertyPage>
        </>
    );
};

export default Property;
