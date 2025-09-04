//   savollar toplami 3 ta boshi 
let a = Number(prompt("1-raqamni kiriting:"));
let amal = Number(prompt("Amalni tanlang: 1)+  2)-  3)*  4)/"));
let b = Number(prompt("2-raqamni kiriting:"));

let natija;
let znak = {1:"+", 2:"-", 3:"*", 4:"/"}[amal];

if (amal === 1) {
  natija = a + b;
} else if (amal === 2) {
  natija = a - b;
} else if (amal === 3) {
  natija = a * b;
} else if (amal === 4) {
} else {
  natija = "Amalda xato yozddin ukam";
}

// asosiy sariq box
let MainDiv = document.createElement("div");
MainDiv.style.width = "400px";
MainDiv.style.height = "200px";
MainDiv.style.border = "2px solid black";
MainDiv.style.display = "flex"; 
MainDiv.style.justifyContent = "space-around"; 
MainDiv.style.alignItems = "center"; 
MainDiv.style.backgroundColor ="yellow";
MainDiv.style.margin ="50px auto";

// 3 ta kichkina box yaratilgan ichiga yozdim
let box1 = document.createElement("div");
box1.style.width = "60px";
box1.style.height = "60px";
box1.style.backgroundColor = "skyblue";
box1.style.display = "flex";
box1.style.justifyContent = "center";
box1.style.alignItems = "center";
box1.style.fontSize = "20px";
box1.innerText = a;

let box2 = document.createElement("div");
box2.style.width = "60px";
box2.style.height = "60px";
box2.style.backgroundColor = "skyblue";
box2.style.display = "flex";
box2.style.justifyContent = "center";
box2.style.alignItems = "center";
box2.style.fontSize = "20px";
box2.innerText = znak ? znak : "?"; 


let box3 = document.createElement("div");
box3.style.width = "60px";
box3.style.height = "60px";
box3.style.backgroundColor = "skyblue";
box3.style.display = "flex";
box3.style.justifyContent = "center";
box3.style.alignItems = "center";
box3.style.fontSize = "20px";
box3.innerText = b; 

MainDiv.appendChild(box1);
MainDiv.appendChild(box2);
MainDiv.appendChild(box3);

document.body.appendChild(MainDiv);

// pastki button + result container 2 kalasi
let bottomDiv = document.createElement("div");
bottomDiv.style.display = "flex";
bottomDiv.style.justifyContent = "center";
bottomDiv.style.alignItems = "center";
bottomDiv.style.gap = "20px";
bottomDiv.style.marginTop = "20px";

// button
let check = document.createElement("button");
check.style.width = "140px";
check.style.height = "50px";
check.style.backgroundColor = "green";
check.style.color = "white";
check.style.fontSize = "16px";
check.style.border = "none";
check.style.borderRadius = "8px";
check.textContent = "Check";

// result
let result = document.createElement("div");
result.style.width = "200px";
result.style.height = "50px";
result.style.backgroundColor = "red";
result.style.color = "white";
result.style.display = "flex";
result.style.justifyContent = "center";
result.style.alignItems = "center";
result.style.fontSize = "16px";
result.style.borderRadius = "8px";
result.textContent = "result";

// pastki divga qo‘shilgani
bottomDiv.appendChild(check);
bottomDiv.appendChild(result);
document.body.appendChild(bottomDiv);

//oxirgisi
check.addEventListener("click", () => {
  if (znak) {
    result.innerText = `${a} ${znak} ${b} = ${natija}`;
  } else {
    result.innerText = natija;
  }
});

