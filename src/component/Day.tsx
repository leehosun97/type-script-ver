import { useNavigate, useParams } from "react-router-dom";
import { Button, TableWrapper, Wrapper } from "./StyleComponent";
import Word from "./Word";
import useFetch from "../hooks/useFetch";

interface WordData {
  id: number;
  day: number;
  eng: string;
  kor: string;
  isDone: boolean;
}

export default function Day() {
  const { day } = useParams();
  const words: WordData[] = useFetch(`http://localhost:3002/words?day=${day}`);
  const nexthistory = useNavigate();
  const daysData = useFetch("http://localhost:3002/days");

  function NextBtn() {
    const dayLength = daysData.length + 1;
    const nextDay = Number(day) + 1;
    console.log(dayLength);
    if (nextDay < dayLength) {
      nexthistory(`/day/${nextDay}`);
    } else {
      alert("다음 Day가 없습니다");
    }
  }

  function PrevBtn() {
    const dayLength = daysData.length + 1;
    const prevDay = Number(day) - 1;
    console.log(dayLength);
    if (prevDay > 0) {
      nexthistory(`/day/${prevDay}`);
    } else {
      alert("이전 Day가 없습니다");
    }
  }

  return (
    <Wrapper>
      <h2>Day {day}</h2>
      <TableWrapper>
        {words.map((word) => (
          <Word word={word} key={word.id} />
        ))}
      </TableWrapper>
      <div className="next-prev-wrap">
        <Button className="prev-btn" onClick={PrevBtn}>Prev</Button>
        <Button className="next-btn" onClick={NextBtn}>Next</Button>
      </div>
    </Wrapper>
  );
}
