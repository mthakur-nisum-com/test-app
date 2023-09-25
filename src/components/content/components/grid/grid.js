import React from 'react';
import './styles.scss';
import {formatDate} from '../../../../ducks';

export const Grid = ({ data=[]})=> (
    <section className='grid-view-section'>
        <ul>
            {data.map((obj,idx) =>(
                <li>
                    <img src={obj.jacketUrl} alt={obj.author}/>
                    <div className='content'>
                        <div className='content-section'>
                            <h3>{obj.title}</h3>
                            <p>{obj.author}</p>
                            <p>{formatDate(obj.publicationDate)}</p>
                            <p>Reading Time : {obj.estimatedReadingTimeMinutes} mins</p>
                        </div>
                    </div>
                </li>
            ))}
        </ul>
    </section>
)