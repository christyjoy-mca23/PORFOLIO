const contactForm=document.getElementById('contact-form'),
     contactMessage= document.getElementById('contact-message')

const sendEmail  = (e) =>{
    e.preventDefault()
    
    // serviceID - templateID - #form - publicKey
    emailjs.sendForm('service_4vwg2fo','template_k2ct01l','#contact-form','pW3LBSDZ9kU1E5FM5')
    .then(() =>{
    // Show sent message
      contactMessage.textContent="Message sent successfully ✅"
     
    //Remove message after five seconds
    setTimeout(() =>{
        contactMessage.textContent =""
    },5000)   
    
    // Clear input fields
    contactForm.reset()

},()=>{
    //Show error message
    contactMessage.textContent='Message not sent (service error) ❌'
})


}

contactForm.addEventListener('submit',sendEmail)




// $(function() {

// 	// Get the form.
// 	var form = $('#ajax-contact');

// 	// Get the messages div.
// 	var formMessages = $('#form-messages');

// 	// Set up an event listener for the contact form.
// 	$(form).submit(function(e) {
// 		// Stop the browser from submitting the form.
// 		e.preventDefault();

// 		// Serialize the form data.
// 		var formData = $(form).serialize();

// 		// Submit the form using AJAX.
// 		$.ajax({
// 			type: 'POST',
// 			url: $(form).attr('action'),
// 			data: formData
// 		})
// 		.done(function(response) {
// 			// Make sure that the formMessages div has the 'success' class.
// 			$(formMessages).removeClass('bg-danger');
// 			$(formMessages).addClass('bg-success');

// 			// Set the message text.
// 			$(formMessages).text('Your message successfully sent');

// 			// Clear the form.
// 			$('#name, #email, #message').val('');			
// 		})
// 		.fail(function(data) {
// 			// Make sure that the formMessages div has the 'error' class.
// 			$(formMessages).removeClass('bg-success');
// 			$(formMessages).addClass('bg-danger');

// 			// Set the message text.
// 			if (data.responseText !== '') {
// 				$(formMessages).text(data.responseText);
// 			} else {
// 				$(formMessages).text('Oops! An error occured and your message could not be sent.');
// 			}
// 		});

// 	});

// });