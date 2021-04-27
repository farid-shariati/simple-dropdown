import "./stylesheets/index.scss";
import DropdownLink from "./components/DropdownLink";
import CustomDropdown from "./components/CustomDropdown";
import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeVisibility } from "./redux/dropdown/dropDownAction";

const App = () => {
  const wrapperRef = useRef(null);
  const dispatch = useDispatch();
  const isDropDownOpen = useSelector((state) => state.dropDown.isOpen);

  function useOutsideClickFinder(ref) {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          dispatch(changeVisibility());
        }
      }
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }

  useOutsideClickFinder(wrapperRef);

  return (
    <nav className="nav">
      <div ref={isDropDownOpen === true ? wrapperRef : null}>
        <DropdownLink />
        <CustomDropdown />
      </div>
    </nav>
  );
};

export default App;
