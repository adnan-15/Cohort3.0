let App = ({ property, children }) => {
  console.log(property, children);

  return (
    <div>
      {property}
      {children}
    </div>
  );
};
export default App;
