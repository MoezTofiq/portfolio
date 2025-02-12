const LightCircle = () => {
  return (
    <span className="h-[24px] w-[25px] bg-amber-200 rounded-4xl inline-block m-0.5" />
  );
};

const Name = () => {
  return (
    <div
      id="red"
      className="bg-red-400 border rounded-2xl flex justify-center items-center flex-col -rotate-8 mt-12"
    >
      <div
        id="topLayer"
        className="px-1 pt-1 flex justify-center items-center flex-row"
      >
        <LightCircle />
        <LightCircle />
        <LightCircle />
        <LightCircle />
        <LightCircle />
        <LightCircle />
        <LightCircle />
        <LightCircle />
      </div>
      <div
        id="middleLayer"
        className="px-1 p-0 flex flex-row justify-between items-center"
      >
        <div id="rightLights" className="flex flex-col ">
          <LightCircle />
          <LightCircle />
          <LightCircle />
        </div>
        <div
          id="nameSection"
          className="flex flex-col justify-center items-center"
        >
          <div className="bg-blue-200 m-1 p-4 rounded-2xl">
            <div className="">Muhammad Moeez</div>
          </div>
        </div>
        <div id="leftLights" className="flex flex-col">
          <LightCircle />
          <LightCircle />
          <LightCircle />
        </div>
      </div>
      <div
        id="bottomLayer"
        className="px-1 pb-1 flex justify-center items-center flex-row"
      >
        <LightCircle />
        <LightCircle />
        <LightCircle />
        <LightCircle />
        <LightCircle />
        <LightCircle />
        <LightCircle />
        <LightCircle />
      </div>
    </div>
  );
};

export default Name;
