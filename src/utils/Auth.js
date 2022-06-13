class Auth {
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

   register(name, email, password) {
      return fetch(`${this._baseURL}/signup`, {
         method: 'POST',
         headers: {
            'Content-Type': this._contentType
         },
         body: JSON.stringify({ name, email, password })
      })
         .then(res => this._getCheckResponse(res))
   };

   login(email, password) {
      return fetch(`${this._baseURL}/signin`, {
         method: 'POST',
         headers: {
            'Content-Type': this._contentType
         },
         body: JSON.stringify({ email, password })
      })
         .then(res => this._getCheckResponse(res));
   };

   getData(token) {
      return fetch(`${this._baseURL}/users/me`, {
         method: 'GET',
         headers: {
            'Content-Type': this._contentType,
            'Authorization': `Bearer ${token}`,
         }
      })
         .then(res => this._getCheckResponse(res));
   };
}

const auth = new Auth({
   baseURL: 'https://movies.api.maslovski.nomoredomains.work',
   // baseURL: 'http://localhost:3001',
   contentType: 'application/json'
});

export default auth;
