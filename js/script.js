let keys = document.querySelectorAll(`div.keys>div>div`);
let res = document.querySelector(`div.result`);
let his = document.querySelector(`div.history`);
let clean = document.getElementById("clean");
let rmv = document.getElementById("rmv");
let summ = document.getElementById("summ");
let sub = document.getElementById("sub");
let mul = document.getElementById("mul");
let divi = document.getElementById("divi");
let equ = document.getElementById("equ");
summ.Value = "+";
sub.Value = "-";
divi.Value = "/";
mul.Value = "*";
equ.Value = "=";

his.innerHTML = `${his.textContent}`;

keys.forEach(function (elem) {
  elem.addEventListener("click", function () {
    elem.classList.add("click");
    res.innerHTML += elem.textContent;
    setTimeout(function () {
      elem.classList.remove("click");
    }, 100);
  });
});

summ.addEventListener("click", function () {
  res.innerHTML += summ.Value;
});
sub.addEventListener("click", function () {
  res.innerHTML += sub.Value;
});
mul.addEventListener("click", function () {
  res.innerHTML += mul.Value;
});
divi.addEventListener("click", function () {
  res.innerHTML += divi.Value;
});

equ.addEventListener("click", function () {
  his.innerHTML = res.innerHTML;
  res.innerHTML = eval(res.innerHTML);
});
clean.addEventListener("click", function () {
  his.innerHTML = `${his.innerHTML} = ${eval(res.innerHTML)} `;
  res.textContent = "";
});
