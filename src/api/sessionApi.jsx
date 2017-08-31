class SessionApi {
  static login(credentials) {
    let myHeaders = new Headers({'Content-Type': 'application/json'})
    const request = new Request('http://localhost:3000/login', {
      method: 'POST',
      headers: myHeaders,
      body: JSON.stringify({auth: credentials})
    })

    return fetch(request).then(response => response.json())
  }
}

export default SessionApi
