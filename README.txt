-------------------------FACE RECOGNITION WEB APP----------------
		
This web app uses facial recognition technology. 

The app is intended to be used as the home page of our browser so that when you start it, the app does a facial recognition, using the camera integrated in our computer, and once verified our identity, if it is registered and has access, proceed to perform some specific function for this user which (the functions) has been previously determined by the administrator of the app.

Currently the app, after verifying our identity with the ones that have access, will open a set of web pages that were determined for this user when it was registered in the system (That´s function is not develop yet, because of the need of a database to store the users with the urls) This is just a simple example of how we can use this app, because based on these foundations anyone can develop a variety of functions for the app.

The facial recognition system is given by the company: Kairos ( https://www.kairos.com/ ). We access this service through its public API, to give the app the ability to detect faces, verify and manage subjects...

The app is built using those programming languages and frameworks : HTML, CSS, JAVASCRIPT, SASS, AJAX, JQUERY, JSON, BOOTSTRAP...

HOW TO USE THE APP:
	
	-IMPORTANT: The system must be installed on a local server (like: XAMPP) , so that the camera can work and take images of our face, this is due to the current 		restrictions of the browsers. Also, the best browsers to use are Chrome or Mozilla Firefox since there have been detected some faults when using different		browsers. It works in Firefox when open as usual, without the local server.
	
	1.- (index.html) Clicking on the "Verify Face" button while looking at the camera when you are registered in the system should take you to the web pages you 
	decided while registering you. If you are not in the system you should log in to administrate the system. ( User : admin / Password : admin )

	
	2.- (dashboard.html) Once you reach here you can manage the system: add new users, delete a user or delete all of them. Also, there is a table with the current 
	users of the system. Clicking on the "Add new users" button you will be sent to enroll.html


	3.- (enroll.html) This is the part of the app where you can add new users to it. Before clicking the "SUBMIT" button you must enter a name for the user, and 
	minimum add a url for this user by writing it in the textbox and then clicking the "Add URL" button. After that you can click on "SUBMIT" ,now the system  		will take automatically 9 photos of your face to have enough data so it won't make mistakes. When all the photos are taken you will be sent back to the 		index.html











