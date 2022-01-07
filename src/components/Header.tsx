import "../styles/components/Header.css";
import HackerNews from '../assets/hacker-news.png'

export const Header = () => {
	return (
		<div className="Header">
			<div className="Container Header__wrapper"> 
				<img src={HackerNews} alt="main-logo" />
			</div>
		</div>
	)
}
