import React from 'react';
import PropTypes from 'prop-types';
import avatars from 'context/avatars';

function Speaker({
  name, title, subject, blockquote, description,
}) {
  return (
    <div className="box" data-aos="fade-up">
      <div className="columns">
        <div className="column">
          <div className="columns is-vcentered">
            <div className="column is-narrow">
              <figure className="image is-128x128 m-auto">
                <img className="is-rounded" src={avatars[name]} alt="" />
              </figure>
            </div>
            <div className="column">
              <span className="is-size-4 has-text-weight-semibold">{name}</span>
              <span className="is-size-5">{` / ${title}`}</span>
              <div className="is-size-4 my-3 has-text-primary">{subject}</div>
            </div>
          </div>
        </div>
      </div>
      <div className="columns">
        <div className="column content is-desktop" style={{ whiteSpace: 'break-spaces' }}>
          <blockquote>{`${blockquote}`}</blockquote>
          <p>{description}</p>
        </div>
      </div>
      {/* <article className="media">
        <div className="media-left">

        </div>
        <div className="media-content">
          <div className="content">
            <span className="is-size-4 has-text-weight-semibold">{name}</span>
            <span className="is-size-5">{` / ${title}`}</span>
            <div className="is-size-4 my-3 has-text-primary">{subject}</div>
            <div>
              {description.map(({ text, tag }) => {
                const Tag = tag || 'p';
                return <Tag key={text}>{text}</Tag>;
              })}
            </div>
          </div>
        </div>
      </article> */}
    </div>
  );
}

Speaker.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subject: PropTypes.string.isRequired,
  blockquote: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Speaker;
