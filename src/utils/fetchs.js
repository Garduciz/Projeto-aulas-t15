// Convenção = Criação de um HOOk
export default async function useFetch() {
  const request = await fetch(`https://pokeapi.co/api/v2/pokemon`);
  return await request.json();
}
