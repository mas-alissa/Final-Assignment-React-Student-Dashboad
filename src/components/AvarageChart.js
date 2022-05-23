import AverageComponentChart from "./AverageComponentChart";

function AvarageChart({ data }) {
  let nameOfcourse = "Welke opdracht of welk project lever je nu in?";
  const arrOfNames = data.filter(
    (value, index, self) =>
      index === self.findIndex((t) => t[nameOfcourse] === value[nameOfcourse])// true
  );
  const averageHandler = (name) => {
    const names = data.filter((value) => value[nameOfcourse] === name);
    let arrDif = [];
    let arrFun = [];

    names.forEach((value) => {
      arrDif.push(Number(value["Hoe moeilijk vond je deze opdracht?"]));
   
    });

    names.forEach((value) => {
      arrFun.push(Number(value["Hoe leuk vond je deze opdracht?"]));
    });

    const averageDif =
      arrDif.reduce((total, next) => total + next, 0) / names.length;
    const averageFun =
      arrFun.reduce((total, next) => total + next, 0) / names.length;

    let totalAvg = { courseName: name, dif: averageDif, fun: averageFun };

    return totalAvg;
  };

  const arrAvg = [];
  arrOfNames.forEach((value) => {
    arrAvg.push(averageHandler(value[nameOfcourse]));
  });


  return <AverageComponentChart arrAvg={arrAvg} />;
}

export default AvarageChart;
