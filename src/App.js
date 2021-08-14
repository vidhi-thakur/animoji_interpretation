:root {
  --primary-color: #a7f3d0;
  --secondary-color: #065f46;
}

.App {
  font-family: sans-serif;
  text-align: center;
  margin: 0px;
}

#body-App {
  margin: 0px;
}

input {
  display: block;
  width: 500px;
  height: 3rem;
  margin: auto;
}

button {
  display: block;
  margin: auto;
}

.displayOutput {
  margin: 1rem;
}

.blog-dummy {
  padding: 1rem;
  margin: 0px;
  max-width: 100%;
  color: var(--primary-color);
  background-color: var(--secondary-color);
}

.section {
  padding: 10rem 0px;
  max-width: 100%;
  margin: auto;
  background-color: var(--primary-color);
}

.list {
  display: inline;
  margin: 0px;
}

.links {
  text-decoration: none;
  padding-right: 1rem;
  margin: auto;
  color: var(--primary-color);
}

.list-start {
  padding-inline-start: 0px;
}

@media screen and (max-width: 700px) {
  input {
    max-width: 90%;
    height: 3rem;
  }
  .App {
    margin: 0px;
  }
}
