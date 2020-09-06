import React from "react";
import { View, Text } from "react-native";
import { Container } from "native-base";

import MapContainer  from "./MapContainer";
import FooterComponent from "../../../components/FooterComponent";

import Fare from "./Fare";

export default class Home extends React.Component{

    componentDidMount(){
        this.props.getCurrentLocation();
    }
      
    render()
    {   
        const region = {
            latitude: 25.020893,
            longitude: 67.132278,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
        }

        return(
             
            <Container>
                { this.props.region.latitude &&
                    <MapContainer region={this.props.region}
                                  getInputData={this.props.getInputData}
                                  toggleSearchResultModal={this.props.toggleSearchResultModal}
                                  getAddressPredictions={this.props.getAddressPredictions}
                                  resultTypes={this.props.resultTypes}
                                  predictions={this.props.predictions}
                                  getSelectedAddress={this.props.getSelectedAddress}
                                  selectedAddress={this.props.selectedAddress}
                    />
                    
                    }

                    {
							this.props.fare &&
							<Fare fare={this.props.fare} />
						}
                    <FooterComponent/>
                
            </Container>
        )
    }

}
    
