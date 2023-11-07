// JSX -> JavaScript XML File.
// By convention react follows Pascalcasing first letter is a capital letter.
function Message() {
  return (
    <div>
      {/* Inline Style*/}
      <h1 style={{ backgroundColor: "yellow", fontSize: "64px" }}>
        From Message
      </h1>
    </div>
  );
}
export { Message };
