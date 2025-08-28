1.What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

getElementById:use ID and return one element.
getElementByClassName:use class name and return arry like object.
querySelector:use id,class and tag but return frist matching element.
querySelectorAll:use id ,class and tag ,return all matching element


2.How do you create and insert a new element into the DOM?
const newP=document.createElemnt("p");
nweP=I am a student of PH B.12;
document.createElemnt("p").innerText = newP;

3.What is Event Bubbling and how does it work?

When an event on a element does not just stay here, it moves up from inner element to its parent element.

4.What is Event Delegation in JavaScript? Why is it useful?
Do not use separate event listener. Use one listener for common parent element.

use for dynamic element handle and less memory use .

5.What is the difference between preventDefault() and stopPropagation() methods?
 
preventDefault()-> stop from submit reload

stopPropagation()-> stop move from inner element to parent element.