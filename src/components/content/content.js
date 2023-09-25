import React, { useContext } from 'react';
import { AppFunctions } from '../../ducks';
import { Table } from './components/table';
import { Grid } from './components/grid';
import './styles.scss';
import img from '../../images/Spin-1s-200px.gif';

const alphabets = [...Array(26).keys()].map(i => String.fromCharCode(i + 97));

export const Content = () => {
    const props = useContext(AppFunctions);
    const handleClick = (e) => {
        if (e.target.tagName.toLowerCase() === 'li') {
            props.updateCurrentkey(e.target.innerHTML);
        }
    }
    const data = props.getDataSet(props.currentKey);
    const { Extracts = [] } = data?.res ?? {};

    return (
        <section className='content'>
            <h2>Get to know more about your selection</h2>
            <section className='alphabet-list'>
                <ul onClick={handleClick}>
                    {alphabets.map((elem) => (
                        <li key={elem} className={props.currentKey === elem ? 'selected' : ''}>{elem}</li>
                    ))}
                </ul>
            </section>
            <section className='grid-details-section'>
                <section className='view-type'>
                    <ul>
                        <li>
                            Select view Type:
                        </li>
                        <li>
                            <input type="radio"
                                id="table"
                                name="viewType"
                                value="table"
                                onClick={() => props.updateViewType('table')}
                                checked={props.viewType === 'table'} />
                            <label for="table">Table</label>
                        </li>
                        <li>
                            <input type="radio"
                                id="grid"
                                name="viewType"
                                value="grid"
                                onClick={() => props.updateViewType('grid')}
                                checked={props.viewType === 'grid'} />
                            <label for="grid">Grid</label>
                        </li>
                    </ul>
                </section>
               
                {!props.isLoading && (
                    <>
                        {(!props.viewType || !props.currentKey) && (
                            <p className='info-sec'>Select view and any alaphabet to see the content</p>
                        )}
                        {!Extracts.length && (!(!props.viewType || !props.currentKey)) && (
                            <p className='info-sec'>There is no content for this</p>
                        )}
                        {Extracts.length > 0 && (<>
                            {props.viewType === 'table' && <Table data={Extracts} />}
                            {props.viewType === 'grid' && <Grid data={Extracts} />}
                        </>
                        )}
                    </>
                )}
                {props.isLoading && (
                     <img src={img} className='loading-spin-img' alt='loading'/>
                )}
                
            </section>
        </section>
    )
}