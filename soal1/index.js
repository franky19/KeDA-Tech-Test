// 1. Fungsi untuk menampilkan angka dengan kondisi tertentu
function displayNumber(n){
  for(let i=0;i<=n;i++){
    if(i % 15 ===0){
      console.log("Fish Bash")
    }
    else if(i % 3===0){
      console.log("Fish")
    }
    else if(i % 5 ===0){
      console.log("Bash")
    }
    else{
      console.log(i)
    }
  }
}

console.log(`Hasil untuk menampilkan fishbash sesuai dengan angka :`)
displayNumber(15)

// 2. Fungsi untuk mengurutkan array angka
function sortArray(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
      for (let j = 0; j < arr.length - i - 1; j++) {
          if (arr[j] > arr[j + 1]) {
              let temp = arr[j];
              arr[j] = arr[j + 1];
              arr[j + 1] = temp;
          }
      }
  }
  return arr;
}

// Contoh pemanggilan fungsi sortArray
console.log("Hasil untuk sortArray([3, 1, 4, 1, 5, 9, 2, 6, 5]):");
console.log("Urutan dari kecil ke besar:", sortArray([3, 1, 4, 1, 5, 9, 2, 6, 5]));
console.log("Urutan dari besar ke kecil:", sortArray([3, 1, 4, 1, 5, 9, 2, 6, 5]).reverse());

//

function isPalindrome(str) {
  str = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  
  for (let i = 0; i < str.length / 2; i++) {
      if (str[i] !== str[str.length - 1 - i]) {
          return false; // Jika ada perbedaan, bukan palindrom
      }
  }
  return true; // Jika berhasil melewati loop, itu adalah palindrom
}

// Contoh palindrome
console.log(`check palindrome dari kata A man, a plan, a canal, Panama : ${isPalindrome("A man, a plan, a canal, Panama")}`); // true
console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("hello")); // false