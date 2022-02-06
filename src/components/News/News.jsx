import React from 'react'
import { useEffect } from 'react'
// https://newsapi.org/v2/everything?q=tesla&from=2022-01-06&sortBy=publishedAt&apiKey=bb5af496690a467eb59db91b2c7dd005
import * as axios from 'axios'

const News = ({ news, getNewsThunkCreater }) => {
  React.useEffect(() => {
    getNewsThunkCreater()
  }, [])

  console.log(news)
  const style = {
    h1: {
      fontSize: '30px',
    },
    div: {
      margin: '20px 0px',
    },
  }

  return (
    <div className="news_wprapper">
      <div className="news_page">
        <h1 className="news_page-title">.News</h1>
        <div className="content_wrapper">
          {news.map((item, index) => {
            return (
              <div key={index} className="news">
                <h2>{item.title}</h2>
                <img className="newsImg" src={item.urlToImage} alt="" />
                <p>{item.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default News
