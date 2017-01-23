const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/wikidb', {
  logging: false
});
// 'wikidb', 'username', 'password', {
//   host: 'localhost',
//   dialect: 'postgres',
//   });

const Page = db.define('page', {
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    urlTitle: {
        type: Sequelize.STRING,
        allowNull: false
    },
    content: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    status: {
        type: Sequelize.ENUM('open', 'closed')
    },
    // date: {
    //   type: Sequelize.DATE,
    //   defaultValue: Sequelize.NOW
    // }
},
{
  route: function() {
    return '/wiki/' + this.getDataValue('urlTitle');
  }
});

const User = db.define('user', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        isEmail: true,
        allowNull: false
    }
});

module.exports = {
  Page: Page,
  User: User
};
