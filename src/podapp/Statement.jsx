import React from "react";

const Statement = () => {

  return (
      <div className="foot">
        <div id="pronounce">Fi·bo·nac·ci </div>
        <span>(sequence or series)</span>
        <div id="noun">noun</div>
        <div id="statement">
          A series of numbers in which each number (Fibonacci number) is the sum
          of the two preceding numbers. The simplest example is the series 0, 1,
          1, 2, 3, 5, 8, etc.
          <p>
            <b>The Fibonacci sequence</b> was first discussed in Europe by
            Leonardo of Pisa (whose nickname was Fibonacci) in the early 13th
            century, although the sequence can be traced back to about 200 BCE
            in Indian literature. This sequence has produced a large amount of
            literature and has connections to many branches of mathematics. In
            the Fibonacci sequence, each term is the sum of the two preceding
            terms. So if an is the nth term, we can write
            a1=a2=1andan=an−1+an−2, for n≥3.
          </p>
        </div>
      </div>
  );
};

export default Statement;
