const { html } = require("common-tags");

function Card({ title, content, link, linkText }) {
  return html`
    <div class="card__container">
      <h2 class="card__title">${title}</h2>
      <p>${content}</p>
      <a href="${link}" class="card__link">${linkText}</a>
    </div>
  `;
}

module.exports = Card;
