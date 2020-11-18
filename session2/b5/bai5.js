// Write a program asking users their age, and then decide if they are old enough to view a 14+ content

let X = Number(prompt(`how old are you`));
if (X<14) {
    alert(`you aren't old enough to view a 14+ content`);
} else alert(`enjoy`);