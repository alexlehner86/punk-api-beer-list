import { FunctionComponent, useState } from 'react';

import styles from './TwoStateSwitch.module.scss';

interface TwoStateSwitchProps {
    switchLabel: string;
    /**
     * Values of the first and second selectable state.
     */
    stateValues: [string, string];
    /**
     * Labels of the first and second selectable state.
     */
    stateLabels: [string, string];
    initialState: string;
    onStateChange: (newState: string) => void;
}

/**
 * Displays a two-state switch element that allows the user to toggle between two states.
 * The switch is implemented as two buttons with role="switch" that can be focused and
 * activated individually. State changes are communicated via `onStateChange` property.
 * You can set the base font-size via CSS variable `--switch-font-size` (default: 1rem).
 */
const TwoStateSwitch: FunctionComponent<TwoStateSwitchProps> = (props): JSX.Element => {
    const { initialState, stateLabels, stateValues, switchLabel } = props;
    const [selectedState, setSelectedState] = useState(initialState);

    const toggleSwitch = () => {
        const newState = selectedState === stateValues[0] ? stateValues[1] : stateValues[0];
        props.onStateChange(newState);
        setSelectedState(newState);
    }

    return (
        <section className={styles.container} role="group" aria-label={switchLabel}>
            <p>{switchLabel}:</p>
            <div className={styles.switchWrapper}>
                <button
                    type="button"
                    role="switch"
                    aria-checked={selectedState === stateValues[0]}
                    onClick={toggleSwitch}
                >
                    {stateLabels[0]}
                </button>
                <button
                    type="button"
                    role="switch"
                    aria-checked={selectedState === stateValues[1]}
                    onClick={toggleSwitch}
                >
                    {stateLabels[1]}
                </button>
            </div>
        </section>
    );
}

export default TwoStateSwitch;
