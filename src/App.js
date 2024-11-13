import React, { useState } from "react";
function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  function btnNext() {
    if (step < 3) {
      setStep(step + 1);
    } else {
      alert("Selesai");
    }
    console.log(step);
  }

  function btnPrev() {
    if (step > 1) {
      setStep(step - 1);
    } else {
      alert("Selesai");
    }
    console.log(step);
  }

  return (
    <div className="steps">
      <div className="numbers">
        <div className={step >= 1 ? "active" : ""}>1</div>
        <div className={step >= 2 ? "active" : ""}>2</div>
        <div className={step >= 3 ? "active" : ""}>3</div>
      </div>
      <p className="message">Step: Dream</p>
      <div className="buttons">
        <button
          onClick={btnPrev}
          style={{ backgroundColor: "#526D82", color: "#fff" }}
        >
          Prev
        </button>
        <button
          style={{ backgroundColor: "#526D82", color: "#fff" }}
          onClick={btnNext}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default App;
