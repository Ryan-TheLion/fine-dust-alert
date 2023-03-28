import { css } from "styled-components";

const platte = {
  active: "#82e084",
};

// good: 좋음, normal: 보통, onceBad: 한때나쁨, bad: 나쁨, veryBad: 매우나쁨
// const status = {
//   good: "#2ae615",
//   normal: "#0fd9ce",
//   onceBad: "#f5c918",
//   bad: "#fa690f",
//   veryBad: "#fc4112",
//   unknown: "#736e6d",
// };
const status = {
  good: css`
    background-image: linear-gradient(
      to right top,
      #8ed387,
      #8ed887,
      #8fdc87,
      #8fe186,
      #8fe686,
      #89e87f,
      #83e978,
      #7ceb70,
      #6dea5f,
      #5ce94d,
      #47e737,
      #2ae615
    );
  `,
  normal: css`
    background-image: linear-gradient(
      to right top,
      #96d7d4,
      #90d9d5,
      #8bdbd7,
      #84dcd8,
      #7eded9,
      #76ded8,
      #6dded8,
      #64ded7,
      #57ddd5,
      #47dcd3,
      #33dad0,
      #0fd9ce
    );
  `,
  onceBad: css`
    background-image: linear-gradient(
      to right top,
      #ddd19f,
      #e0d091,
      #e2d083,
      #e5cf75,
      #e8ce66,
      #e7cb5b,
      #e7c74f,
      #e6c443,
      #e1bd38,
      #dcb72b,
      #d8b01c,
      #d3aa04
    );
  `,
  bad: css`
    background-image: linear-gradient(
      to right top,
      #efa373,
      #ee9f6c,
      #ee9b66,
      #ed965f,
      #ec9259,
      #ed8d52,
      #ee894a,
      #ef8443,
      #f27e38,
      #f5772c,
      #f77020,
      #fa690f
    );
  `,
  veryBad: css`
    background-image: linear-gradient(
      to right top,
      #ef6e4f,
      #ed6a4a,
      #ea6545,
      #e8613f,
      #e55c3a,
      #e65935,
      #e85531,
      #e9522c,
      #ee4e27,
      #f34a21,
      #f7461a,
      #fc4112
    );
  `,
  unknown: css`
    background-image: linear-gradient(
      to right top,
      #b1a9a7,
      #b8afad,
      #bfb6b4,
      #c6bcba,
      #cdc3c1,
      #c7bebc,
      #c2b9b7,
      #bcb4b2,
      #a9a2a0,
      #97908f,
      #857f7e,
      #736e6d
    );
  `,
};

export const theme = {
  platte,
  status,
};
