import React from "react";
function Display(props) {
  const { obj } = props;
  console.log(obj);
  return (
    <div>
      {Object.keys(obj).map((key) => {
        return typeof obj[key] === "string" ? (
          <div key={key}>{`${key} - ${obj[key]}`}</div>
        ) : (
          <div key={key} style={{ paddingLeft: "16px" }}>
            <div key={key}>
              <p>{key}</p>
              <div style={{ paddingLeft: "16px" }}>
                <Display obj={obj[key]} />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
export default function App() {
  const obj = {
    taxi:
      "a car licensed to transport passengers in return for payment of a fare",
    food: {
      sushi:
        "a traditional Japanese dish of prepared rice accompanied by seafood and vegetables",
      apple: {
        Honeycrisp:
          "an apple cultivar developed at the MAES Horticultural Research Center",
        Fuji:
          "an apple cultivar developed by growers at Tohoku Research Station"
      }
    }
  };

  return (
    <div>
      <Display obj={obj} />
    </div>
  );
}
