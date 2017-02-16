import fetch from 'isomorphic-fetch'

export function fetchRequest(url){
    if(typeof url !== 'string') return;

    return fetch(url)
        .then(responce => responce.json());
}