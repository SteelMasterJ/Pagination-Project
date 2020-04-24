/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
   
/*** 
Added 2 global variables, per instructions this can be done only using 2 variables. The first stores all the list items and the second variable stores the number of li items to be shown per page, which is 10.
***/
const studentList = document.querySelectorAll('li');
const itemsPerPage = 10;


//created showPage function, this accepts the list of students and the page number that we want to display. This hides any student list items that is not within the 10 item page that is active.
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


/*** 
appendPageLinks function creates page links to dynamically filter through the student list.
***/

function appendPageLinks(list) {
   //create a div with the class name 'pagination' and store it int he div with the class of 'page'.
   div = document.createElement('div');
   div.className = 'pagination';
   const page = document.querySelector('.page');
   page.appendChild(div);
   //create a ul and store it in the newly made div.
   ul = document.createElement('ul');
   div.appendChild(ul);
   //a for loop that creates list items with page links and appends them to them all to the ul
   for (let i = 0; i < (Math.ceil(list.length / itemsPerPage)); i++) {
      let li = document.createElement('li');
      let a = document.createElement('a');
      a.href = '#';
      a.innerHTML = i + 1;
      li.appendChild(a);
      ul.appendChild(li);
   }
   //added the class of 'active' to the first link
   ul.firstElementChild.firstElementChild.className = 'active';
   
   //this is a for loop to add an eventlistener to each 'a' link
   for (let i = 0; i < ul.childElementCount; i++) {
      let a = document.querySelectorAll('a');
      a[i].addEventListener('click', (event) => {
         //this for loop removes the class 'active' from all links so it can be re-assigned later
         for (let j = 0; j < ul.childElementCount; j++) {
            let removeClassLinks = document.getElementsByTagName('a');
            removeClassLinks[j].classList.remove('active');
         }
         //this assigns the clicked link to teh class of 'active' and calls the showPage function so the clicked link's corresponding set of students shows.
         const clickedLink = event.target;
         clickedLink.className = 'active';
         showPage(studentList, clickedLink.textContent);
      });
   }
   
}

//here I call the functions to start on the first page
showPage(studentList, 1);
appendPageLinks(studentList);