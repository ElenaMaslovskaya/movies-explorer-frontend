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
         body: JSON.stringify({
            name: name,
            email: email
         })
      })
         .then(res => this._getCheckResponse(res));
   }

   getUserMovies(token) {                                                        //метод для получения фильмов
      return fetch(`${this._baseURl}/movies`, {
         method: 'GET',
         headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': this._contentType
         }
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

   deleteMovie(movieId) {
      return fetch(`${this._baseURL}/movies/${movieId}`, {
         method: 'DELETE',
         headers: this._headers,
      })
         .then(res => this._getCheckResponse(res));
   };
}

const api = new MainApi({
   // baseURL: 'https://movies.api.maslovski.nomoredomains.work'
   baseURL: 'http://localhost:3001',
   contentType: 'application/json',
});

export default api;