import React from "react";

export default function BodyTitle({title,CSS}) {
  return (
    <div className={CSS}>
    <div className="section-title">
      <h2>{title}</h2>
      <p>Check our {title}</p>
    </div>

    </div>
  );
}

export  function PageTitle({title, CSS}) {
  return (
    <div className="section-title">
      {/* <h2>{title}</h2> */}
      <p className={CSS}>{title}</p>
    </div>
  );
}
