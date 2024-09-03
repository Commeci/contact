export default function DetailModal({ state, contact }) {
    const closeDetailModal = () => {
        state(false);
    };
    return (
        <div className="detail-modal">
            <button className="btn02 close-btn" onClick={closeDetailModal}>
                닫기
            </button>
            <h2>연락처 상세 정보</h2>
            <p>
                <label>이름: </label>
                <label>{contact.name}</label>
            </p>
            <p>
                <label>전화번호: </label>
                <label>{contact.phone}</label>
            </p>
            <p>
                <label>그룹: </label>
                <label>{contact.group}</label>
            </p>
            <p>
                <label>메모: </label>
                <label>{contact.memo}</label>
            </p>
        </div>
    );
}
