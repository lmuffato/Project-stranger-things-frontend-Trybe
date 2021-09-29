import axios from 'axios';

require('dotenv/config');

// const DEFAULT_TIMEOUT = 3000;
const DEFAULT_TIMEOUT = process.env.REACT_APP_HAEKINS_TIMEOUT;

class CharactersService {
  constructor({ url = 'http://localhost:3000', timeout = Number(DEFAULT_TIMEOUT) }) {
    this.http = axios.create({
      baseURL: url,
      timeout,
    });
  }

  async getCharacters(name, page, size) {
    const params = {
      page,
      size,
      name,
    };

    return this.http.get('/', { params });
  }
}

export default CharactersService;
