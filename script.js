function firstChar(text) {
  // your code here
	if(text.split(' ').every((e)=>e.length===0))
		return ''
	const a =text.split(' ');
	if(a[0].length===0)
		return a[1].charAt(0);
}

// Do not change the code below

// const text = prompt("Enter text:");
// alert(firstChar(text));
