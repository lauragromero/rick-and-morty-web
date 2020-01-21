const ENDPONINT= 'https://rickandmortyapi.com/api/character/';

const fechDataApi=()=>fetch(ENDPONINT).then(response=> response.json());

export {fechDataApi};