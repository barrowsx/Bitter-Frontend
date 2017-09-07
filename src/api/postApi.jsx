class PostApi{

  static requestHeaders(){
    // console.log('PostApi', sessionStorage.jwt)
    return {'AUTHORIZATION': `Bearer ${sessionStorage.jwt}`}
  }

  static grabPosts(){
    const headers = new Headers(this.requestHeaders())
    const request = new Request('http://bitter-api.herokuapp.com/api/v1/users/current/following_posts', {
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

  static grabUserPosts(userId){
    const headers = new Headers(this.requestHeaders())
    const request = new Request('http://bitter-api.herokuapp.com/api/v1/users/' + userId + '/posts', {
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
    const request = new Request('http://bitter-api.herokuapp.com/api/v1/posts', {
      method: 'GET',
      headers: headers
    })

    return fetch(request)
           .then(response => {
            //  console.log(response)
             if(response.status === 401){
               sessionStorage.clear()
               return {error: 'Access Denied. Your session likely expired.'}
             } else {
               return response.json()
             }
           })
  }

  static likePost(postId){
    const headers = new Headers(this.requestHeaders())
    const request = new Request('http://bitter-api.herokuapp.com/api/v1/posts/' + postId + '/like', {
      method: 'POST',
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

  static grabPostLikes(postId){
    const headers = new Headers(this.requestHeaders())
    const request = new Request('http://bitter-api.herokuapp.com/api/v1/posts/' + postId + '/like', {
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

  static createPost(content){
    let headers = new Headers(this.requestHeaders())
    headers.append('Content-Type', 'application/json')
    const request = new Request('http://bitter-api.herokuapp.com/api/v1/posts', {
      method: 'POST',
      headers: headers,
      body: JSON.stringify({user: content})
    })

    return fetch(request)
           .then(response => {
             return response.json()
           })
  }
}

export default PostApi
