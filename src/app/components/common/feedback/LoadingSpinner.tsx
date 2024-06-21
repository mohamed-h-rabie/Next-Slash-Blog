import { LineWave } from "react-loader-spinner";
export default function LoadingSpinner() {
  return (
    <LineWave
      visible={true}
      height="100%"
      width="100%"
      color="black"
      ariaLabel="line-wave-loading"
      wrapperStyle={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
      wrapperClass=""
      firstLineColor=""
      middleLineColor=""
      lastLineColor=""
    />
  );
}
