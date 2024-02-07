import { ListDay, ListDayLi } from "./StyleComponent";
import useFetch from "../hooks/useFetch";

import { Link } from "react-router-dom";

interface Day {
    id: number;
    day: number;
  }

export default function DayList(){
    const days = useFetch<Day>("http://localhost:3002/days");
    return(        
        <ListDay>
            {days.map(day => (
                <ListDayLi key={day.id}>
                    <Link to={"/day/" + day.day}>Day {day.day}</Link>
                </ListDayLi>
            ))}
        </ListDay>
    )
}