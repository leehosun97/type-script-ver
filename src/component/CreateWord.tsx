import { useRef, useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { Button, InputArea, Wrapper } from "./StyleComponent";

interface Day {
  id: number;
  day: number;
}

export default function CreateWord() {
  const days: Day[] = useFetch("http://localhost:3002/days");
  const history = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const engRef = useRef<HTMLInputElement>(null);
  const korRef = useRef<HTMLInputElement>(null);
  const dayRef = useRef<HTMLSelectElement>(null);

  function onSubmit(e: FormEvent) {
    e.preventDefault();

    if (!isLoading && engRef.current && korRef.current && dayRef.current) {
      setIsLoading(true);

      const dayLog = dayRef.current.value;

      fetch(`http://localhost:3002/words/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          day: dayRef.current.value,
          eng: engRef.current.value,
          kor: korRef.current.value,
          isDone: false,
        }),
      })
        .then((res) => {
          if (res.ok) {
            alert("생성이 완료 되었습니다");
            history(`/day/${dayLog}`);
            setIsLoading(false);
          }
        })
        .catch((error) => {
          console.error("Error:", error);
          setIsLoading(false);
        });
    }
  }

  return (
    <Wrapper>
      <form onSubmit={onSubmit}>
        <InputArea>
          <label>Eng</label>
          <input type="text" placeholder="computer" ref={engRef} />
        </InputArea>
        <InputArea>
          <label>Kor</label>
          <input type="text" placeholder="컴퓨터" ref={korRef} />
        </InputArea>
        <InputArea>
          <select ref={dayRef}>
            {days.map((day) => (
              <option key={day.id} value={day.day}>
                {day.day}
              </option>
            ))}
          </select>
        </InputArea>
        <Button>{isLoading ? "Saving..." : "저장"}</Button>
      </form>
    </Wrapper>
  );
}
