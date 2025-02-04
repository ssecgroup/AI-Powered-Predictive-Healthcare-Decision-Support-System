import { RouteProp } from '@react-navigation/core';
import * as React from "react";
import { StyleSheet } from "react-nativescript";
import { FrameNavigationProp } from "react-nativescript-navigation";
import { MainStackParamList } from "../../NavigationParamList";

type DiagnosisResultsProps = {
    route: RouteProp<MainStackParamList, "DiagnosisResults">,
    navigation: FrameNavigationProp<MainStackParamList, "DiagnosisResults">,
};

export function DiagnosisResultsScreen({ route, navigation }: DiagnosisResultsProps) {
    const { symptoms } = route.params;
    
    // Mock diagnosis results
    const mockResults = [
        { condition: "Common Cold", risk: "low" },
        { condition: "Seasonal Allergies", risk: "medium" },
        { condition: "Flu", risk: "high" }
    ];

    const getRiskColor = (risk: string) => {
        switch (risk) {
            case "low": return "text-green-500";
            case "medium": return "text-yellow-500";
            case "high": return "text-red-500";
            default: return "text-gray-500";
        }
    };

    return (
        <flexboxLayout className="flex-1 p-4 bg-gray-100">
            <stackLayout className="w-full">
                <label className="text-2xl font-bold text-center mb-4">
                    Diagnosis Results
                </label>

                <scrollView className="bg-white rounded-lg p-4 mb-4">
                    <stackLayout>
                        {mockResults.map((result, index) => (
                            <stackLayout key={index} className="mb-4 p-4 border-b border-gray-200">
                                <label className="text-xl font-bold">
                                    {result.condition}
                                </label>
                                <label className={`text-lg ${getRiskColor(result.risk)}`}>
                                    Risk Level: {result.risk.toUpperCase()}
                                </label>
                            </stackLayout>
                        ))}
                    </stackLayout>
                </scrollView>

                <button
                    className="bg-blue-500 text-white p-4 rounded-lg mb-4"
                    onTap={() => navigation.navigate("FHIRIntegration")}
                >
                    Sync with Health Records
                </button>

                <button
                    className="bg-gray-500 text-white p-4 rounded-lg"
                    onTap={() => navigation.goBack()}
                >
                    Back to Symptoms
                </button>
            </stackLayout>
        </flexboxLayout>
    );
}

const styles = StyleSheet.create({});