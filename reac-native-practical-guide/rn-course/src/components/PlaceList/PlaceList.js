import React, { Component } from 'react'
import { Text, View } from 'react-native';

import ListItem from '../ListItem/ListItem'

const PlaceList = ({ places }) => {
	return (
		<View style={{width:"100%"}}>
				{places.map((place, i) => {
						return <ListItem key={i} placeName={place} />
				})}
		</View>
	);
};

export default PlaceList;