
export const getSearchClient = (originComp, key, page) => {
    
    const url = `http://hn.algolia.com/api/v1/search?query=${key}&page=${page-1}`;

    fetch(url, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
        }
    }).then(response => {
        convertToJSON(response).then(result => {
            originComp.setData(result);
        })
    }).catch(err => {
       originComp.showError(err);
    })
}

const convertToJSON = response => {
    return Promise.resolve(response.json());
}