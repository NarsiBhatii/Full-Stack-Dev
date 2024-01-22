function isAnagram(str1, str2) {
    const lowerCaseStr1 = str1.replace(/[^a-zA-Z0-9 ]/g, '').toLowerCase();
    const lowerCaseStr2 = str2.replace(/[^a-zA-Z0-9 ]/g, '').toLowerCase();

    
    if(lowerCaseStr1.length !== lowerCaseStr2.length) {
      return false;
    }
    
    const sortStr1 = lowerCaseStr1.split('').sort().join('');
    const sortStr2 = lowerCaseStr2.split('').sort().join('');

    return sortStr1 == sortStr2;
}

console.log(isAnagram('abc!','bac!'));