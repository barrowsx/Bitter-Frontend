class PostApi{
  static grabPosts(){
    const request = new Request('http://localhost:3000/api/v1/posts')

    return fetch(request)
           .then(response => response.json())
  }
}
