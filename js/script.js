/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
   
// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing


/*** 
Added 2 global variables, per instructions this can be done only using 2 variables. The first stores all the list items and the second variable stores the number of li items to be shown per page, which is 10.
***/
const studentList = document.querySelectorAll('li');
const itemsPerPage = 10;

/*** 
   Create the `showPage` function to hide all of the items in the 
   list except for the ten you want to show.

   Pro Tips: 
     - Keep in mind that with a list of 54 students, the last page 
       will only display four.
     - Remember that the first student has an index of 0.
     - Remember that a function `parameter` goes in the parens when 
       you initially define the function, and it acts as a variable 
       or a placeholder to represent the actual function `argument` 
       that will be passed into the parens later when you call or 
       "invoke" the function 
***/

//created showPage function, this accepts the list of students and the page number that we want to display. This hides any student list items that is not within the 10 item page.
function showPage(list, page) {
   const startIndex = (page * itemsPerPage) - itemsPerPage;
   const endIndex = (page * itemsPerPage) - 1;
   for (let i = 0; i < list.length; i++) {
      if (i < startIndex || i > endIndex) {
         list[i].style.display = 'none';
      } else {
         list[i].style.display = '';
      }
   }
}
//test log statement below
//console.log(showPage(studentList, 2));


/*** 
I made this function for DRY-er programming it just creates a new HTML element and assigns it a variable.
***/
function createElement(element) {
   const elementName = document.createElement('element');
   return elementName;
}

function appendPageLinks(list) {
   div = createElement('div');
   div.className = 'pagination';
}

console.log(appendPageLinks());




// Remember to delete the comments that came with this file, and replace them with your own code comments.