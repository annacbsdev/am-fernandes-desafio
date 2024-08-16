
export async function getPropertyList() {
    const url = "https://api.estagio.amfernandes.com.br/imoveis";

    try {
        const response = await fetch(url);
        const data: Imovel[] = await response.json();
        return data; 
    } catch (error) {
        console.error(error);
        return []; 
    }
}

