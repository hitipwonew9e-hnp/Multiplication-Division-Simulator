function runGame() {
    let pp1 = document.querySelector('.First');
    let pp2 = document.querySelector('.Second');
    let inp3 = document.querySelector('.conclusion');
    let p3 = document.querySelector('.p-3');
    let mnoz = document.querySelector('.mnoz');
    let koo = document.querySelector('.koo');
    let btn = document.querySelector('.btn');
    let numb = inp3.value;
  
    function arr(min, max) {
      return Math.random() * (max - min) + min;
    }
  
    function multiplicationGame() {
      mnoz.textContent = '*';
      let ab = Math.round(arr(2, 10));
      let ba = Math.round(arr(2, 10));
      let po = ab * ba;
      pp1.textContent = ab;
      pp2.textContent = ba;
      inp3.onchange = function() {
        let numb = inp3.value;
        if(numb == po) {
          p3.textContent = 'Вірно';
          document.body.style.backgroundColor = "green";
        }
        else {
          p3.textContent = 'Невірно';
          document.body.style.backgroundColor = "red";
        }
      }
    }
  
    function divisionGame() {
      mnoz.textContent = '/';
      let ab = Math.round(arr(2, 10));
      let ba = Math.round(arr(2, 10));
      let po = ab * ba;
      pp1.textContent = po;
      pp2.textContent = ba;
      inp3.onchange = function() {
        let number = inp3.value;
        if(number == ab) {
          p3.textContent = 'Вірно';
          document.body.style.backgroundColor = "green";
        }
        else {
          p3.textContent = 'Невірно';
          document.body.style.backgroundColor = "red";
        }
      }
    }
  
    btn.onclick = function() {
        inp3.value = '';
        p3.textContent = 'Відповідь';
        document.body.style.backgroundColor = "cornsilk";
      let b = Math.round(arr(1, 3));
      console.log(b);
      if (b == 1) {
        multiplicationGame();
      }
      else {
        divisionGame();
      }
    }
  
    // Reset the game when the input field is clicked
    inp3.onclick = function() {
      inp3.value = '';
    }
  }
  
  runGame();