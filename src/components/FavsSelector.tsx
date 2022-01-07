import { Dispatch, SetStateAction } from "react";
import "../styles/components/FavsSelector.css";

type Props = {
	selected: boolean;
	onClick: Dispatch<SetStateAction<boolean>>; 
}

export const FavsSelector = ({selected, onClick}: Props) => { 
	const onChangeToggle = () => onClick(!selected) 

	return (
		<div className="Toogle-container">
			<div
				onClick={onChangeToggle} 
				className={`Toogle-container__Toggle-element  ${!selected && 'Toogle-container__Toggle-element--active'}`}> 
				<p>All</p>
			</div>
			<div  
				onClick={onChangeToggle} 
				className={`Toogle-container__Toggle-element  ${selected && 'Toogle-container__Toggle-element--active'}`}> 
				<p>
					My Faves
				</p>
			</div>
		</div>
	);
};
 