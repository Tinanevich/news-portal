import './styles.scss';
import { useState, useEffect } from 'react';
import routeMain from './routes';
import PageTitle from 'components/PageTitle';


import NewsList from 'components/NewsList';
import getNews from 'services/getNews';

const NewsListPage = () => {
    const [newsList, setNewsList] = useState([]);

    useEffect(()=> {
        getNews().then(response => {
            setNewsList(response.data.articles)
        })
    }, [])

    return(
        <section className='newsListPage'>
            <PageTitle
                title={
                    <h2>
                        Быть <br /> в курсе <span>собыий</span>
                    </h2>
                }
            />
             {newsList.length > 0 && <NewsList list={newsList}/>}
        </section>
    )
}
export {routeMain};

export default NewsListPage;