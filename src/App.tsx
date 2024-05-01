import './App.scss';

import { useEffect, useState } from 'react';

import BeerItemList from './components/BeerItemList/BeerItemList';
import TwoStateSwitch from './components/TwoStateSwitch/TwoStateSwitch';
import { AlcoholByVolumeFilter } from './constants/filter.constants';
import { fetchBeerList } from './helpers/requests';
import { BeerItem } from './models/beer-item.model';

const App = (): JSX.Element => {
    const [beerItems, setBeerItems] = useState<BeerItem[]>([]);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        fetchBeerList().then(
            beerItems => {
                setBeerItems(beerItems);
                setIsLoaded(true);
            },
            error => console.error(error)
        );
    }, []);

    const onFilterByAbvStateChange = (newState: string): void => {
        fetchBeerList(newState as AlcoholByVolumeFilter).then(
            beerItems => setBeerItems(beerItems),
            error => console.error(error)
        );
    }

    return (
        <>
            <header className="App-header">
                <h1>Beer List 🍻</h1>
            </header>
            <main>
                <div className="App-controls">
                    <TwoStateSwitch
                        switchLabel='Filter by ABV'
                        stateValues={[AlcoholByVolumeFilter.Weak, AlcoholByVolumeFilter.Strong]}
                        stateLabels={['Weak', 'Strong']}
                        initialState={AlcoholByVolumeFilter.Weak}
                        onStateChange={onFilterByAbvStateChange}
                    />
                </div>
                {isLoaded ? (
                    <>
                        <BeerItemList items={beerItems} />
                        <div className="attribution">
                            <p>
                                Disclaimer: This website is a demo project to demonstrate various web features like, e.g.,
                                subgrids. It is not endorsed nor does it officially represent BrewDog PLC. Most product names
                                and descriptions are copied from www.brewdog.com
                            </p>
                            <a href="https://www.vecteezy.com/free-vector/beer-bottle-icon" target="_blank" rel="noreferrer">
                                Beer Bottle Icon Vectors by Vecteezy
                            </a>
                        </div>
                    </>
                ) : <p className='App-loading-message'>Loading beer items...</p>}
            </main>
        </>
    );
}

export default App;
