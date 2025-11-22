import { useState, useEffect } from "react";

const JSON_QUOTES = "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json";

const getRandomQuote = (quotes) => quotes[Math.floor(Math.random() * quotes.length)];

const useData = () => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  const getData = async () => {
    try {
      const response = await fetch(JSON_QUOTES);
      if (!response.ok) throw new Error(`Error status ${response.status}`);

      const data = await response.json();
      const randomQuote = getRandomQuote(data.quotes);
      setQuote(randomQuote.quote);
      setAuthor(randomQuote.author);

    } catch (error) {
      console.error("Error detected:", error)
    }
  }

  useEffect(() => {
    getData();
  }, [])

  return { quote, author, getData }
};

export default useData; 