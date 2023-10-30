//! verilen String İfadedeki ---sesli harflerin--- döndürülmesi 

export const vowelCount = (str) => {

    // const arr = str.split("")
    let i = 0;
    // Aşağıdaki ifade str içindeki karakterlerden bir array oluşturuyor.önemli bu yukarıdaki ifadenin kısa yolu 
    [...str].forEach((letter) => {
        if ((/[a/e/i/o/u/A/E/I/O/U]/).test(letter)) {
            i = i + 1
        }
    });
   return i
}