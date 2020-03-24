//Get Data


async function fetchTopFive() {
    const URL = `https://midhi-reastaurant.firebaseio.com/demoDetails.json`;
    const fetchResult = fetch(URL)
    const response = await fetchResult;
    const jsonData = await response.json();
    getData(jsonData);
  }
  
  fetchTopFive();
  
  function getData(data) {
    const userDetails = [];
    for (let val in data) {
      userDetails.push({
        email: data[val].email,
        phoneNumber: data[val].number,
         name: data[val].name,
        message: data[val].message
      })
    };
  
  
    console.log(userDetails);
  
  
     userDetails.forEach(function(res) {
  
      let parentContainer = document.getElementById('parentContainer')
  
         let cardDiv = document.createElement('div')
         cardDiv.classList.add('card')
         cardDiv.classList.add('col-md-4')
         cardDiv.classList.add('mr-3')
         cardDiv.classList.add('mt-5')
         cardDiv.classList.add('mb-4')
         let cardBodyDiv = document.createElement('div')
         cardBodyDiv.classList.add('card-body')
  
         let nameSpan = document.createElement('p')
         let nameText = document.createTextNode("Name : " + `${res.name}`)
         nameSpan.appendChild(nameText)
         cardBodyDiv.appendChild(nameSpan)
  
         let mobileSpan = document.createElement('p')
         let mobileText = document.createTextNode("Number : " +`${res.phoneNumber}`)
         mobileSpan.appendChild(mobileText)
         cardBodyDiv.appendChild(mobileSpan)
  
         let emailSpan = document.createElement('p')
         let emailText = document.createTextNode( "Email : " +`${res.email}`)
         emailSpan.appendChild(emailText)
         cardBodyDiv.appendChild(emailSpan)
  
  
         let messageSpan = document.createElement('p')
         let messageText = document.createTextNode("Message : " +`${res.message}`)
         messageSpan.appendChild(messageText)
         cardBodyDiv.appendChild(messageSpan
          
          )
  
          cardDiv.appendChild(cardBodyDiv)
  
     
  
       parentContainer.append(cardDiv)
       /*
        document.getElementById("name").textContent = res.name;
        document.getElementById("number").textContent = res.phoneNumber;
        document.getElementById("email").textContent = res.email;
        document.getElementById("message").textContent = res.message;
        */
    }) 
  }
  
  
  