# CS465_Full_Stack_Development_I
### Architecture
 -   Compare and contrast the types of frontend development you used in your full stack project, including Express HTML, JavaScript, and the single-page application (SPA).
 -   Why did the backend use a NoSQL MongoDB database?

We went through architectures to get to SPA. Starting with the original static website, all pages were complete with data hard-coded into the html files. Our first movement was to move the informative data out of the html pages and store the in a separate, static, “JSON” file. This allowed us to reduce the size of the html pages and using tools like handlebars and JavaScript, populate the data into the html files when viewed. Next, we moved the data from static JSON files into MongoDB, a NoSQL database where we retrieved the data using Node Express when the page was requested from the client. All this was on the server side, where the pages are still being served whole with data.

Lastly, for the SPA, we used Angular to build the application. The difference between Node Express and Angular is that an application is built from separate files, assembled into a single unit and this is what the browser downloads when going to the “website.” This file is the whole website without data. As the viewer selects a view that requires data, the single page application requests the data through the server from the database.

The MongoDB makes a good choice for the back-end database because it is flexible with its data structure. Normal structured databases by their nature are very “structured” in that they require data to be divided into tables of records of similar data. MongoDB stores “document”. Documents are objects that can contain dissimilar items from other documents in the database. This allows for a greater flexibility in storing different data structures in a single database collection which simplifies the application design since there is no need to keep track of many tables or collections and join statement to put together different data for viewing.

### Functionality

-   How is JSON different from Javascript and how does JSON tie together the frontend and backend development pieces?

JSON is a data model or format description definition where Javascript is more a language that performs operations on data. JSON is used to define a record and describes its content as key/value pairs. Javascript reads or writes this data structure and outputs it as needed.

-   Provide instances in the full stack process when you refactored code to improve functionality and efficiencies, and name the benefits that come from reusable user interface (UI) components.

At the beginning of moving the website to an SPA, the html files contained repeated identical data structures. For instance, Trips were repeated sets of the same data structure, the only difference between each repetition was that the data was for each specific trip. Using the handlebars module, the data was put into a JSON data structure which was stored into a separate file and eventually the back-end MongoDB. Removing the data from the html allowed software development techniques like loops to be use dot reduce the file size even more that just removing the data my removing repeated code structure and iterate of them when populating the data. Reducing the file size and allowing the view to “fill” while data is being put into it ,reduces the size of the pages needed to be downloaded from the server.

### Testing

-   Methods for request and retrieval necessitate various types of API testing of endpoints, in addition to the difficulties of testing with added layers of security. Explain your understanding of methods, endpoints, and security in a full stack application.

Endpoints are where requests are routed to perform a request. These look like URL destinations. Methods are the operations formulate the request and direct it to the endpoint or, if on the server, receive and process the request.

Security is critical in full stack development and is required for data protection. There are two main focuses, authentication and authorization. Authentication is the security process of verifying the identity of the access and confirming that access is not compromised. Authorization is the process of confirming that an identified access has permission to access the resource.

### Reflection

-   How has this course helped you in reaching your professional goals? What skills have you learned, developed, or mastered in this course to help you become a more marketable candidate in your career field?

This is one of those courses I would like to take multiple times or take two to three times as long in the course to explore the ins and outs of single-page-applications (SPA). From a general sense, this course has expanded experience in API usage and design, implementing databases for document storage, introduced Node Express and Angular into my professional toolset and expanded usage with html. Although I do not feel I can say I have mastered specific skills here, I have learned some that will be very useful for delivering content to users that they can access on almost any desktop connected to a common network with the source.

This was a really great class and like I mentioned above, I could take  it again and still learn from and enjoy it.

James Kraatz
