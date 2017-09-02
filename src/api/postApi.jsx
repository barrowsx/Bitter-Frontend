class PostApi{

  static requestHeaders(){
    // debugger
    return {'AUTHORIZATION': `Bearer ${sessionStorage.jwt}`}
  }

  static grabPosts(){
    const headers = new Headers(this.requestHeaders())
    const request = new Request('http://localhost:3000/api/v1/users/current/following_posts', {
      method: 'GET',
      headers: headers
    })

    return fetch(request)
           .then(response => {
             if(response.status === 401){
               sessionStorage.clear()
               return {error: 'Access Denied. Your session likely expired.'}
             } else {
               return response.json()
             }
           })
  }

  static grabAllPosts(){
    const headers = new Headers(this.requestHeaders())
    const request = new Request('http://localhost:3000/api/v1/posts', {
      method: 'GET',
      headers: headers
    })

    return fetch(request)
           .then(response => {
             console.log(response)
             if(response.status === 401){
               sessionStorage.clear()
               return {error: 'Access Denied. Your session likely expired.'}
             } else {
               return response.json()
             }
           })
  }
}

export default PostApi
