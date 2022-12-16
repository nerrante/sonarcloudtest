import {useState} from "react";

const ToggleButton = (): JSX.Element => {
    const [color, setColor] = useState<string>('blue')

    const changeColor = () => {
        if (color === 'blue') {
            setColor('red')
        }
        else {setColor('blue')}
    };

    return (
        <button
            style={{backgroundColor: color}}
            aria-label='toggle button'
            onClick={() => {
                changeColor();
            }}
            data-testid='ToggleButton'>Toggle Me!</button>
    );
};

export default ToggleButton