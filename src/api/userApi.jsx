class UserApi {

  static requestHeaders(){
    // debugger
    return {'AUTHORIZATION': `Bearer ${sessionStorage.jwt}`}
  }

  static testAuth(){
    const myHeaders = this.requestHeaders();
    const request = new Request('http://localhost:3000/api/v1/users/1', {
      method: 'GET',
      headers: myHeaders
    })

    return fetch(request)
          .then(response => response.json())
          .then(json => console.log(json.message))
  }

}

export default UserApi
