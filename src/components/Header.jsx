import Navigation from "./Navigation";

export default function Header() {
  return (
    <div className="bg-surface p-2 md:p-5 flex justify-around items-center">
      <div>
        <h1>MovieApp</h1>
      </div>
      <div>
        <Navigation />
      </div>
    </div>
  );
}
