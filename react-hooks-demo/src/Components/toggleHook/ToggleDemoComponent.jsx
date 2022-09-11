import toggleHook from "./toggleHook";

const ToggleDemoComponent = () => {
    const [modal, toggleModal] = toggleHook(false);
    const [val, toggleVal] = toggleHook(true);

    return (
        <>
        <h1>{val.toString()}</h1>
        <button onClick={toggleModal}>Toggle Component</button>
        <div>
            {modal && (
                <div className="modal">
                    <button onClick={() => toggleModal(false)}>Close</button>
                    <h1>LETS GO!!</h1>
                </div>
            )}
        </div>
        <button onClick={toggleVal}>Toggle</button>
        <button onClick={() => toggleVal(true)}>True</button>
        <button onClick={() => toggleVal(false)}>False</button>
        </>
    )
};

export default ToggleDemoComponent;