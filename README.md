# nested-obj-display
Problem Statement:
Specification
Write a functional component that accepts an arbitrarily nested object as a prop. Each key/property of the object is a word and its associated value is either (1) an object of the same format or (2) a definition string. An example of one such object is below.
```
{
  taxi: "a car licensed to transport passengers in return for payment of a fare",
  food: {
    sushi:
      "a traditional Japanese dish of prepared rice accompanied by seafood and vegetables",
    apple: {
      Honeycrisp:
        "an apple cultivar developed at the MAES Horticultural Research Center",
      Fuji: "an apple cultivar developed by growers at Tohoku Research Station",
    },
  },
}
```

Though this example is nested at most 2 levels deep, the input may be more than 2 levels deep. When rendered, the component should display the nested object legibly, with each word shown beside its definition and each subobject indented beyond its enclosing object. The rendered component should be displayed as showed in the link below:

https://ibb.co/17YpbSn
