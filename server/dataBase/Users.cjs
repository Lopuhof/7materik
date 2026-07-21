const Sequelize = require('sequelize');

module.exports = function(sequelize) {
    return sequelize.define('Users', {
        id: {
            type: Sequelize.INTEGER.UNSIGNED,
            primaryKey: true
        },
        nickname: {
            type: Sequelize.STRING(20)
        },
        email: {
            type: Sequelize.STRING(20)
        },
        password: {
            type: Sequelize.STRING(50)
        },
        avatar: {
            type: Sequelize.BLOB('medium')
        },
        registration_data: {
            type: Sequelize.DATEONLY
        },
        articles: {
            type: Sequelize.TEXT
        }, 
        access_rights: {
            type: Sequelize.STRING(8)
        }
    }, {
        timestamps: false,
        tableName: 'users'
    });
};
