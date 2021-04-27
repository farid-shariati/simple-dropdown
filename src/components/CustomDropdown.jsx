import { useDispatch, useSelector } from "react-redux";
import { companyNames, options, settings } from "../data";
import { selectCompany } from "../redux/company/companyAction";
import { changeVisibility } from "../redux/dropdown/dropDownAction";

const CustomDropdown = () => {
  const dispatch = useDispatch();
  const companyName = useSelector((state) => state.company.selectedCompany);
  const isDropDownOpen = useSelector((state) => state.dropDown.isOpen);

  const onDropdown = () => {
    dispatch(changeVisibility());
  }

  const onSelect = (name) => {
    dispatch(selectCompany(name));
    dispatch(changeVisibility());
  };

  return (
    <div
      className="main"
      style={
        isDropDownOpen === false
          ? { visibility: "hidden" }
          : { visibility: "visible" }
      }
    >
      <div className="title-text">
        <b className="company-text">YOUR COMPANIES</b>
      </div>
      {companyNames.map((item) => (
        <div
          className={
            companyName === item.title ? "selected-company" : "title-div"
          }
          onClick={() => onSelect(item.title)}
          key={item.id}
        >
          <span className="company-name">{item.title}</span>
          {companyName === item.title && (
            <i className="material-icons-outlined">done</i>
          )}
        </div>
      ))}
      <div className="line"></div>
      {options.map((item) => (
        <div className="title-div" key={item.id} onClick={onDropdown}>
          <i className="material-icons-outlined">{item.icon}</i>
          <span className="custom-text">{item.title}</span>
        </div>
      ))}
      <div className="line"></div>
      {settings.map((item) => (
        <div
          className={item.title === "Log out" ? "log-out" : "title-div"}
          key={item.id}
          onClick={onDropdown}
        >
          <i className="material-icons-outlined">{item.icon}</i>
          <span className="custom-text">{item.title}</span>
        </div>
      ))}
    </div>
  );
};

export default CustomDropdown;
