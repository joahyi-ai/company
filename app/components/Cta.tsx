import React from "react";
import Link from "next/link";

export default function Cta() {
  return (
    <div className="pb-5 m-auto">
      {" "}
      <Link
        href="https://chrome.google.com/webstore/detail/ig-export/ddaecgkckhmlkbkbkclfpopechmmbceo?hl=en"
        className="button is-medium is-link has-text-centered"
      >
        Add to Chrome(It&apos;s FREE)
      </Link>
    </div>
  );
}
