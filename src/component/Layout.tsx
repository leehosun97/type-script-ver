import { Link } from "react-router-dom";
import { HeaderWrap, MainTitle, Menu } from "./StyleComponent";

export default function Layout() {
    return (
        <HeaderWrap>
            <MainTitle>
                <Link to="/">토익 영단어 (고급)</Link>
            </MainTitle>

            <Menu>
                <Link to="/create_word" >단어추가</Link>
                <Link to="/create_day" >Day 추가</Link>
            </Menu>
        </HeaderWrap>
    )
}