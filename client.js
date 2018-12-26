console.log("Hello World")

const form = document.querySelector('form'); 


document.addEventListener('button', (event => {
    let formData = new FormData(form);
    const learnData = formData.get('Learn');
    const learnQuery = {
        learnData
    };
    
    console.log(learnQuery);
}));

