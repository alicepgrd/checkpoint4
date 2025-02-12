import "./Form.css";

function Form() {
  return (
    <footer className="footer">
      <section className="form-container">
        <h2>Contact</h2>
        <form className="contact-form">
          <label htmlFor="name">Name :</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Email :</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="message">Message :</label>
          <textarea id="message" name="message" required />

          <button type="submit">Submit</button>
        </form>
      </section>
    </footer>
  );
}

export default Form;
