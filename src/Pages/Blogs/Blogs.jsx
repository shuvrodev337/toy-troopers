import usetitle from "../../hooks/useTitle";

const Blogs = () => {
  usetitle("Blogs");
  return (
    <div>
      <div className="hero bg-base-200 my-16 rounded-xl shadow-2xl">
        <div className="hero-content text-center">
          <div className="w-4/5">
            <h1 className="text-5xl font-bold">
              What is an access token and refresh token? How do they work and
              where should we store them on the client-side?
            </h1>
            <p className="py-6">
              In JWT(JSON Web Token ), Access tokens are used to allow an
              application(client-side) to access an API. The client-side
              receives an access token after a user successfully authenticates.
              Then the client-side passes the Access token as a
              credential(inside headers) when it calls the target API. The
              passed token informs the API that the bearer of the token is
              authorized to access the API and then the server can send
              confidetial data as response. Access Tokens have
              validation/expiratoin time. 
            </p>
            <p className="py-6">The Refresh token is used to generate
              a new Access Token. Generally when the Access token expires, the
              user would have to authenticate again to getan access token. With
              the help of Refresh Token, user do not have to authenticate again.
              A request to the API with Refresh token to get a new access token
              is sent. This process allows the user to continue accessing the
              application data that is coming from back-end. When Refresh Token
              expires, the user have to authenticate again.</p>
            <p className="py-6">
            We can store Access
              Token and Refresh Token in Local Storage or in Browser
              Cookies(HttpOnly Cookie). But None of them are 100% secure.
              Because anyone can accesss them. But We should use HttpOnly Cookie
              to store them, because it is more secure than Local Storage.
            </p>
          </div>
        </div>
      </div>
      <div className="hero bg-base-200 my-16 rounded-xl shadow-2xl">
        <div className="hero-content text-center">
          <div className="w-4/5">
            <h1 className="text-5xl font-bold">
              Compare SQL and NoSQL databases?
            </h1>
            <p className="py-6">
              SQL databases are called Relational databas, whereas NoSQL
              databases are called distributed or non-relational. SQL is
              structured query language based on tabular form. But NoSQL is
              non-declarative, Document-based, graphical. NoSQL is more
              flexible, it uses dynamic Schema depending on project
              requirements. SQL uses a predefined Schema. SQL examples:
              Postgres, MySQL etc. NoSQL examples: MongoDB, Redis, Neo4j
            </p>
          </div>
        </div>
      </div>
      <div className="hero bg-base-200 my-16 rounded-xl shadow-2xl">
        <div className="hero-content text-center">
          <div className="w-4/5">
            <h1 className="text-5xl font-bold">
              What is express js? What is Nest JS?
            </h1>
            <p className="py-6">
              Express Js is a Node.js web application framework.It is written in
              JavaScript and hosted within the Node. js runtime environment. It is used for building
              various types of web applications.It
              helps us to handle requests and responses from client'side. 
              
            </p>
            <p className="py-6">
            NestJS is a progressive Node.js
              framework. It is a open-source framework to develop efficient,
              scalable, and enterprise-level, server-side applications using Node.
            </p>
          </div>
        </div>
      </div>
      <div className="hero bg-base-200 my-16 rounded-xl shadow-2xl">
        <div className="hero-content text-center">
          <div className="w-4/5">
            <h1 className="text-5xl font-bold">
              What is MongoDB aggregate and how does it work?
            </h1>
            <p className="py-6">
              Aggregation is a way of processing a large number of documents in
              a collection by passing them through different stages. MongoDB
              aggregate operations process multiple documents and return
              computed results.
              It can perform operations on the bulk data to return a single
              result.It can analyze data changes over time. We can use
              Aggregation pipelines or Single purpose aggregation methods to
              perform aggregation operations. MongoDB aggregate operation
              filters the documents we need to work with, the documents that
              satisfy our requirements. Then it does the aggregation, then sorts
              the resulting documents as per our requirement.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
