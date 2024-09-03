export default function SelectEl({ openGroupModal, groupList, data, setData }) {
    const handleChange = (e) => {
        setData(e.target.value);
    };

    return (
        <div className="select-el">
            <label>그룹</label>
            <div>
                <select value={data} onChange={handleChange}>
                    {groupList.map((group, index) => (
                        <option key={index} value={group}>
                            {group}
                        </option>
                    ))}
                </select>
                <button className="btn01" onClick={openGroupModal}>
                    조직추가
                </button>
            </div>
        </div>
    );
}
