export async function getPropertyList() {
    const url = "https://api.estagio.amfernandes.com.br/imoveis";

    try {
        const response = await fetch(url);
        const data = await response.json();

        const propertiesWithId = data.map((property: Imovel, index: number) => ({
            ...property,
            id: `property-${index + 1}`
        }));

        return propertiesWithId;
    } catch (error) {
        console.error(error);
        return [];
    }
}
