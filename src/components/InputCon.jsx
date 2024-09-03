import { useState } from "react";
import InputEl from "./InputEl";
import SelectEl from "./SelectEl";
import GroupModal from "./modals/GroupModal";

export default function InputCon({ infoLists, setInfoList }) {
    const [showModal, setShowModal] = useState(false);
    const savedGroupList = JSON.parse(localStorage.getItem("groupLists")) || [
        "가족",
        "친구",
        "직장",
        "스터디",
    ];
    const [groupList, setGroupList] = useState(savedGroupList);
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [group, setGroup] = useState(groupList[0] || "");
    const [memo, setMemo] = useState("");
    const [nameError, setNameError] = useState(false);
    const [phoneError, setPhoneError] = useState(false);

    const validationRules = {
        name: {
            type: "이름",
            pattern: /^[가-힣]{2,}$/,
            errorMessage: "이름은 한글로 두 글자 이상 입력해주세요.",
            id: "name-input",
        },
        phone: {
            type: "전화번호",
            pattern: /^01[016789]-\d{3,4}-\d{4}$/,
            errorMessage: "전화번호는 010-0000-0000 형식으로 입력해주세요.",
            id: "phone-input",
        },
        memo: {
            type: "간단한기록",
            pattern: "",
            errorMessage: "",
            id: "",
        },
    };

    const openGroupModal = () => {
        setShowModal(true);
        console.log(showModal);
    };

    const saveUserInfo = () => {
        if (nameError && phoneError) {
            alert("올바른 값을 입력해주세요");
            document.getElementById("name-input").focus();
            return;
        } else if (nameError) {
            alert("이름을 올바르게 입력해주세요.");
            document.getElementById("name-input").focus();
            return;
        } else if (phoneError) {
            alert("전화번호를 올바르게 입력해주세요.");
            document.getElementById("phone-input").focus();
            return;
        }
        if (!name || !phone || !group) {
            alert("모든 필드를 입력해주세요.");
            return;
        }

        const isPhoneNumberExist = infoLists.some(
            (contact) => contact.phone === phone
        );

        if (isPhoneNumberExist) {
            alert("이미 존재하는 전화번호입니다.");
            document.getElementById("phone-input").focus();
            return;
        }

        let value = {
            id: Date.now().toString(),
            name: name,
            phone: phone,
            group: group,
            memo: memo,
        };

        const updateLists = [...infoLists, value];
        setInfoList(updateLists);
        localStorage.setItem("contactLists", JSON.stringify(updateLists));

        setName("");
        setPhone("");
        setGroup("");
        setMemo("");
    };

    return (
        <div className="input-con">
            <div className="input-box">
                <InputEl
                    info={validationRules.name}
                    data={name}
                    setData={setName}
                    showError={nameError}
                    setShowError={setNameError}
                />
                <InputEl
                    info={validationRules.phone}
                    data={phone}
                    setData={setPhone}
                    showError={phoneError}
                    setShowError={setPhoneError}
                />
                <SelectEl
                    openGroupModal={openGroupModal}
                    groupList={groupList}
                    data={group}
                    setData={setGroup}
                />
                <InputEl
                    info={validationRules.memo}
                    data={memo}
                    setData={setMemo}
                    showError={false}
                    setShowError={() => {}}
                />
                <button className="btn save-btn" onClick={saveUserInfo}>
                    저장
                </button>
            </div>
            {showModal && (
                <GroupModal
                    state={setShowModal}
                    groupList={groupList}
                    setGroupList={setGroupList}
                />
            )}
            {showModal && <div className="backdrop"></div>}
        </div>
    );
}
