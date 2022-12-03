import { FunctionComponent } from 'react';

import styles from './BrowseButton.module.scss';

interface BrowseButtonProps {
    isDisabled: boolean;
    /**
     * Whether this the next or the previous button.
     */
    isNext: boolean;
    onButtonClick: (pageIncrement: number) => void;
}

const BrowseButton: FunctionComponent<BrowseButtonProps> = ({ isDisabled, isNext, onButtonClick }): JSX.Element => (
    <button
        type="button"
        aria-label={isNext ? 'Next Page' : 'Previous Page'}
        className={isNext ? styles.browseNext : styles.browsePrevious}
        disabled={isDisabled}
        onClick={() => onButtonClick(isNext ? 1 : -1)}
    >
        {isNext ? <span>Next</span> : null}
        <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48" viewBox="0 0 48 48" fill="currentColor" aria-hidden="true">
            <path d="M 20,44 0,24 20,4 24.8,8.85 9.65,24 24.8,39.15 Z"></path>
        </svg>
        {!isNext ? <span>Previous</span> : null}
    </button>
);

export default BrowseButton;
