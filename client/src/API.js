const API_URL = 'http://localhost:4000';

export async function currentBestsellers() {
    const response = await fetch(`${API_URL}`);
    return response.json();
}