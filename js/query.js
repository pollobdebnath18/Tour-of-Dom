console.log('This is working');
const sections = document.querySelectorAll('section');
console.log(sections);
for(const section of sections){
    // console.log(section.innerText);
    section.style.backgroundColor='gray';
    section.style.padding='10px';
    section.style.borderRadius='20px';
    section.style.marginBottom='40px';
}