class MarvelServices {

    _apiKey = 'b3d73c3385d8dc59f4408eb82dad9545';
    _apiBase = 'https://gateway.marvel.com:443/v1/public/';

    getResources = async (url) => {
        const response = await fetch(url);
        console.log('fetch')
        if(!response.ok) {
            throw new Error('could not fetch');
        }
        return await response.json();
    }
    getAllCharacters = async (offset = 10) => {
        const response = await this.getResources(`${this._apiBase}characters?limit=9&offset=${offset}&apikey=${this._apiKey}`);
        return this._transformCharacter(response.data.results[0]);
        
    }

    getCharacters = async (offset) => {
        const response = await this.getResources(`${this._apiBase}characters?limit=1&offset=${offset}&apikey=${this._apiKey}`);
        return this._transformCharacter(response.data.results[0]);
    }

    _transformCharacter = (item) => {
        return {
          id: item.id,
          name: item.name,
          description: item.description,
          thumbnail: item.thumbnail.path +'.'+ item.thumbnail.extension,
        }
    }

   
}
export default MarvelServices;


// https://gateway.marvel.com:443/v1/public/characters?limit=1&offset=10&apikey=b3d73c3385d8dc59f4408eb82dad9545