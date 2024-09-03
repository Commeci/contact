import { useState } from "react";

export default function SearchCon({ onSearch, onClear }) {
    const [search, setSearch] = useState("");
    const handleChange = (e) => {
        setSearch(e.target.value);
    };
    const handleKeyUp = (e) => {
        if (e.key === "Enter") {
            onSearch(e.target.value);
            setSearch("");
        }
    };

    const clearSearch = () => {
        onClear();
    };

    return (
        <div className="search-con">
            <input
                type="text"
                placeholder="검색어를 입력 후 엔터를 누르세요"
                value={search}
                onChange={handleChange}
                onKeyUp={handleKeyUp}
            />
            <button className="btn list-btn" onClick={clearSearch}>
                전체
            </button>
        </div>
    );
}
