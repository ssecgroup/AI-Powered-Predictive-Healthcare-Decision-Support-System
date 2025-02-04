import { BaseNavigationContainer } from '@react-navigation/core';
import * as React from "react";
import { stackNavigatorFactory } from "react-nativescript-navigation";

import { HomeScreen } from "./screens/HomeScreen";
import { DiagnosisResultsScreen } from "./screens/DiagnosisResultsScreen";
import { MedicalHistoryScreen } from "./screens/MedicalHistoryScreen";
import { FHIRIntegrationScreen } from "./screens/FHIRIntegrationScreen";

const StackNavigator = stackNavigatorFactory();

export const MainStack = () => (
    <BaseNavigationContainer>
        <StackNavigator.Navigator
            initialRouteName="Home"
            screenOptions={{
                headerStyle: {
                    backgroundColor: "#4A90E2",
                },
                headerTintColor: "#ffffff",
                headerShown: true,
            }}
        >
            <StackNavigator.Screen
                name="Home"
                component={HomeScreen}
                options={{ title: "Symptom Input" }}
            />
            <StackNavigator.Screen
                name="DiagnosisResults"
                component={DiagnosisResultsScreen}
                options={{ title: "Diagnosis Results" }}
            />
            <StackNavigator.Screen
                name="MedicalHistory"
                component={MedicalHistoryScreen}
                options={{ title: "Medical History" }}
            />
            <StackNavigator.Screen
                name="FHIRIntegration"
                component={FHIRIntegrationScreen}
                options={{ title: "FHIR Integration" }}
            />
        </StackNavigator.Navigator>
    </BaseNavigationContainer>
);