import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'

const TopNavbar = () => {

	return (
		<div className="ad-navbar">
			<nav className="navbar navbar-light bg-light navbar-expand-lg fixed-top mk-bg shadow-1-strong">
				<div className="container-fluid">
					<a className="navbar-brand flex-grow-1" href="#">
						<i className="fas fa-utensils"></i>
						<span className="brand">Mk' Beldi</span><sub className="text-muted">&nbsp;Admin</sub></a>
					<button className="navbar-toggler d-lg-none btn-toggle p-0" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
						aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon text-white"><i class="fas fa-bars"></i></span>
					</button>

					<div className="collapse navbar-collapse flex-grow-0" id="collapsibleNavId">
						<ul className="navbar-nav mr-auto mt-2 mt-lg-0">
							<li className="nav-item active">
							<a className="nav-link" href="#">
							<i class="far fa-chart-bar"></i>
							Analytique
							</a>
							</li>
							<li className="nav-item">
							<Link className="nav-link" to="/admin/manage/product">
							<i class="fas fa-store"></i>
							Gerer Les Produits</Link>
							</li>
							<li className="nav-item dropdown">
							<a className="nav-link dropdown-toggle" href="#" id="dropdownId" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							<i class="far fa-edit"></i>
							Gerer Les Avis</a>
							<div className="dropdown-menu drp-account" aria-labelledby="dropdownId">
							{/* <Link className="dropdown-item" to="#">
							<i class="far fa-comment-alt"></i>
							Gérer Les Avis</Link> */}
							<Link className="dropdown-item" to="/Admin/Manage/Feedbacks">
							<i class="far fa-comment-alt"></i>
                  	Gérer Les Feedbakcs</Link>
							</div>
							</li>
							<li className="nav-item">
							<Link className="nav-link" to="/Admin/UsersList">
							<i class="fas fa-user-circle"></i>
							Liste Utilisateurs</Link>
							</li>
							<li className="nav-item">
							<Link className="nav-link" to="/admin/manage/orders">
							<i class="fas fa-user-cog"></i>
							Gérer Les Commandes</Link>
							</li>
							<li className="nav-item">
							<Link className="nav-link" to="#">
							<i class="fas fa-th-list"></i>
							Todo List App</Link>
							</li>
							<li className="nav-item">
							<Link className="nav-link" to="#">
							<i class="fas fa-sign-in-alt"></i>
							Se Deconnecter</Link>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</div>
	)
}

export default TopNavbar;