import SaveEditBtnStyling from "./css/SaveEditBtn.module.css";

function SaveEditBtn() {
  return (
    <button
      className={SaveEditBtnStyling.saveEditBtn}
      onClick={(e) => {
        //console.log(e.target.parentNode.children);

        let inputBoxTester = e.target.parentNode.children;
        //console.log(inputBoxTester);

        if (inputBoxTester[0].disabled === false) {
          e.target.innerText = "edit";
        } else if (inputBoxTester[0].disabled === true) {
          e.target.innerText = "save";
        }

        for (let i = 0; i < inputBoxTester.length - 1; i++) {
          inputBoxTester[i].disabled = !inputBoxTester[i].disabled;
        }
      }}
    >
      save
    </button>
  );
}

export default SaveEditBtn;

// old logic when using div button instead of submit button
/*(e) => {
        //console.log(e.target.parentNode.children[0]);
        let inputBox = e.target.parentNode.children[0];
        let inputBoxChildren = inputBox.children;

        if (inputBoxChildren[0].disabled === false) {
          e.target.innerText = "edit";
        } else if (inputBoxChildren[0].disabled === true) {
          e.target.innerText = "save";
        }

        for (let i = 0; i < inputBoxChildren.length; i++) {
          inputBoxChildren[i].disabled = !inputBoxChildren[i].disabled;
        }
      }*/
