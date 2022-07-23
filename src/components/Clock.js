import classes from './Clock.module.css';
import ClockContext from '../store';
import { useContext } from 'react';
export default function Clock(){
    const ctx = useContext(ClockContext);

    return <div className={classes['clock-container']}>
        <div className={classes.clock}>
            {ctx.dt}
        </div>
    </div>
}