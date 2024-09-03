import { useState } from "react";

export default function GroupModal({ state, groupList, setGroupList }) {
    const [newGroupName, setNewGroupName] = useState("");
    const closeGroupModal = () => {
        state(false);
    };
    const handleChange = (e) => {
        setNewGroupName(e.target.value);
    };
    const addNewGroup = () => {
        if (newGroupName && !groupList.includes(newGroupName)) {
            const updatedGroupList = [...groupList, newGroupName];
            setGroupList(updatedGroupList);
            localStorage.setItem(
                "groupLists",
                JSON.stringify(updatedGroupList)
            );
            setNewGroupName("");
        }
    };
    const deleteGroup = (groupToDelete) => {
        const contactLists =
            JSON.parse(localStorage.getItem("contactLists")) || [];

        const isGroupInUse = contactLists.some(
            (contact) => contact.group === groupToDelete
        );

        if (isGroupInUse) {
            alert("이 그룹은 현재 사용 중이므로 삭제할 수 없습니다.");
        } else {
            const updatedGroupList = groupList.filter(
                (group) => group !== groupToDelete
            );
            setGroupList(updatedGroupList);
            localStorage.setItem(
                "groupLists",
                JSON.stringify(updatedGroupList)
            );
            console.log("삭제");
        }
    };
    return (
        <div className="group-modal">
            <button className="btn02 close-btn" onClick={closeGroupModal}>
                닫기
            </button>
            <h2>그룹 관리</h2>
            <ul>
                {groupList.map((group, index) => (
                    <li key={index}>
                        <label>{group}</label>
                        <i
                            className="fa-solid fa-xmark"
                            onClick={() => deleteGroup(group)}
                        ></i>
                    </li>
                ))}
            </ul>
            <div className="group-input">
                <input
                    type="text"
                    placeholder="새 그룹 이름"
                    value={newGroupName}
                    onChange={handleChange}
                />
                <button className="btn01" onClick={addNewGroup}>
                    추가
                </button>
            </div>
        </div>
    );
}
