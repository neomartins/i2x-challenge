
var config = require('../../config.json');


export function fetchUtil(method, URL, data, callback) {
    fetch(config.urlBase + URL, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: method,
      body: JSON.stringify(data)
    })
    .then(data => data.json())
    .then(token => {
      callback(token)
    })
    .catch(err => console.log(err)) 
}

export function fetchUtilGetAuth(method, URL, data, callback) {
    fetch(config.urlBase + URL, {
      headers: {
         'Authorization': `JWT ${data.token}`,
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: method,
    })
    .then(data => data.json())
    .then(result => {
      callback(result.results)
    })
    .catch(err => console.log(err)) 
}