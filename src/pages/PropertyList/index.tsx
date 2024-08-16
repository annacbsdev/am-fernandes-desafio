import { useEffect, useState } from "react";
import Button from "../../components/UI/Button"
import Select from "../../components/UI/Select";
import TextField from "../../components/UI/TextField"
import { PropertiesGrid, SearchFields, StyledPropertyList } from "./styles"
import { IoSearchSharp } from "react-icons/io5";
import PropertyCard from "../../components/PropertyCard";
import { getPropertyList } from "../../api";

const PropertyList = () => {

    const options = [ "Nome", "Maior preço", "Menor preço"]

    const [properties, setProperties] = useState<Imovel[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const data = await getPropertyList();
          setProperties(data);
        } catch (error) {
          setError("Erro ao buscar a lista de imóveis.")
          console.log(error)
        } finally {
          setLoading(false);
        }
      };
  
      fetchData();
    }, []);
  
    if (loading) {
      return <h1>Carregando...</h1>;
    }
  
    if (error) {
      return <h1>{error}</h1>;
    }

    return (
        <StyledPropertyList className="container">
            <h1>{properties.length} imóveis disponíveis</h1>
            <SearchFields>
                <div>
                    <TextField placeholder="Busque por uma cidade, bairro ou rua"/>
                    <Button>Buscar <IoSearchSharp /></Button>
                </div>
                <div>
                    <h2>Ordenar por:</h2>
                    <Select options={options}></Select>
                </div>
            </SearchFields>
            <PropertiesGrid>
                {
                    properties.map(
                        (property) => {
                            return (
                                <PropertyCard
                                    key={property.num}
                                    nome={property.nome}
                                    preco={property.planta.preco}
                                    rua={property.rua}
                                    bairro={property.bairro}
                                    dorms={property.planta.dorms}
                                    metragem={property.planta.metragem}
                                    vagas={property.planta.vagas}
                                    fachada={property.fachada}
                                    num={property.num}
                    />
                            )
                        }
                    )
                }
            </PropertiesGrid>
        </StyledPropertyList>
    )
}

export default PropertyList