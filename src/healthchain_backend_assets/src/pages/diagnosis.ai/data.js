export const data = [
  // {
  //   label: "Select a Disease",
  //   value: null,
  //   disabled: true
  // },
  {
    label: "Heart Disease Prediction",
    value: "heart",
    inputs: [
      {
        label: "Age",
        name: "age",
        type: "number",
        min: 28,
        max: 77
      },
      {
        label: "Sex",
        name: "sex",
        type: "select",
        options: ["M", "F"]
      },
      {
        label: "Chest Pain Type",
        name: "chestpaintype",
        type: "select",
        options: ["ASY", "NAP", "Other"]
      },
      {
        label: "Resting BP",
        name: "restingbp",
        type: "number",
        min: 0,
        max: 200
      },
      {
        label: "Cholesterol",
        name: "cholesterol",
        type: "number",
        min: 0,
        max: 603
      },
      {
        label: "Fasting Blood Sugar",
        name: "fastingbloodsugar",
        type: "number",
        min: 0,
        max: 1
      },
      {
        label: "Resting ECG",
        name: "restingecg",
        type: "select",
        options: ["Normal", "LVH", "Other"]
      },
      {
        label: "Maximum Heart-Rate",
        name: "maxhr",
        type: "number",
        min: 60,
        max: 202
      },
      {
        label: "Exercise Induced Angina",
        name: "eia",
        type: "select",
        options: ["Y", "N"]
      },
      {
        label: "Old Peak",
        name: "oldpeak",
        type: "number",
        min: -2.6,
        max: 6.2
      },
      {
        label: "Peak Exercise Slope",
        name: "pes",
        type: "select",
        options: ["Flat", "Up", "Other"]
      }
    ]
  },
  {
    label: "Diabetes Prediction",
    value: "diabetes",
    inputs: [
      {
        label: "Pregnancies",
        name: "pregnancies",
        type: "number",
        min: 0,
        max: 17
      },
      { label: "Glucose", name: "glucose", type: "number", min: 0, max: 199 },
      {
        label: "Diastolic BloodPressure",
        name: "diastolicbloodpressure",
        type: "number",
        min: 0,
        max: 122
      },
      {
        label: "SkinThickness",
        name: "skinthickness",
        type: "number",
        min: 0,
        max: 99
      },
      { label: "Insulin", name: "insulin", type: "number", min: 0, max: 846 },
      { label: "BMI", name: "bmi", type: "number", min: 0, max: 67.1 },
      {
        label: "DiabetesPedigree",
        name: "diabetespedigree",
        type: "number",
        step: "0.01",
        min: 0.08,
        max: 2.42
      }
    ]
  },
  {
    label: "Liver Disease Prediction",
    value: "liver",
    inputs: [
      {
        label: "Age",
        name: "age",
        type: "number",
        min: 4,
        max: 90
      },
      {
        label: "Gender",
        name: "gender",
        type: "select",
        options: ["Male", "Female"]
      },
      {
        label: "Total Billirubin",
        name: "totalbillirubin",
        type: "number",
        min: 0,
        max: 75
      },
      {
        label: "Conjugated Billirubin",
        name: "conjugatedbillirubin",
        type: "number",
        step: "0.01",
        min: 0.1,
        max: 19.7
      },
      { label: "ALP", name: "alp", type: "number", min: 63, max: 2110 },
      { label: "ALT", name: "alt", type: "number", min: 10, max: 2000 },
      {
        label: "AST",
        name: "ast",
        type: "number",
        min: 10,
        max: 4929
      },
      {
        label: "Total Proteins",
        name: "totalproteins",
        type: "number",
        step: "0.01",
        min: 2.7,
        max: 9.6
      },
      {
        label: "Albumin",
        name: "albumin",
        type: "number",
        step: "0.01",
        min: 0.9,
        max: 5.5
      },
      {
        label: "A/G Ratio",
        name: "agratio",
        type: "number",
        step: "0.01",
        min: 0.3,
        max: 2.8
      }
    ]
  }
];
