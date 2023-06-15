/*Index Script*/
let index = 0;
displayImages();
function displayImages() {
  let i;
  const images = document.getElementsByClassName("pics");
  for (i = 0; i < images.length; i++) {
    images[i].style.display = "none";
  }
  index++;
  if (index > images.length) {
    index = 1;
  }
  images[index-1].style.display = "block";
  setTimeout(displayImages, 3000); 
}

function showParagraph(){
	let hiddenP=document.getElementById("second-paragraph");
	let link=document.getElementById("open");
	
	if(hiddenP.classList.contains("hidden")){
		hiddenP.classList.remove("hidden");
		link.innerHTML="See Less...";
	}
	else{
		hiddenP.classList.add("hidden");
		link.innerHTML="See More...";
	}
	return false;
}


function showThisParagraph(){
	let thisP=document.getElementById("other-paragraph");
	let click=document.getElementById("close");
	
	if(thisP.classList.contains("hidden")){
		thisP.classList.remove("hidden");
		click.innerHTML="See Less...";
	}
	else{
		thisP.classList.add("hidden");
		click.innerHTML="See More...";
	}
	return false;
}

/*Quiz Script*/
function showResult(){
	let resultP=document.getElementById("result");
	let questionOne=document.getElementById("ques-one").value;
	let questionTwo=document.getElementById("ques-two").value;
	let questionThree=document.getElementById("ques-three").value;
	let questionFour=document.getElementById("ques-four").value;
	point=0

	resultP.classList.remove("hidden");
	if(questionOne=="correct" && questionTwo=="correct" && questionThree=="correct" && questionFour=="correct"){
		resultP.innerHTML+="<p>"+"question 1 - correct"+"</p>";
		resultP.innerHTML+="<p>"+"question 2 - correct"+"</p>";
		resultP.innerHTML+="<p>"+"question 3 - correct"+"</p>";
		resultP.innerHTML+="<p>"+"question 4 - correct"+"</p>";
		resultP.innerHTML+="<p>"+"Score: "+parseInt(point+4)+"/4"+"</p>";
	}
	else if(questionOne=="correct" && questionTwo=="incorrect" && questionThree=="correct" && questionFour=="correct"){
		resultP.innerHTML+="<p>"+"question 1 - correct"+"</p>";
		resultP.innerHTML+="<p>"+"question 2 - incorrect"+"</p>";
		resultP.innerHTML+="<p>"+"question 3 - correct"+"</p>";
		resultP.innerHTML+="<p>"+"question 4 - correct"+"</p>";
		resultP.innerHTML+="<p>"+"Score: "+parseInt(point+3)+"/4"+"</p>";
	}
	else if(questionOne=="incorrect" && questionTwo=="correct" && questionThree=="correct" && questionFour=="correct"){
		resultP.innerHTML+="<p>"+"question 1 - incorrect"+"</p>";
		resultP.innerHTML+="<p>"+"question 2 - correct"+"</p>";
		resultP.innerHTML+="<p>"+"question 3 - correct"+"</p>";
		resultP.innerHTML+="<p>"+"question 4 - correct"+"</p>";
		resultP.innerHTML+="<p>"+"Score: "+parseInt(point+3)+"/4"+"</p>";
	}
	else if(questionOne=="correct" && questionTwo=="correct" && questionThree=="incorrect" && questionFour=="correct"){
		resultP.innerHTML+="<p>"+"question 1 - correct"+"</p>";
		resultP.innerHTML+="<p>"+"question 2 - correct"+"</p>";
		resultP.innerHTML+="<p>"+"question 3 - incorrect"+"</p>";
		resultP.innerHTML+="<p>"+"question 4 - correct"+"</p>";
		resultP.innerHTML+="<p>"+"Score: "+parseInt(point+3)+"/4"+"</p>";
	}
	else if(questionOne=="correct" && questionTwo=="correct" && questionThree=="correct" && questionFour=="incorrect"){
		resultP.innerHTML+="<p>"+"question 1 - correct"+"</p>";
		resultP.innerHTML+="<p>"+"question 2 - correct"+"</p>";
		resultP.innerHTML+="<p>"+"question 3 - correct"+"</p>";
		resultP.innerHTML+="<p>"+"question 4 - incorrect"+"</p>";
		resultP.innerHTML+="<p>"+"Score: "+parseInt(point+3)+"/4"+"</p>";
	}
	else if(questionOne=="incorrect" && questionTwo=="incorrect" && questionThree=="correct" && questionFour=="correct"){
		resultP.innerHTML+="<p>"+"question 1 - incorrect"+"</p>";
		resultP.innerHTML+="<p>"+"question 2 - incorrect"+"</p>";
		resultP.innerHTML+="<p>"+"question 3 - correct"+"</p>";
		resultP.innerHTML+="<p>"+"question 4 - correct"+"</p>";
		resultP.innerHTML+="<p>"+"Score: "+parseInt(point+2)+"/4"+"</p>";
	}
	else if(questionOne=="incorrect" && questionTwo=="correct" && questionThree=="incorrect" && questionFour=="correct"){
		resultP.innerHTML+="<p>"+"question 1 - incorrect"+"</p>";
		resultP.innerHTML+="<p>"+"question 2 - correct"+"</p>";
		resultP.innerHTML+="<p>"+"question 3 - incorrect"+"</p>";
		resultP.innerHTML+="<p>"+"question 4 - correct"+"</p>";
		resultP.innerHTML+="<p>"+"Score: "+parseInt(point+2)+"/4"+"</p>";
	}
	else if(questionOne=="incorrect" && questionTwo=="correct" && questionThree=="correct" && questionFour=="incorrect"){
		resultP.innerHTML+="<p>"+"question 1 - incorrect"+"</p>";
		resultP.innerHTML+="<p>"+"question 2 - correct"+"</p>";
		resultP.innerHTML+="<p>"+"question 3 - correct"+"</p>";
		resultP.innerHTML+="<p>"+"question 4 - incorrect"+"</p>";
		resultP.innerHTML+="<p>"+"Score: "+parseInt(point+2)+"/4"+"</p>";
	}
	else if(questionOne=="correct" && questionTwo=="incorrect" && questionThree=="incorrect" && questionFour=="correct"){
		resultP.innerHTML+="<p>"+"question 1 - correct"+"</p>";
		resultP.innerHTML+="<p>"+"question 2 - incorrect"+"</p>";
		resultP.innerHTML+="<p>"+"question 3 - incorrect"+"</p>";
		resultP.innerHTML+="<p>"+"question 4 - correct"+"</p>";
		resultP.innerHTML+="<p>"+"Score: "+parseInt(point+2)+"/4"+"</p>";
	}
	else if(questionOne=="correct" && questionTwo=="incorrect" && questionThree=="correct" && questionFour=="incorrect"){
		resultP.innerHTML+="<p>"+"question 1 - correct"+"</p>";
		resultP.innerHTML+="<p>"+"question 2 - incorrect"+"</p>";
		resultP.innerHTML+="<p>"+"question 3 - correct"+"</p>";
		resultP.innerHTML+="<p>"+"question 4 - incorrect"+"</p>";
		resultP.innerHTML+="<p>"+"Score: "+parseInt(point+2)+"/4"+"</p>";
	}
	else if(questionOne=="correct" && questionTwo=="correct" && questionThree=="incorrect" && questionFour=="incorrect"){
		resultP.innerHTML+="<p>"+"question 1 - correct"+"</p>";
		resultP.innerHTML+="<p>"+"question 2 - correct"+"</p>";
		resultP.innerHTML+="<p>"+"question 3 - incorrect"+"</p>";
		resultP.innerHTML+="<p>"+"question 4 - incorrect"+"</p>";
		resultP.innerHTML+="<p>"+"Score: "+parseInt(point+2)+"/4"+"</p>";
	}
	else if(questionOne=="incorrect" && questionTwo=="incorrect" && questionThree=="incorrect" && questionFour=="correct"){
		resultP.innerHTML+="<p>"+"question 1 - incorrect"+"</p>";
		resultP.innerHTML+="<p>"+"question 2 - incorrect"+"</p>";
		resultP.innerHTML+="<p>"+"question 3 - incorrect"+"</p>";
		resultP.innerHTML+="<p>"+"question 4 - correct"+"</p>";
		resultP.innerHTML+="<p>"+"Score: "+parseInt(point+1)+"/4"+"</p>";
	}
	else if(questionOne=="correct" && questionTwo=="incorrect" && questionThree=="incorrect" && questionFour=="incorrect"){
		resultP.innerHTML+="<p>"+"question 1 - correct"+"</p>";
		resultP.innerHTML+="<p>"+"question 2 - incorrect"+"</p>";
		resultP.innerHTML+="<p>"+"question 3 - incorrect"+"</p>";
		resultP.innerHTML+="<p>"+"question 4 - incorrect"+"</p>";
		resultP.innerHTML+="<p>"+"Score: "+parseInt(point+1)+"/4"+"</p>";
	}
	else if(questionOne=="incorrect" && questionTwo=="correct" && questionThree=="incorrect" && questionFour=="incorrect"){
		resultP.innerHTML+="<p>"+"question 1 - incorrect"+"</p>";
		resultP.innerHTML+="<p>"+"question 2 - correct"+"</p>";
		resultP.innerHTML+="<p>"+"question 3 - incorrect"+"</p>";
		resultP.innerHTML+="<p>"+"question 4 - incorrect"+"</p>";
		resultP.innerHTML+="<p>"+"Score: "+parseInt(point+1)+"/4"+"</p>";
	}
	else if(questionOne=="incorrect" && questionTwo=="incorrect" && questionThree=="correct" && questionFour=="incorrect"){
		resultP.innerHTML+="<p>"+"question 1 - incorrect"+"</p>";
		resultP.innerHTML+="<p>"+"question 2 - incorrect"+"</p>";
		resultP.innerHTML+="<p>"+"question 3 - correct"+"</p>";
		resultP.innerHTML+="<p>"+"question 4 - incorrect"+"</p>";
		resultP.innerHTML+="<p>"+"Score: "+parseInt(point+1)+"/4"+"</p>";
	}
	else if(questionOne=="incorrect" && questionTwo=="incorrect" && questionThree=="incorrect" && questionFour=="incorrect"){
		resultP.innerHTML+="<p>"+"question 1 - incorrect"+"</p>";
		resultP.innerHTML+="<p>"+"question 2 - incorrect"+"</p>";
		resultP.innerHTML+="<p>"+"question 3 - incorrect"+"</p>";
		resultP.innerHTML+="<p>"+"question 4 - incorrect"+"</p>";
		resultP.innerHTML+="<p>"+"Score: "+parseInt(point)+"/4"+"</p>";
	}
}