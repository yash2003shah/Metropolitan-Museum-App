# Museum-App
This is the application made by using the Next.js. The Metropolitan Museum of Art of New York City's museum's data is fetched by API and then the application can able to perform the authentication functionality as well as the search, delete, and rendering with the help of react hooks and libraries. The application is deployed on Vercel (<a href="https://assignment-6-rosy.vercel.app/" target="_blank">Museum-App</a>)  


## Objectives

This is the ideal Museum Website which is made by using Next.js and Node.ja mainly. I have created the API to fetch the sample loade data on MongoDB atlas. You can find the API code of backed devlopment in my github profile. As i am also citing it below:
https://github.com/yash2003shah/A6-Api
<br> 
Second, develop a modern and responsive interface for searching and viewing information from the publicly available Metropolitan Museum of Art Collection API. Using information from React, Next.js and React Bootstrap to develop a solution. However, if you want to use another UI library, such as Material UI, or add images, styles, or features, go ahead. I also contacted the link below: 
 https://bootswatch.com

## Concept I learned and used in this application

1. Authentication using JSON Web Tokens(JWT)
2. React hook form for creating the login form and register form
3. Jotai
4. The User Interface was developed using React Bootstrap. 
5. Bcryptjs is used to encrypt passwords by hashing passwords, and a JWT is appended to the hashed password, and then  the hashed password is stored in the JWT token.

## Functionality

To use the application, an user requires login by giving a username and password.
The user must validate the password before proceeding to the next stage.With the proper details, the user may access the application.The user may then search or perform an advanced search to discover additional information about the museum collections.
The app creates results based on your searches. Users can also view their favorites list and search history. In addition, the application allows users to delete previously performed searches from their search history and remove items added to their favorites. Also, after logging out, the user can log back in to get all her account activity.
## Results

**"mark" has logged in to this site. **
<br>
<br>

![image](https://user-images.githubusercontent.com/90211180/208351319-725276dd-2b22-47be-9039-986cc7567758.png)

**He searches for the word "fan" in the Search tab and retrieves the results.**
<br>
<br>
![image](https://user-images.githubusercontent.com/90211180/208351483-5cc708a2-3685-47a6-9af1-45abda7bf026.png)



**His search history will be added to the list, he can also delete it by clicking  the Delete button**
<br>
<br>

![image](https://user-images.githubusercontent.com/90211180/208351914-17febd1f-88c7-4406-ba73-26af2b962218.png)

**He can add the item to his favorites**
<br>
<br>

![image](https://user-images.githubusercontent.com/97627930/208000301-741a7b79-da34-453a-a823-cf12f8307ef1.png)


**Now it has the ability to access all the favourite items**
<br>
<br>

![image](https://user-images.githubusercontent.com/97627930/208000394-1bcc714c-ac6b-49b9-afa1-80230a70f0a5.png)


**He will be sent to the login page after clicking the logout button. Additionally, after signing back in, he may recover all of his account activity.**
<br>
<br>

![image](https://user-images.githubusercontent.com/97627930/208000729-5c7f4d1b-4e15-45c7-8901-f8a57a227908.png)
