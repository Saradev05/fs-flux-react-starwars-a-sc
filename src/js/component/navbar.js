import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import LogoIMG from "../../img/logo.png";
import "../../styles/navbar.scss";

export const Navbar = () => {
	const { store, actions } = useContext(Context);

	return (
		<nav className="navbarcss navbar  ">
			<Link to="/">
				<span className="navb  ar-brand mb-0 h1">
					{/* <img src={"https://logos-marcas.com/wp-content/uploads/2020/11/Star-Wars-Logo.png "} /> */}

					<img className="logocss" src={LogoIMG} />
				</span>
			</Link>
			<div className="ml-auto dropdown">
				<button
					className="btn btn-dark  dropdown-toggle"
					type="button"
					id="favorite"
					data-toggle="dropdown"
					aria-haspopup="true"
					aria-expanded="false">
					FAVORITES
				</button>
				<ul className="dropdown-menu" aria-labelledby="favorite">
					{store.favorites.map((favorite, i) => {
						return (
							<li key={i} className="dropdown-item">
								{favorite}
								<span
									className="ml-4"
									onClick={() => {
										actions.deleteFavorites(i);
									}}>
									<i className="fas fa-trash" />
								</span>
							</li>
						);
					})}
				</ul>
			</div>
		</nav>
	);
};

// const setObj = new Set(); // creamos pares de clave y array

// const unicFab = store.favorites.reduce((acc, favorite) => {
// 	if (!setObj.has(favorite.name)) {
// 		setObj.add(favorite.name, favorite);
// 		acc.push(favorite);
// 	}
// 	return acc;
// }, []);

//no repetir favorite https://www.neoguias.com/como-eliminar-duplicados-array-javascript/
{
	/* <li key={index}>
{task.label}{" "}
<span
onClick={() => {
deleteTask(index);
}}>
x
</span>
// const allPeople = store.people.map((person, i) => { */
}
// 	return <CardPeople key={i} name={person.name} url={person.url} />;
// });

{
	/* <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
    Dropdown button
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
  </ul>
</div> */
}

//....................
// var listenerFunction = function() {
// 	alert("First click");
// 	document.getElementById("onTimeButton").removeEventListener("click", listenerFunction);
// };
// function inicialize() {
// 	document.getElementById("onTimeButton").addEventListener("click", listenerFunction);
// }

/*var myModal = document.getElementById('myModal')
var myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', function () {
  myInput.focus()
})*/
