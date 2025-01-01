```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Cleanup function runs when the component unmounts or when the effect runs again
    return () => {
      console.log('Component unmounting');
    };
  }, []); // Empty dependency array ensures the effect runs only once on mount and unmount

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```