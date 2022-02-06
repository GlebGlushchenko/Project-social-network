import React from 'react'
import { connect } from 'react-redux'
import News from './News'

import { getNewsThunkCreater } from '../redux/news-reducer'

const NewsContainer = (props) => {
  return <News {...props} />
}

const mapStateToProps = (state) => ({
  news: state.news.news,
})

export default connect(mapStateToProps, { getNewsThunkCreater })(NewsContainer)
