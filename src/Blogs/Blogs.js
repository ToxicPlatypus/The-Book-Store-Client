import React from "react";
import "./Blogs.css";

const Blogs = () => {
  return (
    <div className="container mt-4 w-75">
      <div class="card mb-4">
        <div class="card-header bg-secondary text-white fw-bold">
          Difference between javascript and nodejs?
        </div>
        <div class="card-body">
          <blockquote class="blockquote mb-0">
            <p>
              1. Node.JS is a programming language where Javascript is a runtime
              environment for Javascript that lets a user run this programming
              language on the server-side as well.{" "}
            </p>

            <p>
              2. Node.JS is utilised on the web page’s client-side where
              Javascript use JS on the server-side as well since it works on the
              server-side.{" "}
            </p>

            <p>
              3. Node.JS runs mainly on the client-side where Javascript runs on
              the server-side.{" "}
            </p>

            <p>
              4. Node.JS can easily add HTML and even play with the DOM where
              Javascript isn’t capable enough to add various HTML tags.{" "}
            </p>
          </blockquote>
        </div>
      </div>

      <div class="card mb-4">
        <div class="card-header bg-secondary text-white fw-bold">
          When should you use nodejs and when should you use mongodb?
        </div>
        <div class="card-body">
          <blockquote class="blockquote mb-0">
            <p>
              MongoDB and NodeJS are two different technologies. MonogDB is a
              database system which gives you a chance to efficiently store
              documents in a database and to perform operations like data
              updates, or to search documents by some criterias. NodeJS's
              responsibilty is especially to execute application..{" "}
            </p>
          </blockquote>
        </div>
      </div>

      <div class="card mb-4">
        <div class="card-header bg-secondary text-white fw-bold">
          Differences between sql and nosql databases?
        </div>
        <div class="card-body">
          <blockquote class="blockquote mb-0">
            <p>
              The differences between SQL vs NoSQL are: 1. SQL databases are
              relational, NoSQL databases are non-relational. 2. SQL databases
              use structured query language and have a predefined schema. NoSQL
              databases have dynamic schemas for unstructured data. 3. SQL
              databases are vertically scalable, while NoSQL databases are
              horizontally scalable. 4. SQL databases are table-based, while
              NoSQL databases are document, key-value, graph, or wide-column
              stores. 5. SQL databases are better for multi-row transactions,
              while NoSQL is better for unstructured data like documents or
              JSON.{" "}
            </p>
          </blockquote>
        </div>
      </div>

      <div class="card mb-4">
        <div class="card-header bg-secondary text-white fw-bold">
          What is the purpose of jwt and how does it work?
        </div>
        <div class="card-body">
          <blockquote class="blockquote mb-0">
            <p>
              JWT, or JSON Web Token, is an open standard used to share security
              information between two parties — a client and a server. Each JWT
              contains encoded JSON objects, including a set of claims. JWTs are
              signed using a cryptographic algorithm to ensure that the claims
              cannot be altered after the token is issued. JWTs differ from
              other web tokens in that they contain a set of claims. Claims are
              used to transmit information between two parties. What these
              claims are depends on the use case at hand. For example, a claim
              may assert who issued the token, how long it is valid for, or what
              permissions the client has been granted.{" "}
            </p>
          </blockquote>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
