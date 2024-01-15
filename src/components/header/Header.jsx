import "./header.css";
import TrainMode from '../train-mode/TrainMode';
// <h1 className={styles.header}>English study app</h1>
function showMenuPart(Part) {
    
    return (
        <>
            { console.log('render the btn function')}
            <Part/>
        </>
    )

}
function Header() {
  return (
    <>
      <div className="header-container">
        <h1 className="header">English study app</h1>
        <div className="menu-header">
                  <button className="button btn-vocabulary" > Vocabulary </button>
                  <button className="button btn-cards"> Cards </button>
          <button className="button btn-trainMode"> Train mode </button>
        </div>
      </div>
    </>
  );
}
export default Header;
