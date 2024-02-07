import { useNavigate } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { Button, Wrapper } from "./StyleComponent";

interface Day {
  id: number;
  day: number;
}

export default function CreateDay() {
  const days: Day[] = useFetch("http://localhost:3002/days");
  const history = useNavigate();

  function addDay(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();

    fetch(`http://localhost:3002/days/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        day: days.length + 1,
      }),
    })
      .then((res) => {
        if (res.ok) {
          alert("생성이 완료 되었습니다");
          history("/");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  return (
    <Wrapper>
      <h3>현재 일수 : {days.length}일</h3>
      <Button onClick={addDay}>Day 추가</Button>
    </Wrapper>
  );
}
