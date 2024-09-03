import { useState } from "react";
import List from "./List";
import DetailModal from "./modals/DetailModal";
import SearchCon from "./SearchCon";

export default function ListArea({ infoLists, setInfoList }) {
    const [showModal, setShowModal] = useState(false);
    const [selectedContact, setSelectedContact] = useState(null);
    const [searchItem, setSearchItem] = useState("");

    const showDetailModal = (contact) => {
        setSelectedContact(contact);
        setShowModal(true);
    };

    const handleSearch = (Item) => {
        setSearchItem(Item);
    };

    const filterContact = infoLists.filter((contact) => {
        return (
            contact.name.includes(searchItem) ||
            contact.phone.includes(searchItem) ||
            contact.group.toLowerCase().includes(searchItem.toLowerCase())
        );
    });

    const handleClearSearch = () => {
        setSearchItem("");
    };

    return (
        <div className="list-area">
            <SearchCon onSearch={handleSearch} onClear={handleClearSearch} />
            <ul>
                {filterContact.map((contact) => (
                    <List
                        key={contact.id}
                        contact={contact}
                        setInfoList={setInfoList}
                        infoLists={infoLists}
                        showDetailModal={() => showDetailModal(contact)}
                    />
                ))}
            </ul>
            {showModal && (
                <DetailModal state={setShowModal} contact={selectedContact} />
            )}
            {showModal && <div className="backdrop"></div>}
        </div>
    );
}
