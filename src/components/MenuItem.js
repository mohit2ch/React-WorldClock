import Accordion from 'react-bootstrap/Accordion';
import classes from './MenuItem.module.css';
// import { propTypes } from 'react-bootstrap/esm/Image';
import ClockContext from '../store';
import { useContext } from 'react';
function MenuItem(props) {
  const ctx = useContext(ClockContext);
  function clickHandler(city){
    const location = `${props.title}/${city}`;
    console.log(location);
    ctx.setLocation(location);
  }
  return (
    <Accordion.Item eventKey = {props.id}>
    <Accordion.Header>
      {props.title}
    </Accordion.Header>
    <Accordion.Body>
    <div className={classes.cities}>
      {props.cities.map(
        (ele)=>{
          return <button onClick={()=>{clickHandler(ele)}}>{ele}</button>
        }
      )}
      </div>
    </Accordion.Body>
</Accordion.Item>
  );
}

export default MenuItem;