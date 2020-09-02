import React from "react";
import {Text} from "react-native";
import { View, List, ListItem, Left, Body } from "native-base";

import Icon from "react-native-vector-icons/MaterialIcons";

import styles from "./SearchResultsStyles.js";



export const SearchResults = ( )=> {
	
		return(
			<View style={styles.searchResultsWrapper}>
                <List>
                    <ListItem><Text>Jinnah university for women</Text></ListItem>
                     <ListItem><Text>North Nazimabad</Text></ListItem>
                </List>
				
			</View>

		);
};

export default SearchResults;