/* eslint-disable import/no-extraneous-dependencies */
import { CircularProgressbar } from 'react-circular-progressbar';

function CircleChart(
  { value, text, strokeWidth }:{
    value:number; text:string; strokeWidth:number },
) {
  return (
    <CircularProgressbar
      className="h-40"
      value={value}
      text={text}
      strokeWidth={strokeWidth}
    />
  );
}

export default CircleChart;
