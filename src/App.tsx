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

    const onFilterByAbvStateChange = (newState: string) => {
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
                <TwoStateSwitch
                    switchLabel='Filter by ABV'
                    stateValues={[AlcoholByVolumeFilter.Weak, AlcoholByVolumeFilter.Strong]}
                    stateLabels={['Weak', 'Strong']}
                    initialState={AlcoholByVolumeFilter.Weak}
                    onStateChange={onFilterByAbvStateChange}
                />
                {isLoaded ? (
                    <BeerItemList items={beerItems} />
                ) : <p className='App-loading-message'>Loading beer items...</p>}
            </main>
        </>
    );
}

export default App;
