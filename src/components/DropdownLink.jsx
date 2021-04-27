import { useDispatch, useSelector } from "react-redux";
import { changeVisibility } from '../redux/dropdown/dropDownAction';


const DropdownLink = () => { 
  const dispatch = useDispatch();
  const companyName = useSelector((state) => state.company.selectedCompany);

  const onDropDown = () => {
    dispatch(changeVisibility())
  }

  return(
  <div className="nav__link" onClick={onDropDown}>
    <div className="nav__link-text-wrapper">
      <div className="nav__link-text">
        Elon Musk
      </div>
      <div className="nav__link-subtext">
        {companyName}
      </div>
    </div>

    <i className="material-icons-outlined nav__link-icon">
      settings
    </i>
  </div>
  )
  }

export default DropdownLink