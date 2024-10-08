"use client";

export default function Home() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;

    const res = await fetch("/api/subscribe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });

    const data = await res.json();
    // console.log(data);
    alert(data.message);
  };
  return (
    <div>
      <h1>Subscribe for Updates</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          required
          placeholder="Enter your email"
        />
        <button type="submit">Subscribe</button>
      </form>
    </div>
  );
}
