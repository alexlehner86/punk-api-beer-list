import './App.scss';

import { useEffect, useState } from 'react';

import BeerItemList from './components/BeerItemList/BeerItemList';
import TwoStateSwitch from './components/TwoStateSwitch/TwoStateSwitch';
import { AlcoholByVolumeFilter } from './constants/filter.constants';
import { fetchBeerList } from './helpers/requests';
import { BeerItem } from './models/beer-item.model';
import BrowseButton from './components/BrowseButton/BrowseButton';

const App = (): JSX.Element => {
    const [alcoholByVolume, setAlcoholByVolume] = useState(AlcoholByVolumeFilter.Weak);
    const [beerItems, setBeerItems] = useState<BeerItem[]>([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [page, setPage] = useState(1);

    useEffect(() => {
        fetchBeerList().then(
            beerItems => {
                setBeerItems(beerItems);
                setIsLoaded(true);
            },
            error => console.error(error)
        );
    }, []);

    const onBrowseFilterList = (pageIncrement: number): void => {
        const newPage = page + pageIncrement;
        fetchBeerList(newPage, alcoholByVolume).then(
            beerItems => {
                setBeerItems(beerItems);
                setPage(newPage);
            },
            error => console.error(error)
        );
    }

    const onFilterByAbvStateChange = (newState: string): void => {
        fetchBeerList(1, newState as AlcoholByVolumeFilter).then(
            beerItems => {
                setBeerItems(beerItems);
                setPage(1);
            },
            error => console.error(error)
        );
        setAlcoholByVolume(newState as AlcoholByVolumeFilter);
    }

    return (
        <>
            <header className="App-header">
                <h1>Beer List 🍻</h1>
            </header>
            <main>
                <div className="App-controls">
                    <BrowseButton isDisabled={page === 1} isNext={false} onButtonClick={onBrowseFilterList} />
                    <TwoStateSwitch
                        switchLabel='Filter by ABV'
                        stateValues={[AlcoholByVolumeFilter.Weak, AlcoholByVolumeFilter.Strong]}
                        stateLabels={['Weak', 'Strong']}
                        initialState={AlcoholByVolumeFilter.Weak}
                        onStateChange={onFilterByAbvStateChange}
                    />
                    <BrowseButton isDisabled={false} isNext={true} onButtonClick={onBrowseFilterList} />
                </div>
                {isLoaded ? (
                    <BeerItemList items={beerItems} />
                ) : <p className='App-loading-message'>Loading beer items...</p>}
            </main>
        </>
    );
}

export default App;
