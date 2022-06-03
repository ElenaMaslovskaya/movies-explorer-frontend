class MoviesApi {
   constructor({ moviesURL }) {
      this._moviesURL = moviesURL;
   }

   _getServerResponse(res) {
      if (res.ok) {
         return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
   }

   getAllMovies() {
      return fetch(this._moviesURL)
         .then((res) => {
            return this._getServerResponse(res);
         });
   };
}

export const moviesApi = new MoviesApi({
   moviesURL: 'https://api.nomoreparties.co/beatfilm-movies'
});