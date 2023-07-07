export default function Stats({ items }) {
  if (!items.length)
    return (
      <footer className="stats">
        Start to add some items to your pack listing
      </footer>
    );
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  return (
    <footer className="stats">
      you have {numItems} items on your list, and you already packed {numPacked}{" "}
      itmes {Math.round((numPacked * 100) / numItems)}%
    </footer>
  );
}
