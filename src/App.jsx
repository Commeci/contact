import { useState } from "react";
import InputCon from "./components/InputCon";
import ListArea from "./components/ListArea";
import "./css/App.css";

function App() {
    const contactList = JSON.parse(localStorage.getItem("contactLists")) || [];
    const [infoLists, setInfoList] = useState(contactList);
    return (
        <main className="main">
            <h1>연락처 리스트</h1>
            <section className="sec">
                <InputCon infoLists={infoLists} setInfoList={setInfoList} />
                <ListArea infoLists={infoLists} setInfoList={setInfoList} />
            </section>
        </main>
    );
}

export default App;
