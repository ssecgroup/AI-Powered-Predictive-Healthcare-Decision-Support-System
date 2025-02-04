import { RouteProp } from '@react-navigation/core';
import * as React from "react";
import { StyleSheet } from "react-nativescript";
import { FrameNavigationProp } from "react-nativescript-navigation";
import { MainStackParamList } from "../../NavigationParamList";

type MedicalHistoryProps = {
    route: RouteProp<MainStackParamList, "MedicalHistory">,
    navigation: FrameNavigationProp<MainStackParamList, "MedicalHistory">,
};

export function MedicalHistoryScreen({ navigation }: MedicalHistoryProps) {
    // Mock medical history data
    const mockHistory = [
        {
            date: "2024-03-15",
            diagnosis: "Common Cold",
            symptoms: ["Cough", "Fever"]
        },
        {
            date: "2024-02-28",
            diagnosis: "Allergies",
            symptoms: ["Sneezing", "Runny Nose"]
        }
    ];

    return (
        <flexboxLayout className="flex-1 p-4 bg-gray-100">
            <stackLayout className="w-full">
                <label className="text-2xl font-bold text-center mb-4">
                    Medical History
                </label>

                <scrollView className="bg-white rounded-lg p-4 mb-4">
                    <stackLayout>
                        {mockHistory.map((record, index) => (
                            <stackLayout key={index} className="mb-4 p-4 border-b border-gray-200">
                                <label className="text-lg font-bold">
                                    {record.date}
                                </label>
                                <label className="text-lg">
                                    Diagnosis: {record.diagnosis}
                                </label>
                                <label className="text-lg">
                                    Symptoms: {record.symptoms.join(", ")}
                                </label>
                            </stackLayout>
                        ))}
                    </stackLayout>
                </scrollView>

                <button
                    className="bg-gray-500 text-white p-4 rounded-lg"
                    onTap={() => navigation.goBack()}
                >
                    Back to Home
                </button>
            </stackLayout>
        </flexboxLayout>
    );
}

const styles = StyleSheet.create({});