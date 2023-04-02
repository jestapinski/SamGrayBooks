export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <link
      rel="preload"
      href="/fonts/FunKey-Regular.ttf"
      as="font"
      type="font/ttf"
      crossOrigin="anonymous"
      key="FunKey-Regular"
    />,
  ]);
};
