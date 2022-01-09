import React, { useEffect } from 'react'
import { useState } from 'react';
import '../styles/components/ScrollTop.css';

export const ScrollTop = () => {
	const [showButton, setShowButton] = useState(false);

	useEffect(() => {
		window.addEventListener("scroll", () => {
		  if (window.pageYOffset > 300) {
			setShowButton(true);
		  } else {
			setShowButton(false);
		  }
		});
	  }, []);
 
	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth'  
		});
	}; 

	return (
		<>
			{
				showButton && 
				<div className='Scroll__top' onClick={scrollToTop}>
					<div className='Scroll__arrow'></div>
				</div>
			} 
		</>
	)
}
