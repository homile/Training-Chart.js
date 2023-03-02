import "./App.css";
// 방사형 차트
import { Radar } from "react-chartjs-2";
// 사용하는 속성 등록
import { Chart as ChartJS } from "chart.js/auto";
// options에서 쓰이는 타입 가져오기
import type { ChartOptions } from "chart.js";

const chartOptions: ChartOptions<"radar"> & ChartOptions = {
  elements: {
    //데이터 속성.
    line: {
      borderWidth: 2,
      borderColor: "#ffc078",
    },
    //데이터 꼭짓점.
    point: {
      pointBackgroundColor: "#ffc078",
    },
  },
  scales: {
    r: {
      ticks: {
        stepSize: 2.5,
        display: false,
      },
      grid: {
        color: "#d3d3d3",
      },
      //라벨 속성 지정.
      pointLabels: {
        font: {
          size: 12,
          weight: "700",
          family: "Pretendard",
        },
        color: "#000000",
      },
      angleLines: {
        display: false,
      },
      suggestedMin: 0,
      suggestedMax: 10,
    },
  },
  //위에 생기는 데이터 속성 label 타이틀을 지워줍니다.
  plugins: {
    legend: {
      display: false,
    },
  },
  //기본 값은 가운데에서 펴져나가는 애니메이션 형태입니다.
  animation: {
    duration: 0,
  },
};

const chartData = {
  labels: ["협업", "성장", "동기부여", "개인생활", "건강"],
  datasets: [
    {
      label: "팀 점수",
      data: [10, 20, 30, 20, 10],
      backgroundColor: "rgba(255, 108, 61, 0.2)",
    },
  ],
};

const App = () => {
  return (
    <div className="App">
      <Radar data={chartData} options={chartOptions}></Radar>
    </div>
  );
};

export default App;
