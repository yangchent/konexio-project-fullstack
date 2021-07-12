$(() => {
	// to start the site, to get list of countries
	// function asigned to the click button
	getAllCountries();
	$("#btnShowData").click(handleClick);
});

async function getAllCountries() {
	const res = await fetch("http://localhost:3000/all");
	const jsonRes = await res.json();
	console.log(jsonRes);
	updateList(jsonRes.data);
}
// function which permits to update the list in html 

function updateList(list) {
	// to remove the list
	$("#list").empty();

	// update the list 
		 if($("#toSearchCountry")[0].checked === true) {
			list.forEach((country) =>
				$("#list").append(
					`<li class="card">
            		 <p>${country.capital} </p>
            		</li>
					`
			))
		}
		else if($("#toSearchCapital")[0].checked === true ) {
			list.forEach((country) =>
				$("#list").append(
					`<li class="card">
             		<p>${country.name}</p>
            		</li>
					`
			))	
		}
	}
//function to receive the request backend when clicked
//in the button shows the value of the data input by user
//enter by user
async function handleClick() {
	const userSearchValue = $("#userSearchValue").val();
		if($("#toSearchCountry")[0].checked === true) {
		        let res = await fetch(`http://localhost:3000/${userSearchValue}`);
		        let jsonRes = await res.json();
		        console.log(jsonRes);
		        updateList(jsonRes.data);
			} 
		else if($("#toSearchCapital")[0].checked === true ) {
		        const userSearchValue = $("#userSearchValue").val();
		    let res = await fetch(`http://localhost:3000/capital/${userSearchValue}`)
			let jsonRes = await res.json();
				if ( res == userSearchValue){
					console.log(jsonRes);
		    		updateList(jsonRes.data);
		    		
				  }
				  else {
					alert("error")
				  }
		}
	}	