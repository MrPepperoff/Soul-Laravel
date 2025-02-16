import { Head, Link } from '@inertiajs/react';
import style from './MainLayout.module.sass';
import ApplicationLogo from '@/Components/ApplicationLogo';
import { PropsWithChildren, useEffect } from 'react';
import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';
import Preloader from './Preloader/Preloader';

export default function MainLayout({ children }: PropsWithChildren){
	const main = document.querySelector('#main-wrapper');
	const hamburger = document.querySelector('#hamburger');
	const mode = localStorage.getItem('mode');

	switch(mode){
        case 'full': 
			main?.classList.remove(style.main_compact); 
            break;
        case 'compact': 
			main?.classList.add(style.main_compact);
            break;
    }
	useEffect(()=>{
		hamburger?.addEventListener('click',()=>{
			switch(localStorage.getItem('mode')){
				case 'full': 
					main?.classList.add(style.main_compact); 
					break;
					
				case 'compact': 
					main?.classList.remove(style.main_compact);
					break;
			}
		})
	},[hamburger])
    return(
        <>
    		<Preloader/>
    		<div id="main-wrapper" className={style.main}>
				<Header />
        		
				<div className={style.main__wrap}>
					<div className={style.sidebar}>
						<Sidebar />
					</div>
					<div className={style.content}>
						{children}
					</div>
				</div>
				
		{/* <!--**********************************
            Content body start
        ***********************************--> */}
         {/* <div className="content-body">
            //   row
			<div className="container-fluid">
				<div className="mb-sm-4 d-flex flex-wrap align-items-center text-head">
					<h2 className="font-w600 mb-2 me-auto">Dashboard</h2>
					<div className="weather-btn mb-2">
						<span className="fs-22 font-w600 d-flex"><i className="fa fa-cloud me-3 ms-3"></i>21</span>
						<select className="form-control style-3 default-select">
							<option>Medan, IDN</option>
							<option>Jakarta, IDN</option>
							<option>Surabaya, IDN</option>
						</select>
					</div>
					<a href="javascript:void(0);" className="btn btn-primary mb-2 rounded"><i className="las la-calendar scale5 me-3"></i>Filter Periode</a>
				</div>	
				<div className="row">
					<div className="col-xl-3 col-xxl-6 col-sm-6">
						<div className="card">
							<div className="card-body d-flex">
								<div className="icon me-3">
									<svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
										<circle cx="30" cy="30" r="30" fill="white"/>
										<path d="M30 0C13.4312 0 0 13.4312 0 30C0 46.5688 13.4312 60 30 60C46.5688 60 60 46.5688 60 30C60 13.4312 46.5688 0 30 0ZM30 54.375C16.5588 54.375 5.625 43.44 5.625 30C5.625 16.56 16.5588 5.625 30 5.625C43.4412 5.625 54.375 16.5588 54.375 30C54.375 43.4412 43.44 54.375 30 54.375Z" fill="#F7931A"/>
										<path d="M31.5488 30.9737H27.61V36.825H31.5488C32.3438 36.825 33.0813 36.5025 33.5988 35.9612C34.14 35.4425 34.4625 34.7062 34.4625 33.8875C34.4638 32.2862 33.15 30.9737 31.5488 30.9737Z" fill="#F7931A"/>
										<path d="M30 8.12496C17.9375 8.12496 8.125 17.9375 8.125 30C8.125 42.0625 17.9375 51.875 30 51.875C42.0625 51.875 51.875 42.0612 51.875 30C51.875 17.9387 42.0612 8.12496 30 8.12496ZM34.4512 40.13H31.8712V44.185H29.165V40.13H27.6787V44.185H24.96V40.13H20.18V37.585H22.8175V22.335H20.18V19.79H24.96V15.8162H27.6787V19.79H29.165V15.8162H31.8712V19.79H34.2212C35.5337 19.79 36.7437 20.3312 37.6075 21.195C38.4712 22.0587 39.0125 23.2687 39.0125 24.5812C39.0125 27.15 36.985 29.2462 34.4512 29.3612C37.4225 29.3612 39.8187 31.78 39.8187 34.7512C39.8187 37.7112 37.4237 40.13 34.4512 40.13Z" fill="#F7931A"/>
										<path d="M33.2888 27.38C33.7613 26.9075 34.0488 26.2737 34.0488 25.56C34.0488 24.1437 32.8975 22.9912 31.48 22.9912H27.61V28.14H31.48C32.1825 28.14 32.8275 27.84 33.2888 27.38Z" fill="#F7931A"/>
									</svg>
								</div>
								<div>
									<h2 className="invoice-num">$984</h2>
									<p className="mb-0 invoice-num1">
										<svg width="21" height="14" viewBox="0 0 21 14" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M1 13C1.91797 11.9157 4.89728 8.72772 6.5 7L12.5 10L19.5 1" stroke="#13B440" stroke-width="2" stroke-linecap="round"/>
										</svg>
										<span className="text-success me-1">45%</span> This week
									</p>
									

								</div>
							</div>
						</div>
					</div>
					<div className="col-xl-3 col-xxl-6 col-sm-6">
						<div className="card">
							<div className="card-body d-flex">
								<div className="icon me-3">
									<svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
										<g opacity="0.99">
										<circle cx="30" cy="30.0001" r="30" fill="white"/>
										<path d="M30.5438 0.00514091C13.9681 -0.294871 0.305031 12.8932 0.00501883 29.4563C-0.294993 46.0195 12.893 59.6951 29.4562 59.9951C46.0194 60.2951 59.695 47.1071 59.995 30.5314C60.295 13.9682 47.1069 0.292653 30.5438 0.00514091ZM29.5562 54.3699C16.1182 54.1198 5.38024 42.9944 5.63025 29.5563C5.86776 16.1183 16.9932 5.38036 30.4313 5.61787C43.8818 5.86788 54.6072 16.9933 54.3697 30.4314C54.1322 43.8694 42.9943 54.6074 29.5562 54.3699Z" fill="#FF6600"/>
										<path d="M30.3938 8.11797C18.3308 7.90546 8.34286 17.5434 8.13035 29.6063C8.0591 33.4015 8.97038 36.9904 10.623 40.1355H17.4995V18.6021C17.4995 17.2858 19.2883 16.8671 19.8696 18.0484L30 38.563L40.1304 18.0496C40.7117 16.8671 42.5005 17.2858 42.5005 18.6021V40.1355H49.3558C50.8933 37.2129 51.8084 33.9128 51.8696 30.3939C52.0821 18.3309 42.4567 8.34298 30.3938 8.11797Z" fill="#FF6600"/>
										<path d="M40.0004 41.3856V23.9574L31.12 41.9393C30.7 42.7931 29.2987 42.7931 28.8787 41.9393L19.9996 23.9574V41.3856C19.9996 42.0756 19.4408 42.6356 18.7495 42.6356H12.1855C16.0744 48.0996 22.3972 51.7347 29.6062 51.8697C37.1028 52.0023 43.793 48.3271 47.8395 42.6356H41.2504C40.5592 42.6356 40.0004 42.0756 40.0004 41.3856Z" fill="#FF6600"/>
										</g>
									</svg>
								</div>
								<div>
									<h2 className="invoice-num">$22,567</h2>
									<p className="mb-0">
										<svg width="21" height="14" viewBox="0 0 21 14" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M1 13C1.91797 11.9157 4.89728 8.72772 6.5 7L12.5 10L19.5 1" stroke="#13B440" stroke-width="2" stroke-linecap="round"/>
										</svg>
										<span className="text-success me-1">45%</span> This week
									</p>
									

								</div>
							</div>
						</div>
					</div>
					<div className="col-xl-3 col-xxl-6 col-sm-6">
						<div className="card">
							<div className="card-body d-flex">
								<div className="icon me-3">
									<svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
										<circle cx="30" cy="30" r="30" fill="white"/>
										<path d="M30.5438 0.00501883C13.9681 -0.294993 0.305031 12.893 0.00501883 29.4562C-0.294993 46.0194 12.893 59.695 29.4562 59.995C46.0194 60.295 59.695 47.1069 59.995 30.5313C60.295 13.9681 47.1069 0.292531 30.5438 0.00501883ZM29.5562 54.3697C16.1182 54.1197 5.38024 42.9943 5.63025 29.5562C5.86776 16.1182 16.9932 5.38024 30.4313 5.61775C43.8818 5.86776 54.6072 16.9932 54.3697 30.4313C54.1322 43.8693 42.9943 54.6072 29.5562 54.3697Z" fill="#627EEA"/>
										<path d="M30.3963 8.12285C18.3333 7.91034 8.34536 17.5482 8.13285 29.6112C7.90784 41.6617 17.5457 51.6496 29.6087 51.8746C41.6717 52.0871 51.6596 42.4492 51.8721 30.3988C52.0846 18.3358 42.4592 8.34786 30.3963 8.12285ZM30.0025 14.3581L36.954 26.7599L30.61 23.2297C30.2312 23.0197 29.7725 23.0197 29.3937 23.2297L23.0497 26.7599L30.0025 14.3581ZM30.0025 45.6381L23.0497 33.2364L29.3937 36.7665C29.5825 36.8715 29.7925 36.924 30.0012 36.924C30.21 36.924 30.42 36.8715 30.6088 36.7665L36.9528 33.2364L30.0025 45.6381ZM30.0025 34.2427L22.3722 29.9975L30.0025 25.7523L37.6315 29.9975L30.0025 34.2427Z" fill="#627EEA"/>
									</svg>
								</div>
								<div>
									<h2 className="invoice-num">$168,331.09</h2>
									<p className="mb-0">
										<svg width="21" height="14" viewBox="0 0 21 14" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M1 1C1.91797 2.08433 4.89728 5.27228 6.5 7L12.5 4L19.5 13" stroke="#F04444" stroke-width="2" stroke-linecap="round"/>
										</svg>

										<span className="text-danger me-1">45%</span> This week
									</p>
									

								</div>
							</div>
						</div>
					</div>
					<div className="col-xl-3 col-xxl-6 col-sm-6">
						<div className="card">
							<div className="card-body d-flex">
								<div className="icon me-3">
									<svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
										<circle cx="30" cy="30" r="30" fill="white"/>
										<path d="M30.5438 0.00501883C13.9681 -0.294993 0.305031 12.893 0.00501883 29.4562C-0.294993 46.0194 12.893 59.695 29.4562 59.995C46.0194 60.295 59.695 47.1069 59.995 30.5313C60.295 13.9681 47.1069 0.292531 30.5438 0.00501883ZM29.5562 54.3697C16.1182 54.1197 5.38024 42.9943 5.63025 29.5562C5.86776 16.1182 16.9932 5.38024 30.4313 5.61775C43.8818 5.86776 54.6072 16.9932 54.3697 30.4313C54.1322 43.8693 42.9943 54.6072 29.5562 54.3697Z" fill="#345D9D"/>
										<path d="M30.3963 8.12285C18.3333 7.91034 8.34536 17.5482 8.13285 29.6112C7.90784 41.6617 17.5457 51.6496 29.6087 51.8746C41.6717 52.0871 51.6596 42.4492 51.8721 30.3988C52.0846 18.3358 42.4592 8.34786 30.3963 8.12285ZM39.4091 42.6993H19.5083L21.9459 29.2112L19.1208 29.7987V27.4986L22.3709 26.8111L24.4835 15.2106H32.4213L30.6213 25.086L33.3964 24.4985V26.7986L30.1962 27.4611L28.3462 37.6616H40.8842L39.4091 42.6993Z" fill="#345D9D"/>
									</svg>
								</div>
								<div>
									<h2 className="invoice-num">$7,784</h2>
									<p className="mb-0">
										<svg width="21" height="14" viewBox="0 0 21 14" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M1 1C1.91797 2.08433 4.89728 5.27228 6.5 7L12.5 4L19.5 13" stroke="#F04444" stroke-width="2" stroke-linecap="round"/>
										</svg>

										<span className="text-danger me-1">45%</span> This week
									</p>
									

								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-xl-3 col-xxl-4">
						<div className="card">
							<div className="card-header border-0 pb-0">
								<h4 className="fs-20 mb-0">Current Statistic</h4>
							</div>
							<div className="card-body">
								<div id="currentChart"></div>
								<div className="chart-content">	
									<div className="d-flex justify-content-between mb-2 align-items-center">
										<div>
											<svg className="me-2" width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
												<rect width="15" height="15" rx="7.5" fill="#EB8153"/>
											</svg>
											<span className="fs-14">Income (66%)</span>
										</div>
										<div>
											<h5 className="mb-0">$167,884.21</h5>
										</div>
									</div>
									<div className="d-flex justify-content-between mb-2 align-items-center">
										<div>
											<svg className="me-2" width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
												<rect width="15" height="15" rx="7.5" fill="#4441DE"/>
											</svg>
											<span className="fs-14">Spends (50%))</span>
										</div>
										<div>
											<h5 className="mb-0">$56,411.33</h5>
										</div>
									</div>
									<div className="d-flex justify-content-between mb-2 align-items-center">
										<div>
											<svg className="me-2" width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
												<rect width="15" height="15" rx="7.5" fill="#60C695"/>
											</svg>
											<span className="fs-14">Installment (11%)</span>
										</div>
										<div>
											<h5 className="mb-0">$81,981.22</h5>
										</div>
									</div>
									<div className="d-flex justify-content-between mb-2 align-items-center">
										<div>
											<svg className="me-2" width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
												<rect width="15" height="15" rx="7.5" fill="#F34F80"/>
											</svg>
											<span className="fs-14">Invest (23%)</span>
										</div>
										<div>
											<h5 className="mb-0">$12,432.51</h5>
										</div>
									</div>
								</div>	
							</div>
						</div>
					</div>
					<div className="col-xl-9 col-xxl-8">
						<div className="card">
							<div className="card-header pb-0 border-0 flex-wrap">
								<div className="mb-3">
									<h4 className="fs-20 text-black">Market Overview</h4>
									<p className="mb-0 fs-12 text-black">Lorem ipsum dolor sit amet, consectetur</p>
								</div>
								<div className="d-flex flex-wrap mb-2">
									<div className="form-check custom-checkbox me-4 default-checkbox">
										<input type="checkbox" className="form-check-input" id="customCheckBox1" required />
										<label className="form-check-label" htmlFor="customCheckBox1">ETH</label>
									</div>
									<div className="form-check custom-checkbox me-4 default-checkbox">
										<input type="checkbox" className="form-check-input" id="customCheckBox2" required />
										<label className="form-check-label" htmlFor="customCheckBox2">XMR</label>
									</div>
									<div className="form-check custom-checkbox me-4 default-checkbox">
										<input type="checkbox" className="form-check-input" id="customCheckBox3" required />
										<label className="form-check-label" htmlFor="customCheckBox3">LTC</label>
									</div>
									<div className="form-check custom-checkbox me-4 default-checkbox">
										<input type="checkbox" className="form-check-input" id="customCheckBox4" required />
										<label className="form-check-label" htmlFor="customCheckBox4">XMR</label>
									</div>
								</div>
								<div>
								<select className="form-control style-2 default-select border text-primary">
									<option>Weekly (2020)</option>
									<option>Daily (2020)</option>
									<option>Yearly (2020)</option>
								</select>
								</div>
							</div>
							<div className="card-body pb-0 pt-3">
								<div id="marketChart" className="market-line"></div>
							</div>
						</div>
					</div>
					<div className="card-slide owl-right-nav owl-carousel owl-loaded owl-drag">
						<div className="items">
							<div className="card-bx stacked card">
								<img src="images/card/card44.jpg" alt="" />
								<div className="card-info">
									<p className="mb-1 text-white fs-14">Main Balance</p>
									<div className="d-flex justify-content-between">
										<h2 className="num-text text-white mb-5 font-w600">$673,412.66</h2>
										<svg width="55" height="34" viewBox="0 0 55 34" fill="none" xmlns="http://www.w3.org/2000/svg">
											<circle cx="38.0091" cy="16.7788" r="16.7788" fill="white" fill-opacity="0.67"/>
											<circle cx="17.4636" cy="16.7788" r="16.7788" fill="white" fill-opacity="0.67"/>
										</svg>
									</div>
									<div className="d-flex">
										<div className="me-4 text-white">
											<p className="fs-12 mb-1 op6">VALID THRU</p>
											<span>08/21</span>
										</div>
										<div className="text-white">
											<p className="fs-12 mb-1 op6">CARD HOLDER</p>
											<span>Marquezz Silalahi</span>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="items">
							<div className="card-bx stacked card">
								<img src="images/card/card33.jpg" alt="" />
								<div className="card-info">
									<p className="mb-1 text-white fs-14">Main Balance</p>
									<div className="d-flex justify-content-between">
										<h2 className="num-text text-white mb-5 font-w600">$673,412.66</h2>
										<svg width="55" height="34" viewBox="0 0 55 34" fill="none" xmlns="http://www.w3.org/2000/svg">
											<circle cx="38.0091" cy="16.7788" r="16.7788" fill="white" fill-opacity="0.67"/>
											<circle cx="17.4636" cy="16.7788" r="16.7788" fill="white" fill-opacity="0.67"/>
										</svg>
									</div>
									<div className="d-flex">
										<div className="me-4 text-white">
											<p className="fs-12 mb-1 op6">VALID THRU</p>
											<span>08/21</span>
										</div>
										<div className="text-white">
											<p className="fs-12 mb-1 op6">CARD HOLDER</p>
											<span>Marquezz Silalahi</span>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="items">
							<div className="card-bx stacked card">
								<img src="images/card/card11.jpg" alt="" />
								<div className="card-info">
									<p className="mb-1 text-white fs-14">Main Balance</p>
									<div className="d-flex justify-content-between">
										<h2 className="num-text text-white mb-5 font-w600">$673,412.66</h2>
										<svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M19.2744 18.8013H16.0334V23.616H19.2744C19.9286 23.616 20.5354 23.3506 20.9613 22.9053C21.4066 22.4784 21.672 21.8726 21.672 21.1989C21.673 19.8813 20.592 18.8013 19.2744 18.8013Z" fill="white"/>
											<path d="M18 0C8.07429 0 0 8.07429 0 18C0 27.9257 8.07429 36 18 36C27.9257 36 36 27.9247 36 18C36 8.07531 27.9247 0 18 0ZM21.6627 26.3355H19.5398V29.6722H17.3129V26.3355H16.0899V29.6722H13.8528V26.3355H9.91954V24.2414H12.0898V11.6928H9.91954V9.59863H13.8528V6.3288H16.0899V9.59863H17.3129V6.3288H19.5398V9.59863H21.4735C22.5535 9.59863 23.5491 10.044 24.2599 10.7547C24.9706 11.4655 25.416 12.4611 25.416 13.5411C25.416 15.6549 23.7477 17.3798 21.6627 17.4744C24.1077 17.4744 26.0794 19.4647 26.0794 21.9096C26.0794 24.3453 24.1087 26.3355 21.6627 26.3355Z" fill="white"/>
											<path d="M20.7062 15.8441C21.095 15.4553 21.3316 14.9338 21.3316 14.3465C21.3316 13.1812 20.3842 12.2328 19.2178 12.2328H16.0334V16.4695H19.2178C19.7959 16.4695 20.3266 16.2226 20.7062 15.8441Z" fill="white"/>
										</svg>
									</div>
									<div className="d-flex">
										<div className="me-4 text-white">
											<p className="fs-12 mb-1 op6">VALID THRU</p>
											<span>08/21</span>
										</div>
										<div className="text-white">
											<p className="fs-12 mb-1 op6">CARD HOLDER</p>
											<span>Marquezz Silalahi</span>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="items">
							<div className="card-bx stacked card">
								<img src="images/card/card22.jpg" alt="" />
								<div className="card-info">
									<p className="mb-1 text-white fs-14">Main Balance</p>
									<div className="d-flex justify-content-between">
										<h2 className="num-text text-white mb-5 font-w600">$673,412.66</h2>
										<svg width="55" height="34" viewBox="0 0 55 34" fill="none" xmlns="http://www.w3.org/2000/svg">
											<circle cx="38.0091" cy="16.7788" r="16.7788" fill="white" fill-opacity="0.67"/>
											<circle cx="17.4636" cy="16.7788" r="16.7788" fill="white" fill-opacity="0.67"/>
										</svg>
									</div>
									<div className="d-flex">
										<div className="me-4 text-white">
											<p className="fs-12 mb-1 op6">VALID THRU</p>
											<span>08/21</span>
										</div>
										<div className="text-white">
											<p className="fs-12 mb-1 op6">CARD HOLDER</p>
											<span>Marquezz Silalahi</span>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-xl-12">
						<div className="row">
							<div className="col-xl-6 col-xxl-12">
								<div className="card">
									<div className="card-header d-block d-sm-flex flex-wrap border-0">
										<div className="mb-3">
											<h4 className="fs-20 text-black">Recent Trading Activities</h4>
											<p className="mb-0 fs-12">Lorem ipsum dolor sit amet, consectetur</p>
										</div>
										<div className="card-action card-tabs mb-3 style-1">
											<ul className="nav nav-tabs" role="tablist">
												<li className="nav-item">
													<a className="nav-link active" data-bs-toggle="tab" href="#monthly">
														Monthly	
													</a>
												</li>
												<li className="nav-item">
													<a className="nav-link" data-bs-toggle="tab" href="#Weekly">
														Weekly
													</a>
												</li>
												<li className="nav-item">
													<a className="nav-link" data-bs-toggle="tab" href="#Today">
														Today
													</a>
												</li>
											</ul>
										</div>
									</div>
									<div className="card-body py-0 px-3">
										<div className="tab-content">
											<div className="tab-pane active show fade" id="monthly">
												<div className="table-responsive">
													<table className="table border-hover tr-rounded card-table cardtbl-link">
														<tbody>
															<tr>
																<td>
																	<span>
																		<svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
																			<rect width="63" height="63" rx="31.5" fill="#13B440"/>
																			<path d="M40.6186 32.7207L40.6186 32.7207L40.6353 39.6289C40.6354 39.6328 40.6354 39.6363 40.6353 39.6396M40.6186 32.7207L40.1353 39.6341L40.6353 39.635C40.6353 39.6481 40.6347 39.6583 40.6345 39.6627L40.6344 39.6642C40.6346 39.6609 40.6351 39.652 40.6353 39.6407C40.6353 39.6403 40.6353 39.64 40.6353 39.6396M40.6186 32.7207C40.6167 31.9268 39.9717 31.2847 39.1777 31.2866C38.3838 31.2885 37.7417 31.9336 37.7436 32.7275L37.7436 32.7275L37.7519 36.1563M40.6186 32.7207L37.7519 36.1563M40.6353 39.6396C40.6329 40.4282 39.9931 41.0705 39.2017 41.0726C39.2 41.0726 39.1983 41.0727 39.1965 41.0727L39.1944 41.0727L39.1773 41.0726L32.2834 41.056L32.2846 40.556L32.2834 41.056C31.4897 41.054 30.8474 40.4091 30.8494 39.615C30.8513 38.8211 31.4964 38.179 32.2903 38.1809L32.2903 38.1809L35.719 38.1892L22.5364 25.0066C21.975 24.4452 21.975 23.5351 22.5364 22.9737C23.0978 22.4123 24.0079 22.4123 24.5693 22.9737L37.7519 36.1563M40.6353 39.6396C40.6353 39.6376 40.6353 39.6356 40.6353 39.6336L37.7519 36.1563M39.1964 41.0726C39.1957 41.0726 39.1951 41.0726 39.1944 41.0726L39.1964 41.0726Z" fill="white" stroke="white"/>
																		</svg>
																	</span>
																</td>
																<td className="wspace-no">
																	<svg  className="me-2" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
																		<path d="M16 9.50011C15.9992 8.67201 15.216 8.00092 14.2501 8H9V11H14.2501C15.216 10.9993 15.9992 10.328 16 9.50011Z" fill="#FFAB2D"/>
																		<path d="M9 16H14.2501C15.2165 16 16 15.3285 16 14.5001C16 13.6715 15.2165 13 14.2501 13H9V16Z" fill="#FFAB2D"/>
																		<path d="M12 0C5.3726 0 0 5.3726 0 12C0 18.6274 5.3726 24 12 24C18.6274 24 24 18.6274 24 12C23.9924 5.37574 18.6243 0.00758581 12 0ZM18.0001 14.5713C17.9978 16.4641 16.4641 17.9978 14.5716 17.9999V18.8571C14.5716 19.3305 14.1876 19.7143 13.7144 19.7143C13.2409 19.7143 12.8572 19.3305 12.8572 18.8571V17.9999H11.1431V18.8571C11.1431 19.3305 10.7591 19.7143 10.2859 19.7143C9.8124 19.7143 9.42866 19.3305 9.42866 18.8571V17.9999H6.85733C6.38387 17.9999 6.00013 17.6161 6.00013 17.1429C6.00013 16.6695 6.38387 16.2857 6.85733 16.2857H7.71427V7.71427H6.85733C6.38387 7.71427 6.00013 7.33053 6.00013 6.85707C6.00013 6.38361 6.38387 5.99987 6.85733 5.99987H9.42866V5.14293C9.42866 4.66947 9.8124 4.28573 10.2859 4.28573C10.7593 4.28573 11.1431 4.66947 11.1431 5.14293V5.99987H12.8572V5.14293C12.8572 4.66947 13.2409 4.28573 13.7144 4.28573C14.1879 4.28573 14.5716 4.66947 14.5716 5.14293V5.99987C16.4571 5.99202 17.992 7.5139 18.0001 9.39937C18.0043 10.3978 17.5714 11.3481 16.8152 12C17.5643 12.6445 17.9967 13.5828 18.0001 14.5713Z" fill="#FFAB2D"/>
																	</svg>
																	<span className="font-w600 text-black">Bitcoin</span>
																</td>
																<td>
																	<span className="text-black">06:24:45 AM</span>
																</td>
																<td>
																	<span className="font-w600 text-black">+$5,553</span>
																</td>
																<td><a className="btn btn-outline-success float-end rounded" href="javascript:void(0);">Completed</a></td>
															</tr>
															<tr>
																<td>
																	<span>
																		<svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
																			<rect width="63" height="63" rx="31.5" fill="#F04444"/>
																			<path d="M22.1318 30.9043L22.1318 30.9043L22.1151 23.9961C22.1151 23.9922 22.1151 23.9887 22.1152 23.9854M22.1318 30.9043L22.6152 23.9909L22.1152 23.9901C22.1152 23.9769 22.1157 23.9667 22.116 23.9623L22.1161 23.9608C22.1159 23.9641 22.1154 23.973 22.1152 23.9843C22.1152 23.9847 22.1152 23.9851 22.1152 23.9854M22.1318 30.9043C22.1338 31.6982 22.7788 32.3403 23.5728 32.3384C24.3667 32.3365 25.0088 31.6914 25.0069 30.8975L25.0069 30.8975L24.9986 27.4687M22.1318 30.9043L24.9986 27.4687M22.1152 23.9854C22.1176 23.1968 22.7574 22.5545 23.5488 22.5524C23.5504 22.5524 23.5522 22.5524 23.554 22.5524L23.5561 22.5523L23.5732 22.5524L30.4671 22.5691L30.4658 23.0691L30.4671 22.5691C31.2608 22.571 31.903 23.2159 31.9011 24.01C31.8992 24.8039 31.2541 25.446 30.4602 25.4441L30.4602 25.4441L27.0315 25.4358L40.2141 38.6184C40.7755 39.1798 40.7755 40.09 40.2141 40.6513C39.6527 41.2127 38.7426 41.2127 38.1812 40.6513L24.9986 27.4687M22.1152 23.9854C22.1152 23.9874 22.1152 23.9894 22.1152 23.9914L24.9986 27.4687M23.5541 22.5524C23.5547 22.5524 23.5554 22.5524 23.5561 22.5524L23.5541 22.5524Z" fill="white" stroke="white"/>
																		</svg>
																	</span>
																</td>
																<td className="wspace-no">
																	<svg className="me-2" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
																		<path d="M12.3182 13.6531C12.1139 13.7348 11.8863 13.7348 11.682 13.6531L9.48944 12.7761L12.0001 17.7974L14.5107 12.7761L12.3182 13.6531Z" fill="#DC3CCC"/>
																		<path d="M12.0001 11.9341L15.0156 10.7279L12.0001 5.90308L8.98456 10.7279L12.0001 11.9341Z" fill="#DC3CCC"/>
																		<path d="M12 0C5.3726 0 0 5.3726 0 12C0 18.6274 5.3726 24 12 24C18.6274 24 24 18.6274 24 12C23.9927 5.37574 18.6243 0.00732425 12 0ZM17.0524 11.5263L12.7667 20.0977C12.5551 20.5212 12.04 20.6928 11.6168 20.4812C11.4507 20.3983 11.3162 20.2638 11.2333 20.0977L6.94757 11.5263C6.81443 11.2589 6.8296 10.9416 6.9876 10.6882L11.2733 3.83111C11.5582 3.42984 12.114 3.33515 12.5153 3.62001C12.5972 3.67808 12.6686 3.74923 12.7267 3.83111L17.0121 10.6882C17.1704 10.9416 17.1856 11.2589 17.0524 11.5263Z" fill="#DC3CCC"/>
																	</svg>
																	<span className="font-w600 text-black">Ethereum</span>
																</td>
																<td>
																	<span className="text-black">06:24:45 AM</span>
																</td>
																<td>
																	<span className="font-w600 text-black">+$5,553</span>
																</td>
																<td>
																	<a className="btn btn-outline-light float-end rounded" href="javascript:void(0);">Pending</a>
																</td>
															</tr>
															<tr>
																<td>
																	<span>
																		<svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
																			<rect width="63" height="63" rx="31.5" fill="#13B440"/>
																			<path d="M40.6186 32.7207L40.6186 32.7207L40.6353 39.6289C40.6354 39.6328 40.6354 39.6363 40.6353 39.6396M40.6186 32.7207L40.1353 39.6341L40.6353 39.635C40.6353 39.6481 40.6347 39.6583 40.6345 39.6627L40.6344 39.6642C40.6346 39.6609 40.6351 39.652 40.6353 39.6407C40.6353 39.6403 40.6353 39.64 40.6353 39.6396M40.6186 32.7207C40.6167 31.9268 39.9717 31.2847 39.1777 31.2866C38.3838 31.2885 37.7417 31.9336 37.7436 32.7275L37.7436 32.7275L37.7519 36.1563M40.6186 32.7207L37.7519 36.1563M40.6353 39.6396C40.6329 40.4282 39.9931 41.0705 39.2017 41.0726C39.2 41.0726 39.1983 41.0727 39.1965 41.0727L39.1944 41.0727L39.1773 41.0726L32.2834 41.056L32.2846 40.556L32.2834 41.056C31.4897 41.054 30.8474 40.4091 30.8494 39.615C30.8513 38.8211 31.4964 38.179 32.2903 38.1809L32.2903 38.1809L35.719 38.1892L22.5364 25.0066C21.975 24.4452 21.975 23.5351 22.5364 22.9737C23.0978 22.4123 24.0079 22.4123 24.5693 22.9737L37.7519 36.1563M40.6353 39.6396C40.6353 39.6376 40.6353 39.6356 40.6353 39.6336L37.7519 36.1563M39.1964 41.0726C39.1957 41.0726 39.1951 41.0726 39.1944 41.0726L39.1964 41.0726Z" fill="white" stroke="white"/>
																		</svg>
																	</span>
																</td>
																<td className="wspace-no">
																	<svg className="me-2" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
																		<path d="M12.2161 0.00189099C5.59822 -0.114662 0.118718 5.17136 0.00213245 11.7875C-0.0369579 13.869 0.462987 15.8373 1.36961 17.5623H5.14217V5.75207C5.14217 5.03013 6.12354 4.80045 6.44244 5.44835L12.0001 16.6998L17.5578 5.44903C17.8767 4.80045 18.8581 5.03013 18.8581 5.75207V17.5623H22.619C23.4625 15.9594 23.9645 14.1494 23.9981 12.2194C24.1147 5.60329 18.8341 0.1253 12.2161 0.00189099Z" fill="#FF782C"/>
																		<path d="M17.4865 18.2479V8.6892L12.6146 18.5516C12.3842 19.0199 11.6154 19.0199 11.385 18.5516L6.51376 8.6892V18.2479C6.51376 18.6264 6.20721 18.9335 5.82796 18.9335H2.22685C4.36036 21.9303 7.82911 23.9241 11.7841 23.9981C15.8968 24.0708 19.5672 22.0551 21.7871 18.9335H18.1723C17.793 18.9335 17.4865 18.6264 17.4865 18.2479Z" fill="#FF782C"/>
																	</svg>
																	<span className="font-w600 text-black">Monero</span>
																</td>
																<td>
																	<span className="text-black">06:24:45 AM</span>
																</td>
																<td>
																	<span className="font-w600 text-black">-$912</span>
																</td>
																<td>
																	<a className="btn btn-outline-danger float-end rounded" href="javascript:void(0);">Canceled</a>
																</td>
															</tr>
															<tr>
																<td>
																<span>
																		<svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
																			<rect width="63" height="63" rx="31.5" fill="#F04444"/>
																			<path d="M22.1318 30.9043L22.1318 30.9043L22.1151 23.9961C22.1151 23.9922 22.1151 23.9887 22.1152 23.9854M22.1318 30.9043L22.6152 23.9909L22.1152 23.9901C22.1152 23.9769 22.1157 23.9667 22.116 23.9623L22.1161 23.9608C22.1159 23.9641 22.1154 23.973 22.1152 23.9843C22.1152 23.9847 22.1152 23.9851 22.1152 23.9854M22.1318 30.9043C22.1338 31.6982 22.7788 32.3403 23.5728 32.3384C24.3667 32.3365 25.0088 31.6914 25.0069 30.8975L25.0069 30.8975L24.9986 27.4687M22.1318 30.9043L24.9986 27.4687M22.1152 23.9854C22.1176 23.1968 22.7574 22.5545 23.5488 22.5524C23.5504 22.5524 23.5522 22.5524 23.554 22.5524L23.5561 22.5523L23.5732 22.5524L30.4671 22.5691L30.4658 23.0691L30.4671 22.5691C31.2608 22.571 31.903 23.2159 31.9011 24.01C31.8992 24.8039 31.2541 25.446 30.4602 25.4441L30.4602 25.4441L27.0315 25.4358L40.2141 38.6184C40.7755 39.1798 40.7755 40.09 40.2141 40.6513C39.6527 41.2127 38.7426 41.2127 38.1812 40.6513L24.9986 27.4687M22.1152 23.9854C22.1152 23.9874 22.1152 23.9894 22.1152 23.9914L24.9986 27.4687M23.5541 22.5524C23.5547 22.5524 23.5554 22.5524 23.5561 22.5524L23.5541 22.5524Z" fill="white" stroke="white"/>
																		</svg>
																	</span>
																</td>
																<td className="wspace-no">
																	<svg className="me-1" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
																		<path d="M12 0C5.3726 0 0 5.3726 0 12C0 18.6274 5.3726 24 12 24C18.6274 24 24 18.6274 24 12C23.9924 5.37574 18.6243 0.00758581 12 0ZM16.2857 18.0001H9.42866C8.9552 18.0001 8.57147 17.6164 8.57147 17.1429C8.57147 17.1024 8.57434 17.0618 8.5801 17.0216L9.22515 12.5054L7.92222 12.8313C7.85421 12.8486 7.78437 12.8572 7.71427 12.8572C7.24081 12.8567 6.85759 12.4727 6.85785 11.9992C6.85838 11.6063 7.12571 11.2642 7.50683 11.1684L9.48674 10.6735L10.2942 5.0213C10.3612 4.55254 10.7954 4.22714 11.2642 4.2941C11.7329 4.36107 12.0583 4.79529 11.9914 5.26404L11.2825 10.2247L14.3636 9.4543C14.8222 9.33737 15.2886 9.61439 15.4053 10.0729C15.5222 10.5315 15.2452 10.9979 14.7866 11.1148C14.784 11.1153 14.7814 11.1161 14.7788 11.1166L11.0204 12.0562L10.4164 16.2857H16.2857C16.7592 16.2857 17.1429 16.6695 17.1429 17.1429C17.1429 17.6161 16.7592 18.0001 16.2857 18.0001Z" fill="#5F5F5F"/>
																	</svg>
																	<span className="font-w600 text-black">Litecoin</span>
																</td>
																<td>
																	<span className="text-black">06:24:45 AM</span>
																</td>
																<td>
																	<span className="font-w600 text-black">+$7,762</span>
																</td>
																<td>
																	<a className="btn btn-outline-success float-end rounded" href="javascript:void(0);">Completed</a>
																</td>
															</tr>
															<tr>
																<td>
																	<span>
																		<svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
																			<rect width="63" height="63" rx="31.5" fill="#13B440"/>
																			<path d="M40.6186 32.7207L40.6186 32.7207L40.6353 39.6289C40.6354 39.6328 40.6354 39.6363 40.6353 39.6396M40.6186 32.7207L40.1353 39.6341L40.6353 39.635C40.6353 39.6481 40.6347 39.6583 40.6345 39.6627L40.6344 39.6642C40.6346 39.6609 40.6351 39.652 40.6353 39.6407C40.6353 39.6403 40.6353 39.64 40.6353 39.6396M40.6186 32.7207C40.6167 31.9268 39.9717 31.2847 39.1777 31.2866C38.3838 31.2885 37.7417 31.9336 37.7436 32.7275L37.7436 32.7275L37.7519 36.1563M40.6186 32.7207L37.7519 36.1563M40.6353 39.6396C40.6329 40.4282 39.9931 41.0705 39.2017 41.0726C39.2 41.0726 39.1983 41.0727 39.1965 41.0727L39.1944 41.0727L39.1773 41.0726L32.2834 41.056L32.2846 40.556L32.2834 41.056C31.4897 41.054 30.8474 40.4091 30.8494 39.615C30.8513 38.8211 31.4964 38.179 32.2903 38.1809L32.2903 38.1809L35.719 38.1892L22.5364 25.0066C21.975 24.4452 21.975 23.5351 22.5364 22.9737C23.0978 22.4123 24.0079 22.4123 24.5693 22.9737L37.7519 36.1563M40.6353 39.6396C40.6353 39.6376 40.6353 39.6356 40.6353 39.6336L37.7519 36.1563M39.1964 41.0726C39.1957 41.0726 39.1951 41.0726 39.1944 41.0726L39.1964 41.0726Z" fill="white" stroke="white"/>
																		</svg>
																	</span>
																</td>
																<td className="wspace-no">
																	<svg  className="me-2" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
																		<path d="M16 9.50011C15.9992 8.67201 15.216 8.00092 14.2501 8H9V11H14.2501C15.216 10.9993 15.9992 10.328 16 9.50011Z" fill="#FFAB2D"/>
																		<path d="M9 16H14.2501C15.2165 16 16 15.3285 16 14.5001C16 13.6715 15.2165 13 14.2501 13H9V16Z" fill="#FFAB2D"/>
																		<path d="M12 0C5.3726 0 0 5.3726 0 12C0 18.6274 5.3726 24 12 24C18.6274 24 24 18.6274 24 12C23.9924 5.37574 18.6243 0.00758581 12 0ZM18.0001 14.5713C17.9978 16.4641 16.4641 17.9978 14.5716 17.9999V18.8571C14.5716 19.3305 14.1876 19.7143 13.7144 19.7143C13.2409 19.7143 12.8572 19.3305 12.8572 18.8571V17.9999H11.1431V18.8571C11.1431 19.3305 10.7591 19.7143 10.2859 19.7143C9.8124 19.7143 9.42866 19.3305 9.42866 18.8571V17.9999H6.85733C6.38387 17.9999 6.00013 17.6161 6.00013 17.1429C6.00013 16.6695 6.38387 16.2857 6.85733 16.2857H7.71427V7.71427H6.85733C6.38387 7.71427 6.00013 7.33053 6.00013 6.85707C6.00013 6.38361 6.38387 5.99987 6.85733 5.99987H9.42866V5.14293C9.42866 4.66947 9.8124 4.28573 10.2859 4.28573C10.7593 4.28573 11.1431 4.66947 11.1431 5.14293V5.99987H12.8572V5.14293C12.8572 4.66947 13.2409 4.28573 13.7144 4.28573C14.1879 4.28573 14.5716 4.66947 14.5716 5.14293V5.99987C16.4571 5.99202 17.992 7.5139 18.0001 9.39937C18.0043 10.3978 17.5714 11.3481 16.8152 12C17.5643 12.6445 17.9967 13.5828 18.0001 14.5713Z" fill="#FFAB2D"/>
																	</svg>
																	<span className="font-w600 text-black">Bitcoin</span>
																</td>
																<td>
																	<span className="text-black">06:24:45 AM</span>
																</td>
																<td>
																	<span className="font-w600 text-black">+$5,553</span>
																</td>
																<td>
																	<a className="btn btn-outline-success float-end rounded" href="javascript:void(0);">Completed</a>
																</td>
															</tr>
															<tr>
																<td>
																	<span>
																		<svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
																			<rect width="63" height="63" rx="31.5" fill="#F04444"/>
																			<path d="M22.1318 30.9043L22.1318 30.9043L22.1151 23.9961C22.1151 23.9922 22.1151 23.9887 22.1152 23.9854M22.1318 30.9043L22.6152 23.9909L22.1152 23.9901C22.1152 23.9769 22.1157 23.9667 22.116 23.9623L22.1161 23.9608C22.1159 23.9641 22.1154 23.973 22.1152 23.9843C22.1152 23.9847 22.1152 23.9851 22.1152 23.9854M22.1318 30.9043C22.1338 31.6982 22.7788 32.3403 23.5728 32.3384C24.3667 32.3365 25.0088 31.6914 25.0069 30.8975L25.0069 30.8975L24.9986 27.4687M22.1318 30.9043L24.9986 27.4687M22.1152 23.9854C22.1176 23.1968 22.7574 22.5545 23.5488 22.5524C23.5504 22.5524 23.5522 22.5524 23.554 22.5524L23.5561 22.5523L23.5732 22.5524L30.4671 22.5691L30.4658 23.0691L30.4671 22.5691C31.2608 22.571 31.903 23.2159 31.9011 24.01C31.8992 24.8039 31.2541 25.446 30.4602 25.4441L30.4602 25.4441L27.0315 25.4358L40.2141 38.6184C40.7755 39.1798 40.7755 40.09 40.2141 40.6513C39.6527 41.2127 38.7426 41.2127 38.1812 40.6513L24.9986 27.4687M22.1152 23.9854C22.1152 23.9874 22.1152 23.9894 22.1152 23.9914L24.9986 27.4687M23.5541 22.5524C23.5547 22.5524 23.5554 22.5524 23.5561 22.5524L23.5541 22.5524Z" fill="white" stroke="white"/>
																		</svg>
																	</span>
																</td>
																<td className="wspace-no">
																	<svg className="me-2" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
																		<path d="M12.2161 0.00189099C5.59822 -0.114662 0.118718 5.17136 0.00213245 11.7875C-0.0369579 13.869 0.462987 15.8373 1.36961 17.5623H5.14217V5.75207C5.14217 5.03013 6.12354 4.80045 6.44244 5.44835L12.0001 16.6998L17.5578 5.44903C17.8767 4.80045 18.8581 5.03013 18.8581 5.75207V17.5623H22.619C23.4625 15.9594 23.9645 14.1494 23.9981 12.2194C24.1147 5.60329 18.8341 0.1253 12.2161 0.00189099Z" fill="#FF782C"/>
																		<path d="M17.4865 18.2479V8.6892L12.6146 18.5516C12.3842 19.0199 11.6154 19.0199 11.385 18.5516L6.51376 8.6892V18.2479C6.51376 18.6264 6.20721 18.9335 5.82796 18.9335H2.22685C4.36036 21.9303 7.82911 23.9241 11.7841 23.9981C15.8968 24.0708 19.5672 22.0551 21.7871 18.9335H18.1723C17.793 18.9335 17.4865 18.6264 17.4865 18.2479Z" fill="#FF782C"/>
																	</svg>
																	<span className="font-w600 text-black">Monero</span>
																</td>
																<td>
																	<span className="text-black">06:24:45 AM</span>
																</td>
																<td>
																	<span className="font-w600 text-black">-$912</span>
																</td>
																<td>
																	<a className="btn btn-outline-danger float-end rounded" href="javascript:void(0);">Canceled</a>
																</td>
															</tr>
														</tbody>
													</table>
												</div>
											</div>
											<div className="tab-pane fade" id="Weekly">
												<div className="table-responsive">
													<table className="table border-hover card-table border-no tbl-btn short-one cardtbl-link">
														<tbody>
															<tr>
																<td>
																	<span>
																		<svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
																			<rect width="63" height="63" rx="31.5" fill="#13B440"/>
																			<path d="M40.6186 32.7207L40.6186 32.7207L40.6353 39.6289C40.6354 39.6328 40.6354 39.6363 40.6353 39.6396M40.6186 32.7207L40.1353 39.6341L40.6353 39.635C40.6353 39.6481 40.6347 39.6583 40.6345 39.6627L40.6344 39.6642C40.6346 39.6609 40.6351 39.652 40.6353 39.6407C40.6353 39.6403 40.6353 39.64 40.6353 39.6396M40.6186 32.7207C40.6167 31.9268 39.9717 31.2847 39.1777 31.2866C38.3838 31.2885 37.7417 31.9336 37.7436 32.7275L37.7436 32.7275L37.7519 36.1563M40.6186 32.7207L37.7519 36.1563M40.6353 39.6396C40.6329 40.4282 39.9931 41.0705 39.2017 41.0726C39.2 41.0726 39.1983 41.0727 39.1965 41.0727L39.1944 41.0727L39.1773 41.0726L32.2834 41.056L32.2846 40.556L32.2834 41.056C31.4897 41.054 30.8474 40.4091 30.8494 39.615C30.8513 38.8211 31.4964 38.179 32.2903 38.1809L32.2903 38.1809L35.719 38.1892L22.5364 25.0066C21.975 24.4452 21.975 23.5351 22.5364 22.9737C23.0978 22.4123 24.0079 22.4123 24.5693 22.9737L37.7519 36.1563M40.6353 39.6396C40.6353 39.6376 40.6353 39.6356 40.6353 39.6336L37.7519 36.1563M39.1964 41.0726C39.1957 41.0726 39.1951 41.0726 39.1944 41.0726L39.1964 41.0726Z" fill="white" stroke="white"/>
																		</svg>
																	</span>
																</td>
																<td className="wspace-no">
																	<svg  className="me-2" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
																		<path d="M16 9.50011C15.9992 8.67201 15.216 8.00092 14.2501 8H9V11H14.2501C15.216 10.9993 15.9992 10.328 16 9.50011Z" fill="#FFAB2D"/>
																		<path d="M9 16H14.2501C15.2165 16 16 15.3285 16 14.5001C16 13.6715 15.2165 13 14.2501 13H9V16Z" fill="#FFAB2D"/>
																		<path d="M12 0C5.3726 0 0 5.3726 0 12C0 18.6274 5.3726 24 12 24C18.6274 24 24 18.6274 24 12C23.9924 5.37574 18.6243 0.00758581 12 0ZM18.0001 14.5713C17.9978 16.4641 16.4641 17.9978 14.5716 17.9999V18.8571C14.5716 19.3305 14.1876 19.7143 13.7144 19.7143C13.2409 19.7143 12.8572 19.3305 12.8572 18.8571V17.9999H11.1431V18.8571C11.1431 19.3305 10.7591 19.7143 10.2859 19.7143C9.8124 19.7143 9.42866 19.3305 9.42866 18.8571V17.9999H6.85733C6.38387 17.9999 6.00013 17.6161 6.00013 17.1429C6.00013 16.6695 6.38387 16.2857 6.85733 16.2857H7.71427V7.71427H6.85733C6.38387 7.71427 6.00013 7.33053 6.00013 6.85707C6.00013 6.38361 6.38387 5.99987 6.85733 5.99987H9.42866V5.14293C9.42866 4.66947 9.8124 4.28573 10.2859 4.28573C10.7593 4.28573 11.1431 4.66947 11.1431 5.14293V5.99987H12.8572V5.14293C12.8572 4.66947 13.2409 4.28573 13.7144 4.28573C14.1879 4.28573 14.5716 4.66947 14.5716 5.14293V5.99987C16.4571 5.99202 17.992 7.5139 18.0001 9.39937C18.0043 10.3978 17.5714 11.3481 16.8152 12C17.5643 12.6445 17.9967 13.5828 18.0001 14.5713Z" fill="#FFAB2D"/>
																	</svg>
																	<span className="font-w600 text-black">Bitcoin</span>
																</td>
																<td>
																	<span className="text-black">06:24:45 AM</span>
																</td>
																<td>
																	<span className="font-w600 text-black">+$5,553</span>
																</td>
																<td><a className="btn btn-outline-success float-end rounded" href="javascript:void(0);">Completed</a></td>
															</tr>
															<tr>
																<td>
																	<span>
																		<svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
																			<rect width="63" height="63" rx="31.5" fill="#F04444"/>
																			<path d="M22.1318 30.9043L22.1318 30.9043L22.1151 23.9961C22.1151 23.9922 22.1151 23.9887 22.1152 23.9854M22.1318 30.9043L22.6152 23.9909L22.1152 23.9901C22.1152 23.9769 22.1157 23.9667 22.116 23.9623L22.1161 23.9608C22.1159 23.9641 22.1154 23.973 22.1152 23.9843C22.1152 23.9847 22.1152 23.9851 22.1152 23.9854M22.1318 30.9043C22.1338 31.6982 22.7788 32.3403 23.5728 32.3384C24.3667 32.3365 25.0088 31.6914 25.0069 30.8975L25.0069 30.8975L24.9986 27.4687M22.1318 30.9043L24.9986 27.4687M22.1152 23.9854C22.1176 23.1968 22.7574 22.5545 23.5488 22.5524C23.5504 22.5524 23.5522 22.5524 23.554 22.5524L23.5561 22.5523L23.5732 22.5524L30.4671 22.5691L30.4658 23.0691L30.4671 22.5691C31.2608 22.571 31.903 23.2159 31.9011 24.01C31.8992 24.8039 31.2541 25.446 30.4602 25.4441L30.4602 25.4441L27.0315 25.4358L40.2141 38.6184C40.7755 39.1798 40.7755 40.09 40.2141 40.6513C39.6527 41.2127 38.7426 41.2127 38.1812 40.6513L24.9986 27.4687M22.1152 23.9854C22.1152 23.9874 22.1152 23.9894 22.1152 23.9914L24.9986 27.4687M23.5541 22.5524C23.5547 22.5524 23.5554 22.5524 23.5561 22.5524L23.5541 22.5524Z" fill="white" stroke="white"/>
																		</svg>
																	</span>
																</td>
																<td className="wspace-no">
																	<svg className="me-2" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
																		<path d="M12.3182 13.6531C12.1139 13.7348 11.8863 13.7348 11.682 13.6531L9.48944 12.7761L12.0001 17.7974L14.5107 12.7761L12.3182 13.6531Z" fill="#DC3CCC"/>
																		<path d="M12.0001 11.9341L15.0156 10.7279L12.0001 5.90308L8.98456 10.7279L12.0001 11.9341Z" fill="#DC3CCC"/>
																		<path d="M12 0C5.3726 0 0 5.3726 0 12C0 18.6274 5.3726 24 12 24C18.6274 24 24 18.6274 24 12C23.9927 5.37574 18.6243 0.00732425 12 0ZM17.0524 11.5263L12.7667 20.0977C12.5551 20.5212 12.04 20.6928 11.6168 20.4812C11.4507 20.3983 11.3162 20.2638 11.2333 20.0977L6.94757 11.5263C6.81443 11.2589 6.8296 10.9416 6.9876 10.6882L11.2733 3.83111C11.5582 3.42984 12.114 3.33515 12.5153 3.62001C12.5972 3.67808 12.6686 3.74923 12.7267 3.83111L17.0121 10.6882C17.1704 10.9416 17.1856 11.2589 17.0524 11.5263Z" fill="#DC3CCC"/>
																	</svg>
																	<span className="font-w600 text-black">Ethereum</span>
																</td>
																<td>
																	<span className="text-black">06:24:45 AM</span>
																</td>
																<td>
																	<span className="font-w600 text-black">+$5,553</span>
																</td>
																<td>
																	<a className="btn btn-outline-light float-end rounded" href="javascript:void(0);">Pending</a>
																</td>
															</tr>
															<tr>
																<td>
																	<span>
																		<svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
																			<rect width="63" height="63" rx="31.5" fill="#13B440"/>
																			<path d="M40.6186 32.7207L40.6186 32.7207L40.6353 39.6289C40.6354 39.6328 40.6354 39.6363 40.6353 39.6396M40.6186 32.7207L40.1353 39.6341L40.6353 39.635C40.6353 39.6481 40.6347 39.6583 40.6345 39.6627L40.6344 39.6642C40.6346 39.6609 40.6351 39.652 40.6353 39.6407C40.6353 39.6403 40.6353 39.64 40.6353 39.6396M40.6186 32.7207C40.6167 31.9268 39.9717 31.2847 39.1777 31.2866C38.3838 31.2885 37.7417 31.9336 37.7436 32.7275L37.7436 32.7275L37.7519 36.1563M40.6186 32.7207L37.7519 36.1563M40.6353 39.6396C40.6329 40.4282 39.9931 41.0705 39.2017 41.0726C39.2 41.0726 39.1983 41.0727 39.1965 41.0727L39.1944 41.0727L39.1773 41.0726L32.2834 41.056L32.2846 40.556L32.2834 41.056C31.4897 41.054 30.8474 40.4091 30.8494 39.615C30.8513 38.8211 31.4964 38.179 32.2903 38.1809L32.2903 38.1809L35.719 38.1892L22.5364 25.0066C21.975 24.4452 21.975 23.5351 22.5364 22.9737C23.0978 22.4123 24.0079 22.4123 24.5693 22.9737L37.7519 36.1563M40.6353 39.6396C40.6353 39.6376 40.6353 39.6356 40.6353 39.6336L37.7519 36.1563M39.1964 41.0726C39.1957 41.0726 39.1951 41.0726 39.1944 41.0726L39.1964 41.0726Z" fill="white" stroke="white"/>
																		</svg>
																	</span>
																</td>
																<td className="wspace-no">
																	<svg className="me-2" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
																		<path d="M12.2161 0.00189099C5.59822 -0.114662 0.118718 5.17136 0.00213245 11.7875C-0.0369579 13.869 0.462987 15.8373 1.36961 17.5623H5.14217V5.75207C5.14217 5.03013 6.12354 4.80045 6.44244 5.44835L12.0001 16.6998L17.5578 5.44903C17.8767 4.80045 18.8581 5.03013 18.8581 5.75207V17.5623H22.619C23.4625 15.9594 23.9645 14.1494 23.9981 12.2194C24.1147 5.60329 18.8341 0.1253 12.2161 0.00189099Z" fill="#FF782C"/>
																		<path d="M17.4865 18.2479V8.6892L12.6146 18.5516C12.3842 19.0199 11.6154 19.0199 11.385 18.5516L6.51376 8.6892V18.2479C6.51376 18.6264 6.20721 18.9335 5.82796 18.9335H2.22685C4.36036 21.9303 7.82911 23.9241 11.7841 23.9981C15.8968 24.0708 19.5672 22.0551 21.7871 18.9335H18.1723C17.793 18.9335 17.4865 18.6264 17.4865 18.2479Z" fill="#FF782C"/>
																	</svg>
																	<span className="font-w600 text-black">Monero</span>
																</td>
																<td>
																	<span className="text-black">06:24:45 AM</span>
																</td>
																<td>
																	<span className="font-w600 text-black">-$912</span>
																</td>
																<td>
																	<a className="btn btn-outline-danger float-end rounded" href="javascript:void(0);">Canceled</a>
																</td>
															</tr>
															<tr>
																<td>
																<span>
																		<svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
																			<rect width="63" height="63" rx="31.5" fill="#F04444"/>
																			<path d="M22.1318 30.9043L22.1318 30.9043L22.1151 23.9961C22.1151 23.9922 22.1151 23.9887 22.1152 23.9854M22.1318 30.9043L22.6152 23.9909L22.1152 23.9901C22.1152 23.9769 22.1157 23.9667 22.116 23.9623L22.1161 23.9608C22.1159 23.9641 22.1154 23.973 22.1152 23.9843C22.1152 23.9847 22.1152 23.9851 22.1152 23.9854M22.1318 30.9043C22.1338 31.6982 22.7788 32.3403 23.5728 32.3384C24.3667 32.3365 25.0088 31.6914 25.0069 30.8975L25.0069 30.8975L24.9986 27.4687M22.1318 30.9043L24.9986 27.4687M22.1152 23.9854C22.1176 23.1968 22.7574 22.5545 23.5488 22.5524C23.5504 22.5524 23.5522 22.5524 23.554 22.5524L23.5561 22.5523L23.5732 22.5524L30.4671 22.5691L30.4658 23.0691L30.4671 22.5691C31.2608 22.571 31.903 23.2159 31.9011 24.01C31.8992 24.8039 31.2541 25.446 30.4602 25.4441L30.4602 25.4441L27.0315 25.4358L40.2141 38.6184C40.7755 39.1798 40.7755 40.09 40.2141 40.6513C39.6527 41.2127 38.7426 41.2127 38.1812 40.6513L24.9986 27.4687M22.1152 23.9854C22.1152 23.9874 22.1152 23.9894 22.1152 23.9914L24.9986 27.4687M23.5541 22.5524C23.5547 22.5524 23.5554 22.5524 23.5561 22.5524L23.5541 22.5524Z" fill="white" stroke="white"/>
																		</svg>
																	</span>
																</td>
																<td className="wspace-no">
																	<svg className="me-2" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
																		<path d="M12 0C5.3726 0 0 5.3726 0 12C0 18.6274 5.3726 24 12 24C18.6274 24 24 18.6274 24 12C23.9924 5.37574 18.6243 0.00758581 12 0ZM16.2857 18.0001H9.42866C8.9552 18.0001 8.57147 17.6164 8.57147 17.1429C8.57147 17.1024 8.57434 17.0618 8.5801 17.0216L9.22515 12.5054L7.92222 12.8313C7.85421 12.8486 7.78437 12.8572 7.71427 12.8572C7.24081 12.8567 6.85759 12.4727 6.85785 11.9992C6.85838 11.6063 7.12571 11.2642 7.50683 11.1684L9.48674 10.6735L10.2942 5.0213C10.3612 4.55254 10.7954 4.22714 11.2642 4.2941C11.7329 4.36107 12.0583 4.79529 11.9914 5.26404L11.2825 10.2247L14.3636 9.4543C14.8222 9.33737 15.2886 9.61439 15.4053 10.0729C15.5222 10.5315 15.2452 10.9979 14.7866 11.1148C14.784 11.1153 14.7814 11.1161 14.7788 11.1166L11.0204 12.0562L10.4164 16.2857H16.2857C16.7592 16.2857 17.1429 16.6695 17.1429 17.1429C17.1429 17.6161 16.7592 18.0001 16.2857 18.0001Z" fill="#5F5F5F"/>
																	</svg>
																	<span className="font-w600 text-black">Litecoin</span>
																</td>
																<td>
																	<span className="text-black">06:24:45 AM</span>
																</td>
																<td>
																	<span className="font-w600 text-black">+$7,762</span>
																</td>
																<td>
																	<a className="btn btn-outline-success float-end rounded" href="javascript:void(0);">Completed</a>
																</td>
															</tr>
															<tr>
																<td>
																	<span>
																		<svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
																			<rect width="63" height="63" rx="31.5" fill="#13B440"/>
																			<path d="M40.6186 32.7207L40.6186 32.7207L40.6353 39.6289C40.6354 39.6328 40.6354 39.6363 40.6353 39.6396M40.6186 32.7207L40.1353 39.6341L40.6353 39.635C40.6353 39.6481 40.6347 39.6583 40.6345 39.6627L40.6344 39.6642C40.6346 39.6609 40.6351 39.652 40.6353 39.6407C40.6353 39.6403 40.6353 39.64 40.6353 39.6396M40.6186 32.7207C40.6167 31.9268 39.9717 31.2847 39.1777 31.2866C38.3838 31.2885 37.7417 31.9336 37.7436 32.7275L37.7436 32.7275L37.7519 36.1563M40.6186 32.7207L37.7519 36.1563M40.6353 39.6396C40.6329 40.4282 39.9931 41.0705 39.2017 41.0726C39.2 41.0726 39.1983 41.0727 39.1965 41.0727L39.1944 41.0727L39.1773 41.0726L32.2834 41.056L32.2846 40.556L32.2834 41.056C31.4897 41.054 30.8474 40.4091 30.8494 39.615C30.8513 38.8211 31.4964 38.179 32.2903 38.1809L32.2903 38.1809L35.719 38.1892L22.5364 25.0066C21.975 24.4452 21.975 23.5351 22.5364 22.9737C23.0978 22.4123 24.0079 22.4123 24.5693 22.9737L37.7519 36.1563M40.6353 39.6396C40.6353 39.6376 40.6353 39.6356 40.6353 39.6336L37.7519 36.1563M39.1964 41.0726C39.1957 41.0726 39.1951 41.0726 39.1944 41.0726L39.1964 41.0726Z" fill="white" stroke="white"/>
																		</svg>
																	</span>
																</td>
																<td className="wspace-no">
																	<svg  className="me-2" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
																		<path d="M16 9.50011C15.9992 8.67201 15.216 8.00092 14.2501 8H9V11H14.2501C15.216 10.9993 15.9992 10.328 16 9.50011Z" fill="#FFAB2D"/>
																		<path d="M9 16H14.2501C15.2165 16 16 15.3285 16 14.5001C16 13.6715 15.2165 13 14.2501 13H9V16Z" fill="#FFAB2D"/>
																		<path d="M12 0C5.3726 0 0 5.3726 0 12C0 18.6274 5.3726 24 12 24C18.6274 24 24 18.6274 24 12C23.9924 5.37574 18.6243 0.00758581 12 0ZM18.0001 14.5713C17.9978 16.4641 16.4641 17.9978 14.5716 17.9999V18.8571C14.5716 19.3305 14.1876 19.7143 13.7144 19.7143C13.2409 19.7143 12.8572 19.3305 12.8572 18.8571V17.9999H11.1431V18.8571C11.1431 19.3305 10.7591 19.7143 10.2859 19.7143C9.8124 19.7143 9.42866 19.3305 9.42866 18.8571V17.9999H6.85733C6.38387 17.9999 6.00013 17.6161 6.00013 17.1429C6.00013 16.6695 6.38387 16.2857 6.85733 16.2857H7.71427V7.71427H6.85733C6.38387 7.71427 6.00013 7.33053 6.00013 6.85707C6.00013 6.38361 6.38387 5.99987 6.85733 5.99987H9.42866V5.14293C9.42866 4.66947 9.8124 4.28573 10.2859 4.28573C10.7593 4.28573 11.1431 4.66947 11.1431 5.14293V5.99987H12.8572V5.14293C12.8572 4.66947 13.2409 4.28573 13.7144 4.28573C14.1879 4.28573 14.5716 4.66947 14.5716 5.14293V5.99987C16.4571 5.99202 17.992 7.5139 18.0001 9.39937C18.0043 10.3978 17.5714 11.3481 16.8152 12C17.5643 12.6445 17.9967 13.5828 18.0001 14.5713Z" fill="#FFAB2D"/>
																	</svg>
																	<span className="font-w600 text-black">Bitcoin</span>
																</td>
																<td>
																	<span className="text-black">06:24:45 AM</span>
																</td>
																<td>
																	<span className="font-w600 text-black">+$5,553</span>
																</td>
																<td>
																	<a className="btn btn-outline-success float-end rounded" href="javascript:void(0);">Completed</a>
																</td>
															</tr>
															<tr>
																<td>
																	<span>
																		<svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
																			<rect width="63" height="63" rx="31.5" fill="#F04444"/>
																			<path d="M22.1318 30.9043L22.1318 30.9043L22.1151 23.9961C22.1151 23.9922 22.1151 23.9887 22.1152 23.9854M22.1318 30.9043L22.6152 23.9909L22.1152 23.9901C22.1152 23.9769 22.1157 23.9667 22.116 23.9623L22.1161 23.9608C22.1159 23.9641 22.1154 23.973 22.1152 23.9843C22.1152 23.9847 22.1152 23.9851 22.1152 23.9854M22.1318 30.9043C22.1338 31.6982 22.7788 32.3403 23.5728 32.3384C24.3667 32.3365 25.0088 31.6914 25.0069 30.8975L25.0069 30.8975L24.9986 27.4687M22.1318 30.9043L24.9986 27.4687M22.1152 23.9854C22.1176 23.1968 22.7574 22.5545 23.5488 22.5524C23.5504 22.5524 23.5522 22.5524 23.554 22.5524L23.5561 22.5523L23.5732 22.5524L30.4671 22.5691L30.4658 23.0691L30.4671 22.5691C31.2608 22.571 31.903 23.2159 31.9011 24.01C31.8992 24.8039 31.2541 25.446 30.4602 25.4441L30.4602 25.4441L27.0315 25.4358L40.2141 38.6184C40.7755 39.1798 40.7755 40.09 40.2141 40.6513C39.6527 41.2127 38.7426 41.2127 38.1812 40.6513L24.9986 27.4687M22.1152 23.9854C22.1152 23.9874 22.1152 23.9894 22.1152 23.9914L24.9986 27.4687M23.5541 22.5524C23.5547 22.5524 23.5554 22.5524 23.5561 22.5524L23.5541 22.5524Z" fill="white" stroke="white"/>
																		</svg>
																	</span>
																</td>
																<td className="wspace-no">
																	<svg className="me-2" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
																		<path d="M12.2161 0.00189099C5.59822 -0.114662 0.118718 5.17136 0.00213245 11.7875C-0.0369579 13.869 0.462987 15.8373 1.36961 17.5623H5.14217V5.75207C5.14217 5.03013 6.12354 4.80045 6.44244 5.44835L12.0001 16.6998L17.5578 5.44903C17.8767 4.80045 18.8581 5.03013 18.8581 5.75207V17.5623H22.619C23.4625 15.9594 23.9645 14.1494 23.9981 12.2194C24.1147 5.60329 18.8341 0.1253 12.2161 0.00189099Z" fill="#FF782C"/>
																		<path d="M17.4865 18.2479V8.6892L12.6146 18.5516C12.3842 19.0199 11.6154 19.0199 11.385 18.5516L6.51376 8.6892V18.2479C6.51376 18.6264 6.20721 18.9335 5.82796 18.9335H2.22685C4.36036 21.9303 7.82911 23.9241 11.7841 23.9981C15.8968 24.0708 19.5672 22.0551 21.7871 18.9335H18.1723C17.793 18.9335 17.4865 18.6264 17.4865 18.2479Z" fill="#FF782C"/>
																	</svg>
																	<span className="font-w600 text-black">Monero</span>
																</td>
																<td>
																	<span className="text-black">06:24:45 AM</span>
																</td>
																<td>
																	<span className="font-w600 text-black">-$912</span>
																</td>
																<td>
																	<a className="btn btn-outline-danger float-end rounded" href="javascript:void(0);">Canceled</a>
																</td>
															</tr>
														</tbody>
													</table>
												</div>
											</div>
											<div className="tab-pane fade" id="Today">
												<div className="table-responsive">
													<table className="table border-hover card-table border-no tbl-btn short-one cardtbl-link">
														<tbody>
															<tr>
																<td>
																	<span>
																		<svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
																			<rect width="63" height="63" rx="31.5" fill="#13B440"/>
																			<path d="M40.6186 32.7207L40.6186 32.7207L40.6353 39.6289C40.6354 39.6328 40.6354 39.6363 40.6353 39.6396M40.6186 32.7207L40.1353 39.6341L40.6353 39.635C40.6353 39.6481 40.6347 39.6583 40.6345 39.6627L40.6344 39.6642C40.6346 39.6609 40.6351 39.652 40.6353 39.6407C40.6353 39.6403 40.6353 39.64 40.6353 39.6396M40.6186 32.7207C40.6167 31.9268 39.9717 31.2847 39.1777 31.2866C38.3838 31.2885 37.7417 31.9336 37.7436 32.7275L37.7436 32.7275L37.7519 36.1563M40.6186 32.7207L37.7519 36.1563M40.6353 39.6396C40.6329 40.4282 39.9931 41.0705 39.2017 41.0726C39.2 41.0726 39.1983 41.0727 39.1965 41.0727L39.1944 41.0727L39.1773 41.0726L32.2834 41.056L32.2846 40.556L32.2834 41.056C31.4897 41.054 30.8474 40.4091 30.8494 39.615C30.8513 38.8211 31.4964 38.179 32.2903 38.1809L32.2903 38.1809L35.719 38.1892L22.5364 25.0066C21.975 24.4452 21.975 23.5351 22.5364 22.9737C23.0978 22.4123 24.0079 22.4123 24.5693 22.9737L37.7519 36.1563M40.6353 39.6396C40.6353 39.6376 40.6353 39.6356 40.6353 39.6336L37.7519 36.1563M39.1964 41.0726C39.1957 41.0726 39.1951 41.0726 39.1944 41.0726L39.1964 41.0726Z" fill="white" stroke="white"/>
																		</svg>
																	</span>
																</td>
																<td className="wspace-no">
																	<svg  className="me-2" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
																		<path d="M16 9.50011C15.9992 8.67201 15.216 8.00092 14.2501 8H9V11H14.2501C15.216 10.9993 15.9992 10.328 16 9.50011Z" fill="#FFAB2D"/>
																		<path d="M9 16H14.2501C15.2165 16 16 15.3285 16 14.5001C16 13.6715 15.2165 13 14.2501 13H9V16Z" fill="#FFAB2D"/>
																		<path d="M12 0C5.3726 0 0 5.3726 0 12C0 18.6274 5.3726 24 12 24C18.6274 24 24 18.6274 24 12C23.9924 5.37574 18.6243 0.00758581 12 0ZM18.0001 14.5713C17.9978 16.4641 16.4641 17.9978 14.5716 17.9999V18.8571C14.5716 19.3305 14.1876 19.7143 13.7144 19.7143C13.2409 19.7143 12.8572 19.3305 12.8572 18.8571V17.9999H11.1431V18.8571C11.1431 19.3305 10.7591 19.7143 10.2859 19.7143C9.8124 19.7143 9.42866 19.3305 9.42866 18.8571V17.9999H6.85733C6.38387 17.9999 6.00013 17.6161 6.00013 17.1429C6.00013 16.6695 6.38387 16.2857 6.85733 16.2857H7.71427V7.71427H6.85733C6.38387 7.71427 6.00013 7.33053 6.00013 6.85707C6.00013 6.38361 6.38387 5.99987 6.85733 5.99987H9.42866V5.14293C9.42866 4.66947 9.8124 4.28573 10.2859 4.28573C10.7593 4.28573 11.1431 4.66947 11.1431 5.14293V5.99987H12.8572V5.14293C12.8572 4.66947 13.2409 4.28573 13.7144 4.28573C14.1879 4.28573 14.5716 4.66947 14.5716 5.14293V5.99987C16.4571 5.99202 17.992 7.5139 18.0001 9.39937C18.0043 10.3978 17.5714 11.3481 16.8152 12C17.5643 12.6445 17.9967 13.5828 18.0001 14.5713Z" fill="#FFAB2D"/>
																	</svg>
																	<span className="font-w600 text-black">Bitcoin</span>
																</td>
																<td>
																	<span className="text-black">06:24:45 AM</span>
																</td>
																<td>
																	<span className="font-w600 text-black">+$5,553</span>
																</td>
																<td><a className="btn btn-outline-success float-end rounded" href="javascript:void(0);">Completed</a></td>
															</tr>
															<tr>
																<td>
																	<span>
																		<svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
																			<rect width="63" height="63" rx="31.5" fill="#F04444"/>
																			<path d="M22.1318 30.9043L22.1318 30.9043L22.1151 23.9961C22.1151 23.9922 22.1151 23.9887 22.1152 23.9854M22.1318 30.9043L22.6152 23.9909L22.1152 23.9901C22.1152 23.9769 22.1157 23.9667 22.116 23.9623L22.1161 23.9608C22.1159 23.9641 22.1154 23.973 22.1152 23.9843C22.1152 23.9847 22.1152 23.9851 22.1152 23.9854M22.1318 30.9043C22.1338 31.6982 22.7788 32.3403 23.5728 32.3384C24.3667 32.3365 25.0088 31.6914 25.0069 30.8975L25.0069 30.8975L24.9986 27.4687M22.1318 30.9043L24.9986 27.4687M22.1152 23.9854C22.1176 23.1968 22.7574 22.5545 23.5488 22.5524C23.5504 22.5524 23.5522 22.5524 23.554 22.5524L23.5561 22.5523L23.5732 22.5524L30.4671 22.5691L30.4658 23.0691L30.4671 22.5691C31.2608 22.571 31.903 23.2159 31.9011 24.01C31.8992 24.8039 31.2541 25.446 30.4602 25.4441L30.4602 25.4441L27.0315 25.4358L40.2141 38.6184C40.7755 39.1798 40.7755 40.09 40.2141 40.6513C39.6527 41.2127 38.7426 41.2127 38.1812 40.6513L24.9986 27.4687M22.1152 23.9854C22.1152 23.9874 22.1152 23.9894 22.1152 23.9914L24.9986 27.4687M23.5541 22.5524C23.5547 22.5524 23.5554 22.5524 23.5561 22.5524L23.5541 22.5524Z" fill="white" stroke="white"/>
																		</svg>
																	</span>
																</td>
																<td className="wspace-no">
																	<svg className="me-2" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
																		<path d="M12.3182 13.6531C12.1139 13.7348 11.8863 13.7348 11.682 13.6531L9.48944 12.7761L12.0001 17.7974L14.5107 12.7761L12.3182 13.6531Z" fill="#DC3CCC"/>
																		<path d="M12.0001 11.9341L15.0156 10.7279L12.0001 5.90308L8.98456 10.7279L12.0001 11.9341Z" fill="#DC3CCC"/>
																		<path d="M12 0C5.3726 0 0 5.3726 0 12C0 18.6274 5.3726 24 12 24C18.6274 24 24 18.6274 24 12C23.9927 5.37574 18.6243 0.00732425 12 0ZM17.0524 11.5263L12.7667 20.0977C12.5551 20.5212 12.04 20.6928 11.6168 20.4812C11.4507 20.3983 11.3162 20.2638 11.2333 20.0977L6.94757 11.5263C6.81443 11.2589 6.8296 10.9416 6.9876 10.6882L11.2733 3.83111C11.5582 3.42984 12.114 3.33515 12.5153 3.62001C12.5972 3.67808 12.6686 3.74923 12.7267 3.83111L17.0121 10.6882C17.1704 10.9416 17.1856 11.2589 17.0524 11.5263Z" fill="#DC3CCC"/>
																	</svg>
																	<span className="font-w600 text-black">Ethereum</span>
																</td>
																<td>
																	<span className="text-black">06:24:45 AM</span>
																</td>
																<td>
																	<span className="font-w600 text-black">+$5,553</span>
																</td>
																<td>
																	<a className="btn btn-outline-light float-end rounded" href="javascript:void(0);">Pending</a>
																</td>
															</tr>
															<tr>
																<td>
																	<span>
																		<svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
																			<rect width="63" height="63" rx="31.5" fill="#13B440"/>
																			<path d="M40.6186 32.7207L40.6186 32.7207L40.6353 39.6289C40.6354 39.6328 40.6354 39.6363 40.6353 39.6396M40.6186 32.7207L40.1353 39.6341L40.6353 39.635C40.6353 39.6481 40.6347 39.6583 40.6345 39.6627L40.6344 39.6642C40.6346 39.6609 40.6351 39.652 40.6353 39.6407C40.6353 39.6403 40.6353 39.64 40.6353 39.6396M40.6186 32.7207C40.6167 31.9268 39.9717 31.2847 39.1777 31.2866C38.3838 31.2885 37.7417 31.9336 37.7436 32.7275L37.7436 32.7275L37.7519 36.1563M40.6186 32.7207L37.7519 36.1563M40.6353 39.6396C40.6329 40.4282 39.9931 41.0705 39.2017 41.0726C39.2 41.0726 39.1983 41.0727 39.1965 41.0727L39.1944 41.0727L39.1773 41.0726L32.2834 41.056L32.2846 40.556L32.2834 41.056C31.4897 41.054 30.8474 40.4091 30.8494 39.615C30.8513 38.8211 31.4964 38.179 32.2903 38.1809L32.2903 38.1809L35.719 38.1892L22.5364 25.0066C21.975 24.4452 21.975 23.5351 22.5364 22.9737C23.0978 22.4123 24.0079 22.4123 24.5693 22.9737L37.7519 36.1563M40.6353 39.6396C40.6353 39.6376 40.6353 39.6356 40.6353 39.6336L37.7519 36.1563M39.1964 41.0726C39.1957 41.0726 39.1951 41.0726 39.1944 41.0726L39.1964 41.0726Z" fill="white" stroke="white"/>
																		</svg>
																	</span>
																</td>
																<td className="wspace-no">
																	<svg className="me-2" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
																		<path d="M12.2161 0.00189099C5.59822 -0.114662 0.118718 5.17136 0.00213245 11.7875C-0.0369579 13.869 0.462987 15.8373 1.36961 17.5623H5.14217V5.75207C5.14217 5.03013 6.12354 4.80045 6.44244 5.44835L12.0001 16.6998L17.5578 5.44903C17.8767 4.80045 18.8581 5.03013 18.8581 5.75207V17.5623H22.619C23.4625 15.9594 23.9645 14.1494 23.9981 12.2194C24.1147 5.60329 18.8341 0.1253 12.2161 0.00189099Z" fill="#FF782C"/>
																		<path d="M17.4865 18.2479V8.6892L12.6146 18.5516C12.3842 19.0199 11.6154 19.0199 11.385 18.5516L6.51376 8.6892V18.2479C6.51376 18.6264 6.20721 18.9335 5.82796 18.9335H2.22685C4.36036 21.9303 7.82911 23.9241 11.7841 23.9981C15.8968 24.0708 19.5672 22.0551 21.7871 18.9335H18.1723C17.793 18.9335 17.4865 18.6264 17.4865 18.2479Z" fill="#FF782C"/>
																	</svg>
																	<span className="font-w600 text-black">Monero</span>
																</td>
																<td>
																	<span className="text-black">06:24:45 AM</span>
																</td>
																<td>
																	<span className="font-w600 text-black">-$912</span>
																</td>
																<td>
																	<a className="btn btn-outline-danger float-end rounded" href="javascript:void(0);">Canceled</a>
																</td>
															</tr>
															<tr>
																<td>
																<span>
																		<svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
																			<rect width="63" height="63" rx="31.5" fill="#F04444"/>
																			<path d="M22.1318 30.9043L22.1318 30.9043L22.1151 23.9961C22.1151 23.9922 22.1151 23.9887 22.1152 23.9854M22.1318 30.9043L22.6152 23.9909L22.1152 23.9901C22.1152 23.9769 22.1157 23.9667 22.116 23.9623L22.1161 23.9608C22.1159 23.9641 22.1154 23.973 22.1152 23.9843C22.1152 23.9847 22.1152 23.9851 22.1152 23.9854M22.1318 30.9043C22.1338 31.6982 22.7788 32.3403 23.5728 32.3384C24.3667 32.3365 25.0088 31.6914 25.0069 30.8975L25.0069 30.8975L24.9986 27.4687M22.1318 30.9043L24.9986 27.4687M22.1152 23.9854C22.1176 23.1968 22.7574 22.5545 23.5488 22.5524C23.5504 22.5524 23.5522 22.5524 23.554 22.5524L23.5561 22.5523L23.5732 22.5524L30.4671 22.5691L30.4658 23.0691L30.4671 22.5691C31.2608 22.571 31.903 23.2159 31.9011 24.01C31.8992 24.8039 31.2541 25.446 30.4602 25.4441L30.4602 25.4441L27.0315 25.4358L40.2141 38.6184C40.7755 39.1798 40.7755 40.09 40.2141 40.6513C39.6527 41.2127 38.7426 41.2127 38.1812 40.6513L24.9986 27.4687M22.1152 23.9854C22.1152 23.9874 22.1152 23.9894 22.1152 23.9914L24.9986 27.4687M23.5541 22.5524C23.5547 22.5524 23.5554 22.5524 23.5561 22.5524L23.5541 22.5524Z" fill="white" stroke="white"/>
																		</svg>
																	</span>
																</td>
																<td className="wspace-no">
																	<svg className="me-1" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
																		<path d="M12 0C5.3726 0 0 5.3726 0 12C0 18.6274 5.3726 24 12 24C18.6274 24 24 18.6274 24 12C23.9924 5.37574 18.6243 0.00758581 12 0ZM16.2857 18.0001H9.42866C8.9552 18.0001 8.57147 17.6164 8.57147 17.1429C8.57147 17.1024 8.57434 17.0618 8.5801 17.0216L9.22515 12.5054L7.92222 12.8313C7.85421 12.8486 7.78437 12.8572 7.71427 12.8572C7.24081 12.8567 6.85759 12.4727 6.85785 11.9992C6.85838 11.6063 7.12571 11.2642 7.50683 11.1684L9.48674 10.6735L10.2942 5.0213C10.3612 4.55254 10.7954 4.22714 11.2642 4.2941C11.7329 4.36107 12.0583 4.79529 11.9914 5.26404L11.2825 10.2247L14.3636 9.4543C14.8222 9.33737 15.2886 9.61439 15.4053 10.0729C15.5222 10.5315 15.2452 10.9979 14.7866 11.1148C14.784 11.1153 14.7814 11.1161 14.7788 11.1166L11.0204 12.0562L10.4164 16.2857H16.2857C16.7592 16.2857 17.1429 16.6695 17.1429 17.1429C17.1429 17.6161 16.7592 18.0001 16.2857 18.0001Z" fill="#5F5F5F"/>
																	</svg>
																	<span className="font-w600 text-black">Litecoin</span>
																</td>
																<td>
																	<span className="text-black">06:24:45 AM</span>
																</td>
																<td>
																	<span className="font-w600 text-black">+$7,762</span>
																</td>
																<td>
																	<a className="btn btn-outline-success float-end rounded" href="javascript:void(0);">Completed</a>
																</td>
															</tr>
															<tr>
																<td>
																	<span>
																		<svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
																			<rect width="63" height="63" rx="31.5" fill="#13B440"/>
																			<path d="M40.6186 32.7207L40.6186 32.7207L40.6353 39.6289C40.6354 39.6328 40.6354 39.6363 40.6353 39.6396M40.6186 32.7207L40.1353 39.6341L40.6353 39.635C40.6353 39.6481 40.6347 39.6583 40.6345 39.6627L40.6344 39.6642C40.6346 39.6609 40.6351 39.652 40.6353 39.6407C40.6353 39.6403 40.6353 39.64 40.6353 39.6396M40.6186 32.7207C40.6167 31.9268 39.9717 31.2847 39.1777 31.2866C38.3838 31.2885 37.7417 31.9336 37.7436 32.7275L37.7436 32.7275L37.7519 36.1563M40.6186 32.7207L37.7519 36.1563M40.6353 39.6396C40.6329 40.4282 39.9931 41.0705 39.2017 41.0726C39.2 41.0726 39.1983 41.0727 39.1965 41.0727L39.1944 41.0727L39.1773 41.0726L32.2834 41.056L32.2846 40.556L32.2834 41.056C31.4897 41.054 30.8474 40.4091 30.8494 39.615C30.8513 38.8211 31.4964 38.179 32.2903 38.1809L32.2903 38.1809L35.719 38.1892L22.5364 25.0066C21.975 24.4452 21.975 23.5351 22.5364 22.9737C23.0978 22.4123 24.0079 22.4123 24.5693 22.9737L37.7519 36.1563M40.6353 39.6396C40.6353 39.6376 40.6353 39.6356 40.6353 39.6336L37.7519 36.1563M39.1964 41.0726C39.1957 41.0726 39.1951 41.0726 39.1944 41.0726L39.1964 41.0726Z" fill="white" stroke="white"/>
																		</svg>
																	</span>
																</td>
																<td className="wspace-no">
																	<svg  className="me-2" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
																		<path d="M16 9.50011C15.9992 8.67201 15.216 8.00092 14.2501 8H9V11H14.2501C15.216 10.9993 15.9992 10.328 16 9.50011Z" fill="#FFAB2D"/>
																		<path d="M9 16H14.2501C15.2165 16 16 15.3285 16 14.5001C16 13.6715 15.2165 13 14.2501 13H9V16Z" fill="#FFAB2D"/>
																		<path d="M12 0C5.3726 0 0 5.3726 0 12C0 18.6274 5.3726 24 12 24C18.6274 24 24 18.6274 24 12C23.9924 5.37574 18.6243 0.00758581 12 0ZM18.0001 14.5713C17.9978 16.4641 16.4641 17.9978 14.5716 17.9999V18.8571C14.5716 19.3305 14.1876 19.7143 13.7144 19.7143C13.2409 19.7143 12.8572 19.3305 12.8572 18.8571V17.9999H11.1431V18.8571C11.1431 19.3305 10.7591 19.7143 10.2859 19.7143C9.8124 19.7143 9.42866 19.3305 9.42866 18.8571V17.9999H6.85733C6.38387 17.9999 6.00013 17.6161 6.00013 17.1429C6.00013 16.6695 6.38387 16.2857 6.85733 16.2857H7.71427V7.71427H6.85733C6.38387 7.71427 6.00013 7.33053 6.00013 6.85707C6.00013 6.38361 6.38387 5.99987 6.85733 5.99987H9.42866V5.14293C9.42866 4.66947 9.8124 4.28573 10.2859 4.28573C10.7593 4.28573 11.1431 4.66947 11.1431 5.14293V5.99987H12.8572V5.14293C12.8572 4.66947 13.2409 4.28573 13.7144 4.28573C14.1879 4.28573 14.5716 4.66947 14.5716 5.14293V5.99987C16.4571 5.99202 17.992 7.5139 18.0001 9.39937C18.0043 10.3978 17.5714 11.3481 16.8152 12C17.5643 12.6445 17.9967 13.5828 18.0001 14.5713Z" fill="#FFAB2D"/>
																	</svg>
																	<span className="font-w600 text-black">Bitcoin</span>
																</td>
																<td>
																	<span className="text-black">06:24:45 AM</span>
																</td>
																<td>
																	<span className="font-w600 text-black">+$5,553</span>
																</td>
																<td>
																	<a className="btn btn-outline-success float-end rounded" href="javascript:void(0);">Completed</a>
																</td>
															</tr>
															<tr>
																<td>
																	<span>
																		<svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
																			<rect width="63" height="63" rx="31.5" fill="#F04444"/>
																			<path d="M22.1318 30.9043L22.1318 30.9043L22.1151 23.9961C22.1151 23.9922 22.1151 23.9887 22.1152 23.9854M22.1318 30.9043L22.6152 23.9909L22.1152 23.9901C22.1152 23.9769 22.1157 23.9667 22.116 23.9623L22.1161 23.9608C22.1159 23.9641 22.1154 23.973 22.1152 23.9843C22.1152 23.9847 22.1152 23.9851 22.1152 23.9854M22.1318 30.9043C22.1338 31.6982 22.7788 32.3403 23.5728 32.3384C24.3667 32.3365 25.0088 31.6914 25.0069 30.8975L25.0069 30.8975L24.9986 27.4687M22.1318 30.9043L24.9986 27.4687M22.1152 23.9854C22.1176 23.1968 22.7574 22.5545 23.5488 22.5524C23.5504 22.5524 23.5522 22.5524 23.554 22.5524L23.5561 22.5523L23.5732 22.5524L30.4671 22.5691L30.4658 23.0691L30.4671 22.5691C31.2608 22.571 31.903 23.2159 31.9011 24.01C31.8992 24.8039 31.2541 25.446 30.4602 25.4441L30.4602 25.4441L27.0315 25.4358L40.2141 38.6184C40.7755 39.1798 40.7755 40.09 40.2141 40.6513C39.6527 41.2127 38.7426 41.2127 38.1812 40.6513L24.9986 27.4687M22.1152 23.9854C22.1152 23.9874 22.1152 23.9894 22.1152 23.9914L24.9986 27.4687M23.5541 22.5524C23.5547 22.5524 23.5554 22.5524 23.5561 22.5524L23.5541 22.5524Z" fill="white" stroke="white"/>
																		</svg>
																	</span>
																</td>
																<td className="wspace-no">
																	<svg className="me-1" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
																		<path d="M12.2161 0.00189099C5.59822 -0.114662 0.118718 5.17136 0.00213245 11.7875C-0.0369579 13.869 0.462987 15.8373 1.36961 17.5623H5.14217V5.75207C5.14217 5.03013 6.12354 4.80045 6.44244 5.44835L12.0001 16.6998L17.5578 5.44903C17.8767 4.80045 18.8581 5.03013 18.8581 5.75207V17.5623H22.619C23.4625 15.9594 23.9645 14.1494 23.9981 12.2194C24.1147 5.60329 18.8341 0.1253 12.2161 0.00189099Z" fill="#FF782C"/>
																		<path d="M17.4865 18.2479V8.6892L12.6146 18.5516C12.3842 19.0199 11.6154 19.0199 11.385 18.5516L6.51376 8.6892V18.2479C6.51376 18.6264 6.20721 18.9335 5.82796 18.9335H2.22685C4.36036 21.9303 7.82911 23.9241 11.7841 23.9981C15.8968 24.0708 19.5672 22.0551 21.7871 18.9335H18.1723C17.793 18.9335 17.4865 18.6264 17.4865 18.2479Z" fill="#FF782C"/>
																	</svg>
																	<span className="font-w600 text-black">Monero</span>
																</td>
																<td>
																	<span className="text-black">06:24:45 AM</span>
																</td>
																<td>
																	<span className="font-w600 text-black">-$912</span>
																</td>
																<td>
																	<a className="btn btn-outline-danger float-end rounded" href="javascript:void(0);">Canceled</a>
																</td>
															</tr>
														</tbody>
													</table>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="col-xl-3 col-xxl-6 col-md-6">
								<div className="card">
									<div className="card-header border-0 pb-0">
										<h4 className="mb-0 fs-20 text-black">Sell Order</h4>
										<div className="dropdown custom-dropdown mb-0">
											<div className="btn sharp tp-btn dark-btn" data-bs-toggle="dropdown">
												<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z" stroke="#342E59" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
													<path d="M12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6Z" stroke="#342E59" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
													<path d="M12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20Z" stroke="#342E59" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
												</svg>
											</div>
											<div className="dropdown-menu dropdown-menu-right">
												<a className="dropdown-item" href="javascript:void(0);">Details</a>
												<a className="dropdown-item text-danger" href="javascript:void(0);">Cancel</a>
											</div>
										</div>
									</div>
									<div className="card-body px-4">
										<div className="dropdown custom-dropdown d-block tbl-orders">
											<div className="btn  d-flex align-items-center border-0 order-bg rounded " data-bs-toggle="dropdown">
												<svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path d="M23.4169 0.00384777C10.7089 -0.226161 0.233857 9.88466 0.00384777 22.5831C-0.226161 35.2815 9.88466 45.7661 22.5831 45.9961C35.2815 46.2261 45.7661 36.1153 45.9961 23.4073C46.2261 10.7089 36.1153 0.224273 23.4169 0.00384777ZM22.6598 41.6834C12.3573 41.4918 4.12485 32.9622 4.31652 22.6598C4.49861 12.3573 13.0281 4.12485 23.3306 4.30694C33.6427 4.49861 41.8655 13.0281 41.6834 23.3306C41.5013 33.6331 32.9622 41.8655 22.6598 41.6834Z" fill="#374C98"/>
													<path d="M23.3038 6.22751C14.0555 6.06459 6.3981 13.4536 6.23518 22.7019C6.06267 31.9406 13.4517 39.598 22.7 39.7705C31.9483 39.9334 39.6057 32.5444 39.7686 23.3057C39.9315 14.0574 32.5521 6.40002 23.3038 6.22751ZM30.2136 32.7361H14.9564L16.8252 22.3952L14.6593 22.8457V21.0823L17.151 20.5552L18.7707 11.6615H24.8563L23.4763 19.2326L25.6039 18.7822V20.5456L23.1504 21.0535L21.732 28.8738H31.3445L30.2136 32.7361Z" fill="#374C98"/>
												</svg>
												<div className="text-start ms-3">
													<span className="d-block fs-16 text-black">Litecoin</span>
												</div>
												<i className="fa fa-angle-down scale5 ms-auto"></i>
											</div>
											<div className="dropdown-menu dropdown-menu-right">
												<a className="dropdown-item" href="javascript:void(0);">Bitcoin</a>
												<a className="dropdown-item" href="javascript:void(0);">ETH coin</a>
											</div>
										</div>
										<div className="table-responsive">
											<table className="table text-center bg-primary-hover tr-rounded order-tbl">
												<thead>
													<tr>
														<th className="text-left">Price</th>
														<th className="text-center">Amount</th>
														<th className="text-right">Total</th>
													</tr>
												</thead>
												<tbody>
													<tr>
														<td className="text-left">82.3</td>
														<td>0.15</td>
														<td className="text-right">$134,12</td>
													</tr>
													<tr>
														<td className="text-left">83.9</td>
														<td>0.18</td>
														<td className="text-right">$237,31</td>
													</tr>
													<tr>
														<td className="text-left">84.2</td>
														<td>0.25</td>
														<td className="text-right">$252,58</td>
													</tr>
													<tr>
														<td className="text-left">86.2</td>
														<td>0.35</td>
														<td className="text-right">$126,26</td>
													</tr>
													<tr>
														<td className="text-left">91.6</td>
														<td>0.75</td>
														<td className="text-right">$46,92</td>
													</tr>
													<tr>
														<td className="text-left">92.6</td>
														<td>0.21</td>
														<td className="text-right">$123,27</td>
													</tr>
													<tr>
														<td className="text-left">93.9</td>
														<td>0.55</td>
														<td className="text-right">$212,56</td>
													</tr>
													<tr>
														<td className="text-left">94.2</td>
														<td>0.18</td>
														<td className="text-right">$129,26</td>
													</tr>
												</tbody>
											</table>
										</div>
									</div>
								</div>	
							</div>
							<div className="col-xl-3 col-xxl-6 col-md-6">
								<div className="card">
									<div className="card-header border-0 pb-0">
										<h4 className="mb-0 text-black fs-20">Buy Order</h4>
										<div className="dropdown custom-dropdown mb-0 tbl-orders-style">
											<div className="btn sharp tp-btn dark-btn" data-bs-toggle="dropdown">
												<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z" stroke="#342E59" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
													<path d="M12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6Z" stroke="#342E59" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
													<path d="M12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20Z" stroke="#342E59" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
												</svg>
											</div>
											<div className="dropdown-menu dropdown-menu-right">
												<a className="dropdown-item" href="javascript:void(0);">Details</a>
												<a className="dropdown-item text-danger" href="javascript:void(0);">Cancel</a>
											</div>
										</div>
									</div>
									<div className="card-body pb-0 px-4">
										<div className="dropdown custom-dropdown d-block tbl-orders">
											<div className="btn  d-flex align-items-center order-bg border-0 rounded" data-bs-toggle="dropdown">
												<svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path d="M23.4169 0.00384778C10.7089 -0.226162 0.233857 9.88467 0.00384778 22.5831C-0.226162 35.2816 9.88467 45.7662 22.5831 45.9962C35.2816 46.2262 45.7662 36.1153 45.9962 23.4073C46.2262 10.7089 36.1153 0.224274 23.4169 0.00384778ZM22.6598 41.6835C12.3573 41.4918 4.12485 32.9623 4.31653 22.6598C4.49862 12.3573 13.0281 4.12485 23.3306 4.30694C33.6427 4.49862 41.8656 13.0281 41.6835 23.3306C41.5014 33.6332 32.9623 41.8656 22.6598 41.6835Z" fill="#FF782C"/>
													<path d="M23.3019 6.22369C14.0536 6.06076 6.3962 13.4498 6.23327 22.6981C6.17864 25.6077 6.8773 28.3592 8.14427 30.7705H13.4163V14.2616C13.4163 13.2524 14.7877 12.9313 15.2334 13.837L23 29.5649L30.7667 13.838C31.2123 12.9313 32.5837 13.2524 32.5837 14.2616V30.7705H37.8395C39.0182 28.5298 39.7198 25.9997 39.7667 23.3019C39.9297 14.0536 32.5502 6.3962 23.3019 6.22369Z" fill="#FF782C"/>
													<path d="M30.667 31.7289V18.3672L23.8587 32.1534C23.5367 32.808 22.4624 32.808 22.1403 32.1534L15.333 18.3672V31.7289C15.333 32.2579 14.9046 32.6872 14.3746 32.6872H9.34223C12.3237 36.8763 17.1712 39.6632 22.6981 39.7667C28.4455 39.8683 33.5747 37.0507 36.6769 32.6872H31.6254C31.0954 32.6872 30.667 32.2579 30.667 31.7289Z" fill="#FF782C"/>
												</svg>
												<div className="text-left ms-3">
													<span className="d-block fs-16 text-black">Monero</span>
												</div>
												<i className="fa fa-angle-down scale5 ms-auto"></i>
											</div>
											<div className="dropdown-menu dropdown-menu-right">
												<a className="dropdown-item" href="javascript:void(0);">Dash coin</a>
												<a className="dropdown-item" href="javascript:void(0);">ETH coin</a>
											</div>
										</div>
										<div className="table-responsive">
											<table className="table text-center bg-warning-hover tr-rounded order-tbl">
												<thead>
													<tr>
														<th className="text-left">Price</th>
														<th className="text-center">Amount</th>
														<th className="text-right">Total</th>
													</tr>
												</thead>
												<tbody>
													<tr>
														<td className="text-left">82.3</td>
														<td>0.15</td>
														<td className="text-right">$134,12</td>
													</tr>
													<tr>
														<td className="text-left">83.9</td>
														<td>0.18</td>
														<td className="text-right">$237,31</td>
													</tr>
													<tr>
														<td className="text-left">84.2</td>
														<td>0.25</td>
														<td className="text-right">$252,58</td>
													</tr>
													<tr>
														<td className="text-left">86.2</td>
														<td>0.35</td>
														<td className="text-right">$126,26</td>
													</tr>
													<tr>
														<td className="text-left">91.6</td>
														<td>0.75</td>
														<td className="text-right">$46,92</td>
													</tr>
													<tr>
														<td className="text-left">92.6</td>
														<td>0.21</td>
														<td className="text-right">$123,27</td>
													</tr>
													<tr>
														<td className="text-left">93.9</td>
														<td>0.55</td>
														<td className="text-right">$212,56</td>
													</tr>
													<tr>
														<td className="text-left">94.2</td>
														<td>0.18</td>
														<td className="text-right">$129,26</td>
													</tr>
												</tbody>
											</table>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>	
					<div className="col-xl-12">
						<div className="row">
							<div className="col-xl-6 col-xxl-12">
								<div className="card">
									<div className="card-header d-sm-flex d-block pb-0 border-0">
										<div>
											<h4 className="fs-20 text-black">Quick Transfer</h4>
											<p className="fs-12">Lorem ipsum dolor sit amet, consectetur</p>
										</div>
										<div className="quick-select">
											<svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path d="M21 0C9.40213 0 0.00012207 9.40201 0.00012207 20.9999C0.00012207 32.5978 9.40213 41.9998 21 41.9998C32.5979 41.9998 41.9999 32.5978 41.9999 20.9999C41.9867 9.4075 32.5924 0.0132751 21 0ZM28.5 31.5001H16.5002C15.6717 31.5001 15.0001 30.8286 15.0001 30C15.0001 29.929 15.0052 29.8581 15.0152 29.7876L16.1441 21.8843L13.864 22.4547C13.7449 22.4849 13.6227 22.5 13.5 22.5C12.6715 22.4991 12.0009 21.8271 12.0013 20.9985C12.0022 20.311 12.4701 19.7122 13.137 19.5447L16.6018 18.6786L18.015 8.78723C18.1321 7.96692 18.892 7.39746 19.7123 7.51465C20.5327 7.63184 21.1021 8.39172 20.9849 9.21204L19.7444 17.8931L25.1364 16.545C25.9388 16.3403 26.755 16.8251 26.9592 17.6276C27.1638 18.43 26.679 19.2462 25.8766 19.4508C25.872 19.4518 25.8674 19.4531 25.8629 19.454L19.2857 21.0983L18.2287 28.4999H28.5C29.3286 28.4999 30.0001 29.1714 30.0001 30C30.0001 30.8281 29.3286 31.5001 28.5 31.5001Z" fill="#5974D5"/>
											</svg>
											<select className="form-control style-2 default-select">
												<option>23,511 LTC</option>
												<option>345,455 ETH</option>
												<option>789,123 BTH</option>
											</select>
										</div>
									</div>
									<div className="card-body">
										<div className="form-wrapper">
											<div className="form-group">
												<div className="input-group input-group-lg">
													<div className="input-group-prepend">
														<span className="input-group-text">Amount BTC</span>
													</div>
													<input type="number" className="form-control" placeholder="742.2"/>
												</div>
											</div>
										</div>
										<div className="d-flex mb-3 justify-content-between align-items-center view-link">
											<h4 className="text-black fs-20 mb-0">Recent Contacts</h4>
											<a href="javascript:void(0);" className="btn-link">View more</a>
										</div>
										<div className="testimonial-two px-4 owl-carousel contacts-slider">
											<div className="items">
												<div className="text-center">
													<img className="mb-3 rounded-circle mx-auto" src="images/contacts/pic-5.jpg" alt=""/>
													<h5 className="mb-0"><a className="text-black" href="javascript:void(0);">Samuel</a></h5>
													<span className="fs-12">@sam224</span>
												</div>
											</div>
											<div className="items">
												<div className="text-center">
													<img className="mb-3 rounded-circle mx-auto" src="images/contacts/pic-2.jpg" alt=""/>
													<h5 className="mb-0"><a className="text-black" href="javascript:void(0);">Cindy</a></h5>
													<span className="fs-12">@cindyss</span>
												</div>
											</div>
											<div className="items">
												<div className="text-center">
													<img className="mb-3 rounded-circle mx-auto" src="images/contacts/pic-3.jpg" alt=""/>
													<h5 className="mb-0"><a className="text-black" href="javascript:void(0);">David</a></h5>
													<span className="fs-12">@davidxc</span>
												</div>
											</div>
											<div className="items">
												<div className="text-center">
													<img className="mb-3 rounded-circle mx-auto" src="images/contacts/pic-4.jpg" alt=""/>
													<h5 className="mb-0"><a className="text-black" href="javascript:void(0);">Martha</a></h5>
													<span className="fs-12">@marthaa</span>
												</div>
											</div>
											<div className="items">
												<div className="text-center">
													<img className="mb-3 rounded-circle mx-auto" src="images/contacts/pic-7.jpg" alt=""/>
													<h5 className="mb-0"><a className="text-black" href="javascript:void(0);">Olivia</a></h5>
													<span className="fs-12">@oliv62</span>
												</div>
											</div>
										</div>
										<div className="row pt-5 align-items-center">
											<div className="col-sm-6">
												<p className="fs-14">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut</p>
											</div>
											<div className="col-sm-6">
												<a href="javascript:void(0);" className="btn btn-primary d-block btn-lg rounded">TRANSFER NOW</a>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="col-xl-6 col-xxl-12">
								<div className="card">
									<div className="card-header d-sm-flex d-block pb-0 border-0">
										<div>
											<h4 className="fs-20 text-black">Quick Trade</h4>
											<p className="fs-12">Lorem ipsum dolor sit amet, consectetur</p>
										</div>
										<div className="quick-select">
											<svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path d="M28.5 16.5002C28.4986 14.844 27.156 13.5018 25.5003 13.5H16.5002V19.4999H25.5003C27.156 19.4985 28.4986 18.1559 28.5 16.5002Z" fill="#FFAB2D"/>
												<path d="M16.5002 28.5H25.5003C27.1569 28.5 28.5 27.1569 28.5 25.5003C28.5 23.8432 27.1569 22.5001 25.5003 22.5001H16.5002V28.5Z" fill="#FFAB2D"/>
												<path d="M21 9.15527e-05C9.40213 9.15527e-05 0.00012207 9.4021 0.00012207 21C0.00012207 32.5979 9.40213 41.9999 21 41.9999C32.5979 41.9999 41.9999 32.5979 41.9999 21C41.9867 9.40759 32.5924 0.0133667 21 9.15527e-05ZM31.5002 25.4998C31.4961 28.8122 28.8122 31.4961 25.5003 31.4997V32.9998C25.5003 33.8284 24.8283 34.4999 24.0002 34.4999C23.1717 34.4999 22.5001 33.8284 22.5001 32.9998V31.4997H19.5004V32.9998C19.5004 33.8284 18.8284 34.4999 18.0003 34.4999C17.1718 34.4999 16.5002 33.8284 16.5002 32.9998V31.4997H12.0004C11.1718 31.4997 10.5003 30.8282 10.5003 30.0001C10.5003 29.1715 11.1718 28.5 12.0004 28.5H13.5V13.5H12.0004C11.1718 13.5 10.5003 12.8285 10.5003 11.9999C10.5003 11.1714 11.1718 10.4998 12.0004 10.4998H16.5002V9.00018C16.5002 8.17163 17.1718 7.50009 18.0003 7.50009C18.8289 7.50009 19.5004 8.17163 19.5004 9.00018V10.4998H22.5001V9.00018C22.5001 8.17163 23.1717 7.50009 24.0002 7.50009C24.8288 7.50009 25.5003 8.17163 25.5003 9.00018V10.4998C28.7999 10.4861 31.486 13.1494 31.5002 16.4489C31.5075 18.1962 30.7499 19.8593 29.4265 21C30.7376 22.1279 31.4943 23.7699 31.5002 25.4998Z" fill="#FFAB2D"/>
											</svg>
											<select className="form-control style-2 default-select">
												<option>23,511 LTC</option>
												<option>345,455 ETH</option>
												<option>789,123 BTH</option>
											</select>
										</div>
									</div>
									<div className="card-body">
										<div className="basic-form">
											<form className="form-wrapper">
												<div className="form-group">
													<div className="input-group input-group-lg">
														<div className="input-group-prepend">
															<span className="input-group-text">Amount BTC</span>
														</div>
														<input type="number" className="form-control" placeholder="52.5"/>
													</div>
												</div>
												<div className="form-group">
													<div className="input-group input-group-lg">
														<div className="input-group-prepend">
															<span className="input-group-text ">Price BPL</span>
														</div>
														<input type="number" className="form-control"/>
													</div>
												</div>
												<div className="form-group">
													<div className="input-group input-group-lg">
														<div className="input-group-prepend">
															<span className="input-group-text">Fee (1%)</span>
														</div>
														<input type="number" className="form-control"/>
													</div>
												</div>
												<div className="form-group">
													<div className="input-group input-group-lg">
														<div className="input-group-prepend">
															<span className="input-group-text">Total BPL</span>
														</div>
														<input type="number" className="form-control"/>
													</div>
												</div>
												<div className="row mt-4 align-items-center">
													<div className="col-lg-6">
														<div>
															<p className="fs-14">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut</p>
														</div>
													</div>
													<div className="col-lg-6">
														<div className="d-flex justify-content-end">
															<a href="javascript:void(0);" className="btn  btn-success text-white rounded">
															BUY
																<svg className="ms-4 scale3" width="16" height="16" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
																<path d="M16.9638 11.5104L16.9721 14.9391L3.78954 1.7565C3.22815 1.19511 2.31799 1.19511 1.75661 1.7565C1.19522 2.31789 1.19522 3.22805 1.75661 3.78943L14.9392 16.972L11.5105 16.9637L11.5105 16.9637C10.7166 16.9619 10.0715 17.6039 10.0696 18.3978C10.0677 19.1919 10.7099 19.8369 11.5036 19.8388L11.5049 19.3388L11.5036 19.8388L18.3976 19.8554L18.4146 19.8555L18.4159 19.8555C18.418 19.8555 18.42 19.8555 18.422 19.8555C19.2131 19.8533 19.8528 19.2114 19.8555 18.4231C19.8556 18.4196 19.8556 18.4158 19.8556 18.4117L19.8389 11.5035L19.8389 11.5035C19.8369 10.7097 19.1919 10.0676 18.3979 10.0695C17.604 10.0713 16.9619 10.7164 16.9638 11.5103L16.9638 11.5104Z" fill="white" stroke="white"></path>

																</svg>
															</a>
															<a href="javascript:void(0);" className="btn btn-danger ms-3 rounded">
															SELL
																<svg className="ms-4 scale5" width="16" height="16" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
																	<path d="M5.35182 13.4965L5.35182 13.4965L5.33512 6.58823C5.33508 6.5844 5.3351 6.58084 5.33514 6.57759M5.35182 13.4965L5.83514 6.58306L5.33514 6.58221C5.33517 6.56908 5.33572 6.55882 5.33597 6.5545L5.33606 6.55298C5.33585 6.55628 5.33533 6.56514 5.33516 6.57648C5.33515 6.57684 5.33514 6.57721 5.33514 6.57759M5.35182 13.4965C5.35375 14.2903 5.99878 14.9324 6.79278 14.9305C7.58669 14.9287 8.22874 14.2836 8.22686 13.4897L8.22686 13.4896L8.21853 10.0609M5.35182 13.4965L8.21853 10.0609M5.33514 6.57759C5.33752 5.789 5.97736 5.14667 6.76872 5.14454C6.77041 5.14452 6.77217 5.14451 6.77397 5.14451L6.77603 5.1445L6.79319 5.14456L13.687 5.16121L13.6858 5.66121L13.687 5.16121C14.4807 5.16314 15.123 5.80809 15.1211 6.6022C15.1192 7.3961 14.4741 8.03814 13.6802 8.03626L13.6802 8.03626L10.2515 8.02798L23.4341 21.2106C23.9955 21.772 23.9955 22.6821 23.4341 23.2435C22.8727 23.8049 21.9625 23.8049 21.4011 23.2435L8.21853 10.0609M5.33514 6.57759C5.33513 6.57959 5.33514 6.58159 5.33514 6.5836L8.21853 10.0609M6.77407 5.14454C6.77472 5.14454 6.77537 5.14454 6.77603 5.14454L6.77407 5.14454Z" fill="white" stroke="white"></path>

																</svg>
															</a>
														</div>	
													</div>
												</div>
											</form>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					
				</div>
            </div>
        </div> */}
        {/* Content body end */}
		
		
		
        {/* Footer start  */}
        <div className="footer">
		
            <div className="copyright">
                <p>Copyright © Designed &amp; Developed by <a href="https://dexignzone.com/" target="_blank">DexignZone</a> 2021</p>
            </div>
        </div>
        {/* Footer end */}
	</div> 
    </>
    );
}