import { Dialogs } from '@nativescript/core';
import { RouteProp } from '@react-navigation/core';
import * as React from "react";
import { StyleSheet } from "react-nativescript";
import { FrameNavigationProp } from "react-nativescript-navigation";
import { MainStackParamList } from "../../NavigationParamList";

type HomeScreenProps = {
    route: RouteProp<MainStackParamList, "Home">,
    navigation: FrameNavigationProp<MainStackParamList, "Home">,
};

export function HomeScreen({ navigation }: HomeScreenProps) {
    const [symptoms, setSymptoms] = React.useState<string[]>([]);
    const [searchText, setSearchText] = React.useState("");

    const handleAddSymptom = () => {
        if (searchText.trim()) {
            setSymptoms([...symptoms, searchText.trim()]);
            setSearchText("");
        }
    };

    const handleGetDiagnosis = () => {
        if (symptoms.length > 0) {
            navigation.navigate("DiagnosisResults", { symptoms });
        } else {
            Dialogs.alert("Please enter at least one symptom");
        }
    };

    return (
        <flexboxLayout className="flex-1 p-4 bg-gray-100">
            <stackLayout className="w-full">
                <label className="text-2xl font-bold text-center mb-4">
                    Enter Your Symptoms
                </label>
                
                <textField
                    className="p-4 bg-white rounded-lg mb-4"
                    hint="Search symptoms..."
                    text={searchText}
                    onTextChange={(e) => setSearchText(e.value)}
                />
                
                <button
                    className="bg-blue-500 text-white p-4 rounded-lg mb-4"
                    onTap={handleAddSymptom}
                >
                    Add Symptom
                </button>

                <scrollView className="h-40 bg-white rounded-lg p-4 mb-4">
                    <stackLayout>
                        {symptoms.map((symptom, index) => (
                            <label key={index} className="text-lg mb-2">
                                • {symptom}
                            </label>
                        ))}
                    </stackLayout>
                </scrollView>

                <button
                    className="bg-green-500 text-white p-4 rounded-lg mb-4"
                    onTap={handleGetDiagnosis}
                >
                    Get Diagnosis
                </button>

                <button
                    className="bg-gray-500 text-white p-4 rounded-lg"
                    onTap={() => navigation.navigate("MedicalHistory")}
                >
                    View Medical History
                </button>
            </stackLayout>
        </flexboxLayout>
    );
}

const styles = StyleSheet.create({});