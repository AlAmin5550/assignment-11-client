
const Blogs = () => {
    return (
        <div className="p-5 mx-auto sm:p-10 md:p-16 bg-gray-100 text-gray-800">
            <div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded">
                <img src="https://plus.unsplash.com/premium_photo-1685086785054-d047cdc0e525?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="w-full h-60 sm:h-96 bg-gray-500" />
                <div className="p-6 pb-12 m-4 mx-auto -mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md bg-gray-50">
                    <div className="space-y-2">
                        <a rel="noopener noreferrer" href="#" className="inline-block text-2xl font-semibold sm:text-3xl">The Blog about this website named goFind</a>
                        <p className="text-xs text-gray-600">By
                            <a rel="noopener noreferrer" href="#" className="text-xs hover:underline">Al Amin</a>
                        </p>
                    </div>
                    <div className="text-gray-800">
                        <h1 className="text-3xl font-semibold ">What is an access token and refresh token? How do they work and where should
                            we store them on the client side?</h1>
                        <p>Both Access and Refresh Tokens are credential artifact used to authenticate the user.The access token is sent with each request to access protected resources.The user doesn’t have to repeatedly provide their email and password and any user with an access token is automatically authenticated.But access tokens are valid for only a few minutes or hours. The refresh token is stored securely on the client side (e.g., in an HTTP-only cookie) and in the backend database. When the access token expires,The client sends the refresh token to the backend.The backend checks if the refresh token is valid and matches what is stored in the database.If valid, the backend issues a new access token, and the process continues.Refresh token allow users to log in and stay connected without providing their passwords for long periods. Further, they add a layer of security for sensitive data, improving the user experience. Refresh tokens can last from a few days to a few months. </p>
                    </div>
                    <div className="text-gray-800">
                        <h1 className="text-3xl font-semibold ">What is express js? What is Nest JS?</h1>
                        <p>Express.js, sometimes also referred to as “Express,” is a minimalist, fast, and Sinatra-like Node.js backend framework that provides robust features and tools for developing scalable backend applications. It gives you the routing system and simplified features to extend the framework by developing more powerful components and parts depending on your application use cases.The framework provides a set of tools for web applications, HTTP requests and responses, routing, and middleware for building and deploying large-scale, enterprise-ready applications. It also provides a command-line interface tool (CLI) called Node Package Manager (NPM), where developers can source for developed packages. It also forces developers to follow the Don’t Repeat Yourself (DRY) principle.The DRY principle is aimed at reducing the repetition of software patterns, replacing it with abstractions, or using data normalizations to avoid redundancy. <br /> <br /> The Next.js framework provides a set of tools for web applications, HTTP requests and responses, routing, and middleware for building and deploying large-scale, enterprise-ready applications. It also provides a command-line interface tool (CLI) called Node Package Manager (NPM), where developers can source for developed packages. It also forces developers to follow the Don’t Repeat Yourself (DRY) principle. The DRY principle is aimed at reducing the repetition of software patterns, replacing it with abstractions, or using data normalizations to avoid redundancy. Its benefits include improved performance, SEO-friendliness, easy development and deployment, excellent developer experience, and the ability to handle versatile and scalable projects. </p>
                    </div>
                    <div className="text-gray-800">
                        <h1 className="text-3xl font-semibold ">Explaining My Code</h1>
                        <p>This website is basically build with HTML,CSS,Javascript and Library React on the frontend and Express.js at the Backend with MongoDb as its database. And the Authentication is done with Firebase, Frontend hosting is done on the same but the backend hosting is done in Vercel. <br /> This is my first website where I explore security features of a website using JWT. Apart from that I also explored TanstackQuery, Axios and Hooks for a website. Being a Lazy person it was very difficult for me to complete in fact I didn&apos;t finish all way through the assignment because I still have module 12 to finish before 22 June ... </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;