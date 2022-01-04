import { Dispatch, SetStateAction } from "react";
import "../styles/components/FavsSelector.css";

type Props = {
	selected: boolean;
	onClick: Dispatch<SetStateAction<boolean>>; 
}

export const FavsSelector = ({selected, onClick}: Props) => { 
	const onChangeToggle = () => onClick(!selected) 

	return (
		<div className="ToogleContainer">
			<div
				onClick={onChangeToggle} 
				className={`ToogleContainer__ToggleElement  ${selected && 'ToogleContainer__ToggleElement--active'}`}> 
				All
			</div>
			<div  
				onClick={onChangeToggle} 
				className={`ToogleContainer__ToggleElement  ${!selected && 'ToogleContainer__ToggleElement--active'}`}> 
				My Favs
			</div>
		</div>
	);
};
 