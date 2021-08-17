import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function App() {
  const [shownum, setShownum] = useState(0);
  const [total, setTotal] = useState('');

  let operators = ['-', '+', '/', '*'];

  function diGen() {
    let digits = [];

    function fucklogic(e) {
      if (shownum == 0) {
        setShownum(parseInt(e.target.innerText));
      } else if (shownum.toString().slice(-2) == '-0') {
        setShownum(shownum.toString().slice(0, -1) + e.target.innerText);
      } else {
        setShownum(shownum + e.target.innerText);
      }
    }

    for (let i = 0; i < 10; i++) {
      digits.push(
        <button title={i} onClick={fucklogic}>
          {parseInt(i)}
        </button>
      );
    }

    return digits;
  }

  function sumlogic() {
    try {
      setShownum(eval(shownum));
    } catch (e) {}
  }

  function oplogic(e) {
    if (!operators.includes(shownum.toString().slice(-1))) {
      //&& shownum != 0;
      //if last is !operator
      setShownum(shownum + e.target.innerText);
    } else if (
      //if last is * and current is -
      shownum.toString().slice(-1) == '*' &&
      e.target.innerText == '-'
    ) {
      setShownum(shownum + e.target.innerText);
    } else {
      //if last is operator
      setShownum(shownum.toString().slice(0, -1) + e.target.innerText);
      //setShownum(shownum + e.target.innerText);
    }
  }

  /*
  JESSICA, did you sleep with your GOD DAMN teacher?
  what?
  DID YOU SLEEP WITH YOUR TEACHER
  mr wilson?
  MR WILSON.
  NO I DIDN'T
  YES YOU FUCKING DID
  NO I DIDN'T MOM
  you're a little slut
  MOM NO I DIDN'T
  *inaudible screeching*
  I'M TELLING YOU.
  I WAS FAILING CHEMISTRY
  you're out of the house.
  what?
  YOU'RE OUT OF THE FUCKING HOUSE
  */
  function delHandler() {
    if (shownum.toString().length > 1) {
      setShownum(shownum.toString().slice(0, -1));
    } else {
      setShownum(0);
    }
  }

  function clearHandler() {
    setShownum(0);
  }

  return (
    <div className='App'>
      <div className='Display'>
        <h1>{shownum}</h1>
      </div>
      <div className='calculator-grid'>
        {diGen()}

        <button title='+' onClick={oplogic}>
          +
        </button>

        <button title='-' onClick={oplogic}>
          -
        </button>

        <button title='/' onClick={oplogic}>
          /
        </button>
        <button title='*' onClick={oplogic}>
          *
        </button>
        <button title='delete' onClick={delHandler}>
          DEL
        </button>
        <button title='clear' onClick={clearHandler}>
          C
        </button>
        <button className='equal' title='=' onClick={sumlogic}>
          =
        </button>
      </div>
    </div>
  );
}

export default App;
