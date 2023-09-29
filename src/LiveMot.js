import { useState, useEffect } from 'react';
import './LiveMot.css';
import axios from 'axios';

function LiveMot() {

    const [quote, setQuote] = useState('');
    const [author, setAuthor] = useState('');
    const url = "http://api.quotable.io/random";
    
    const getQuotable = () => {
        axios.get(url)
        .then(res => {
            setQuote(`${res.data.content}`)
            setAuthor(`${res.data.author}`)
        })
        .catch(err => {
            alert(`Sorry, we couldn't fetch a quote right now. Please try again later. Error: ${err}`)
        });
    }

    
    useEffect(() => {
        getQuotable();
        setInterval(getQuotable,5000);
    },[]);

    return(
        <>
            <header>
                <h1 className='heading center-block'>Live Motivational Quotes</h1>
                <p className='intro center-block'>A project by Sunny Sharma under the guidance of Kamal Sir.</p>
            </header>
            <div className='container'>
                <p className='quote'>{quote}</p>
                <p className='author'>-{author}</p>
            </div>
        </>
    );
}

export default LiveMot;


