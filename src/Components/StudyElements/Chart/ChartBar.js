import './ChartBar.css';

const ChartBar = () => {

    return (
        <div className='Chart-bar__barContainer'>
            <div className='Chart-bar__bar'>
                <div className='Chart-bar__fill'></div>
            </div>
            <p className='Chart-bar__label'>Mon</p>
        </div>
    );
}

export default ChartBar;