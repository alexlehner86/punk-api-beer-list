import './App.scss';

import React, { useEffect, useState } from 'react';

import { BEERS_PER_PAGE, PUNK_API_URL } from './constants/app.constants';
import { BeerItemResponse } from './models/beer-item.interface';
import { BeerItem } from './models/beer-item.model';

const App = (): JSX.Element => {
    const [beerItems, setBeerItems] = useState<BeerItem[]>([]);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        console.warn('fetching');
        fetch(`${PUNK_API_URL}?per_page=${BEERS_PER_PAGE}`)
            .then(res => res.json() as Promise<BeerItemResponse[]>)
            .then(
                result => {
                    setBeerItems(result.map(item => new BeerItem(item)));
                    setIsLoaded(true);
                },
                error => console.error(error)
            );
    }, []);

    return (
        <>
            <header className="App-header">
                <h1>Beer List</h1>
            </header>
            <main>
                <p>{beerItems.length}</p>
            </main>
        </>
    );
}

export default App;
