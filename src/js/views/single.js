import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { CardSingle } from "../component/cardSingle.js";
// import { CardSinglePlanets } from "../component/cardSingle.js";

export const Single = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();

	return (
		<div>
			<CardSingle />
			<Link to="/">
				<span className="btn btn-primary btn-lg" href="#" role="button">
					Back home
				</span>
			</Link>
		</div>
	);
};

Single.propTypes = {
	match: PropTypes.object
};
