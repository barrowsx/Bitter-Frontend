import PostApi from '../api/postApi'
import * as types from './actionTypes'

export function createPostSuccess(){
  return {type: types.POST_CREATE_SUCCESS}
}

export function createPostFailure(response){
  return {type: types.POST_CREATE_FAILURE, response}
}

export function createPost(content){
  return dispatch => {
    return PostApi.createPost(content).then(json => {
      if(json.error === undefined){
        dispatch(createPostSuccess())
      } else {
        dispatch(createPostFailure(json))
      }
    })
  }
}
