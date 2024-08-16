export function formatPrice(amount: number): string {
    return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    }).format(amount);
}

export function formatCEP(cep: string): string {
    if (cep.length === 8) {
        return cep.slice(0, 5) + '-' + cep.slice(5);
    }
    return cep;
}
