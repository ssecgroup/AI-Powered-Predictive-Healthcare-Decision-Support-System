import { RouteProp } from '@react-navigation/core';
import * as React from "react";
import { StyleSheet } from "react-nativescript";
import { FrameNavigationProp } from "react-nativescript-navigation";
import { MainStackParamList } from "../../NavigationParamList";

type FHIRIntegrationProps = {
    route: RouteProp<MainStackParamList, "FHIRIntegration">,
    navigation: FrameNavigationProp<MainStackParamList, "FHIRIntegration">,
};

export function FHIRIntegrationScreen({ navigation }: FHIRIntegrationProps) {
    const [isConnected, setIsConnected] = React.useState(false);

    const handleConnect = () => {
        // Mock FHIR connection
        setIsConnected(true);
    };

    return (
        <flexboxLayout className="flex-1 p-4 bg-gray-100">
            <stackLayout className="w-full">
                <label className="text-2xl font-bold text-center mb-4">
                    FHIR Integration
                </label>

                <label className="text-lg text-center mb-4">
                    {isConnected ? "Connected to FHIR" : "Not connected to FHIR"}
                </label>

                <button
                    className={`${isConnected ? 'bg-green-500' : 'bg-blue-500'} text-white p-4 rounded-lg mb-4`}
                    onTap={handleConnect}
                >
                    {isConnected ? "Connected" : "Connect to FHIR"}
                </button>

                <button
                    className="bg-gray-500 text-white p-4 rounded-lg"
                    onTap={() => navigation.goBack()}
                >
                    Back
                </button>
            </stackLayout>
        </flexboxLayout>
    );
}

const styles = StyleSheet.create({});