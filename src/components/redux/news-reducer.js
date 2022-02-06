import { newsApi } from '../../api/api'
const SET_NEWS = 'SET_NEWS'

const initialState = {
  news: [],
}

const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_NEWS:
      return {
        ...state,
        news: action.news,
      }

    default:
      return state
  }
}

export const setNews = (news) => ({ type: SET_NEWS, news })

export const getNewsThunkCreater = () => {
  return (dispatch) => {
    newsApi.getNews().then((res) => {
      dispatch(setNews(res.articles))
    })
  }
}
export default newsReducer
