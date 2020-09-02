import React from "react";
import { View } from "native-base";
import MapView , { PROVIDER_GOOGLE } from "react-native-maps";

import styles from "./MapContainerStyles.js";

import SearchBox from "../SearchBox";
import SearchResults from "../SearchResults";



export const MapContainer = ({region}) => {
    return (
        <View style={styles.container}>
            <MapView
                provider={PROVIDER_GOOGLE}
                style={styles.map}
                region={region}
                showsUserLocation={true}>
               
               <MapView.Marker
						coordinate={region}
						pinColor="red"

					/>
             </MapView>
             <SearchBox/>
             <SearchResults/>
        </View>
    )
}

export default MapContainer;