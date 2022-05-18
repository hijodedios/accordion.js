window.onload = () => {
	class Accordion{
		constructor(idElement){
			this.idElement = idElement
			this.catchElement()
			this.addEvent()
		}
		catchElement(){
			this.accordion = document.querySelector(`#${this.idElement}`)
		}
		showElement(){
			console.log(this.accordion)
		}
		addEvent(){
			this.accordion.addEventListener("click",(e)=>{
				if(e.target.classList.contains("title")){
					let realHeightContent = e.target.nextElementSibling.scrollHeight;
					e.target.parentElement.classList.toggle("active")
					if(e.target.parentElement.classList.contains("active")){
						e.target.nextElementSibling.style.height = `${realHeightContent}px`; 
					}
					else{
						e.target.nextElementSibling.style.height = `${0}px`;
					}
				}
			})
		}
	}

	let miAccordion = new Accordion("accordion")
	let miAccordion1 = new Accordion("accordion1")
}