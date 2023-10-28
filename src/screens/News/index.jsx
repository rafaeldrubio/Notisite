import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import '../../components/LeyoutComponents/styles.css';

const News = () => {
const [news, setNews] = useState([])

    const getNews = async () => {
      try{
        const response = await axios.get("http://localhost:5000/news");
        const data = response.data;
        setNews(data);
    } 
      catch(error){
        console.log(error);
      } 
    };
    useEffect(()=> {
        getNews();
    }, []);
    return(
        <div>
        <h1 className="news-form-title">Últimas Notícias</h1>
            {news.length === 0 ? (
            <p>Carregando...</p>
            ) : (
            news.map((News) => (
                <div className ="news-text">
                    <div className="container-news" key={News.id}>
                        <div className="wrap-news">
                            <a href= {News.link} target="_blank" rel="noopener noreferrer">
                            <h2>{News.title}</h2>
                            <p style={{ marginTop: "15px" }}>{News.createdAt}</p>
                            </a>
                         </div>
                    </div>
                </div>
            ))
            )}
        </div>
    );
};
export default News;