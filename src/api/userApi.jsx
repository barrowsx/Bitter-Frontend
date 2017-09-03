class UserApi {

  static requestHeaders(){
    // debugger
    return {'AUTHORIZATION': `Bearer ${sessionStorage.jwt}`}
  }

  static loadCurrentUser(){
    const myHeaders = this.requestHeaders()
    const request = new Request('http://localhost:3000/api/v1/users/current', {
      method: 'GET',
      headers: myHeaders
    })

    return fetch(request)
           .then(response => response.json())
  }

  static loadCurrentFollowing(){
    const myHeaders = this.requestHeaders()
    const request = new Request('http://localhost:3000/api/v1/users/current/following', {
      method: 'GET',
      headers: myHeaders
    })

    return fetch(request)
           .then(response => response.json())
  }

  static loadCurrentFollowers(){
    const myHeaders = this.requestHeaders()
    const request = new Request('http://localhost:3000/api/v1/users/current/followers', {
      method: 'GET',
      headers: myHeaders
    })

    return fetch(request)
           .then(response => response.json())
  }

  static loadUser(user){
    const myHeaders = this.requestHeaders();
    const request = new Request('http://localhost:3000/api/v1/users/' + user.id, {
      method: 'GET',
      headers: myHeaders
    })

    return fetch(request)
          .then(response => response.json())
  }

  static createUser(newUser){
    let myHeaders = new Headers()
    myHeaders.append('Content-Type', 'application/json')
    const request = new Request('http://localhost:3000/users', {
      method: 'POST',
      headers: myHeaders,
      body: JSON.stringify({user: newUser})
    })

    return fetch(request).then(response => response.json())
  }
}

export default UserApi
