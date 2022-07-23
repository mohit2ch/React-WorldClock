import classes from "./Menu.module.css";
import MenuItem from "./MenuItem";
import Accordion from "react-bootstrap/Accordion";
import cities_asia from "../store/Asia";
import cities_europe from "../store/Europe";
import cities_africa from "../store/Africa";
import cities_america from "../store/America";
import AccordionItem from "react-bootstrap/esm/AccordionItem";
import ClockContext from "../store";
import { useContext } from "react";
export default function Menu() {
  const ctx = useContext(ClockContext);
  return (
    <div className={classes["menu-container"]}>
      <h1>Set Location</h1>
      <div className={classes['menu-sub']}>
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="menu">
            <Accordion.Header>{ctx.location}</Accordion.Header>
            <Accordion.Body>
              <div className={classes.menu}>
                <Accordion>
                  <MenuItem title="Asia" id="1" cities={cities_asia}></MenuItem>
                  <MenuItem
                    title="Europe"
                    id="2"
                    cities={cities_europe}
                  ></MenuItem>
                  <MenuItem
                    title="Africa"
                    id="3"
                    cities={cities_africa}
                  ></MenuItem>
                  <MenuItem
                    title="America"
                    id="4"
                    cities={cities_america}
                  ></MenuItem>
                </Accordion>
              </div>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </div>
  );
}
