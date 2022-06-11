class MainApi {
   constructor({ baseURL, contentType }) {
      this._baseURL = baseURL;
      this._contentType = contentType;
   }

   _getCheckResponse(res) {
      if (res.ok) {
         return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
   }

   updateUserInfo(name, email) {
      return fetch(`${this._baseURL}/users/me`, {
         method: 'PATCH',
         headers: {
            'Authorization': `Bearer ${localStorage.getItem('jwt')}`,
            'Content-Type': this._contentType
         },
         body: JSON.stringify({ name, email })
      })
         .then(res => this._getCheckResponse(res));
   }

   getUserMovies(token) {  
      return fetch(`https://movies.api.maslovski.nomoredomains.work/movies`, {
      // return fetch(`http://localhost:3001/movies`, {
         method: 'GET',
         headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': this._contentType
         },
      })
         .then(res => this._getCheckResponse(res));
   }

   saveUserMovie({
      country,
      director,
      duration,
      year,
      description,
      image,
      trailerLink,
      nameRU,
      nameEN,
      thumbnail,
      id
   }, token) {
      return fetch(`${this._baseURL}/movies`, {
         method: 'POST',
         headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': this._contentType
         },
         body: JSON.stringify({
            country: country || 'No country',
            director,
            duration,
            year,
            description,
            image,
            trailerLink: trailerLink,
            nameRU: nameRU || 'No RUname',
            nameEN: nameEN || 'No ENname',
            thumbnail,
            movieId: id,
         })
      })
         .then(res => this._getCheckResponse(res));
   };

   deleteMovie(movieId, token) {
      return fetch(`${this._baseURL}/movies/${movieId}`, {
         method: 'DELETE',
         headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': this._contentType
         }
      })
         .then(res => this._getCheckResponse(res));
   };
}

const api = new MainApi({
   baseURL: 'https://movies.api.maslovski.nomoredomains.work',
   // baseURL: 'http://localhost:3001',
   contentType: 'application/json',
});

export default api;