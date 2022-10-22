// total minutes in 1 day / 10 minutes
const numberOfBoxes = (24 * 60) / 10;
const boxes = new Array(numberOfBoxes).fill(0);

function App() {
  return (
    <div
      style={{
        margin: "8px",
        display: "flex",
        flexDirection: "row",
      }}
    >
      <div
        style={{
          flex: "75%",
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          gap: "8px",
        }}
      >
        {boxes.map((box) => (
          <div
            style={{
              background: "white",
              width: "75px",
              height: "75px",
              border: "2px solid aqua",
            }}
          ></div>
        ))}
      </div>
      <div style={{ flex: "25%" }}>
        <h1>Tasks</h1>
      </div>
    </div>
  );
}

export default App;
