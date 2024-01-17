import "./header.css";

// <h1 className={styles.header}>English study app</h1>


function Header({toggleCardVisibility, toggleTrainModeVisibility})  {
  return (
    <>
      <div className="header-container">
        <h1 className="header">English study app</h1>
        <div className="menu-header">
                  <button className="button btn-vocabulary" > Vocabulary </button>
                  <button className="button btn-cards" onClick={toggleCardVisibility}> Cards</button>
          <button className="button btn-trainMode" onClick={toggleTrainModeVisibility}> Train mode</button>
        </div>
      </div>
    </>
  );
}
export default Header;
