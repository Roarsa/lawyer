/* eslint-disable */
const sgMail = require('@sendgrid/mail');

const mailApiKey = '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';
sgMail.setApiKey(mailApiKey);

module.exports = app => {
  app.post('/requestConsultation', (req, res) => {
    const {
      name,
      number,
      lawyer,
      service,
      question,
    } = req.body;
    console.log('in app');

    const msg = {
      to: ['testovyja13@gmail.com', 'a.m.golovina4303@gmail.com'],
      from: 'mail@advokaty69.ru',
      subject: `Запись на консультацию | ${name}`,
      text: 'sdflsdfpsd',
      html: `
        <div>
          Имя: ${name}<br />
          Номер телефона: ${number}<br />
          Юрист: ${lawyer || ''}<br />
          Услуга: ${service || ''}<br />
          <br />
          <p>
            ${question || ''}
          </p>
        </div>
      `,
    };

    sgMail.send(msg).then((a1, a2, a3, a4) => {
      console.log("i think, sent");
      res.status(200).send();
      console.log(a1, a2,a3,a4);
    })
    .catch(error => {
      console.error(error.toString());
      res.status(424).send();
    });
    console.log('afet');
  });
};
