export default function List({
    contact,
    setInfoList,
    infoLists,
    showDetailModal,
}) {
    const deleteItem = () => {
        const updatedInfoList = infoLists.filter(
            (item) => item.id !== contact.id
        );

        setInfoList(updatedInfoList);
        localStorage.setItem("contactLists", JSON.stringify(updatedInfoList));
    };
    return (
        <li className="list">
            <label>{contact.name}</label>
            <label>{contact.phone}</label>
            <div>
                <button className="btn01 detail-btn" onClick={showDetailModal}>
                    세부사항
                </button>
                <button className="btn01 delete-btn" onClick={deleteItem}>
                    삭제
                </button>
            </div>
        </li>
    );
}
