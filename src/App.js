import React from 'react';
import logo from './logo.svg';
import './App.css';
import articles from './articles'
import ArticleCard from './ArticleCard'
import ArticleItem from './ArticleItem'


class App extends React.Component {

  state = {
    articles: articles,
    view: 'cards',
    mode: 'light'
  }

  changeView = (viewBtn) => {
    if (viewBtn.target.className === 'mode'){
      if (this.state.mode === 'light'){
        this.setState({
          mode: 'dark'
        })
      } else {
        this.setState({
          mode: 'light'
        })
      }
    } else if (viewBtn.target.className === 'view'){
        if (this.state.view === 'cards'){
        this.setState({
          view: 'list'
        })
      } else {
        this.setState({
          view: 'cards'
        })
      }
    }
  }

  viewCase = () => {
    if (this.state.view === 'cards'){
      return 'List'
    }
    else{
      return 'Cards'
    }
  }

  modeCase = () => {
    if (this.state.mode === 'light'){
      return 'Dark'
    }
    else{
      return 'Light'
    }
  }

  renderArticles = () => {
    if (this.state.view === 'list'){
      return this.state.articles.map(article => {
        return <ArticleItem 
                key={article.id} 
                title={article.title}
                url={article.url}
                urlToImage={article.urlToImage}
                description={article.description}
                />
      })
    }
    else
    {
      return this.state.articles.map(article => {
        return <ArticleCard 
                key={article.id} 
                title={article.title}
                url={article.url}
                urlToImage={article.urlToImage}
                description={article.description}
                />
      })
    }
  }

  changeListItem = (item) => {
    // debugger;
    console.log(item.target)
    if (this.state.view === 'list'){
      if (item.target.className === 'list light'){
        item.target.className = 'card light'
      }
      else{
        item.target.className = 'list light'
      }
    }
  }

  render(){
    return (
      <div className={this.state.mode} onClick={this.changeView}>
        <button className='mode'>Switch to {this.modeCase()} Mode</button>
        <button className='view'>Switch to {this.viewCase()} View</button>
        <h1 style={{marginRight: '25vw', marginLeft: '25vw', textAlign: 'center'}}>Hi! I'm pretty sure I overcomplicated this and increased load from my work!</h1>
        <div className={this.state.view} onClick={this.changeListItem}>
          {this.renderArticles()}
        </div>
      </div>
    );
  }
}

export default App;
