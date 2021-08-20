// <!--

//             You are building the new Amazon.
//             This time you are also responsible for the back office.
//             THIS is you CRUD endpoint
//             https://striveschool-api.herokuapp.com/api/product/
//             The product model is
//             {
//                 "_id": "5d318e1a8541744830bef139", //SERVER GENERATED
//                 "name": "app test 1",  //REQUIRED
//                 "description": "somthing longer", //REQUIRED
//                 "brand": "nokia", //REQUIRED
//                 "imageUrl": "https://drop.ndtv.com/TECH/product_database/images/2152017124957PM_635_nokia_3310.jpeg?downsize=*:420&output-quality=80", //REQUIRED
//                 "price": 100, //REQUIRED
//                 "userId": "admin", //SERVER GENERATED
//                 "createdAt": "2019-07-19T09:32:10.535Z", //SERVER GENERATED
//                 "updatedAt": "2019-07-19T09:32:10.535Z", //SERVER GENERATED
//                 "__v": 0 //SERVER GENERATED
//             }
//             #---------------------------------------------------------------#
//             EVERY REST API CALL SHOULD BE AUTHENTICATED.
//             Every request to the API should use Token Based Authentication to secure access to the contents.
//             You can get your token by registering on: strive.school/studentlogin
//             Authorization: Bearer ###########
//             Where ######### is the access_token returned by the endpoint.
//             #---------------------------------------------------------------#
//             Today you have to implement:
//             - A backoffice page, where you can insert the product by specifying the parameters
//             - A front page, where the user can see the available products
//             ------ N.B. ------
//             Tokens duration is set to 14 days. Whenever you'll need to obtain a new one you can send the following request:

//             POST https://striveschool-api.herokuapp.com/api/account/login
//             {
//                 "username": "testusername@yourmail.com",
//                 "password":"pass"
//             }
//         -->
const eventId = new URLSearchParams(window.location.search).get('id');
// const url = '  https://striveschool-api.herokuapp.com/api/product/';
const subtBtn = document.querySelector("button[type='submit']");
console.log(eventId, subtBtn);
const method = eventId ? 'PUT' : 'POST';
const url = 'https://striveschool-api.herokuapp.com/api/movies/';
const endPoint = eventId ? url + eventId : url;

window.onload = async () => {
	if (eventId) {
		document.querySelector('.h3').innerText = 'Edit Product';
		subtBtn.querySelector('span').innerText = 'Edit Event';
		subtBtn.classList.add('btn-success');
		const delBtn = document.querySelector('#delete');
		delBtn.classList.remove('d-none');
		const response = await fetch(endPoint, {
			headers: {
				'content-Type': 'application/json',
				Authorization:
					'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTFjZWMwMTJkNTI2MjAwMTViNmRjOGYiLCJpYXQiOjE2MjkyODUzNzcsImV4cCI6MTYzMDQ5NDk3N30.n3m29qn0yRjmjhZmT7o8YOt7-tA7QDJdS9mnt2biQwQ',
			},
		});
		const productDetails = await response.json();
		console.log(productDetails);
		document.getElementById('productName').value = productDetails.name;
		document.getElementById('brandName').value = productDetails.category;
		document.getElementById('image').value = productDetails.imageUrl;

		document.getElementById('subject').value = productDetails.description;
	} else {
		document.querySelector('.h3').innerText = 'Create Movie';
		subtBtn.classList.add('btn-primary');
		subtBtn.querySelector('span').innerText = 'Submit';
	}
};

const handleSubmit = async (event) => {
	event.preventDefault();
	console.log('manish');

	const movie = {
		name: document.querySelector('#productName').value,
		description: document.querySelector('#subject').value,
		category: document.querySelector('#brandName').value,
		imageUrl: document.querySelector('#image').value,
	};
	try {
		const res = await fetch(endPoint, {
			method,
			body: JSON.stringify(movie),
			headers: {
				'content-Type': 'application/json',
				Authorization:
					'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTFjZWMwMTJkNTI2MjAwMTViNmRjOGYiLCJpYXQiOjE2MjkyODUzNzcsImV4cCI6MTYzMDQ5NDk3N30.n3m29qn0yRjmjhZmT7o8YOt7-tA7QDJdS9mnt2biQwQ',
			},
		});
		if (res.ok) {
			const data = await res.json();
			if (eventId) {
				alert(`product has been uptaded to api with an name${data._id}`);
			} else {
				alert(`product has been created to api with an name${data._id}`);
			}
		}
	} catch (err) {
		console.log(err);
	}
};
const deleteMe = async () => {
	if (eventId) {
		try {
			const res = await fetch(endPoint, {
				method: 'DELETE',

				headers: {
					'content-Type': 'application/json',
					Authorization:
						'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTFjZWMwMTJkNTI2MjAwMTViNmRjOGYiLCJpYXQiOjE2MjkyODUzNzcsImV4cCI6MTYzMDQ5NDk3N30.n3m29qn0yRjmjhZmT7o8YOt7-tA7QDJdS9mnt2biQwQ',
				},
			});
			if (res.ok) {
				const data = await res.json();
				if (eventId) {
					alert(`product has been Deleted from api with an name${data._id}`);
				}
			}
		} catch (err) {
			console.log(err);
		}
	}
};
//  <!--
//             START FROM YESTERDAY'S WORK

//              You are building the new Amazon.
//             This time you are also responsible for the back office.

//             THIS is you CRUD endpoint
//             https://striveschool-api.herokuapp.com/api/product/

//             The product model is

//             {
//                 "_id": "5d318e1a8541744830bef139", //SERVER GENERATED
//                 "name": "app test 1",  //REQUIRED
//                 "description": "somthing longer", //REQUIRED
//                 "brand": "nokia", //REQUIRED
//                 "imageUrl": "https://drop.ndtv.com/TECH/product_database/images/2152017124957PM_635_nokia_3310.jpeg?downsize=*:420&output-quality=80", //REQUIRED
//                 "price": 100, //REQUIRED
//                 "userId": "admin", //SERVER GENERATED
//                 "createdAt": "2019-07-19T09:32:10.535Z", //SERVER GENERATED
//                 "updatedAt": "2019-07-19T09:32:10.535Z", //SERVER GENERATED
//                 "__v": 0 //SERVER GENERATED
//             }

//             #---------------------------------------------------------------#
//             EVERY REST API CALL SHOULD BE AUTHENTICATED.
//             Every request to the API should use Token Based Authentication to secure access to the contents.
//             You can get your token by registering on: strive.school/studentlogin

//             Authorization: Bearer ###########

//             Where ######### is the access_token returned by the endpoint.

//             #---------------------------------------------------------------#

//             Today you have to implement:

//             - In the backoffice page
//                 a) Add a button and the functionality to EDIT a single product ( PUT  endpoint/{id})
//                 b) Add a button and the functionality to DELETE a single product ( DELETE endpoint/{id})
//                 c) Add validation to the product creation/edit form
//                 d) Display an error message if something goes wrong

//             - In the front page
//                 a) Add a loader while waiting for the product to load
//                 b) Add a link on each item to go to a detail page

//             - Create a new detail page where you are going to display the item information

//             ------ N.B. ------

//             Tokens duration is set to 14 days. Whenever you'll need to obtain a new one you can send the following request:

//             POST https://striveschool-api.herokuapp.com/api/account/login
//             {
//                 "username": "testusername@yourmail.com",
//                 "password":"pass"
//             }
//         -->
