import Link from "next/link";

export default function NavigationBar(props) {
  return (
    <div className="nav">
      <Link href="../">
        <a>GettingStarted</a>
      </Link>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/">
        <a>Home</a>
      </Link>
      Getting Started!
      <style jsx>
        {`
          a {
            padding: 0 8px;
          }
          .nav {
            display: flex;
          }
        `}
      </style>
    </div>
  );
}
