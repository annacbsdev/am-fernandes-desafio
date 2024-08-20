import { useEffect, useState } from "react";
import { IoSearchSharp } from "react-icons/io5";

//componentes e funções
import PropertyCard from "../../components/PropertyCard";
import { getPropertyList } from "../../api";

//UI e estilos
import Button from "../../components/UI/Button";
import Select from "../../components/UI/Select";
import TextField from "../../components/UI/TextField";
import { PropertiesGrid, SearchFields, StyledPropertyList } from "./styles";

const PropertyList = () => {
  const [properties, setProperties] = useState<Imovel[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const [searchText, setSearchText] = useState<string>(""); 
  const [filteredProperties, setFilteredProperties] = useState<Imovel[]>([]);

  const [sortedProperties, setSortedProperties] = useState<Imovel[]>([]);
  const [sortOption, setSortOption] = useState<string>("Nome");

  //exibir os imóveis
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getPropertyList();
        setProperties(data);
        setFilteredProperties(data); 
      } catch (error) {
        setError("Erro ao buscar a lista de imóveis.");
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  //ordenação
  const options = ["Nome", "Maior preço", "Menor preço"];

  useEffect(() => {
    const sortProperties = () => {
      const sortedList = [...filteredProperties];
      switch (sortOption) {
        case "Maior preço":
          sortedList.sort((a, b) => b.planta.preco - a.planta.preco);
          break;
        case "Menor preço":
          sortedList.sort((a, b) => a.planta.preco - b.planta.preco);
          break;
        case "Nome":
        default:
          sortedList.sort((a, b) => a.nome.localeCompare(b.nome));
          break;
      }
      setSortedProperties(sortedList);
    };

    sortProperties();
  }, [sortOption, filteredProperties]);
  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSortOption(event.target.value);
  };

  //Busca por nome
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
  };

  const handleSearchClick = () => {
    const searchResults = properties.filter(property =>
      property.nome.toLowerCase().includes(searchText.toLowerCase()) || property.bairro.toLowerCase().includes(searchText.toLowerCase()) || property.rua.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredProperties(searchResults);
  };

  //loading ou erro
  if (loading) {
    return <h1>Carregando...</h1>;
  }

  if (error) {
    return <h1>{error}</h1>;
  }

  //componente
  return (
    <StyledPropertyList className="container">
        <span className="square"></span>
        {sortedProperties.length > 1 ? (
          <h1>{sortedProperties.length} imóveis encontrados</h1>
        ) : sortedProperties.length === 1 ? (
          <h1>1 imóvel encontrado</h1>
        ) : (
          <h1>Nenhum imóvel encontrado</h1>
        )}    
      <SearchFields>
        <div>
          <TextField
            placeholder="Busque por um imóvel, bairro ou rua"
            value={searchText}
            onChange={handleSearchChange}
          />
          <Button onClick={handleSearchClick}>
            Buscar <IoSearchSharp />
          </Button>
        </div>
        <div>
          <h2>Ordenar por:</h2>
          <Select
            options={options}
            onChange={handleSortChange}
            value={sortOption}
          />
        </div>
      </SearchFields>
      <PropertiesGrid>
      {sortedProperties.length > 0 ? (
          sortedProperties.map((property) => (
            <PropertyCard
              key={property.id}
              id={property.id}
              nome={property.nome}
              preco={property.planta.preco}
              rua={property.rua}
              bairro={property.bairro}
              dorms={property.planta.dorms}
              metragem={property.planta.metragem}
              vagas={property.planta.vagas}
              fachada={property.fachada}
            />
          ))
        ) : (
          <p>Nenhum imóvel corresponde à busca.</p>
        )}
      </PropertiesGrid>
    </StyledPropertyList>
  );
};

export default PropertyList;
