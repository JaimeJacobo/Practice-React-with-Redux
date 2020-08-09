import React, { Component, useEffect, useState } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';

import { useSelector, useDispatch } from 'react-redux';

const App = () => {
	const stateFromRedux = useSelector((state) => state);

	const dispatch = useDispatch();

	//ACTIONS
	const setSearchField = (event) => {
		return {
			type: 'SET_SEARCH_FIELD',
			event: event
		};
	};

	const setRobots = (users) => {
		return {
			type: 'SET_ROBOTS',
			users: users
		};
	};

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/users').then((response) => response.json()).then((users) => {
			dispatch(setRobots(users));
		});
	}, []);

	const filteredRobots = stateFromRedux.robots.filter((robot) => {
		return robot.name.toLowerCase().includes(stateFromRedux.searchField.toLowerCase());
	});

	return (
		<div className="tc">
			<h1 className="f1">RoboFriends</h1>
			<SearchBox searchChange={(event) => dispatch(setSearchField(event.target.value))} />
			<Scroll>
				<CardList robots={filteredRobots} />
			</Scroll>
		</div>
	);
};

export default App;
