import './App.css'
import { FaQuoteLeft } from 'react-icons/fa'
import { FaSquareXTwitter } from "react-icons/fa6";
import { useData } from './hooks/useData'

function App() {
  const { quote, author, getData } = useData()
  const handleClick = () => {
    getData()
  }

  const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(`"${quote}" - ${author}`)}`

  return (
    <div className="main-box">
      <div id="quote-box">
        <div id="text-container">
          <FaQuoteLeft id="quote-icon" />
          <p id="text">{quote}</p>
        </div>
        <div id="author-container">
          <p id="author">- {author}</p>
        </div>
        <div className="buttons">
         <a className="button" id="tweet-quote" href={tweetUrl} target="_blank" rel="noopener noreferrer">
          <FaSquareXTwitter id="twitter-icon"/> 
         </a>
        <button onClick={handleClick} id="new-quote">New Quote</button>
        </div>
      </div>
    </div>
  )
    
}

export default App
