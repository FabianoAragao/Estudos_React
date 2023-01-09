import './MyComponent.css';

const MyComponent = () => {
  return (
    <div>
      {/* CSS global */}
      <h1>CSS de componente</h1>
      {/* CSS de componente */}
      <p>Este é o paragrafo do componente</p>
      <p className="my-comp-paragrafo">Este tambem é do componente</p>
    </div>
  );
};

export default MyComponent;
