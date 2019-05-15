import React from 'react'

function ArticleItem(props){

  return (
    <div className="item light">
      <strong>{props.title}</strong>
    </div>
  )
}

export default ArticleItem