const link = document.getElementById('bold-high');

function highlight() {
    //Write your code here
const boldElement=document.document.querySelectorAll('strong');
	boldElement.forEach(element=>{
		element.style.color='green';
	});

}


function return_normal() {
    //Write your code here

    const boldElement=document.document.querySelectorAll('strong');
	boldElement.forEach(element=>{
		element.style.color='black';
	});
}
  link.addEventListener('mouseover', highlight);
        link.addEventListener('mouseout', return_normal);




