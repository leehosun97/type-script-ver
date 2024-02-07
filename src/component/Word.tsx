import React, { useState } from "react";
import { Button } from "./StyleComponent";
import "../css/BtnStyle.css";

interface WordProps {
  word: {
    id: number;
    day: number;
    eng: string;
    kor: string;
    isDone: boolean;
  };
}

const Word: React.FC<WordProps> = ({ word: w }) => {
  const [word, setWord] = useState(w);
  const [isShow, setIsShow] = useState(false);
  const [isDone, setIsDone] = useState(word.isDone);

  function toggleShow() {
    setIsShow(!isShow);
  }

  function toggleDone() {
    const newIsDone = !isDone;

    fetch(`http://localhost:3002/words/${word.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...word,
        isDone: newIsDone,
      }),
    }).then((res) => {
      if (res.ok) {
        setIsDone(newIsDone);
      }
    });
  }

  function del() {
    if (window.confirm("삭제 하시겠습니까?")) {
      fetch(`http://localhost:3002/words/${word.id}`, {
        method: "DELETE",
      }).then((res) => {
        if (res.ok) {
          setWord({ id: 0, day: 0, eng: "", kor: "", isDone: false });
        }
      });
    }
  }

  if (word.id === 0) {
    return null;
  }

  return (
    <tr className={isDone ? "off" : ""}>
      <td>
        <input
          type="checkbox"
          checked={isDone}
          onChange={toggleDone}
        />
      </td>
      <td>{word.eng}</td>
      <td>{isShow && word.kor}</td>
      <td>
        <Button onClick={toggleShow}>
          {isShow ? "숨기기" : "뜻 보기"}
        </Button>
        <Button onClick={del} className="btn-del">
          삭제
        </Button>
      </td>
    </tr>
  );
};

export default Word;
