/**
 * A record of the navigation params for each route in your app.
 */
export type MainStackParamList = {
  Home: {};
  DiagnosisResults: {
    symptoms: string[];
  };
  MedicalHistory: {};
  FHIRIntegration: {};
};