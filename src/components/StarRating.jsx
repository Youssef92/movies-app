function StarRating({ voteAverage }) {
  const rating = Math.round(voteAverage / 2); // من 10 → 5
  const stars = [];

  for (let i = 1; i <= 5; i++) {
    stars.push(
      <span
        key={i}
        style={{
          color: i <= rating ? "#FFD700" : "#D3D3D3", // دهبي / رمادي فاتح
          fontSize: "1.2rem",
          marginRight: "2px",
        }}
      >
        {i <= rating ? "★" : "☆"}
      </span>
    );
  }

  return <div>{stars}</div>;
}

export default StarRating;
