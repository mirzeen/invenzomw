import { Link } from "react-router-dom";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="px-6 md:px-10 py-8 border-t border-border">
      <div className="flex flex-col md:flex-row justify-between gap-8">
        <div className="flex gap-8">
          <a href="#" className="label-sm editorial-line pb-1">LI</a>
          <a href="#" className="label-sm editorial-line pb-1">BE</a>
          <a href="#" className="label-sm editorial-line pb-1">IG</a>
        </div>
        <p className="label-sm text-muted-foreground">
          © {year}
        </p>
      </div>
    </footer>
  );
}
