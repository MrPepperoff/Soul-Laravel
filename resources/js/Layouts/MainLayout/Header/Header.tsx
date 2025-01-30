import { Collapse, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import style from './Header.module.sass';
import ApplicationLogo from '@/Components/ApplicationLogo';
import Login from '@/Pages/Auth/Login';
import { useEffect } from 'react';


export default function Header(){
	const header = document.querySelector('#header');
    const hamburger = document.querySelector('#hamburger');
	const mode = localStorage.getItem('mode');

	switch(mode){
        case 'full': 
			header?.classList.remove(style.header_compact); 
            break;
        case 'compact': 
			header?.classList.add(style.header_compact);
            break;
    }
	useEffect(()=>{
		hamburger?.addEventListener('click',()=>{
			switch(localStorage.getItem('mode')){
				case 'full': 
					header?.classList.add(style.header_compact); 
					break;
					
				case 'compact': 
					header?.classList.remove(style.header_compact);
					break;
			}
		})
	},[hamburger])
    return(
        <header className={style.header} id='header'>
            <div className={style.header__content}>
                <nav className={style.navbar+" "+ style.navbar__expand}>
					<div className={style.collapse}>
							<div className={style.header__left}>
								<form className={style.searchArea+" " + style.inputGroup}>
									<input type="text" className={style.formControl} placeholder="Find something here......" />
									<span className={style.inputGroup__text}>
										<button type='button'>
											<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
												<g>
													<path d="M497.938,430.063l-126.914-126.91C389.287,272.988,400,237.762,400,200C400,89.719,310.281,0,200,0 C89.719,0,0,89.719,0,200c0,110.281,89.719,200,200,200c37.762,0,72.984-10.711,103.148-28.973l126.914,126.91 C439.438,507.313,451.719,512,464,512c12.281,0,24.563-4.688,33.938-14.063C516.688,479.195,516.688,448.805,497.938,430.063z M64,200c0-74.992,61.016-136,136-136s136,61.008,136,136s-61.016,136-136,136S64,274.992,64,200z"/>
												</g>
											</svg>
										</button>
									</span>
								</form> 
							</div>
							<Navbar expand="lg" className={style.navbar+" "+style.header__right}>
									{/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
									<Nav className={style.navbar__nav}>
										<NavDropdown className={style.navbar__dropdown + " "+ style.dropdown}
											title={<div className={style.navbar__icon}>
														<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 513.829 513.829" width="28" height="28" fill='rgb(var(--primary))'>
															<g>
																<g>
																	<path d="M482.743,40.229H43.886h-7.314C3.657,40.229,0,60.343,0,69.486V153.6c0,9.143,7.314,16.457,16.458,18.286V422.4 c0,20.115,20.114,51.2,45.715,51.2h391.313c25.6,0,43.886-31.086,43.886-51.2V170.058c9.143-1.829,16.458-9.143,16.458-18.286 V67.658C512,58.515,508.343,40.229,482.743,40.229z M460.8,420.572c-1.828,3.657-5.486,12.8-9.142,14.629H64 c-3.657-1.829-10.971-10.971-10.971-14.629V171.886H460.8V420.572z M475.429,135.315H36.571V76.801h438.857V135.315z"/>
																</g>
															</g>
															<g>
																<g>
																	<path d="M327.314,182.858H184.685c-23.772,0-42.058,18.286-42.058,42.058c0,23.772,18.286,42.058,42.058,42.058h142.629 c23.771,0,42.057-18.286,42.057-42.058C369.37,201.143,351.086,182.858,327.314,182.858z M327.314,230.401H184.685 c-3.657,0-5.486-1.829-5.486-5.486s1.829-5.486,5.486-5.486h142.629c3.657,0,5.485,1.829,5.485,5.486 C332.8,226.743,330.972,230.401,327.314,230.401z"/>
																</g>
															</g>
														</svg>
														<span>12</span>
													</div>} id="basic-nav-dropdown">
													
											<NavDropdown.Item href="#action/3.1">
												<div className={style.dropdown__card}>
													<img src="https://fakeimg.pl/640x360" alt="logo" />
													<h4>Поступил заказ с Я.Еда</h4>
												</div>
											</NavDropdown.Item>
											<NavDropdown.Item href="#action/3.2">
												Another action
											</NavDropdown.Item>
											<NavDropdown.Item href="#action/3.3">
												Something
											</NavDropdown.Item>
											<NavDropdown.Item href="#action/3.4">
												Separated link
											</NavDropdown.Item>
										</NavDropdown>
										<Nav.Link href="#link">
											<div className={style.navbar__icon}>
												<svg width="28" height="28" viewBox="0 0 28 28" fill='rgb(var(--primary))' xmlns="http://www.w3.org/2000/svg">
													<path d="M22.4605 3.84888H5.31688C4.64748 3.84961 4.00571 4.11586 3.53237 4.58919C3.05903 5.06253 2.79279 5.7043 2.79205 6.3737V18.1562C2.79279 18.8256 3.05903 19.4674 3.53237 19.9407C4.00571 20.4141 4.64748 20.6803 5.31688 20.6811C5.54005 20.6812 5.75404 20.7699 5.91184 20.9277C6.06964 21.0855 6.15836 21.2995 6.15849 21.5227V23.3168C6.15849 23.6215 6.24118 23.9204 6.39774 24.1818C6.5543 24.4431 6.77886 24.6571 7.04747 24.8009C7.31608 24.9446 7.61867 25.0128 7.92298 24.9981C8.22729 24.9834 8.52189 24.8863 8.77539 24.7173L14.6173 20.8224C14.7554 20.7299 14.918 20.6807 15.0842 20.6811H19.187C19.7383 20.68 20.2743 20.4994 20.7137 20.1664C21.1531 19.8335 21.4721 19.3664 21.6222 18.8359L24.8966 7.05011C24.9999 6.67481 25.0152 6.28074 24.9414 5.89856C24.8675 5.51637 24.7064 5.15639 24.4707 4.84663C24.235 4.53687 23.931 4.28568 23.5823 4.11263C23.2336 3.93957 22.8497 3.84931 22.4605 3.84888ZM23.2733 6.60304L20.0006 18.3847C19.95 18.5614 19.8432 18.7168 19.6964 18.8275C19.5496 18.9381 19.3708 18.9979 19.187 18.9978H15.0842C14.5856 18.9972 14.0981 19.1448 13.6837 19.4219L7.84171 23.3168V21.5227C7.84097 20.8533 7.57473 20.2115 7.10139 19.7382C6.62805 19.2648 5.98628 18.9986 5.31688 18.9978C5.09371 18.9977 4.87972 18.909 4.72192 18.7512C4.56412 18.5934 4.4754 18.3794 4.47527 18.1562V6.3737C4.4754 6.15054 4.56412 5.93655 4.72192 5.77874C4.87972 5.62094 5.09371 5.53223 5.31688 5.5321H22.4605C22.5905 5.53243 22.7188 5.56277 22.8353 5.62076C22.9517 5.67875 23.0532 5.76283 23.1318 5.86646C23.2105 5.97008 23.2642 6.09045 23.2887 6.21821C23.3132 6.34597 23.308 6.47766 23.2733 6.60304Z"/>
													<path d="M7.84173 11.4233H12.0498C12.273 11.4233 12.4871 11.3347 12.6449 11.1768C12.8027 11.019 12.8914 10.8049 12.8914 10.5817C12.8914 10.3585 12.8027 10.1444 12.6449 9.98661C12.4871 9.82878 12.273 9.74011 12.0498 9.74011H7.84173C7.61852 9.74011 7.40446 9.82878 7.24662 9.98661C7.08879 10.1444 7.00012 10.3585 7.00012 10.5817C7.00012 10.8049 7.08879 11.019 7.24662 11.1768C7.40446 11.3347 7.61852 11.4233 7.84173 11.4233Z"/>
													<path d="M15.4162 13.1066H7.84173C7.61852 13.1066 7.40446 13.1952 7.24662 13.3531C7.08879 13.5109 7.00012 13.725 7.00012 13.9482C7.00012 14.1714 7.08879 14.3855 7.24662 14.5433C7.40446 14.7011 7.61852 14.7898 7.84173 14.7898H15.4162C15.6394 14.7898 15.8535 14.7011 16.0113 14.5433C16.1692 14.3855 16.2578 14.1714 16.2578 13.9482C16.2578 13.725 16.1692 13.5109 16.0113 13.3531C15.8535 13.1952 15.6394 13.1066 15.4162 13.1066Z"/>
												</svg>
												<span>5</span>
											</div>
										</Nav.Link>
										<NavDropdown className={style.navbar__dropdown + " "+ style.dropdown}
											title={<div className={style.navbar__icon}>
														<svg width="28" height="28" viewBox="0 0 28 28" fill='rgb(var(--primary))' xmlns="http://www.w3.org/2000/svg">
															<path d="M23.625 6.12506H22.75V2.62506C22.75 2.47268 22.7102 2.32295 22.6345 2.19068C22.5589 2.05841 22.45 1.94819 22.3186 1.87093C22.1873 1.79367 22.0381 1.75205 21.8857 1.75019C21.7333 1.74832 21.5831 1.78629 21.4499 1.86031L14 5.99915L6.55007 1.86031C6.41688 1.78629 6.26667 1.74832 6.11431 1.75019C5.96194 1.75205 5.8127 1.79367 5.68136 1.87093C5.55002 1.94819 5.44113 2.05841 5.36547 2.19068C5.28981 2.32295 5.25001 2.47268 5.25 2.62506V6.12506H4.375C3.67904 6.12582 3.01181 6.40263 2.51969 6.89475C2.02757 7.38687 1.75076 8.0541 1.75 8.75006V11.3751C1.75076 12.071 2.02757 12.7383 2.51969 13.2304C3.01181 13.7225 3.67904 13.9993 4.375 14.0001H5.25V23.6251C5.25076 24.321 5.52757 24.9882 6.01969 25.4804C6.51181 25.9725 7.17904 26.2493 7.875 26.2501H20.125C20.821 26.2493 21.4882 25.9725 21.9803 25.4804C22.4724 24.9882 22.7492 24.321 22.75 23.6251V14.0001H23.625C24.321 13.9993 24.9882 13.7225 25.4803 13.2304C25.9724 12.7383 26.2492 12.071 26.25 11.3751V8.75006C26.2492 8.0541 25.9724 7.38687 25.4803 6.89475C24.9882 6.40263 24.321 6.12582 23.625 6.12506ZM21 6.12506H17.3769L21 4.11256V6.12506ZM7 4.11256L10.6231 6.12506H7V4.11256ZM7 23.6251V14.0001H13.125V24.5001H7.875C7.64303 24.4998 7.42064 24.4075 7.25661 24.2434C7.09258 24.0794 7.0003 23.857 7 23.6251ZM21 23.6251C20.9997 23.857 20.9074 24.0794 20.7434 24.2434C20.5794 24.4075 20.357 24.4998 20.125 24.5001H14.875V14.0001H21V23.6251ZM24.5 11.3751C24.4997 11.607 24.4074 11.8294 24.2434 11.9934C24.0794 12.1575 23.857 12.2498 23.625 12.2501H4.375C4.14303 12.2498 3.92064 12.1575 3.75661 11.9934C3.59258 11.8294 3.5003 11.607 3.5 11.3751V8.75006C3.5003 8.51809 3.59258 8.2957 3.75661 8.13167C3.92064 7.96764 4.14303 7.87536 4.375 7.87506H23.625C23.857 7.87536 24.0794 7.96764 24.2434 8.13167C24.4074 8.2957 24.4997 8.51809 24.5 8.75006V11.3751Z"/>
														</svg>
														<span>2</span>
													</div>}>
													
											<NavDropdown.Item href="#action/3.1">
												Action
											</NavDropdown.Item>
											<NavDropdown.Item href="#action/3.2">
												Another action
											</NavDropdown.Item>
											<NavDropdown.Item href="#action/3.3">
												Something
											</NavDropdown.Item>
											<NavDropdown.Divider />
											<NavDropdown.Item href="#action/3.4">
												Separated link
											</NavDropdown.Item>
										</NavDropdown>
									</Nav>
							</Navbar>
                    </div>
				</nav>
			</div>
		</header>
    );
}