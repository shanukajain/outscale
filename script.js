function updateGreeting() {
    const heading = document.getElementById('greetingHeading');
    const currentTime = new Date().getHours();
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const ipAddress = parseInt(urlParams.get('ip'));

    let country;
    // Determine the country based on the IP
    if (ipAddress % 2 === 1) {
        country = 'India';
        icons='';
    } else if (ipAddress % 2 === 0 && ipAddress % 10 !== 0) {
        country = 'England';
    } else {
        country = 'America';
    }

 
    let greetingText;
    if (currentTime >= 5 && currentTime < 12) {
        greetingText = `Good Morning ${country}`;
    } else if (currentTime >= 12 && currentTime < 18) {
        greetingText = `Good Afternoon ${country}`;
    } else {
        greetingText = `Good Night ${country}`;
    }
    displayTextWordByWord(heading, greetingText, 0); 

}
function displayTextWordByWord(element, text, index) {
    if(index==0){
        element.textContent="";
    }
    if (index < text.length) {
        element.textContent += text.charAt(index);
        index++;
        setTimeout(function() {
            displayTextWordByWord(element, text, index);
        }, 200); 
    }

}

setTimeout(updateGreeting, 1000);
