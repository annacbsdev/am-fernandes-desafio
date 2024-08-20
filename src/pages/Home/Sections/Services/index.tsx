import { IoCheckbox } from "react-icons/io5"
import { StyledServices } from "./styles"

const servicesText = [
    {
        title: 'Consultoria personalizada',
        description: 'Nossos especialistas estão à disposição para entender suas necessidades. Com uma abordagem personalizada, ajudamos a identificar imóveis que se encaixam no seu perfil.'
    },
    {
        title: 'Negociação e Financiamento',
        description: 'Ajudamos a obter as melhores condições de financiamento. Nossa rede de parceiros financeiros está pronta para oferecer soluções adaptadas às suas necessidades.'
    },
    {
        title: 'Tour Virtual e Presencial',
        description: 'Explore opções sem sair de casa com nossos tours virtuais imersivos ou agende visitas presenciais para sentir o ambiente e verificar todos os detalhes do imóvel.'
    }
]

const Services = () => {
    return (
        <StyledServices>
            <div className="container">
                <h1>Nossos serviços</h1>
                <ul>
                {
                    servicesText.map(
                        service => (
                            <li key={service.title}>
                                <h2>{service.title}</h2>
                                <p>{service.description}</p>
                                <span><IoCheckbox /></span>
                            </li>
                        )
                    )
                }
                </ul>
            </div>
        </StyledServices>
    )

}

export default Services