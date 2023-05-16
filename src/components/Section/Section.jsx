import PropTypes from 'prop-types';

const Section = ({ title, children }) => (
  <section className="section">
    <h1 className="title">{title}</h1>
    {children}
  </section>
);

export default Section;
