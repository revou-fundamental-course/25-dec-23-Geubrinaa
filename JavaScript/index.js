function hitungLuas() {
  const alas = parseFloat(document.getElementById("inpt-alas").value);
  const tinggi = parseFloat(document.getElementById("inpt-tinggi").value);

  const luas = (alas * tinggi) / 2;

  document.getElementById("hasil-luas").textContent = luas;
}

function hitungKeliling() {
  const sisiA = parseFloat(document.getElementById("inpt-sisi1").value);
  const sisiB = parseFloat(document.getElementById("inpt-sisi2").value);
  const sisiC = parseFloat(document.getElementById("inpt-sisi3").value);

  const keliling = sisiA + sisiB + sisiC;

  document.getElementById("hasil-keliling").textContent = keliling;
}

// untuk tombol "Hitung"
const buttonHitung = document.querySelector(".buttons button:first-child");
buttonHitung.addEventListener("click", () => {
  hitungLuas();
  hitungKeliling();
});

// untuk tombol "Reset"
const buttonReset = document.querySelector(".buttons button:last-child");
buttonReset.addEventListener("click", () => {
  document.getElementById("inpt-alas").value = "";
  document.getElementById("inpt-tinggi").value = "";
  document.getElementById("inpt-sisi1").value = "";
  document.getElementById("inpt-sisi2").value = "";
  document.getElementById("inpt-sisi3").value = "";

  document.getElementById("hasil-luas").textContent = "";
  document.getElementById("hasil-keliling").textContent = "";
});
